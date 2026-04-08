import Link from 'next/link';
import { Shield, Check } from 'lucide-react';

export const metadata = {
  title: 'Pricing — TrustArchive',
  description: 'Five license tiers for every type of trustee. 30-day free trial, annual billing, fully local software.',
};

const plans = [
  {
    tier: 'Individual',
    price: '$699',
    period: '/ year',
    limit: '1 trust',
    desc: 'For personal trustees managing a single family trust.',
    features: [
      'Full fiduciary accounting',
      'Document management & generation',
      'Local AI assistant (fully offline)',
      'Cryptographic audit trail',
      'Rules engine & obligations',
      'Encrypted local storage',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'secondary',
    href: '/contact',
  },
  {
    tier: 'Solo',
    price: '$1,500',
    period: '/ year',
    limit: 'Up to 5 trusts',
    desc: 'For private trustees managing a small trust portfolio.',
    features: [
      'Everything in Individual',
      'Multi-trust portfolio switcher',
      'Recurring distributions',
      'Assisted rule creation (AI)',
      'Document Intelligence — RAG',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'secondary',
    href: '/contact',
  },
  {
    tier: 'Professional',
    price: '$2,500',
    period: '/ year',
    limit: 'Up to 25 trusts',
    desc: 'For estate attorneys and CPAs with active client trust files.',
    features: [
      'Everything in Solo',
      'ACTEC court-ready reports',
      'Tax prep summary — K-1 prep',
      'Distribution approval workflow',
      'Lot-level securities tracking',
      'eSignature integration (opt-in)',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'primary',
    href: '/contact',
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Practice',
    price: '$4,900',
    period: '/ year',
    limit: 'Unlimited trusts',
    desc: 'For firms requiring unlimited scale and advanced tools.',
    features: [
      'Everything in Professional',
      'Unlimited trusts',
      'State court accounting formats',
      'Property management module',
      'Alternative asset tracking',
      'Distribution approval committee',
    ],
    cta: 'Start Free Trial',
    ctaClass: 'secondary',
    href: '/contact',
  },
  {
    tier: 'Family Office',
    price: '$9,600',
    period: '/ year',
    limit: 'Unlimited trusts',
    desc: 'For family offices managing wealth across multiple family branches.',
    features: [
      'Everything in Practice',
      'Consolidated cross-trust reporting',
      'Investment performance TWR / IRR',
      'Cross-trust distribution summary',
      'Priority support & escalation',
      'White-glove onboarding call',
    ],
    cta: 'Contact for Demo',
    ctaClass: 'secondary',
    href: '/contact',
    gold: true,
  },
];

const S = <Check size={14} className="feat-check" />;
const N = <span className="feat-no">—</span>;
const R = <span className="feat-soon">Soon</span>;
const FO = <span className="feat-fo">FO only</span>;

const featureGroups = [
  {
    label: 'Core Platform',
    rows: [
      { name: 'Trust Overview Dashboard', sub: 'KPI strip, action panel, recent activity', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Encrypted local storage — SQLCipher', sub: 'Fully offline, no cloud', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Operator profiles & role-based access', sub: 'Trustee, attorney, grantor, co-trustee, beneficiary', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Cryptographic audit trail', sub: 'Immutable hash chain, export to CSV', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Administration task management', sub: 'Ticklers, due dates, workflow tasks', status: 'roadmap', ind: R, sol: R, pro: R, pra: R, fo: R },
      { name: 'Multi-trust portfolio switcher', sub: 'Per-trust data isolation', status: 'shipped', ind: N, sol: S, pro: S, pra: S, fo: S },
      { name: 'Account onboarding / KYC checklist', sub: 'New trust setup workflow', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Calendar sync (opt-in)', sub: 'Privacy disclosure required', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
    ],
  },
  {
    label: 'Financial Ledger',
    rows: [
      { name: 'Double-entry bookkeeping', sub: 'Principal / income separation', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Bank statement import', sub: 'CSV, OFX, QFX, QBO', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Auto-allocation rules engine', sub: 'Pattern matching, auto-approve option', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Staging inbox & approval workflow', sub: 'Review before posting', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Distribution tracking', sub: 'Journal entry linkage, beneficiary view', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Period close / year-end locking', sub: 'Lock posted periods', status: 'roadmap', ind: R, sol: R, pro: R, pra: R, fo: R },
      { name: 'Recurring distributions', sub: 'Scheduled automatic entries', status: 'roadmap', ind: N, sol: R, pro: R, pra: R, fo: R },
      { name: 'Distribution approval workflow', sub: 'Co-trustee / attorney sign-off', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Lot-level securities tracking', sub: 'FIFO / LIFO / specific ID', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Non-cash transaction types', sub: 'Splits, dividends, spinoffs', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'PDF bank statement OCR', sub: 'Extract transactions from PDF', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Bill management & payment tracking', sub: 'Payables, recurring bills', status: 'roadmap', ind: N, sol: N, pro: N, pra: R, fo: R },
      { name: 'Distribution approval committee', sub: 'Multi-party approval, audit trail', status: 'roadmap', ind: N, sol: N, pro: N, pra: R, fo: R },
    ],
  },
  {
    label: 'Asset Management',
    rows: [
      { name: 'Asset catalog', sub: 'Real estate, personal property', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Entity interest tracking', sub: 'LLC, LP, corp with basis ledger', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Precious metals, crypto, pegged currency', sub: 'Manual price refresh', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Securities price integration', sub: 'Manual refresh, Alpha Vantage', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Property management module', sub: 'Real estate, vehicles, art', status: 'roadmap', ind: N, sol: N, pro: N, pra: R, fo: R },
      { name: 'Alternative asset tracking', sub: 'PE / hedge fund, capital calls', status: 'roadmap', ind: N, sol: N, pro: N, pra: R, fo: R },
    ],
  },
  {
    label: 'Reporting',
    rows: [
      { name: 'Trial balance & general ledger detail', sub: 'As-of-date, running balance', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Trust accounting statement', sub: 'Principal / income receipts & disbursements', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Beneficiary distribution report', sub: 'By beneficiary, type, date range', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Asset summary with cost basis', sub: 'Including entity interests', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'ACTEC Formal Account report', sub: 'Court-ready fiduciary format', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Tax prep summary — K-1 prep', sub: 'Income by character & beneficiary', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'Beneficiary report package', sub: 'PDF export for beneficiary delivery', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
      { name: 'State court accounting formats', sub: 'CA, NY, TX, NV variants', status: 'roadmap', ind: N, sol: N, pro: N, pra: R, fo: R },
      { name: 'Consolidated cross-trust reporting', sub: 'Family-wide portfolio view', status: 'roadmap', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Investment performance TWR / IRR', sub: 'Time-weighted & internal rate of return', status: 'roadmap', ind: N, sol: N, pro: N, pra: N, fo: FO },
    ],
  },
  {
    label: 'Documents & Communications',
    rows: [
      { name: 'Document management', sub: 'Folders, tags, entity linking', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Document generation', sub: '20 seed templates, PDF / DOCX export', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Outbound email — SMTP', sub: 'Offline send queue, threaded replies', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'eSignature integration (opt-in)', sub: 'Requires network, privacy disclosure', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
    ],
  },
  {
    label: 'Workflow & Automation',
    rows: [
      { name: 'Rules engine', sub: '21 seed templates, event-condition-action', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Obligations tracking', sub: 'Due dates, recurring, overdue alerts', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Beneficiary management', sub: 'Profiles, distributions, history', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
    ],
  },
  {
    label: 'AI Assistant',
    rows: [
      { name: 'Agent Assistant — local AI', sub: 'Ollama, fully offline, no data leaves device', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: '12 read-only AI tools', sub: 'Query ledger, assets, beneficiaries, obligations', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Document Intelligence — RAG', sub: 'Semantic search across trust documents', status: 'shipped', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Assisted rule creation', sub: 'AI translates trust provisions into rules', status: 'roadmap', ind: N, sol: R, pro: R, pra: R, fo: R },
      { name: 'Write-operation AI tools', sub: 'AI data entry with trustee review', status: 'roadmap', ind: N, sol: N, pro: R, pra: R, fo: R },
    ],
  },
  {
    label: 'Family Office Premium',
    rows: [
      { name: 'Consolidated cross-trust view', sub: 'Single dashboard across entire portfolio', status: 'roadmap', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Investment performance analytics', sub: 'TWR / IRR, benchmark comparison', status: 'roadmap', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Cross-trust distribution summary', sub: 'Family-wide beneficiary totals', status: 'roadmap', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Priority support & escalation', sub: 'Dedicated response path', status: 'included', ind: N, sol: N, pro: N, pra: N, fo: S },
      { name: 'White-glove onboarding call', sub: 'Setup session with your team', status: 'included', ind: N, sol: N, pro: N, pra: N, fo: S },
    ],
  },
];

const faqs = [
  { q: 'What happens when my annual subscription renews?', a: 'Your subscription renews automatically each year. You\'ll receive email reminders 30 days and 7 days before your renewal date. Cancel any time before renewal in your billing portal — access continues until the end of your paid period.' },
  { q: 'What is included in the 30-day free trial?', a: 'The full application with all features your plan includes. Your card is charged only at the end of the trial period. Cancel any time before day 30 and you won\'t be charged.' },
  { q: 'Does TrustArchive require an internet connection to run?', a: 'No. After the initial installation and one-time license activation, TrustArchive operates entirely offline. No internet connection is required for any feature, including the local AI assistant.' },
  { q: 'Can I run TrustArchive on multiple machines?', a: 'Individual and Solo licenses activate on up to 2 machines. Professional on up to 3, Practice on up to 5, and Family Office on up to 10. To transfer to a new machine, deactivate from the old machine in Settings > License.' },
  { q: 'What is the difference between Practice and Family Office?', a: 'Both support unlimited trusts. Family Office adds consolidated cross-trust reporting, investment performance analytics (TWR/IRR), a family-wide distribution dashboard, priority support, and a white-glove onboarding call — built for family offices managing wealth across multiple family branches.' },
  { q: 'What operating systems are supported?', a: 'Windows 10/11 and macOS 12 (Monterey) or later. Both are included with your license.' },
  { q: 'Is my data backed up?', a: 'TrustArchive stores all data locally and does not manage backups. We recommend backing up your encrypted database file to an external drive regularly. The application includes an export function to facilitate this.' },
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
            <p>Five tiers for every type of trustee. 30-day free trial on all plans. Annual billing with auto-renewal.</p>
          </div>
        </div>
      </div>

      {/* Pricing cards */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid-5">
            {plans.map(({ tier, price, period, limit, desc, features, cta, ctaClass, href, featured, badge, gold }) => (
              <div key={tier} className={`pricing-card${featured ? ' featured' : ''}${gold ? ' pricing-card-fo' : ''}`}>
                {badge && <div className="pricing-badge-wrap"><span className="pricing-badge">{badge}</span></div>}
                <div className="pricing-tier">{tier}</div>
                <div className="pricing-price">{price}<span> {period}</span></div>
                <div style={{ fontSize: 11, color: gold ? '#D4A017' : 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>{limit}</div>
                <div className="pricing-desc">{desc}</div>
                <ul className="pricing-features">
                  {features.map(f => <li key={f}><Check size={13} /> {f}</li>)}
                </ul>
                <Link href={href} className={`pricing-cta ${ctaClass}`}>{cta}</Link>
              </div>
            ))}
          </div>
          <p className="small-note" style={{ marginTop: 24 }}>
            30-day free trial on all plans · Card required · Cancel before day 30 and you won't be charged<br />
            Annual billing with auto-renewal · Cancel auto-renewal any time in your billing portal
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <h2>Compare Plans</h2>
            <p>Every feature, every tier. Shipped features are available now. Roadmap features are included in your plan when they ship — no additional charge.</p>
          </div>
          <div className="feat-table-wrap">
            <table className="feat-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Feature</th>
                  <th>Individual<br /><span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>$699/yr</span></th>
                  <th>Solo<br /><span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>$1,500/yr</span></th>
                  <th>Professional<br /><span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>$2,500/yr</span></th>
                  <th>Practice<br /><span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>$4,900/yr</span></th>
                  <th className="fo-col-head">Family Office<br /><span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#D4A017' }}>$9,600/yr</span></th>
                </tr>
              </thead>
              <tbody>
                {featureGroups.map(group => (
                  <>
                    <tr key={group.label} className="feat-cat-row">
                      <td colSpan={6}>{group.label}</td>
                    </tr>
                    {group.rows.map(row => (
                      <tr key={row.name}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                            {row.name}
                            <span className={`feat-badge ${row.status === 'shipped' || row.status === 'included' ? 'feat-badge-shipped' : 'feat-badge-roadmap'}`}>
                              {row.status === 'shipped' || row.status === 'included' ? 'Shipped' : 'Roadmap'}
                            </span>
                          </div>
                          {row.sub && <div className="feat-sub">{row.sub}</div>}
                        </td>
                        <td>{row.ind}</td>
                        <td>{row.sol}</td>
                        <td>{row.pro}</td>
                        <td>{row.pra}</td>
                        <td>{row.fo}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small-note">
            "Soon" = on the active roadmap, included in your plan tier when shipped · "FO only" = Family Office plan exclusive
          </p>
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
          <p>30-day free trial. No charge until day 30. Cancel any time.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary lg"><Shield size={16} /> Start Free Trial</Link>
            <Link href="/features" className="btn-secondary lg">View All Features</Link>
          </div>
          <p className="cta-note">No accounts required to trial · Instant local activation · Your data never leaves your machine</p>
        </div>
      </section>
    </>
  );
}
