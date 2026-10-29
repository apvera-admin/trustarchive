'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, Send } from 'lucide-react';
import {
  TRUSTS_MANAGED_OPTIONS,
  CURRENT_METHOD_OPTIONS,
  BIGGEST_PAIN_MAX,
} from '../../../lib/waitlist';

const FOUNDING_OPTIONS = [
  { label: 'Yes', value: true },
  { label: 'No thanks', value: false },
];

const cardStyle = {
  background: 'var(--bg-surface-2)',
  border: '1px solid var(--border-md)',
  borderRadius: 'var(--radius-lg)',
  padding: '36px',
};

function RadioGroup({ name, question, options, value, onChange }) {
  return (
    <fieldset className="survey-group">
      <legend className="survey-question">{question}</legend>
      <div className="survey-options">
        {options.map(option => {
          const optionValue = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;
          const selected = value === optionValue;
          return (
            <label key={label} className={`survey-option${selected ? ' selected' : ''}`}>
              <input
                type="radio"
                name={name}
                checked={selected}
                onChange={() => onChange(optionValue)}
              />
              {label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function SurveyForm({ id }) {
  const [answers, setAnswers] = useState({
    trusts_managed: null,
    current_method: null,
    biggest_pain: '',
    founding_interest: null,
  });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const set = key => value => setAnswers(a => ({ ...a, [key]: value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/waitlist/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...answers, biggest_pain: answers.biggest_pain || null }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done' || status === 'error') {
    const ok = status === 'done';
    return (
      <div style={{ ...cardStyle, borderColor: 'var(--accent-border)', padding: '48px 40px', textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, background: 'var(--accent-dim)', border: '1px solid var(--accent-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <Check size={20} color="var(--accent)" />
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
          {ok ? 'Thanks — that really helps.' : 'Thanks for your time.'}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 20 }}>
          {ok
            ? "We'll use your answers to shape what we build. We'll email you as soon as TrustArchive is ready."
            : "We couldn't save your answers just now, but you're still on the waitlist. We'll email you when TrustArchive is ready."}
        </p>
        <Link href="/" className="btn-secondary">Back to home</Link>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={cardStyle} className="form-card">
        <RadioGroup
          name="trusts_managed"
          question="How many trusts do you manage?"
          options={TRUSTS_MANAGED_OPTIONS}
          value={answers.trusts_managed}
          onChange={set('trusts_managed')}
        />
        <RadioGroup
          name="current_method"
          question="How do you handle trust accounting today?"
          options={CURRENT_METHOD_OPTIONS}
          value={answers.current_method}
          onChange={set('current_method')}
        />
        <fieldset className="survey-group">
          <legend className="survey-question">What&apos;s the most painful part of administering the trust?</legend>
          <textarea
            className="form-textarea"
            maxLength={BIGGEST_PAIN_MAX}
            placeholder="Quarterly distributions, tracking income vs principal, record keeping for beneficiaries..."
            value={answers.biggest_pain}
            onChange={e => set('biggest_pain')(e.target.value)}
          />
          <div style={{ fontSize: 11, color: 'var(--text-3)', textAlign: 'right', marginTop: 6 }}>
            {answers.biggest_pain.length}/{BIGGEST_PAIN_MAX}
          </div>
        </fieldset>
        <RadioGroup
          name="founding_interest"
          question="Want to hear about founding-member pricing before we launch?"
          options={FOUNDING_OPTIONS}
          value={answers.founding_interest}
          onChange={set('founding_interest')}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: 13, opacity: status === 'sending' ? 0.7 : 1 }}
        >
          <Send size={14} /> {status === 'sending' ? 'Sending...' : 'Send answers'}
        </button>
        <p style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 12, textAlign: 'center' }}>
          Every question is optional.
        </p>
      </form>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Link href="/" style={{ fontSize: 14, color: 'var(--text-2)', textDecoration: 'none' }}>
          Skip
        </Link>
      </div>
    </>
  );
}
