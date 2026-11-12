'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { REF_STORAGE_KEY } from '../../lib/waitlist';
import { ROLES, TRUSTS_OPTIONS, SEATS_OPTIONS, audienceFor } from '../../lib/demo';

function storedRef() {
  try {
    return localStorage.getItem(REF_STORAGE_KEY);
  } catch {
    return null;
  }
}

function Select({ label, value, options, onChange }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <select className="form-input form-select" required value={value} onChange={e => onChange(e.target.value)}>
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

// Roles for the audience the visitor came from are listed first; 'Other' stays last.
function roleOptions(lead) {
  if (!lead) return ROLES.map(r => r.label);
  const rank = r => (r.audience === lead ? 0 : r.audience ? 1 : 2);
  return [...ROLES].sort((a, b) => rank(a) - rank(b)).map(r => r.label);
}

export default function DemoForm({ tier, tierName, lead }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', role: '', trusts_managed: '', firm: '', seats: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = key => value => setForm(f => ({ ...f, [key]: value }));

  // Firm questions appear once the answers point to the firm demo.
  const isFirm = Boolean(form.role) && audienceFor(form.role, form.trusts_managed) === 'firm';

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const body = { ...form, tier: tier || '', source: storedRef() };
      if (!isFirm) body.seats = '';
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        router.push(`/demo/${data.audience === 'firm' ? 'firm' : 'individual'}`);
        return;
      }
      setError('Something went wrong. Please try again, or email sales@trustarchive.co.');
    } catch {
      setError('Something went wrong. Please try again, or email sales@trustarchive.co.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', padding: 36 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Step 1 of 3</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Tell us about yourself</h3>
      <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 24, lineHeight: 1.6 }}>
        Takes about 30 seconds. We&apos;ll show you the demo that fits how you work{tierName ? ` · Interested in ${tierName}` : ''}.
      </p>
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input className="form-input" type="text" placeholder="Your full name" required value={form.name} onChange={e => set('name')(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="you@example.com" required value={form.email} onChange={e => set('email')(e.target.value)} />
        </div>
      </div>
      <Select label="Which best describes you?" value={form.role} options={roleOptions(lead)} onChange={set('role')} />
      <Select label="How many trusts do you manage?" value={form.trusts_managed} options={TRUSTS_OPTIONS} onChange={set('trusts_managed')} />
      {isFirm && (
        <div className="form-row-2">
          <div className="form-group">
            <label className="form-label">Firm</label>
            <input className="form-input" type="text" placeholder="Firm or organization name" required value={form.firm} onChange={e => set('firm')(e.target.value)} />
          </div>
          <Select label="Users who need access" value={form.seats} options={SEATS_OPTIONS} onChange={set('seats')} />
        </div>
      )}
      {error && <p style={{ fontSize: 13, color: 'var(--danger)', marginBottom: 12 }}>{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 13, opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Sending...' : <>Watch the demo <ArrowRight size={15} /></>}
      </button>
      <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 12, textAlign: 'center', lineHeight: 1.5 }}>
        We use this only to prepare for your demo.
      </p>
    </form>
  );
}
