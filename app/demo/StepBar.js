import { Check } from 'lucide-react';
import { hasDemoVideo } from '../../lib/demo';

// Three-step progress bar shown at the top of the demo funnel pages.
export default function StepBar({ current }) {
  const steps = hasDemoVideo()
    ? ['Tell us about your firm', 'Watch the demo', 'Book a Q&A call']
    : ['Tell us about your firm', 'Pick a time', 'Live walkthrough'];

  return (
    <ol className="demo-steps" aria-label="Demo steps">
      {steps.map((label, i) => {
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
