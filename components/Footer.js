import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 0 32px' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 15, marginBottom: 12, textDecoration: 'none', color: 'var(--text-1)' }}>
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
            <Link href="/features" className="footer-link">Features</Link>
            <Link href="/use-cases" className="footer-link">Use Cases</Link>
            <Link href="/pricing" className="footer-link">Pricing</Link>
            <Link href="/security" className="footer-link">Security</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/#how" className="footer-link">How It Works</Link>
            <Link href="/pricing" className="footer-link">Download</Link>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-2)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Legal</h4>
            <Link href="/terms" className="footer-link">Terms</Link>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/license" className="footer-link">License Agreement</Link>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-2)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contact</h4>
            <Link href="/contact" className="footer-link">Contact Form</Link>
            <Link href="/contact" className="footer-link">Email Us</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>© 2026 TrustArchive. All rights reserved.</p>
          <p style={{ fontSize: 11, color: 'var(--text-3)' }}>No cloud · No accounts · Your data stays local</p>
        </div>
      </div>
    </footer>
  );
}
