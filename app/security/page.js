import Link from 'next/link';
import { Shield, Lock, Wifi, Database, Eye, Key, Server, Check } from 'lucide-react';

export const metadata = {
  title: 'Security Architecture — TrustArchive',
  description: 'How TrustArchive protects your trust data. SQLCipher encryption, local-only storage, no cloud backend, cryptographic audit trail.',
};

const principles = [
  {
    icon: <Database size={20} />,
    title: 'Local-Only Storage',
    desc: 'All data lives in a single encrypted database file on your machine. No cloud sync, no remote backup, no external servers. The file never leaves your device unless you explicitly copy it.',
  },
  {
    icon: <Lock size={20} />,
    title: 'SQLCipher Encryption',
    desc: 'Your database is encrypted using SQLCipher with AES-256-CBC. The encryption key is derived from your master password using PBKDF2 with 64,000 iterations. Without your password, the file is unreadable.',
  },
  {
    icon: <Wifi size={20} />,
    title: 'Zero Network Activity',
    desc: 'TrustArchive makes no network connections during normal operation. No telemetry, no analytics, no background syncing. The only outbound connections are license validation and AI model downloads — both visible and user-initiated.',
  },
  {
    icon: <Eye size={20} />,
    title: 'We Cannot See Your Data',
    desc: 'This is architectural, not a promise. The software has no server-side component that could receive your trust data. Even if we wanted to access it, we have no mechanism to do so.',
  },
  {
    icon: <Key size={20} />,
    title: 'Master Password Architecture',
    desc: 'Your master password never leaves your machine. It is used locally to derive the database encryption key. We store no hash of it, no recovery mechanism exists, and we cannot reset it. This is intentional.',
  },
  {
    icon: <Server size={20} />,
    title: 'Local AI Processing',
    desc: 'The Agent Assistant runs entirely on your hardware via Ollama. Your queries, your trust data, and the AI responses never touch an external server. Document Intelligence (RAG) uses local embeddings with sqlite-vec.',
  },
];

const auditDetails = [
  { label: 'What is logged', desc: 'Every user action: logins, document access, journal entries, distributions, rule changes, operator profile changes, and session events.' },
  { label: 'How it is sealed', desc: 'Each log entry is cryptographically chained to the previous one using SHA-256. Altering any entry breaks the chain, making tampering immediately detectable.' },
  { label: 'Immutability', desc: 'Audit entries cannot be deleted or modified through the application interface. Voiding a transaction creates a new entry — the original remains.' },
  { label: 'Export', desc: 'The full audit log can be exported to CSV for court filings, mediations, beneficiary accountings, or compliance review.' },
];

const licenseData = [
  { item: 'Email address', purpose: 'License key delivery and renewal reminders', stored: 'Supabase' },
  { item: 'License key', purpose: 'Subscription management', stored: 'Supabase' },
  { item: 'Hardware fingerprint', purpose: 'Machine activation limit enforcement (one-way hash, cannot identify hardware)', stored: 'Supabase' },
  { item: 'Payment details', purpose: 'Billing', stored: 'Stripe (we never see your card)' },
];

export default function SecurityPage() {
  return (
    <div>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Security Architecture
            </span>
            <h1>Your Data Stays<br /><span className="accent">On Your Machine.</span></h1>
            <p>A technical explanation of how TrustArchive protects your trust data, why we cannot access it, and what that means for fiduciary accountability.</p>
          </div>
        </div>
      </div>

      {/* Core commitment banner */}
      <section className="section section-bordered">
        <div className="container">
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 32,
            textAlign: 'center',
          }}>
            {[
              { stat: 'AES-256-CBC', label: 'Database encryption', sub: 'via SQLCipher' },
              { stat: 'Zero', label: 'External data connections', sub: 'during normal use' },
              { stat: '100%', label: 'Local AI processing', sub: 'no external API calls' },
            ].map(({ stat, label, sub }) => (
              <div key={label}>
                <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.02em', marginBottom: 6 }}>{stat}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core security principles */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Principles</span>
            <h2>Security by Architecture,<br />Not by Policy</h2>
            <p>Most software promises to protect your data. TrustArchive is built so that protecting your data requires no promises — it is simply not possible for us to access it.</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            {principles.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-surface)', padding: '32px 28px' }}>
                <div style={{
                  width: 40, height: 40,
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encryption deep-dive */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div className="split">
            <div className="split-text">
              <span className="section-label">Encryption</span>
              <h2>How Your Data Is Protected at Rest</h2>
              <p>TrustArchive uses SQLCipher, an open-source extension to SQLite that provides transparent, full-database encryption. Every byte of your data — including metadata, indexes, and free pages — is encrypted before being written to disk.</p>
              <ul className="check-list">
                {[
                  'AES-256-CBC encryption on the entire database file',
                  'Key derived from your master password via PBKDF2 with 64,000 iterations',
                  'A 256-bit random salt is generated per database — unique to your installation',
                  'Page-level encryption means no partial reads are possible',
                  'Open source — SQLCipher is auditable by anyone',
                ].map(item => <li key={item}><Check size={14} /> {item}</li>)}
              </ul>
            </div>
            <div className="info-panel">
              <div className="info-panel-header">
                <span className="info-panel-title">Encryption Stack</span>
                <span className="info-panel-badge">SQLCipher</span>
              </div>
              {[
                { layer: 'Application Layer', detail: 'Tauri + Rust backend', color: 'var(--text-2)' },
                { layer: 'IPC Boundary', detail: 'Validated, typed commands only', color: 'var(--text-2)' },
                { layer: 'SQLCipher', detail: 'AES-256-CBC full-database encryption', color: 'var(--accent)' },
                { layer: 'Key Derivation', detail: 'PBKDF2 · 64,000 iterations · 256-bit salt', color: 'var(--accent)' },
                { layer: 'Disk', detail: 'Encrypted .db file — unreadable without key', color: 'var(--text-3)' },
              ].map(({ layer, detail, color }) => (
                <div key={layer} className="audit-row">
                  <div className="audit-content">
                    <div style={{ fontSize: 12, fontWeight: 600, color }}>{layer}</div>
                    <div className="audit-action" style={{ fontSize: 11 }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit trail deep-dive */}
      <section className="section section-bordered">
        <div className="container">
          <div className="split reverse">
            <div className="split-text">
              <span className="section-label">Audit Trail</span>
              <h2>A Cryptographically Defensible Record</h2>
              <p>Every action in TrustArchive is logged in an immutable hash chain. For fiduciaries, this is not just a convenience — it is the foundation of demonstrating that you have fulfilled your duties to beneficiaries, courts, and co-trustees.</p>
              <ul className="check-list">
                {auditDetails.map(({ label, desc }) => (
                  <li key={label}>
                    <Check size={14} />
                    <span><strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>{label}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="info-panel">
              <div className="info-panel-header">
                <span className="info-panel-title">Hash Chain Structure</span>
                <span className="info-panel-badge">Immutable</span>
              </div>
              {[
                { entry: 'Entry #1 — Session opened', hash: 'SHA-256: a1b2c3d4...', prev: 'Genesis' },
                { entry: 'Entry #2 — Distribution posted $8,000', hash: 'SHA-256: e5f6g7h8...', prev: 'a1b2c3d4' },
                { entry: 'Entry #3 — Document sealed', hash: 'SHA-256: i9j0k1l2...', prev: 'e5f6g7h8' },
                { entry: 'Entry #4 — Session closed', hash: 'SHA-256: m3n4o5p6...', prev: 'i9j0k1l2' },
              ].map(({ entry, hash, prev }) => (
                <div key={entry} className="audit-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{entry}</div>
                  <div style={{ fontSize: 10, fontFamily: 'Courier New', color: 'var(--accent)' }}>{hash}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-3)' }}>prev: {prev}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What data we hold */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Data We Hold</span>
            <h2>The Complete Picture of<br />What We Can See</h2>
            <p>For full transparency, here is the exact and complete set of data associated with your account that exists outside your machine.</p>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{
              border: '1px solid var(--border-md)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 2fr 1.5fr',
                background: 'var(--bg-surface-2)',
                padding: '12px 20px',
                borderBottom: '1px solid var(--border-md)',
              }}>
                {['Data item', 'Purpose', 'Where stored'].map(h => (
                  <div key={h} style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</div>
                ))}
              </div>
              {licenseData.map(({ item, purpose, stored }, i) => (
                <div key={item} style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 2fr 1.5fr',
                  padding: '14px 20px',
                  borderBottom: i < licenseData.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i % 2 === 1 ? 'var(--bg-surface-2)' : 'var(--bg-surface)',
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{item}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{purpose}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{stored}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 16, textAlign: 'center' }}>
              That is the complete list. We have no access to anything inside your TrustArchive database.
            </p>
          </div>
        </div>
      </section>

      {/* Trust boundary diagram */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Trust Boundary</span>
            <h2>What Stays Local,<br />What Goes Where</h2>
            <p>A clear map of every data flow in the TrustArchive system.</p>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                zone: 'Your Machine — Always Local',
                color: 'var(--accent-border)',
                bg: 'var(--accent-dim)',
                labelColor: 'var(--accent)',
                items: [
                  'All trust data, financial records, and journal entries',
                  'Beneficiary names, contact info, and distribution history',
                  'All uploaded and generated documents',
                  'AI queries, responses, and document embeddings',
                  'Master password and database encryption key',
                  'Audit trail hash chain',
                ],
              },
              {
                zone: 'License Infrastructure — License Data Only',
                color: 'var(--border-md)',
                bg: 'var(--bg-surface-2)',
                labelColor: 'var(--text-2)',
                items: [
                  'Your email address (Supabase)',
                  'Your license key and tier (Supabase)',
                  'Hardware activation fingerprint — one-way hash only (Supabase)',
                  'Payment method (Stripe — we never see your card details)',
                ],
              },
              {
                zone: 'Never Transmitted — Ever',
                color: 'rgba(239,68,68,0.2)',
                bg: 'rgba(239,68,68,0.06)',
                labelColor: 'var(--danger)',
                items: [
                  'Any content from inside your TrustArchive database',
                  'AI queries or responses',
                  'Document contents',
                  'Your master password',
                ],
              },
            ].map(({ zone, color, bg, labelColor, items }) => (
              <div key={zone} style={{
                background: bg,
                border: '1px solid ' + color,
                borderRadius: 'var(--radius-lg)',
                padding: '20px 24px',
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: labelColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>{zone}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>
                      <span style={{ color: labelColor, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              width: 48, height: 48,
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-border)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent)',
              margin: '0 auto 20px',
            }}>
              <Shield size={22} />
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>Security Disclosure</h2>
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
              If you discover a security vulnerability in TrustArchive, please report it responsibly to{' '}
              <span style={{ color: 'var(--accent)' }}>support@trustarchive.co</span>. We will respond within 48 hours and work with you to address the issue before any public disclosure.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/privacy" style={{ fontSize: 13, color: 'var(--accent)' }}>Privacy Policy →</Link>
              <Link href="/contact" style={{ fontSize: 13, color: 'var(--text-3)' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Built for Trustees Who<br />Take Privacy Seriously</h2>
          <p>No cloud. No data exposure. No compromises.</p>
          <div className="cta-actions">
            <Link href="/pricing" className="btn-primary lg"><Shield size={16} /> View Plans</Link>
            <Link href="/contact" className="btn-secondary lg">Ask a Question</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
