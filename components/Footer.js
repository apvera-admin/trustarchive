import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15, marginBottom: 12 }}>
              <div style={{
                width: 28, height: 28, background: 'var(--accent-dim)',
                border: '1px solid var(--accent-border)', borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)',
              }}>
                <Shield size={14} />
              </div>
              TrustArchive
            </Link>
            <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6, maxWidth: 220 }}>
              Private fiduciary system. Fully local. Permanently recorded.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-2)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Product</h4>
            {[['Features', '/features'], ['Pricing', '/pricing'], ['How It Works', '/#how'], ['Download', '/pricing']].map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', fontSize: 13, color: 'var(--text-3)', marginBottom: 10, transition: 'color 150ms' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
              >{label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-2)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Legal</h4>
            {[['Terms', '/terms'], ['Privacy Policy', '/privacy'], ['License Agreement', '/license']].map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', fontSize: 13, color: 'var(--text-3)', marginBottom: 10, transition: 'color 150ms' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
              >{label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-2)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contact</h4>
            {[['Contact Form', '/contact'], ['Email Us', '/contact']].map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', fontSize: 13, color: 'var(--text-3)', marginBottom: 10, transition: 'color 150ms' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
              >{label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>© 2026 TrustArchive. All rights reserved.</p>
          <p style={{ fontSize: 11, color: 'var(--text-3)' }}>No cloud · No accounts · Your data stays local</p>
        </div>
      </div>
    </footer>
  );
}
