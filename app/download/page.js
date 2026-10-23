import Link from 'next/link';
import { Shield, Clock, Monitor, Lock } from 'lucide-react';

export const metadata = {
  title: 'Download TrustArchive — Coming Soon',
  description: 'TrustArchive is launching soon. Join the waitlist to be notified the moment downloads open for Windows and macOS.',
};

export default function DownloadPage() {
  return (
    <div style={{ paddingTop: 60 }}>

      {/* ── HERO ── */}
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <Clock size={11} /> Downloads Open Soon
          </span>
          <h1>Download TrustArchive</h1>
          <p style={{ maxWidth: 520, margin: '0 auto' }}>
            TrustArchive isn&apos;t available to download just yet. We&apos;re finishing the final
            build for Windows and macOS. Join the waitlist and we&apos;ll email you the moment it&apos;s ready.
          </p>
        </div>
      </div>

      {/* ── COMING SOON CARD ── */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 560 }}>

          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px 36px',
            textAlign: 'center',
            marginBottom: 32,
          }}>
            <div style={{
              width: 52, height: 52, margin: '0 auto 20px',
              background: 'var(--accent-dim)', border: '1px solid var(--accent-border)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Clock size={24} style={{ color: 'var(--accent)' }} />
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Launching Soon</h2>
            <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
              Windows and macOS builds are in final preparation. Be the first to get download
              and licensing details when we go live.
            </p>
            <Link href="/waitlist" className="btn-primary lg" style={{ justifyContent: 'center' }}>
              <Shield size={15} /> Join the Waitlist
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            {[
              { icon: <Lock size={12} />, label: 'SQLCipher Encrypted' },
              { icon: <Shield size={12} />, label: 'No Telemetry' },
              { icon: <Monitor size={12} />, label: 'Windows & macOS' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 12px',
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                fontSize: 12,
                color: 'var(--text-3)',
              }}>
                <span style={{ color: 'var(--accent)' }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>

          {/* ── SYSTEM REQUIREMENTS ── */}
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>System Requirements</h2>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
            background: 'var(--border)', borderRadius: 10,
            overflow: 'hidden', border: '1px solid var(--border)', marginBottom: 32,
          }}>
            {[
              { label: 'Windows', value: 'Windows 10 or 11 (64-bit)' },
              { label: 'macOS', value: 'macOS 12 Monterey or later' },
              { label: 'RAM', value: '8 GB minimum, 16 GB recommended' },
              { label: 'Storage', value: '500 MB for app + database space' },
              { label: 'Internet', value: 'One-time only for license activation' },
              { label: 'Local AI', value: 'Additional 4–8 GB for AI model (optional)' },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: 'var(--bg-surface)', padding: '14px 18px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-1)', fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>

          {/* ── SUPPORT ── */}
          <div style={{ textAlign: 'center', paddingBottom: 48 }}>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 8 }}>Questions before launch?</p>
            <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Contact us at sales@trustarchive.co →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
