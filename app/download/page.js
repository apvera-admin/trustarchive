'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Download, Monitor, Apple, CheckCircle, Key, AlertCircle, ChevronRight, Lock, Copy, Check } from 'lucide-react';

export const metadata = {
  title: 'Download TrustArchive — Private Trust Administration Software',
  description: 'Download TrustArchive for Windows or macOS. Installs locally, runs offline, no cloud dependencies.',
};

// ── UPDATE THESE WHEN YOU BUILD A NEW RELEASE ──────────────────────────────
const RELEASE = {
  version: '1.0.0',
  date: 'May 2025',
  windows: {
    label: 'Windows Installer',
    filename: 'TrustArchive-1.0.0-setup.exe',
    size: '42 MB',
    url: '/releases/TrustArchive-1.0.0-setup.exe', // replace with real URL or S3 link
    sha256: 'PLACEHOLDER_SHA256_WINDOWS',           // replace with real checksum
    requirements: 'Windows 10 or 11 (64-bit)',
  },
  mac: {
    label: 'macOS Disk Image',
    filename: 'TrustArchive-1.0.0.dmg',
    size: '48 MB',
    url: '/releases/TrustArchive-1.0.0.dmg',       // replace with real URL or S3 link
    sha256: 'PLACEHOLDER_SHA256_MACOS',             // replace with real checksum
    requirements: 'macOS 12 (Monterey) or later',
  },
};
// ───────────────────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: copied ? 'var(--accent)' : 'var(--text-3)',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      padding: '2px 6px',
      borderRadius: 4,
      transition: 'color 0.15s',
    }}>
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

export default function DownloadPage() {
  const [os, setOs] = useState('windows');
  const platform = os === 'windows' ? RELEASE.windows : RELEASE.mac;

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

      {/* ── OS SELECTOR + DOWNLOAD ── */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 680 }}>

          {/* OS Toggle */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-surface-2)',
            borderRadius: 10,
            padding: 4,
            marginBottom: 32,
            border: '1px solid var(--border)',
          }}>
            {[
              { id: 'windows', label: 'Windows', icon: <Monitor size={15} /> },
              { id: 'mac', label: 'macOS', icon: <Apple size={15} /> },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setOs(id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 7,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  transition: 'all 0.15s',
                  background: os === id ? 'var(--bg-surface)' : 'transparent',
                  color: os === id ? 'var(--text-1)' : 'var(--text-3)',
                  boxShadow: os === id ? 'var(--shadow-sm)' : 'none',
                }}
              >
                {icon} {label}
              </button>
            ))}
          </div>

          {/* Download Card */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 32,
            marginBottom: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 4 }}>
                  {platform.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-1)', marginBottom: 4 }}>
                  {platform.filename}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-3)' }}>
                  {platform.size} &nbsp;·&nbsp; {platform.requirements}
                </div>
              </div>
              <div style={{
                width: 48,
                height: 48,
                background: 'var(--accent-subtle)',
                border: '1px solid var(--accent-border)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Shield size={22} style={{ color: 'var(--accent)' }} />
              </div>
            </div>

            <a
              href={platform.url}
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                width: '100%',
                padding: '14px 24px',
                background: 'var(--accent)',
                color: '#09090E',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'opacity 0.15s',
                marginBottom: 20,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <Download size={16} />
              Download for {os === 'windows' ? 'Windows' : 'macOS'}
            </a>

            {/* Checksum */}
            <div style={{
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '10px 14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  SHA-256 Checksum
                </span>
                <CopyButton text={platform.sha256} />
              </div>
              <div style={{
                fontFamily: 'monospace',
                fontSize: 11,
                color: 'var(--text-2)',
                wordBreak: 'break-all',
                lineHeight: 1.5,
              }}>
                {platform.sha256}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 48,
          }}>
            {[
              { icon: <Lock size={12} />, label: 'SQLCipher Encrypted' },
              { icon: <Shield size={12} />, label: 'No Telemetry' },
              { icon: <CheckCircle size={12} />, label: 'Code Signed' },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
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

          {/* ── INSTALLATION STEPS ── */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>
              Getting Started
            </h2>

            {(os === 'windows' ? [
              {
                num: '01',
                title: 'Run the Installer',
                body: 'Double-click TrustArchive-setup.exe. Windows may show a SmartScreen prompt — click "More info" then "Run anyway." This is expected for new software not yet widely distributed.',
              },
              {
                num: '02',
                title: 'Follow the Setup Wizard',
                body: 'Accept the license agreement and choose your install directory. The installer creates a desktop shortcut and adds TrustArchive to your Start menu.',
              },
              {
                num: '03',
                title: 'Launch and Activate',
                body: 'Open TrustArchive and enter your license key when prompted. Activation requires a one-time internet connection. After that, the application runs fully offline.',
              },
              {
                num: '04',
                title: 'Set Your Master Password',
                body: 'Create a strong master password to encrypt your local database. This password is never transmitted or stored anywhere — keep it safe. There is no recovery option.',
              },
            ] : [
              {
                num: '01',
                title: 'Open the Disk Image',
                body: 'Double-click TrustArchive.dmg. macOS may show a Gatekeeper warning — go to System Settings > Privacy & Security and click "Open Anyway." This is expected for newly distributed software.',
              },
              {
                num: '02',
                title: 'Drag to Applications',
                body: 'In the disk image window, drag TrustArchive to your Applications folder. Eject the disk image when done.',
              },
              {
                num: '03',
                title: 'Launch and Activate',
                body: 'Open TrustArchive from Applications and enter your license key when prompted. Activation requires a one-time internet connection. After that, the application runs fully offline.',
              },
              {
                num: '04',
                title: 'Set Your Master Password',
                body: 'Create a strong master password to encrypt your local database. This password is never transmitted or stored anywhere — keep it safe. There is no recovery option.',
              },
            ]).map(({ num, title, body }) => (
              <div key={num} style={{
                display: 'flex',
                gap: 20,
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--accent-subtle)',
                  border: '1px solid var(--accent-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 800,
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  {num}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-1)', marginBottom: 6 }}>
                    {title}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    {body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── LICENSE KEY CTA ── */}
          <div style={{
            background: 'var(--bg-surface-2)',
            border: '1px solid var(--border-md)',
            borderRadius: 'var(--radius-lg)',
            padding: 28,
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            <div style={{
              width: 44,
              height: 44,
              background: 'var(--accent-subtle)',
              border: '1px solid var(--accent-border)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Key size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-1)', marginBottom: 4 }}>
                Need a license key?
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-2)' }}>
                Start a free 30-day trial — no charge until day 30. Your license key is emailed immediately after checkout.
              </div>
            </div>
            <Link href="/pricing" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 18px',
              background: 'var(--accent)',
              color: '#09090E',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 13,
              textDecoration: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}>
              Get License <ChevronRight size={14} />
            </Link>
          </div>

          {/* ── SYSTEM REQUIREMENTS ── */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
              System Requirements
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
              background: 'var(--border)',
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}>
              {[
                { label: 'Windows', value: 'Windows 10 or 11 (64-bit)' },
                { label: 'macOS', value: 'macOS 12 Monterey or later' },
                { label: 'RAM', value: '8 GB minimum, 16 GB recommended' },
                { label: 'Storage', value: '500 MB for app + space for your database' },
                { label: 'Internet', value: 'Required for license activation only' },
                { label: 'AI Model', value: 'Additional 4–8 GB for local AI (optional)' },
              ].map(({ label, value }, i) => (
                <div key={label} style={{
                  background: 'var(--bg-surface)',
                  padding: '14px 18px',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-1)', fontWeight: 500 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── VERIFY CHECKSUM NOTE ── */}
          <div style={{
            display: 'flex',
            gap: 12,
            padding: 16,
            background: 'var(--bg-surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            marginBottom: 48,
          }}>
            <AlertCircle size={16} style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: 1 }} />
            <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>
              Verify the SHA-256 checksum above before installing. On Windows use{' '}
              <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--bg-surface)', padding: '1px 5px', borderRadius: 4 }}>
                Get-FileHash filename.exe
              </code>{' '}
              in PowerShell. On macOS use{' '}
              <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--bg-surface)', padding: '1px 5px', borderRadius: 4 }}>
                shasum -a 256 filename.dmg
              </code>{' '}
              in Terminal.
            </div>
          </div>

          {/* ── SUPPORT ── */}
          <div style={{ textAlign: 'center', paddingBottom: 48 }}>
            <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 8 }}>
              Having trouble installing?
            </p>
            <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Contact support at support@trustarchive.co →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
