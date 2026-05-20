import Link from 'next/link';
import { Shield, Download, Monitor, Key, AlertCircle, ChevronRight, Lock } from 'lucide-react';

export const metadata = {
  title: 'Download TrustArchive — Private Trust Administration Software',
  description: 'Download TrustArchive for Windows or macOS. Installs locally, runs offline, no cloud dependencies.',
};

// ── UPDATE THESE WHEN YOU BUILD A NEW RELEASE ──────────────────────────────
const RELEASE = {
  version: '0.5.2',
  date: 'May 2025',
  windows: {
    filename: 'TrustArchive-1.0.0-setup.exe',
    size: '42 MB',
    url: 'https://github.com/apvera-admin/trustarchive-releases/releases/download/v0.5.2/TrustArchive_0.5.2_x64_en-US.msi',
    sha256: 'sha256:5d83fa2810099cc256e2ccc8cec4c68923def0f2b4385a99b1cf72a8f7c031a4',
    requirements: 'Windows 10 or 11 (64-bit)',
  },
  mac: {
    filename: 'Coming Soon',
    size: '',
    url: '#',
    sha256: 'macOS build in progress',
    requirements: 'macOS 12 (Monterey) or later',
  },
};
// ───────────────────────────────────────────────────────────────────────────

export default function DownloadPage() {
  return (
    <div style={{ paddingTop: 60 }}>

      {/* ── HERO ── */}
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <Download size={11} /> Version {RELEASE.version} — {RELEASE.date}
          </span>
          <h1>Download TrustArchive</h1>
          <p style={{ maxWidth: 520, margin: '0 auto' }}>
            Installs locally on your machine. Runs completely offline after install.
            No accounts. No cloud. No data exposure.
          </p>
        </div>
      </div>

      {/* ── DOWNLOAD CARDS ── */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 720 }}>

          {/* Both platforms side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 48 }}>

            {/* Windows */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Monitor size={18} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)' }}>Windows</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 2 }}>{RELEASE.windows.requirements}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{RELEASE.windows.size}</div>
              </div>

              <a href={RELEASE.windows.url} download style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 20px',
                background: 'var(--accent)',
                color: '#09090E',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}>
                <Download size={15} /> Download .exe
              </a>

              <div style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '10px 12px',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  SHA-256
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--text-2)', wordBreak: 'break-all', lineHeight: 1.5 }}>
                  {RELEASE.windows.sha256}
                </div>
              </div>
            </div>

            {/* macOS */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Shield size={18} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)' }}>macOS</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 2 }}>{RELEASE.mac.requirements}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{RELEASE.mac.size}</div>
              </div>

              <a href={RELEASE.mac.url} download style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 20px',
                background: 'var(--accent)',
                color: '#09090E',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}>
                <Download size={15} /> Download .dmg
              </a>

              <div style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '10px 12px',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  SHA-256
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--text-2)', wordBreak: 'break-all', lineHeight: 1.5 }}>
                  {RELEASE.mac.sha256}
                </div>
              </div>
            </div>
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

          {/* ── INSTALL STEPS ── */}
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>After Downloading</h2>

          {[
            {
              num: '01',
              title: 'Run the Installer',
              body: 'On Windows, double-click the .exe — click "More info" then "Run anyway" if SmartScreen appears. On macOS, open the .dmg and drag TrustArchive to your Applications folder. If Gatekeeper blocks it, go to System Settings > Privacy & Security and click "Open Anyway."',
            },
            {
              num: '02',
              title: 'Launch and Activate',
              body: 'Open TrustArchive and enter your license key when prompted. Activation requires a one-time internet connection. After that, the application runs fully offline.',
            },
            {
              num: '03',
              title: 'Set Your Master Password',
              body: 'Create a strong master password to encrypt your local database. This password is never transmitted or stored anywhere — keep it safe. There is no recovery option.',
            },
          ].map(({ num, title, body }) => (
            <div key={num} style={{
              display: 'flex', gap: 20, marginBottom: 24,
              paddingBottom: 24, borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--accent-subtle)',
                border: '1px solid var(--accent-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 800, color: 'var(--accent)', flexShrink: 0,
              }}>
                {num}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{body}</div>
              </div>
            </div>
          ))}

          {/* ── LICENSE KEY CTA ── */}
          <div style={{
            background: 'var(--bg-surface-2)',
            border: '1px solid var(--border-md)',
            borderRadius: 'var(--radius-lg)',
            padding: 28, marginBottom: 32,
            display: 'flex', alignItems: 'center', gap: 20,
          }}>
            <div style={{
              width: 44, height: 44,
              background: 'var(--accent-subtle)',
              border: '1px solid var(--accent-border)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Key size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-1)', marginBottom: 4 }}>Need a license key?</div>
              <div style={{ fontSize: 13, color: 'var(--text-2)' }}>
                Start a free 30-day trial. No charge until day 30. Your key is emailed immediately after checkout.
              </div>
            </div>
            <Link href="/pricing" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '10px 18px',
              background: 'var(--accent)', color: '#09090E',
              borderRadius: 8, fontWeight: 700, fontSize: 13,
              textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap',
            }}>
              Get License <ChevronRight size={14} />
            </Link>
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

          {/* ── CHECKSUM NOTE ── */}
          <div style={{
            display: 'flex', gap: 12, padding: 16,
            background: 'var(--bg-surface-2)', border: '1px solid var(--border)',
            borderRadius: 10, marginBottom: 48,
          }}>
            <AlertCircle size={16} style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: 1 }} />
            <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>
              Verify the SHA-256 checksum before installing. On Windows:{' '}
              <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--bg-surface)', padding: '1px 5px', borderRadius: 4 }}>Get-FileHash filename.exe</code>
              {' '}in PowerShell. On macOS:{' '}
              <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--bg-surface)', padding: '1px 5px', borderRadius: 4 }}>shasum -a 256 filename.dmg</code>
              {' '}in Terminal.
            </div>
          </div>

          {/* ── SUPPORT ── */}
          <div style={{ textAlign: 'center', paddingBottom: 48 }}>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 8 }}>Having trouble installing?</p>
            <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Contact support at support@trustarchive.co →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
