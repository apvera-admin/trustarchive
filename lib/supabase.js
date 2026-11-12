// Server-only. Talks to Supabase's REST API with the service role key.
// Never import this from a client component.

const TIMEOUT_MS = 5000;

async function rest(path, { method = 'GET', body, prefer } = {}) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase env vars are not set');

  const res = await fetch(`${url}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      ...(prefer ? { Prefer: prefer } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Supabase ${method} ${path.split('?')[0]} failed: ${res.status} ${await res.text()}`);
  }
  return res.status === 204 ? null : res.json();
}

// Inserts a signup and returns its id.
export async function insertWaitlistRow({ email, name, firm, plan_interest, source }) {
  const rows = await rest('waitlist?select=id', {
    method: 'POST',
    body: { email, name, firm, plan_interest, source },
    prefer: 'return=representation',
  });
  return rows?.[0]?.id || null;
}

export async function setNotionPageId(id, notionPageId) {
  await rest(`waitlist?id=eq.${id}`, {
    method: 'PATCH',
    body: { notion_page_id: notionPageId },
    prefer: 'return=minimal',
  });
}

// Saves survey answers only if the survey has not been submitted yet.
// The id + "survey_completed_at is null" filter makes this a single atomic
// check-and-set, so a replayed submission matches zero rows.
// Returns the updated row ({ id, notion_page_id }) or null if nothing matched.
export async function completeSurvey(id, fields) {
  const rows = await rest(
    `waitlist?id=eq.${id}&survey_completed_at=is.null&select=id,notion_page_id`,
    {
      method: 'PATCH',
      body: {
        trusts_managed: fields.trusts_managed,
        current_method: fields.current_method,
        biggest_pain: fields.biggest_pain,
        founding_interest: fields.founding_interest,
        survey_completed_at: new Date().toISOString(),
      },
      prefer: 'return=representation',
    }
  );
  return rows?.[0] || null;
}

// Inserts a firm demo request and returns its id.
export async function insertDemoRequest({ email, name, firm, role, trusts_managed, seats, plan_interest, source }) {
  const rows = await rest('demo_requests?select=id', {
    method: 'POST',
    body: { email, name, firm, role, trusts_managed, seats, plan_interest, source },
    prefer: 'return=representation',
  });
  return rows?.[0]?.id || null;
}

export async function setDemoNotionPageId(id, notionPageId) {
  await rest(`demo_requests?id=eq.${id}`, {
    method: 'PATCH',
    body: { notion_page_id: notionPageId },
    prefer: 'return=minimal',
  });
}
