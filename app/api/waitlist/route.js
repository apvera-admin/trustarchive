import { Resend } from 'resend';
import { sanitizeRef } from '../../../lib/waitlist';
import { insertWaitlistRow, setNotionPageId } from '../../../lib/supabase';
import { createWaitlistLead, canonicalPlanInterest } from '../../../lib/notion';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed || null;
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
  const pageId = await createWaitlistLead(lead);
  if (id && pageId) await setNotionPageId(id, pageId);
}

async function sendEmails({ name, email, firm, planInterest, source }) {
  const firstName = name ? escapeHtml(name.split(' ')[0]) : 'there';

  // Confirmation email to the person joining the waitlist
  const confirmation = resend.emails.send({
    from: 'TrustArchive <noreply@trustarchive.co>',
    to: email,
    replyTo: 'sales@trustarchive.co',
    subject: "You're on the TrustArchive waitlist",
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
          <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 16px;">
            Hi ${firstName},
          </p>
          <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 16px;">
            Thanks for your interest in <strong style="color: #0f0f14;">TrustArchive</strong>. You're on the waitlist.
          </p>
          <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 24px;">
            We're putting the finishing touches on the software. As soon as it's ready, you'll be among the first to know — we'll email you with download and licensing details.
          </p>
          <div style="background: #f8f9fa; border: 1px solid #e0e0e8; border-radius: 10px; padding: 20px 24px; margin: 24px 0;">
            <div style="font-size: 11px; font-weight: 700; color: #6b6b85; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px;">In the meantime</div>
            <div style="font-size: 13px; color: #3a3a52; line-height: 1.6;">
              Learn why professional trustees are moving off cloud trust software:
              <a href="https://www.trustarchive.co/resources" style="color: #2DD4BF; font-weight: 600; text-decoration: none;">read our resources &rarr;</a>
            </div>
          </div>
          <p style="font-size: 13px; color: #6b6b85; line-height: 1.6; margin: 24px 0 0;">
            Questions in the meantime? Just reply to this email.
          </p>
        </div>
        <div style="padding: 20px 40px; border-top: 1px solid #e0e0e8;">
          <p style="font-size: 11px; color: #9b9bb5; line-height: 1.6; margin: 0; text-align: center;">
            You received this because you joined the waitlist at trustarchive.co.
          </p>
        </div>
      </div>
    `,
  });

  // Internal notification
  const internal = resend.emails.send({
    from: 'TrustArchive <noreply@trustarchive.co>',
    to: 'sales@trustarchive.co',
    subject: `Waitlist signup — ${name || email}${planInterest ? ` (${planInterest})` : ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px;">
        <h2 style="color: #2DD4BF;">New Waitlist Signup</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name ? escapeHtml(name) : '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Firm</td><td style="padding: 8px;">${firm ? escapeHtml(firm) : '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Interested tier</td><td style="padding: 8px;">${planInterest || '—'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Source</td><td style="padding: 8px;">${source || '—'}</td></tr>
        </table>
      </div>
    `,
  });

  // Send both independently. Only the internal notification counts as a record of the lead.
  const [confirmationResult, internalResult] = await Promise.allSettled([confirmation, internal]);
  const failure = r => (r.status === 'rejected' ? r.reason?.message : r.value?.error?.message);
  const confirmationError = failure(confirmationResult);
  if (confirmationError) console.error('[waitlist] Confirmation email failed:', confirmationError);
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
  if (!email || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: 'A valid email is required' }, { status: 400 });
  }

  const lead = {
    email,
    name: clean(body.name, 200),
    firm: clean(body.firm, 200),
    planInterest: canonicalPlanInterest(body.tier),
    source: sanitizeRef(body.source),
  };

  // 1. System of record. If this fails we still try Notion + email so the lead isn't lost.
  let id = null;
  try {
    id = await insertWaitlistRow({
      email: lead.email,
      name: lead.name,
      firm: lead.firm,
      plan_interest: lead.planInterest,
      source: lead.source,
    });
  } catch (error) {
    console.error('[waitlist] Supabase insert failed:', error.message);
  }

  // 2. Notion mirror and emails run side by side. Neither can fail the signup.
  const [notionResult, emailResult] = await Promise.allSettled([
    mirrorToNotion(id, lead),
    sendEmails(lead),
  ]);
  if (notionResult.status === 'rejected') {
    console.error('[waitlist] Notion mirror failed:', notionResult.reason?.message);
  }
  if (emailResult.status === 'rejected') {
    console.error('[waitlist] Email failed:', emailResult.reason?.message);
  }

  // Only fail if the lead wasn't recorded anywhere (database, Notion, or the
  // internal sales notification), so the user knows to retry.
  if (!id && notionResult.status === 'rejected' && emailResult.status === 'rejected') {
    return Response.json({ error: 'Failed to process request' }, { status: 500 });
  }

  return Response.json(id ? { success: true, id } : { success: true });
}
