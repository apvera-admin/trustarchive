// Server-only. Best-effort mirror of waitlist signups into the Notion
// "Leads & Pipeline" database. Supabase is the system of record.

const LEADS_DATABASE_ID = '287481f54682452da2d155a9a161c1a0';
const NOTION_VERSION = '2022-06-28';
const TIMEOUT_MS = 3000;
const TEXT_CHUNK = 2000; // Notion's max length per rich_text item

const PLAN_INTEREST_OPTIONS = ['Individual', 'Solo', 'Professional', 'Practice', 'Family Office'];

async function notion(path, { method = 'GET', body } = {}) {
  const token = process.env.NOTION_API_KEY;
  if (!token) throw new Error('NOTION_API_KEY is not set');

  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Notion ${method} ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

function richText(text) {
  const chunks = [];
  for (let i = 0; i < text.length; i += TEXT_CHUNK) {
    chunks.push({ type: 'text', text: { content: text.slice(i, i + TEXT_CHUNK) } });
  }
  return chunks;
}

// Maps a free-form tier (e.g. "family_office", "Solo") to a Notion Plan Interest option, or null.
export function canonicalPlanInterest(tier) {
  if (typeof tier !== 'string') return null;
  const normalized = tier.trim().toLowerCase().replace(/_/g, ' ');
  return PLAN_INTEREST_OPTIONS.find(o => o.toLowerCase() === normalized) || null;
}

// Creates the lead page and returns its Notion page id.
export async function createWaitlistLead({ name, email, firm, planInterest }) {
  const properties = {
    Name: { title: richText(name || email) },
    Email: { email },
    Organization: { rich_text: firm ? richText(firm) : [] },
    Source: { select: { name: 'Contact Form' } },
    Status: { select: { name: 'New' } },
    Message: { rich_text: richText('Waitlist signup') },
  };
  if (planInterest) properties['Plan Interest'] = { select: { name: planInterest } };

  const page = await notion('pages', {
    method: 'POST',
    body: { parent: { database_id: LEADS_DATABASE_ID }, properties },
  });
  return page.id;
}

// Creates a firm demo-request lead page and returns its Notion page id.
export async function createDemoLead({ name, email, firm, role, trustsManaged, seats, planInterest }) {
  const details = [
    'Demo request',
    role && `Role: ${role}`,
    trustsManaged && `Trusts managed: ${trustsManaged}`,
    seats && `Users who need access: ${seats}`,
  ].filter(Boolean).join('\n');

  const properties = {
    Name: { title: richText(name || email) },
    Email: { email },
    Organization: { rich_text: firm ? richText(firm) : [] },
    Source: { select: { name: 'Demo Request' } },
    Status: { select: { name: 'New' } },
    Message: { rich_text: richText(details) },
  };
  if (planInterest) properties['Plan Interest'] = { select: { name: planInterest } };

  const page = await notion('pages', {
    method: 'POST',
    body: { parent: { database_id: LEADS_DATABASE_ID }, properties },
  });
  return page.id;
}

// Appends text after whatever is already in the page's Notes property.
export async function appendToNotes(pageId, text) {
  const page = await notion(`pages/${pageId}`);
  const existing = (page.properties?.Notes?.rich_text || []).map(t => t.plain_text).join('');
  const combined = existing ? `${existing}\n\n${text}` : text;
  await notion(`pages/${pageId}`, {
    method: 'PATCH',
    body: { properties: { Notes: { rich_text: richText(combined) } } },
  });
}

export function formatSurveyNotes(fields, date = new Date()) {
  const lines = [`Waitlist survey (${date.toISOString().slice(0, 10)})`];
  if (fields.trusts_managed) lines.push(`Trusts managed: ${fields.trusts_managed}`);
  if (fields.current_method) lines.push(`Current method: ${fields.current_method}`);
  if (fields.founding_interest !== null) {
    lines.push(`Founding-member pricing: ${fields.founding_interest ? 'Yes' : 'No thanks'}`);
  }
  if (fields.biggest_pain) lines.push(`Biggest pain: ${fields.biggest_pain}`);
  return lines.join('\n');
}
