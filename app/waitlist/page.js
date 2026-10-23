import { Shield, Lock, Wifi, Clock, Check } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export const metadata = {
  title: 'Join the Waitlist — TrustArchive',
  description: 'TrustArchive is launching soon. Join the waitlist to be the first to know when our private, fully local trust administration software is available.',
};

export default function WaitlistPage({ searchParams }) {
  const tier = searchParams?.tier
    ? searchParams.tier.charAt(0).toUpperCase() + searchParams.tier.slice(1).replace('_', ' ')
    : '';

  return (
    <div style={{ paddingTop: 60 }}>
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <Clock size={11} /> Launching Soon
          </span>
          <h1>TrustArchive Is Almost Here</h1>
          <p style={{ maxWidth: 540, margin: '0 auto' }}>
            We&apos;re putting the finishing touches on the software. Join the waitlist and we&apos;ll
            email you the moment it&apos;s ready to download.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="waitlist-grid">
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
                Private trust administration.<br />Fully local. Permanently recorded.
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
                Fiduciary software that runs entirely on your machine. No cloud. No data exposure.
                Complete control over your trust data, accounting, and audit trail.
              </p>
              <ul className="check-list">
                {[
                  'Full double-entry fiduciary accounting',
                  'Cryptographic audit trail — defensible records',
                  'Local AI assistant that never sends your data anywhere',
                  'Runs fully offline for Individual & Solo tiers',
                ].map(item => (
                  <li key={item}><Check size={15} /> {item}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
                {[
                  { icon: <Lock size={12} />, label: 'SQLCipher Encrypted' },
                  { icon: <Wifi size={12} />, label: 'Offline-First' },
                  { icon: <Shield size={12} />, label: 'No Telemetry' },
                ].map(({ icon, label }) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 12px', background: 'var(--bg-surface-2)',
                    border: '1px solid var(--border)', borderRadius: 20,
                    fontSize: 12, color: 'var(--text-3)',
                  }}>
                    <span style={{ color: 'var(--accent)' }}>{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <WaitlistForm tier={tier} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .waitlist-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </div>
  );
}
