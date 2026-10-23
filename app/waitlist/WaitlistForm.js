'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, Shield } from 'lucide-react';

export default function WaitlistForm({ tier }) {
  const [form, setForm] = useState({ name: '', email: '', firm: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!form.email) {
      setError('Please enter your email.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tier: tier || '' }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-lg)', padding: '48px 40px', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Check size={20} color="var(--accent)" />
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>You&apos;re on the list</h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 20 }}>
          Thanks for joining the TrustArchive waitlist. We&apos;ll email you the moment the software is ready. Check your inbox for a confirmation.
        </p>
        <Link href="/" className="btn-secondary">Back to home</Link>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border-md)', borderRadius: 'var(--radius-lg)', padding: '36px' }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Join the Waitlist</h3>
      <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 20, lineHeight: 1.6 }}>
        Be the first to know when TrustArchive is available{tier ? ` — including the ${tier} plan` : ''}.
      </p>
      <div className="form-group">
        <label className="form-label">Name <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>(optional)</span></label>
        <input className="form-input" type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input className="form-input" type="email" placeholder="you@yourfirm.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>
      <div className="form-group">
        <label className="form-label">Firm <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>(optional)</span></label>
        <input className="form-input" type="text" placeholder="Law firm, CPA firm, trust company..." value={form.firm} onChange={e => setForm({ ...form, firm: e.target.value })} />
      </div>
      {error && <p style={{ fontSize: 13, color: 'var(--danger)', marginBottom: 12 }}>{error}</p>}
      <button onClick={handleSubmit} disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 13, opacity: loading ? 0.7 : 1 }}>
        <Shield size={14} /> {loading ? 'Joining...' : 'Join the Waitlist'}
      </button>
      <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 12, textAlign: 'center', lineHeight: 1.5 }}>
        No spam. We&apos;ll only email you about availability.
      </p>
    </div>
  );
}
