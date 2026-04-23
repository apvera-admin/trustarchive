import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, org, reason, message } = await request.json();

    await resend.emails.send({
      from: 'TrustArchive Contact <noreply@trustarchive.co>',
      to: 'sales@trustarchive.co',
      replyTo: email,
      subject: `[${reason}] from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #2DD4BF;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Organization</td><td style="padding: 8px;">${org || '—'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Reason</td><td style="padding: 8px;">${reason}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px;">${message}</td></tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

// Log to Notion
await fetch('https://api.notion.com/v1/pages', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
    'Notion-Version': '2022-06-01',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    parent: { database_id: '287481f54682452da2d155a9a161c1a0' },
    properties: {
      Name: { title: [{ text: { content: name } }] },
      Email: { email: email },
      Organization: { rich_text: [{ text: { content: org || '' } }] },
      Reason: { select: { name: reason } },
      Message: { rich_text: [{ text: { content: message } }] },
      Status: { select: { name: 'New' } },
      Source: { select: { name: 'Contact Form' } },
    },
  }),
});
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
