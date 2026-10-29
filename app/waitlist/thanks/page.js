import Link from 'next/link';
import { Check } from 'lucide-react';
import { isUuid } from '../../../lib/waitlist';
import SurveyForm from './SurveyForm';

export const metadata = {
  title: "You're on the list — TrustArchive",
  description: "You're on the TrustArchive waitlist.",
  robots: { index: false, follow: false },
};

export default function WaitlistThanksPage({ searchParams }) {
  const id = isUuid(searchParams?.id) ? searchParams.id : null;

  return (
    <div style={{ paddingTop: 60 }}>
      <div className="page-hero">
        <div className="container">
          <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <Check size={11} /> Waitlist confirmed
          </span>
          <h1>You&apos;re on the list.</h1>
          {id && (
            <p>
              One more thing — four quick questions. It helps us build the right thing, and it
              takes about 30 seconds.
            </p>
          )}
        </div>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 640 }}>
          {id ? (
            <SurveyForm id={id} />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
                We&apos;ll email you the moment TrustArchive is ready.
              </p>
              <Link href="/" className="btn-secondary">Back to home</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
