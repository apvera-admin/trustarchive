import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, firm, tier } = await request.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const firstName = name ? name.split(' ')[0] : 'there';

    // Confirmation email to the person joining the waitlist
    await resend.emails.send({
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
    await resend.emails.send({
      from: 'TrustArchive <noreply@trustarchive.co>',
      to: 'sales@trustarchive.co',
      subject: `Waitlist signup — ${name || email}${tier ? ` (${tier})` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="color: #2DD4BF;">New Waitlist Signup</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name || '—'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Firm</td><td style="padding: 8px;">${firm || '—'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Interested tier</td><td style="padding: 8px;">${tier || '—'}</td></tr>
          </table>
        </div>
      `,
    });

    // Log the lead into the existing Notion CRM database
    await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2026-03-11',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: '287481f54682452da2d155a9a161c1a0' },
        properties: {
          Name: { title: [{ text: { content: name || email } }] },
          Email: { email: email },
          Organization: { rich_text: [{ text: { content: firm || '' } }] },
          Reason: { select: { name: 'Waitlist' } },
          Message: { rich_text: [{ text: { content: `Joined waitlist${tier ? ` — interested in ${tier}` : ''}` } }] },
          Status: { select: { name: 'New' } },
          Source: { select: { name: 'Waitlist' } },
        },
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Waitlist route error:', error);
    return Response.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
