import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PlanCard from './PlanCard';
import { plansFor, faqsFor } from '../lib/plans';

// Shared layout for the /individuals and /firms landing pages. Each page passes
// its own copy; plans and FAQs come from lib/plans.js.
export default function AudienceLanding({ audience, hero, personas, problems, features, finalCta, crossLink }) {
  const plans = plansFor(audience);
  const faqs = faqsFor(audience);

  return (
    <div>
      {/* ── HERO ── */}
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              {hero.tagIcon} {hero.tag}
            </span>
            <h1>{hero.title}</h1>
            <p style={{ maxWidth: 620, margin: '0 auto' }}>{hero.sub}</p>
            <div className="cta-actions" style={{ marginTop: 32 }}>
              <Link href={hero.primary.href} className="btn-primary lg">{hero.primary.label}</Link>
              <Link href={hero.secondary.href} className="btn-secondary lg">{hero.secondary.label}</Link>
            </div>
            {hero.note && <p className="cta-note" style={{ marginTop: 16 }}>{hero.note}</p>}
          </div>
        </div>
      </div>

      {/* ── WHO IT'S FOR ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who it&apos;s for</span>
            <h2>{personas.title}</h2>
          </div>
          <div className="audience-persona-grid">
            {personas.items.map(({ icon, title, desc, scenario }) => (
              <div key={title} className="audience-card">
                <div className="audience-card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {scenario && <p className="audience-scenario">{scenario}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS → HOW IT HELPS ── */}
      <section className="section section-bordered section-alt">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="section-header">
            <span className="section-label">Why TrustArchive</span>
            <h2>{problems.title}</h2>
          </div>
          <div className="audience-problems">
            {problems.items.map(({ problem, answer }) => (
              <div key={problem} className="audience-problem-row">
                <div className="audience-problem">{problem}</div>
                <ArrowRight size={16} className="audience-problem-arrow" />
                <div className="audience-answer"><Check size={15} /> {answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What you get</span>
            <h2>{features.title}</h2>
          </div>
          <div className="audience-feature-grid">
            {features.items.map(({ icon, title, desc }) => (
              <div key={title} className="audience-card">
                <div className="audience-card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="small-note" style={{ marginTop: 28 }}>
            <Link href="/features" style={{ color: 'var(--accent)' }}>See every feature →</Link>
            {' · '}
            <Link href="/security" style={{ color: 'var(--accent)' }}>How we protect your data →</Link>
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section section-bordered">
        <div className="pricing-wide">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Plans for {audience === 'firm' ? 'firms' : 'individuals'}</h2>
          </div>
          <div className={plans.length === 2 ? 'pricing-grid-2' : 'pricing-grid-3'}>
            {plans.map(plan => <PlanCard key={plan.slug} plan={plan} />)}
          </div>
          <p className="small-note" style={{ marginTop: 24 }}>
            <Link href={`/pricing?for=${audience}`} style={{ color: 'var(--accent)' }}>Compare every feature by plan →</Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-bordered">
        <div className="container">
          <div className="section-header">
            <h2>Questions</h2>
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

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="container">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.sub}</p>
          <div className="cta-actions">
            <Link href={hero.primary.href} className="btn-primary lg">{hero.primary.label}</Link>
            <Link href={hero.secondary.href} className="btn-secondary lg">{hero.secondary.label}</Link>
          </div>
          <p className="cta-note">
            {crossLink.text}{' '}
            <Link href={crossLink.href} style={{ color: 'var(--accent)' }}>{crossLink.label}</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
