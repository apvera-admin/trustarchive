import { cookies } from 'next/headers';
import { Resend } from 'resend';
import { sanitizeRef } from '../../../lib/waitlist';
import { ROLE_OPTIONS, TRUSTS_OPTIONS, SEATS_OPTIONS, DEMO_ACCESS_COOKIE, hasDemoVideo } from '../../../lib/demo';
import { insertDemoRequest, setDemoNotionPageId } from '../../../lib/supabase';
import { createDemoLead, canonicalPlanInterest } from '../../../lib/notion';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEMO_PAGE_URL = 'https://www.trustarchive.co/demo/next';
const ACCESS_MAX_AGE = 60 * 60 * 24 * 180; // 180 days

function clean(value, max) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
}

// Returns the value if it is one of the allowed options, otherwise null.
function option(value, allowed) {
  return allowed.includes(value) ? value : null;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Notion mirror: create the lead page, then record its id on the Supabase row.
async function mirrorToNotion(id, lead) {
  const pageId = await createDemoLead(lead);
  if (id && pageId) await setDemoNotionPageId(id, pageId);
}

async function sendEmails(id, { name, email, firm, role, trustsManaged, seats, planInterest, source }) {
  const firstName = escapeHtml(name.split(' ')[0]);
  // The id lets the link open the demo on any device, not just the one that filled in the form.
  const demoUrl = id ? `${DEMO_PAGE_URL}?id=${id}` : DEMO_PAGE_URL;
  const nextStep = hasDemoVideo()
    ? 'Your demo is ready to watch whenever it suits you. When you’re done, book a follow-up call for any questions.'
    : 'Your demo page is ready. Book a follow-up call there and we’ll walk you through TrustArchive.';

  // Next-step email to the prospect, in case they left before booking.
  const confirmation = resend.emails.send({
    from: 'TrustArchive <noreply@trustarchive.co>',
    to: email,
    replyTo: 'sales@trustarchive.co',
    subject: 'Your TrustArchive demo — next step',
    html: `
      <div style="font-family: -apple-system, Helvetica, sans-serif; max-width: 560px; margin: 0 auto;">
        <div style="background: #000000; padding: 32px 40px 28px; border-bottom: 3px solid #2DD4BF;">
          <div style="font-size: 18px; font-weight: 800; color: #ffffff;">
            <span style="color: #2DD4BF;">Trust</span>Archive
          </div>
          <div style="font-size: 11px; color: #80d8d0; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em;">
            Private Trust Administration
          </div>
        </div>
        <div style="padding: 40px 40px 32px; background: #ffffff;">
          <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 16px;">Hi ${firstName},</p>
          <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 16px;">
            Thanks for requesting a TrustArchive demo for <strong style="color: #0f0f14;">${escapeHtml(firm)}</strong>.
          </p>
          <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 24px;">${nextStep}</p>
          <a href="${demoUrl}" style="display: inline-block; background: #2DD4BF; color: #000000; font-weight: 700; font-size: 14px; padding: 12px 22px; border-radius: 8px; text-decoration: none;">
            ${hasDemoVideo() ? 'Watch the demo' : 'Open your demo page'} &rarr;
          </a>
          <p style="font-size: 13px; color: #6b6b85; line-height: 1.6; margin: 28px 0 0;">
            Questions? Just reply to this email.
          </p>
        </div>
        <div style="padding: 20px 40px; border-top: 1px solid #e0e0e8;">
          <p style="font-size: 11px; color: #9b9bb5; line-height: 1.6; margin: 0; text-align: center;">
            You received this because you requested a demo at trustarchive.co.
          </p>
        </div>
      </div>
    `,
  });

  // Internal notification
  const summary = [planInterest, trustsManaged && `${trustsManaged} trusts`, seats && `${seats} users`]
    .filter(Boolean).join(', ');
  const row = (label, value, shaded) => `
    <tr${shaded ? ' style="background:#f9f9f9"' : ''}><td style="padding: 8px; font-weight: bold;">${label}</td><td style="padding: 8px;">${value ? escapeHtml(value) : '—'}</td></tr>`;
  const internal = resend.emails.send({
    from: 'TrustArchive <noreply@trustarchive.co>',
    to: 'sales@trustarchive.co',
    replyTo: email,
    subject: `Demo request — ${firm}${summary ? ` (${summary})` : ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px;">
        <h2 style="color: #2DD4BF;">New Demo Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${row('Name', name)}
          ${row('Email', email, true)}
          ${row('Firm', firm)}
          ${row('Role', role, true)}
          ${row('Trusts managed', trustsManaged)}
          ${row('Users who need access', seats, true)}
          ${row('Interested tier', planInterest)}
          ${row('Source', source, true)}
        </table>
        <p style="color: #888; font-size: 12px; margin-top: 24px;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      </div>
    `,
  });

  // Send both independently. Only the internal notification counts as a record of the lead.
  const [confirmationResult, internalResult] = await Promise.allSettled([confirmation, internal]);
  const failure = r => (r.status === 'rejected' ? r.reason?.message : r.value?.error?.message);
  const confirmationError = failure(confirmationResult);
  if (confirmationError) console.error('[demo] Confirmation email failed:', confirmationError);
  const internalError = failure(internalResult);
  if (internalError) throw new Error(`internal email: ${internalError}`);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  const email = clean(body?.email, 254);
  const name = clean(body?.name, 200);
  const firm = clean(body?.firm, 200);
  if (!email || !EMAIL_PATTERN.test(email) || !name || !firm) {
    return Response.json({ error: 'Name, a valid email, and firm are required' }, { status: 400 });
  }

  const lead = {
    email,
    name,
    firm,
    role: option(body.role, ROLE_OPTIONS),
    trustsManaged: option(body.trusts_managed, TRUSTS_OPTIONS),
    seats: option(body.seats, SEATS_OPTIONS),
    planInterest: canonicalPlanInterest(body.tier),
    source: sanitizeRef(body.source),
  };

  // 1. System of record. If this fails we still try Notion + email so the lead isn't lost.
  let id = null;
  try {
    id = await insertDemoRequest({
      email: lead.email,
      name: lead.name,
      firm: lead.firm,
      role: lead.role,
      trusts_managed: lead.trustsManaged,
      seats: lead.seats,
      plan_interest: lead.planInterest,
      source: lead.source,
    });
  } catch (error) {
    console.error('[demo] Supabase insert failed:', error.message);
  }

  // 2. Notion mirror and emails run side by side. Neither can fail the request.
  const [notionResult, emailResult] = await Promise.allSettled([
    mirrorToNotion(id, lead),
    sendEmails(id, lead),
  ]);
  if (notionResult.status === 'rejected') {
    console.error('[demo] Notion mirror failed:', notionResult.reason?.message);
  }
  if (emailResult.status === 'rejected') {
    console.error('[demo] Email failed:', emailResult.reason?.message);
  }

  // Only fail if the lead wasn't recorded anywhere (database, Notion, or the
  // internal sales notification), so the user knows to retry.
  if (!id && notionResult.status === 'rejected' && emailResult.status === 'rejected') {
    return Response.json({ error: 'Failed to process request' }, { status: 500 });
  }

  // Unlock the demo video for this browser.
  cookies().set(DEMO_ACCESS_COOKIE, id || 'granted', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/demo',
    maxAge: ACCESS_MAX_AGE,
  });

  return Response.json(id ? { success: true, id } : { success: true });
}
