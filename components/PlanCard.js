import Link from 'next/link';
import { Check } from 'lucide-react';
import { planCta } from '../lib/plans';
import { AUDIENCES, hasDemoVideo } from '../lib/demo';

// One pricing card. Used on /pricing and on the /individuals and /firms pages.
export default function PlanCard({ plan, showAudienceLink = false }) {
  const { tier, price, period, perSeat, baseSeats, limit, desc, features, featured, badge, gold, audience } = plan;
  const cta = planCta(plan);
  const isFirm = audience === 'firm';

  return (
    <div className={`pricing-card${featured ? ' featured' : ''}${gold ? ' pricing-card-fo' : ''}`}>
      {badge && <div className="pricing-badge-wrap"><span className="pricing-badge">{badge}</span></div>}
      <div className="pricing-tier">{tier}</div>
      <div className="pricing-price">{price}<span> {period}</span></div>
      {perSeat && (
        <div style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 4, marginTop: -4 }}>
          + {perSeat}/seat/yr &nbsp;·&nbsp; {baseSeats} seats included
        </div>
      )}
      <div style={{ fontSize: 11, color: gold ? '#D4A017' : 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>{limit}</div>
      <div className="pricing-desc">{desc}</div>
      <ul className="pricing-features">
        {features.map(f => <li key={f}><Check size={13} /> {f}</li>)}
      </ul>
      <Link href={cta.href} className={`pricing-cta ${featured ? 'primary' : 'secondary'}`}>{cta.label}</Link>
      {isFirm && (
        <div style={{ fontSize: 11, color: 'var(--text-3)', textAlign: 'center', marginTop: 6 }}>
          {hasDemoVideo('firm') ? `Watch now · ${AUDIENCES.firm.videoLength}` : 'Demo + follow-up call'}
        </div>
      )}
      {showAudienceLink && (
        <Link href={isFirm ? '/firms' : '/individuals'} style={{ display: 'block', textAlign: 'center', fontSize: 12, color: 'var(--text-3)', marginTop: 10, textDecoration: 'none' }}>
          {isFirm ? 'TrustArchive for firms →' : 'TrustArchive for individuals →'}
        </Link>
      )}
    </div>
  );
}
