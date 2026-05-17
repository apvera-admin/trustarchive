import Link from 'next/link';
import { Shield, Mail, Download, Key } from 'lucide-react';

export const metadata = {
  title: 'You\'re In — TrustArchive',
  description: 'Your TrustArchive license is on its way.',
};

export default function SuccessPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>

            {/* Icon */}
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'var(--accent-dim)',
              border: '2px solid var(--accent-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 28px',
            }}>
              <Shield size={28} color="var(--accent)" />
            </div>

            <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>
              You're all set.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 48 }}>
              Your license key is on its way to your inbox. Check your email —
              it usually arrives within a minute or two.
            </p>

            {/* Steps */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-md)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              marginBottom: 36,
              textAlign: 'left',
            }}>
              {[
                {
                  icon: <Mail size={16} />,
                  step: '01',
                  title: 'Check your email',
                  desc: 'Your license key has been sent to the address you used at checkout.',
                },
                {
                  icon: <Download size={16} />,
                  step: '02',
                  title: 'Download TrustArchive',
                  desc: 'The download link is included in your email. Windows and macOS both supported.',
                },
                {
                  icon: <Key size={16} />,
                  step: '03',
                  title: 'Enter your license key',
                  desc: 'Open the app, paste your license key, and activate locally. No internet needed after this step.',
                },
              ].map(({ icon, step, title, desc }, i) => (
                <div key={step} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  padding: '20px 24px',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 4 }}>
                      STEP {step}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance */}
            <div style={{
              padding: '16px 20px',
              background: 'rgba(45,212,191,0.06)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7,
              marginBottom: 32,
            }}>
              <strong style={{ color: 'var(--text-1)' }}>Don't see the email?</strong> Check your spam folder.
              If it hasn't arrived in 10 minutes, contact us at{' '}
              <span style={{ color: 'var(--accent)' }}>support@trustarchive.co</span> and we'll sort it out immediately.
            </div>

            <Link href="/security" style={{ fontSize: 13, color: 'var(--text-3)' }}>
              Read about how your data is protected →
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
