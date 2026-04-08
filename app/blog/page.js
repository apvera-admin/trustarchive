import Link from 'next/link';
import { Shield, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog — TrustArchive',
  description: 'Practical guidance on trust administration, fiduciary accounting, and record-keeping for trustees.',
};

export const posts = [
  {
    slug: 'principal-vs-income-trust-accounting',
    title: 'Principal vs. Income in Trust Accounting: What Every Trustee Needs to Know',
    excerpt: 'The single most important accounting concept in trust administration is one that most general accounting software ignores entirely. Here is what the distinction actually means and why it matters.',
    date: 'April 7, 2026',
    readTime: '8 min read',
    category: 'Fiduciary Accounting',
  },
  {
    slug: 'how-to-record-trust-distribution-journal-entry',
    title: 'How to Record a Trust Distribution as a Journal Entry',
    excerpt: 'A distribution to a beneficiary is not simply a payment. It requires the right accounts, the right category, and the right documentation to hold up under scrutiny. Step-by-step walkthrough.',
    date: 'March 28, 2026',
    readTime: '6 min read',
    category: 'Fiduciary Accounting',
  },
  {
    slug: 'documents-trustee-should-keep',
    title: 'What Documents Should a Trustee Keep on File',
    excerpt: 'Trustees are frequently asked this question and rarely get a complete answer. Here is the full list — organized by category — and guidance on how long each type should be retained.',
    date: 'March 14, 2026',
    readTime: '7 min read',
    category: 'Record-Keeping',
  },
  {
    slug: 'trust-data-should-not-live-in-cloud',
    title: 'Why Your Trust Data Should Not Live in a Cloud Application',
    excerpt: 'Most software marketed to trustees stores your data on someone else\'s servers. This piece examines the practical and fiduciary risks — and what the alternative looks like.',
    date: 'February 28, 2026',
    readTime: '5 min read',
    category: 'Privacy & Security',
  },
  {
    slug: 'trustee-annual-accounting-what-to-include',
    title: 'The Trustee\'s Annual Accounting: What to Include and When to File',
    excerpt: 'An annual accounting is one of the most important fiduciary duties a trustee has. Most trustees are unclear on what it must contain. This is the complete breakdown.',
    date: 'February 12, 2026',
    readTime: '9 min read',
    category: 'Compliance',
  },
];

const categoryColors = {
  'Fiduciary Accounting': { bg: 'var(--accent-dim)', color: 'var(--accent)', border: 'var(--accent-border)' },
  'Record-Keeping': { bg: 'rgba(139,92,246,0.1)', color: '#a78bfa', border: 'rgba(139,92,246,0.25)' },
  'Privacy & Security': { bg: 'rgba(245,158,11,0.1)', color: 'var(--warn)', border: 'rgba(245,158,11,0.25)' },
  'Compliance': { bg: 'rgba(34,197,94,0.1)', color: 'var(--success)', border: 'rgba(34,197,94,0.25)' },
};

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      <div style={{ paddingTop: 60 }}>
        <div className="page-hero">
          <div className="container">
            <span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <BookOpen size={11} /> Trust Administration
            </span>
            <h1>The TrustArchive Blog</h1>
            <p>Practical guidance on fiduciary accounting, record-keeping, and trust administration for trustees who take their duties seriously.</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* Featured post */}
          <Link href={'/blog/' + featured.slug} style={{ textDecoration: 'none', display: 'block', marginBottom: 48 }}>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-md)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 48px',
              transition: 'border-color 150ms',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 99,
                  background: categoryColors[featured.category].bg,
                  color: categoryColors[featured.category].color,
                  border: '1px solid ' + categoryColors[featured.category].border,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>{featured.category}</span>
                <span style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Featured</span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16, color: 'var(--text-1)' }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24, maxWidth: 680 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{featured.date}</span>
                <span style={{ fontSize: 13, color: 'var(--text-3)' }}>·</span>
                <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{featured.readTime}</span>
                <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginLeft: 8 }}>Read article →</span>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {rest.map(post => {
              const colors = categoryColors[post.category] || categoryColors['Fiduciary Accounting'];
              return (
                <Link key={post.slug} href={'/blog/' + post.slug} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700,
                      padding: '3px 10px', borderRadius: 99,
                      background: colors.bg,
                      color: colors.color,
                      border: '1px solid ' + colors.border,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      display: 'inline-block', marginBottom: 16, alignSelf: 'flex-start',
                    }}>{post.category}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12, color: 'var(--text-1)', flex: 1 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 20 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto' }}>
                      <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{post.date}</span>
                      <span style={{ fontSize: 12, color: 'var(--text-3)' }}>·</span>
                      <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>See TrustArchive in Action</h2>
          <p>The software built for trustees who take their records seriously.</p>
          <div className="cta-actions">
            <Link href="/pricing" className="btn-primary lg"><Shield size={16} /> Start Free Trial</Link>
            <Link href="/features" className="btn-secondary lg">View Features</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
