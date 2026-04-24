import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const WHITEPAPER_URL = 'https://www.trustarchive.co/TrustArchive_Cloud_Liability_White_Paper.pdf';

export async function POST(request) {
  try {
    const { name, email, firm } = await request.json();

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'TrustArchive <noreply@trustarchive.co>',
      to: email,
      replyTo: 'sales@trustarchive.co',
      subject: 'Your White Paper: The Cloud Liability Problem in Trust Administration',
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
              Hi ${name.split(' ')[0]},
            </p>
            <p style="font-size: 15px; color: #3a3a52; line-height: 1.6; margin: 0 0 24px;">
              Your copy of <strong style="color: #0f0f14;">The Cloud Liability Problem in Trust Administration</strong> is ready. Click the button below to download it.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${WHITEPAPER_URL}" style="display: inline-block; background: #2DD4BF; color: #07100f; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none;">
                Download White Paper (PDF)
              </a>
            </div>
            <div style="background: #f8f9fa; border: 1px solid #e0e0e8; border-radius: 10px; padding: 20px 24px; margin: 24px 0;">
              <div style="font-size: 11px; font-weight: 700; color: #6b6b85; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px;">What is inside</div>
              <div style="display: flex; gap: 10px; margin-bottom: 8px;"><span style="color: #2DD4BF; font-weight: 700;">✓</span><span style="font-size: 13px; color: #3a3a52;">The four specific liability risks most trustees are not managing</span></div>
              <div style="display: flex; gap: 10px; margin-bottom: 8px;"><span style="color: #2DD4BF; font-weight: 700;">✓</span><span style="font-size: 13px; color: #3a3a52;">Why SOC 2 compliance does not satisfy your confidentiality duty</span></div>
              <div style="display: flex; gap: 10px; margin-bottom: 8px;"><span style="color: #2DD4BF; font-weight: 700;">✓</span><span style="font-size: 13px; color: #3a3a52;">A side-by-side comparison of cloud vs. local-first software</span></div>
              <div style="display: flex; gap: 10px;"><span style="color: #2DD4BF; font-weight: 700;">✓</span><span style="font-size: 13px; color: #3a3a52;">A four-step action framework for professional trustees</span></div>
            </div>
            <p style="font-size: 13px; color: #6b6b85; line-height: 1.6; margin: 24px 0 0;">
              If the button does not work, copy and paste this link:<br />
              <a href="${WHITEPAPER_URL}" style="color: #2DD4BF; word-break: break-all;">${WHITEPAPER_URL}</a>
            </p>
          </div>
          <div style="background: #f8f9fa; border-top: 1px solid #e0e0e8; padding: 24px 40px;">
            <p style="font-size: 13px; color: #3a3a52; line-height: 1.6; margin: 0 0 12px;">
              <strong>About TrustArchive</strong> — Fiduciary administration software that runs entirely on your machine. No cloud, no vendor access, no exposure.
            </p>
            <a href="https://www.trustarchive.co/features" style="font-size: 13px; color: #2DD4BF; font-weight: 600; text-decoration: none;">See how TrustArchive works →</a>
          </div>
          <div style="padding: 20px 40px; border-top: 1px solid #e0e0e8;">
            <p style="font-size: 11px; color: #9b9bb5; line-height: 1.6; margin: 0; text-align: center;">
              You received this because you requested the white paper at trustarchive.co.<br />
            </p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'TrustArchive <noreply@trustarchive.co>',
      to: 'sales@trustarchive.co',
      subject: `White paper download — ${name}${firm ? ` (${firm})` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="color: #2DD4BF;">New White Paper Download</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Firm</td><td style="padding: 8px;">${firm || '—'}</td></tr>
          </table>
        </div>
      `,
    });
    
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
          Name: { title: [{ text: { content: name } }] },
          Email: { email: email },
          Organization: { rich_text: [{ text: { content: firm || '' } }] },
          Reason: { select: { name: 'Pre-sales question' } },
          Message: { rich_text: [{ text: { content: 'Downloaded white paper: The Cloud Liability Problem' } }] },
          Status: { select: { name: 'New' } },
          Source: { select: { name: 'Contact Form' } },
        },
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Whitepaper route error:', error);
    return Response.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
