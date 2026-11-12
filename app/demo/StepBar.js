import { Check } from 'lucide-react';

const STEPS = ['Tell us about yourself', 'Watch the demo', 'Book a follow-up call'];

// Three-step progress bar shown at the top of the demo funnel pages.
export default function StepBar({ current }) {
  return (
    <ol className="demo-steps" aria-label="Demo steps">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const state = n < current ? 'done' : n === current ? 'active' : '';
        return (
          <li key={label} className={`demo-step ${state}`} aria-current={n === current ? 'step' : undefined}>
            <span className="demo-step-num">{n < current ? <Check size={12} /> : n}</span>
            {label}
          </li>
        );
      })}
    </ol>
  );
}
