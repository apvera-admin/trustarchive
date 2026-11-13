import Link from 'next/link';
import { Shield, Check } from 'lucide-react';
import PlanCard from '../../components/PlanCard';
import { PLANS, plansFor, shortPrice, PRICING_FAQS, faqsFor } from '../../lib/plans';

export const metadata = {
  title: 'Pricing — TrustArchive',
  description: 'Plans for individual trustees and solo practitioners, and for firms and family offices. Launching soon — join the waitlist or see the firm demo. Annual billing, fully local software.',
};

const VIEWS = {
  individual: { label: 'For Individuals', heading: 'For individuals & solo practitioners', sub: 'Managing one trust or a handful — your own or your clients\'. Join the waitlist; a 30-day free trial is available at launch.', gridClass: 'pricing-grid-2' },
  firm: { label: 'For Firms', heading: 'For firms & family offices', sub: 'Trust administration across a team, with per-seat pricing. Start with the demo, then a follow-up call to size your plan.', gridClass: 'pricing-grid-3' },
};

const S = <Check size={14} className="feat-check" />;
const N = <span className="feat-no">—</span>;
const FO = <span className="feat-fo">FO only</span>;

const featureGroups = [
  {
    label: 'Core Platform',
    rows: [
      { name: 'Trust Overview Dashboard', sub: 'KPI strip, action panel, recent activity', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Encrypted local storage — SQLCipher', sub: 'Fully offline, no cloud', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Operator profiles & role-based access', sub: 'Trustee, attorney, grantor, co-trustee, beneficiary', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Cryptographic audit trail', sub: 'Immutable hash chain, export to CSV', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Administration task management', sub: 'Ticklers, due dates, workflow tasks', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Multi-trust portfolio switcher', sub: 'Per-trust data isolation', ind: N, sol: S, pro: S, pra: S, fo: S },
      { name: 'Encrypted firm sync — multi-user', sub: 'End-to-end encrypted, Professional and above', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Account onboarding / KYC checklist', sub: 'New trust setup workflow', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Calendar sync (opt-in)', sub: 'Privacy disclosure required', ind: N, sol: N, pro: S, pra: S, fo: S },
    ],
  },
  {
    label: 'Financial Ledger',
    rows: [
      { name: 'Double-entry bookkeeping', sub: 'Principal / income separation', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Bank statement import', sub: 'CSV, OFX, QFX, QBO', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Auto-allocation rules engine', sub: 'Pattern matching, auto-approve option', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Staging inbox & approval workflow', sub: 'Review before posting', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Distribution tracking', sub: 'Journal entry linkage, beneficiary view', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Period close / year-end locking', sub: 'Lock posted periods', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Recurring distributions', sub: 'Scheduled automatic entries', ind: N, sol: S, pro: S, pra: S, fo: S },
      { name: 'Distribution approval workflow', sub: 'Co-trustee / attorney sign-off', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Lot-level securities tracking', sub: 'FIFO / LIFO / specific ID', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Non-cash transaction types', sub: 'Splits, dividends, spinoffs', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'PDF bank statement OCR', sub: 'Extract transactions from PDF', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Distribution approval committee', sub: 'Multi-party approval, audit trail', ind: N, sol: N, pro: N, pra: S, fo: S },
    ],
  },
  {
    label: 'Asset Management',
    rows: [
      { name: 'Asset catalog', sub: 'Real estate, personal property', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Entity interest tracking', sub: 'LLC, LP, corp with basis ledger', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Precious metals, crypto, pegged currency', sub: 'Manual price refresh', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Alternative asset tracking', sub: 'PE / hedge fund, capital calls', ind: N, sol: N, pro: N, pra: S, fo: S },
    ],
  },
  {
    label: 'Reporting',
    rows: [
      { name: 'Trial balance & general ledger detail', sub: 'As-of-date, running balance', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Trust accounting statement', sub: 'Principal / income receipts & disbursements', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Beneficiary distribution report', sub: 'By beneficiary, type, date range', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Asset summary with cost basis', sub: 'Including entity interests', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'ACTEC Formal Account report', sub: 'Court-ready fiduciary format', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Tax prep summary — K-1 prep', sub: 'Income by character & beneficiary', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'Beneficiary report package', sub: 'PDF export for beneficiary delivery', ind: N, sol: N, pro: S, pra: S, fo: S },
      { name: 'State court accounting formats', sub: 'CA, NY, TX, NV variants', ind: N, sol: N, pro: N, pra: S, fo: S },
      { name: 'Consolidated cross-trust reporting', sub: 'Family-wide portfolio view', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Investment performance TWR / IRR', sub: 'Time-weighted & internal rate of return', ind: N, sol: N, pro: N, pra: N, fo: FO },
    ],
  },
  {
    label: 'Documents & Communications',
    rows: [
      { name: 'Document management', sub: 'Folders, tags, entity linking', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Document generation', sub: '20 seed templates, PDF / DOCX export', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Outbound email — SMTP', sub: 'Offline send queue, threaded replies', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'eSignature integration (opt-in)', sub: 'Requires network, privacy disclosure', ind: N, sol: N, pro: S, pra: S, fo: S },
    ],
  },
  {
    label: 'Workflow & Automation',
    rows: [
      { name: 'Rules engine', sub: '21 seed templates, event-condition-action', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Obligations tracking', sub: 'Due dates, recurring, overdue alerts', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Beneficiary management', sub: 'Profiles, distributions, history', ind: S, sol: S, pro: S, pra: S, fo: S },
    ],
  },
  {
    label: 'AI Assistant',
    rows: [
      { name: 'Agent Assistant — local AI', sub: 'Ollama, fully offline, no data leaves device', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: '12 read-only AI tools', sub: 'Query ledger, assets, beneficiaries, obligations', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Document Intelligence — RAG', sub: 'Semantic search across trust documents', ind: S, sol: S, pro: S, pra: S, fo: S },
      { name: 'Assisted rule creation', sub: 'AI translates trust provisions into rules', ind: N, sol: S, pro: S, pra: S, fo: S },
      { name: 'Write-operation AI tools', sub: 'AI data entry with trustee review', ind: N, sol: N, pro: S, pra: S, fo: S },
    ],
  },
  {
    label: 'Family Office Premium',
    rows: [
      { name: 'Consolidated cross-trust view', sub: 'Single dashboard across entire portfolio', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Investment performance analytics', sub: 'TWR / IRR, benchmark comparison', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Cross-trust distribution summary', sub: 'Family-wide beneficiary totals', ind: N, sol: N, pro: N, pra: N, fo: FO },
      { name: 'Priority support & escalation', sub: 'Dedicated response path', ind: N, sol: N, pro: N, pra: N, fo: S },
      { name: 'White-glove onboarding call', sub: 'Setup session with your team', ind: N, sol: N, pro: N, pra: N, fo: S },
    ],
  },
];

export default function PricingPage({ searchParams }) {
  const view = VIEWS[searchParams?.for] ? searchParams.for : null;
  const groups = view ? [view] : ['individual', 'firm'];
  const faqs = view ? faqsFor(view) : PRICING_FAQS;
  const tabs = [[null, 'All plans'], ['individual', VIEWS.individual.label], ['firm', VIEWS.firm.label]];

  return (
    <>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <Shield size={11} /> Simple Licensing
            </span>
            <h1>Pricing</h1>
            <p>One application, priced for how you work. TrustArchive is launching soon — individuals can join the waitlist, firms can see the demo today.</p>
            <div className="audience-tabs" role="tablist" aria-label="Show plans for">
              {tabs.map(([key, label]) => (
                <Link key={label} href={key ? `/pricing?for=${key}` : '/pricing'} scroll={false} role="tab" aria-selected={view === key} className={`audience-tab${view === key ? ' active' : ''}`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing cards, one group per audience */}
      <section className="section">
        <div className="pricing-wide">
          {groups.map((key, i) => (
            <div key={key} style={{ marginTop: i ? 64 : 0 }}>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>{VIEWS[key].heading}</h2>
                <p style={{ fontSize: 14, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>{VIEWS[key].sub}</p>
              </div>
              <div className={VIEWS[key].gridClass}>
                {plansFor(key).map(plan => <PlanCard key={plan.slug} plan={plan} showAudienceLink />)}
              </div>
            </div>
          ))}
          <p className="small-note" style={{ marginTop: 32 }}>
            Annual billing with auto-renewal at launch · Cancel auto-renewal any time in your billing portal<br />
            Have a question first?{' '}
            <Link href="/contact" style={{ color: 'var(--accent)' }}>Talk to us →</Link>
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <h2>Compare Plans</h2>
            <p>Every feature, every tier.</p>
          </div>
          <div className="feat-table-wrap">
            <table className="feat-table">
              <thead>
                <tr className="feat-group-row">
                  <th />
                  <th colSpan={plansFor('individual').length}>Individuals</th>
                  <th colSpan={plansFor('firm').length}>Firms</th>
                </tr>
                <tr>
                  <th style={{ textAlign: 'left' }}>Feature</th>
                  {PLANS.map(plan => (
                    <th key={plan.slug} className={plan.gold ? 'fo-col-head' : undefined}>
                      {plan.tier}<br />
                      <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: plan.gold ? '#D4A017' : undefined }}>{shortPrice(plan)}</span>
                    </th>
                  ))}
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
                          <div>{row.name}</div>
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
            "FO only" = Family Office plan exclusive
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
          <p>Launching soon. Individuals: join the waitlist. Firms: see the demo.</p>
          <div className="cta-actions">
            <Link href="/waitlist" className="btn-primary lg"><Shield size={16} /> Join the Waitlist</Link>
            <Link href="/demo?for=firm" className="btn-secondary lg">See the Firm Demo</Link>
          </div>
          <p className="cta-note">No accounts required · Instant local activation · Your data never leaves your machine</p>
        </div>
      </section>
    </>
  );
}
