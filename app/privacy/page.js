import Link from 'next/link';
import { Shield, Lock } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — TrustArchive',
  description: 'How TrustArchive handles your data. Spoiler: we can\'t see it.',
};

const sections = [
  {
    title: '1. What Data We Collect',
    body: null,
    items: [
      {
        label: 'Purchase and account data',
        desc: 'When you purchase a license, our payment processor (Stripe) collects your payment information. We receive your email address and the license tier you purchased. We do not store your payment card details.',
      },
      {
        label: 'License and activation data',
        desc: 'When you activate TrustArchive, we store a hardware fingerprint — a one-way hash of your machine identifiers — associated with your license key in our license database (Supabase). This is used solely to enforce the machine activation limit on your license. The fingerprint cannot be reversed to identify your hardware.',
      },
      {
        label: 'Email communication',
        desc: 'We use your email address to deliver your license key, send renewal reminders, and respond to support requests. We do not send marketing email without your consent.',
      },
    ],
  },
  {
    title: '2. What Data We Do Not Collect',
    body: 'We do not collect, transmit, or have access to any of the following — this is an architectural reality, not just a policy position:',
    bullets: [
      'Any trust data, financial records, or accounting entries you create in TrustArchive',
      'Beneficiary names, contact information, or distribution records',
      'Document contents or uploaded files',
      'AI Assistant queries or responses',
      'Any data from within the application during normal use',
    ],
  },
  {
    title: '3. Local AI Processing',
    body: 'The TrustArchive Agent Assistant runs entirely on your device using locally installed AI models via Ollama. Your queries, your trust data, and the AI\'s responses never leave your machine. We have no visibility into your AI usage.',
  },
  {
    title: '4. Third-Party Services',
    body: null,
    items: [
      {
        label: 'Stripe',
        desc: 'Processes payments and manages subscription billing. Stripe receives your payment details and billing information during checkout. Their privacy policy governs data collected during checkout and billing.',
      },
      {
        label: 'Supabase',
        desc: 'Hosts our license database. Supabase stores your email address, license key, license tier, and hardware activation fingerprint. This data is used solely to manage your license and is not used for any other purpose.',
      },
      {
        label: 'Resend',
        desc: 'Delivers transactional emails including your license key, renewal reminders, and support replies. Email content is limited to license and billing information.',
      },
    ],
    footer: 'We do not use advertising networks, analytics platforms, or tracking pixels on our website or in the software.',
  },
  {
    title: '5. Data Security',
    body: 'All trust data is encrypted at rest using SQLCipher, an industry-standard encrypted database. The encryption key is derived from your master password and is never transmitted anywhere. We do not have the ability to decrypt your data even if compelled. Your license and account data stored in Supabase is encrypted at rest and in transit.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain your email address and license record for as long as your subscription is active and for up to 3 years after cancellation for billing and support purposes. You may request deletion of your account data by contacting us.',
  },
  {
    title: '7. Your Rights',
    body: 'You may request a copy of the personal data we hold about you (email address, license record, activation fingerprint), request correction of inaccurate data, or request deletion of your data by contacting support@trustarchive.co. We will respond within 30 days.',
  },
  {
    title: '8. Children',
    body: 'TrustArchive is not directed at children under 13 and we do not knowingly collect data from children.',
  },
  {
    title: '9. Changes to This Policy',
    body: 'We will notify you of material changes to this policy via email at least 30 days before they take effect.',
  },
  {
    title: '10. Contact',
    body: 'Privacy questions: support@trustarchive.co',
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Legal
            </span>
            <h1>Privacy Policy</h1>
            <p>Effective Date: April 8, 2026</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 28px',
              marginBottom: 48,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Lock size={16} color="var(--accent)" />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>Our Core Commitment</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8, margin: 0 }}>
                TrustArchive is designed from the ground up to keep your data on your machine.
                We do not collect, transmit, store, or have access to any of the trust data,
                financial records, beneficiary information, or documents you manage in TrustArchive.
                This is not a policy position — it is an architectural reality. The software has
                no cloud backend and makes no connection to our servers during normal operation.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {sections.map(({ title, body, items, bullets, footer }) => (
                <div key={title}>
                  <h2 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--text-1)',
                    marginBottom: 10,
                    paddingBottom: 10,
                    borderBottom: '1px solid var(--border)',
                  }}>{title}</h2>

                  {body && (
                    <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: items || bullets ? 20 : 0 }}>{body}</p>
                  )}

                  {bullets && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {bullets.map(b => (
                        <li key={b} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>✕</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {items && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {items.map(({ label, desc }) => (
                        <div key={label} style={{
                          background: 'var(--bg-surface-2)',
                          borderRadius: 'var(--radius-md)',
                          padding: '14px 18px',
                        }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)', marginBottom: 6 }}>{label}</div>
                          <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {footer && (
                    <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.7, marginTop: 16, fontStyle: 'italic' }}>{footer}</p>
                  )}
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: '1px solid var(--border)',
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
            }}>
              <Link href="/terms" style={{ fontSize: 13, color: 'var(--accent)' }}>Terms of Service →</Link>
              <Link href="/contact" style={{ fontSize: 13, color: 'var(--text-3)' }}>Contact Us</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
