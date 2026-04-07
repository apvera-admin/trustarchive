import Link from 'next/link';
import { Shield, Check } from 'lucide-react';

export const metadata = {
  title: 'Pricing — TrustArchive',
  description: 'Simple, transparent licensing. No subscriptions tied to usage, no hidden fees, no cloud infrastructure costs.',
};

const plans = [
  {
    tier: 'Individual',
    price: '$2,500',
    period: '/ year',
    desc: 'For single trustees managing one or more trusts.',
    features: [
      'Full system access — all 6 modules',
      'Local AI assistant (on-device)',
      'Multi-operator access',
      'Fiduciary accounting & reporting',
      'Document archive & generation',
      'Cryptographic audit trail',
      'Runs fully local — no cloud',
      'Windows & macOS',
    ],
    cta: 'Get License',
    ctaClass: 'secondary',
  },
  {
    tier: 'Professional',
    price: '$5,000',
    period: '/ year',
    desc: 'For attorneys and professionals managing multiple trusts.',
    features: [
      'Everything in Individual',
      'Multi-trust management (unlimited trusts)',
      'Multi-operator access with role permissions',
      'Advanced reporting & export templates',
      'Priority support response',
      'Early access to new features',
    ],
    cta: 'Get License',
    ctaClass: 'primary',
    featured: true,
    badge: 'Most Common',
  },
  {
    tier: 'Perpetual',
    price: '$20,000',
    period: '',
    desc: 'One-time purchase with full ownership of the software. No ongoing subscription required.',
    features: [
      'Lifetime access to current version',
      '1 year of updates & priority support included',
      'Optional renewal for continued updates ($2,500/yr)',
      'Multi-trust management',
      'All Professional features',
    ],
    cta: 'Contact / Purchase',
    ctaClass: 'secondary',
  },
];

const faqs = [
  {
    q: 'What happens if I stop paying the annual license?',
    a: 'Your software continues to run. TrustArchive is installed locally on your machine — no license server checks daily connectivity. At renewal time, you simply won\'t receive software updates or support until you renew.',
  },
  {
    q: 'Does TrustArchive require an internet connection to run?',
    a: 'No. After the initial installation and license activation (one-time), TrustArchive operates entirely offline. No internet connection is required for any feature, including the local AI assistant.',
  },
  {
    q: 'Can I run TrustArchive on multiple machines?',
    a: 'Each license covers one installation. If you need to run TrustArchive on multiple machines, contact us — we offer multi-seat arrangements for professional users.',
  },
  {
    q: 'What is the difference between Individual and Professional?',
    a: 'The primary difference is multi-trust management and priority support. Individual supports managing one or more trusts from a single trust workspace. Professional supports managing unlimited, separate trust entities from one application instance.',
  },
  {
    q: 'Is my data backed up?',
    a: 'TrustArchive stores your data locally and does not manage backups for you. We recommend backing up your encrypted database file to an external drive or air-gapped storage on a regular schedule. The application includes an export function to facilitate this.',
  },
  {
    q: 'What operating systems are supported?',
    a: 'TrustArchive runs on Windows 10/11 and macOS 12 (Monterey) or later. Both versions are included with your license.',
  },
];

export default function PricingPage() {
  return (
    <>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Simple Licensing
            </span>
            <h1>Pricing</h1>
            <p>No subscriptions tied to usage. No hidden fees. No cloud infrastructure costs passed to you.</p>
          </div>
        </div>
      </div>

      {/* Pricing grid */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map(({ tier, price, period, desc, features, cta, ctaClass, featured, badge }) => (
              <div key={tier} className={`pricing-card${featured ? ' featured' : ''}`}>
                {badge && <div className="pricing-badge-wrap"><span className="pricing-badge">{badge}</span></div>}
                <div className="pricing-tier">{tier}</div>
                <div className="pricing-price">{price} {period && <span>{period}</span>}</div>
                <div className="pricing-desc">{desc}</div>
                <ul className="pricing-features">
                  {features.map(f => <li key={f}><Check size={13} /> {f}</li>)}
                </ul>
                <Link href="/contact" className={`pricing-cta ${ctaClass}`}>{cta}</Link>
              </div>
            ))}
          </div>
          <p className="small-note">
            No accounts. No cloud. No external dependencies.<br />
            <em>Designed for low-volume, high-trust use.</em>
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="section section-bordered section-alt">
        <div className="container">
          <div className="section-header">
            <h2>All Plans Include</h2>
            <p>Every TrustArchive license gives you the full system. No feature tiers on core functionality.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {[
              { title: 'Document Archive', desc: 'Upload, generate, and seal trust documents with cryptographic verification.' },
              { title: 'Fiduciary Accounting', desc: 'Double-entry bookkeeping with principal/income tracking and financial reports.' },
              { title: 'Beneficiary Management', desc: 'Full records, distribution history, and per-beneficiary reporting.' },
              { title: 'Rules Engine', desc: 'Compliance rules, automated alerts, and obligation tracking.' },
              { title: 'Local AI Assistant', desc: 'On-device AI that queries your trust data privately in plain language.' },
              { title: 'Cryptographic Audit Trail', desc: 'Immutable, tamper-evident log of every action in the system.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-surface)', padding: '28px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <Check size={15} color="var(--accent)" />
                  <strong style={{ fontSize: 14 }}>{title}</strong>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="faq-list">
              {faqs.map(({ q, a }) => (
                <div key={q} className="faq-item">
                  <div className="faq-q">{q}</div>
                  <div className="faq-a">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us to purchase a license or ask any questions before you buy.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary lg"><Shield size={16} /> Purchase a License</Link>
            <Link href="/features" className="btn-secondary lg">View All Features</Link>
          </div>
        </div>
      </section>
    </>
  );
}
