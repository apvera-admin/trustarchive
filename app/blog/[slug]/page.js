import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { posts } from '../page';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title + ' — TrustArchive Blog',
    description: post.excerpt,
  };
}

const postContent = {
  'principal-vs-income-trust-accounting': {
    title: 'Principal vs. Income in Trust Accounting: What Every Trustee Needs to Know',
    date: 'April 7, 2026',
    readTime: '8 min read',
    category: 'Fiduciary Accounting',
    body: [
      {
        type: 'p',
        text: 'If you are administering a trust and using general accounting software, there is a good chance your records are wrong — not because you made a math error, but because the software was never designed for fiduciary accounting.',
      },
      {
        type: 'p',
        text: 'The distinction between principal and income is the foundation of trust accounting. It is also the concept that most general accounting tools either ignore entirely or treat as a simple tag. Understanding it correctly is essential to fulfilling your duties as a trustee.',
      },
      {
        type: 'h2',
        text: 'What Principal Is',
      },
      {
        type: 'p',
        text: 'Principal — sometimes called corpus — is the original property that was transferred into the trust, plus any accumulated capital gains on that property. If the trust was funded with $500,000 in stock and real estate, that $500,000 is the principal. When the stock appreciates in value and is sold, the realized gain is generally also principal.',
      },
      {
        type: 'p',
        text: 'Principal is typically held for the benefit of remainder beneficiaries — the people who receive the trust assets when it terminates. A trustee has a fiduciary duty not to erode the principal at the expense of remainder beneficiaries.',
      },
      {
        type: 'h2',
        text: 'What Income Is',
      },
      {
        type: 'p',
        text: 'Income is what the principal earns. Dividends, interest, rental income, and royalties are common examples. Income is typically distributed to income beneficiaries — often a surviving spouse or another person with a current interest in the trust — either as earned or on a regular schedule.',
      },
      {
        type: 'p',
        text: 'The distinction matters because a dollar taken from principal to pay an income beneficiary is a dollar taken from the remainder beneficiaries. A trustee who conflates the two is potentially breaching their duty to one class of beneficiaries at the expense of another.',
      },
      {
        type: 'h2',
        text: 'Why Most Accounting Software Gets This Wrong',
      },
      {
        type: 'p',
        text: 'General accounting software — QuickBooks, Xero, and similar tools — is built around a single equity account or a simple fund structure. You can manually create accounts labeled "Principal" and "Income," but the software has no understanding of what those labels mean. There is nothing to prevent you from crediting the wrong account, and there are no built-in reports that respect the distinction.',
      },
      {
        type: 'p',
        text: 'Fiduciary accounting software maintains two separate pools — principal and income — and enforces the distinction at the transaction level. When you record a dividend, it goes to income. When you record a capital gain, it goes to principal. The chart of accounts is structured around this separation, and the reports — including the trust accounting statement — present the two pools separately.',
      },
      {
        type: 'h2',
        text: 'Practical Implications for Trustees',
      },
      {
        type: 'p',
        text: 'Every time you record a transaction, you need to ask: is this principal or income? Some answers are straightforward. Rental income is income. The proceeds from selling a trust asset are principal. But some transactions are genuinely ambiguous — stock dividends, certain entity distributions, and some insurance proceeds all require judgment.',
      },
      {
        type: 'p',
        text: 'The Uniform Principal and Income Act (UPIA), adopted in most states with some variation, provides default rules for allocating receipts and disbursements between principal and income. Your trust instrument may override some of these defaults. When in doubt, consult the trust instrument first and the applicable state statute second.',
      },
      {
        type: 'h2',
        text: 'The Reporting Requirement',
      },
      {
        type: 'p',
        text: 'Most trust instruments and state laws require the trustee to provide beneficiaries with an annual accounting. That accounting must separately show principal receipts, income receipts, principal disbursements, income disbursements, and ending balances for each. A single combined statement does not satisfy this requirement.',
      },
      {
        type: 'p',
        text: 'If your records do not maintain the principal/income separation, you cannot produce a compliant accounting — which means you cannot demonstrate that you have fulfilled your fiduciary duty. This is the point at which record-keeping stops being administrative and starts being legal exposure.',
      },
    ],
  },
  'how-to-record-trust-distribution-journal-entry': {
    title: 'How to Record a Trust Distribution as a Journal Entry',
    date: 'March 28, 2026',
    readTime: '6 min read',
    category: 'Fiduciary Accounting',
    body: [
      {
        type: 'p',
        text: 'A distribution to a beneficiary is the most consequential transaction a trustee records. It reduces trust assets, affects the principal/income balance, and creates a legal record that must hold up if ever reviewed by a beneficiary, co-trustee, or court.',
      },
      {
        type: 'p',
        text: 'Here is the correct way to record a distribution — both conceptually and mechanically.',
      },
      {
        type: 'h2',
        text: 'Determine the Type of Distribution',
      },
      {
        type: 'p',
        text: 'Before touching your accounting system, you need to know whether the distribution is from income, principal, or discretionary. This determines which accounts you will debit and credit.',
      },
      {
        type: 'p',
        text: 'An income distribution is funded from earned income — dividends, interest, rents — that has accumulated in the income pool. A principal distribution reduces the corpus of the trust and is funded from principal assets. A discretionary distribution is at the trustee\'s discretion under the trust instrument and may come from either pool depending on the terms.',
      },
      {
        type: 'h2',
        text: 'The Journal Entry for an Income Distribution',
      },
      {
        type: 'p',
        text: 'If you are distributing $5,000 from accumulated income to an income beneficiary, the entry is:',
      },
      {
        type: 'code',
        text: 'Debit:  Distributions — Income          $5,000\nCredit: Cash — Income                   $5,000',
      },
      {
        type: 'p',
        text: 'The debit hits your income distribution account (a contra-equity type account in the income pool), and the credit reduces the cash in your income pool. Both sides of the entry are in the income category.',
      },
      {
        type: 'h2',
        text: 'The Journal Entry for a Principal Distribution',
      },
      {
        type: 'p',
        text: 'If you are distributing $20,000 from principal — for example, a discretionary distribution of corpus to a remainder beneficiary — the entry is:',
      },
      {
        type: 'code',
        text: 'Debit:  Distributions — Principal        $20,000\nCredit: Cash — Principal                 $20,000',
      },
      {
        type: 'h2',
        text: 'What Belongs in the Memo',
      },
      {
        type: 'p',
        text: 'Every distribution entry should include: the beneficiary\'s name, the distribution type (income/principal/discretionary), the payment method and reference number, and the purpose or authority under the trust instrument. This information is essential for the annual accounting and for K-1 preparation.',
      },
      {
        type: 'h2',
        text: 'Supporting the Entry with Documentation',
      },
      {
        type: 'p',
        text: 'The journal entry alone is not sufficient. You should also retain the check or wire confirmation, a distribution letter to the beneficiary confirming the amount and character of the distribution, and any co-trustee approval if required by the trust instrument.',
      },
      {
        type: 'p',
        text: 'If the distribution is discretionary, document the trustee\'s reasoning. Courts evaluating a challenge to a trustee\'s distribution decisions look for evidence that the trustee considered the relevant factors — health, support, maintenance, education, and the interests of other beneficiaries — at the time of the decision.',
      },
    ],
  },
  'documents-trustee-should-keep': {
    title: 'What Documents Should a Trustee Keep on File',
    date: 'March 14, 2026',
    readTime: '7 min read',
    category: 'Record-Keeping',
    body: [
      {
        type: 'p',
        text: 'Trustees are frequently told to "keep good records" without much specificity about what that actually means. The following is a complete breakdown organized by category — with guidance on retention periods where applicable.',
      },
      {
        type: 'h2',
        text: 'Trust Instrument and Amendments',
      },
      {
        type: 'p',
        text: 'The original signed trust agreement and every amendment must be retained permanently. These are the governing documents for every decision you make. If you are serving as successor trustee, obtain the originals or certified copies from the prior trustee or the drafting attorney.',
      },
      {
        type: 'p',
        text: 'Also retain any letter of wishes, statement of intent, or informal guidance from the settlor if such documents exist. They are not legally binding in most jurisdictions but may be relevant context in a dispute.',
      },
      {
        type: 'h2',
        text: 'Financial Records',
      },
      {
        type: 'p',
        text: 'Retain all bank and brokerage statements for every trust account — permanently, or at a minimum for the full duration of your service plus the applicable statute of limitations in your jurisdiction (typically 3-6 years after the trust terminates). The same applies to investment account statements, tax returns, and K-1s.',
      },
      {
        type: 'p',
        text: 'Keep all receipts for trust expenses, invoices from service providers, and documentation of any transactions involving trust assets. If an expense is ever challenged, you need to show not just that it was paid but that it was a legitimate trust expense.',
      },
      {
        type: 'h2',
        text: 'Asset Documentation',
      },
      {
        type: 'p',
        text: 'For each asset held in the trust, retain the documentation that establishes ownership and cost basis: deeds for real property, stock certificates or account statements showing purchase price and date, appraisals, vehicle titles, and entity formation documents for any LLC or partnership interests.',
      },
      {
        type: 'p',
        text: 'Cost basis documentation is particularly important. If a trust asset is eventually sold or distributed, the capital gain or loss calculation depends on the original cost basis and the date of acquisition. Without this documentation, you may be unable to accurately report the transaction.',
      },
      {
        type: 'h2',
        text: 'Distribution Records',
      },
      {
        type: 'p',
        text: 'Every distribution to a beneficiary should be documented with: the amount and date, the character of the distribution (income or principal), the payment method and reference number, a copy of the distribution letter or check, and evidence of receipt by the beneficiary when available.',
      },
      {
        type: 'h2',
        text: 'Communications',
      },
      {
        type: 'p',
        text: 'Retain significant correspondence with beneficiaries, co-trustees, attorneys, accountants, and other advisors. "Significant" means anything that documents a decision, a demand, a disclosure, or a dispute. You do not need to keep every routine email, but you should keep anything that could be relevant if your administration is ever challenged.',
      },
      {
        type: 'h2',
        text: 'Annual Accountings',
      },
      {
        type: 'p',
        text: 'Retain each annual accounting you have prepared, together with evidence of its delivery to beneficiaries (a signed receipt, certified mail confirmation, or email with delivery confirmation). If beneficiaries have signed approvals or releases, those are particularly valuable and should be kept permanently.',
      },
    ],
  },
  'trust-data-should-not-live-in-cloud': {
    title: 'Why Your Trust Data Should Not Live in a Cloud Application',
    date: 'February 28, 2026',
    readTime: '5 min read',
    category: 'Privacy & Security',
    body: [
      {
        type: 'p',
        text: 'Most software marketed to trustees today is cloud-based. You log in through a browser, your data is stored on the vendor\'s servers, and you access it over the internet. This model is convenient, but it comes with a set of risks that are particularly consequential for trust administration.',
      },
      {
        type: 'h2',
        text: 'The Data Is Not Yours Alone',
      },
      {
        type: 'p',
        text: 'When your trust data lives in a cloud application, it is physically stored on infrastructure controlled by a third party. The vendor may have strong security practices, but they also have employees who can access data for support purposes, legal obligations to respond to subpoenas, and exposure to data breaches.',
      },
      {
        type: 'p',
        text: 'Trust data is particularly sensitive. It typically includes beneficiary names, social security numbers, financial account details, asset values, and family relationship information. A breach of this data does not just harm you — it harms every beneficiary whose information was stored in the system.',
      },
      {
        type: 'h2',
        text: 'Your Duty of Confidentiality',
      },
      {
        type: 'p',
        text: 'Trustees have a fiduciary duty to keep trust information confidential. While this duty is primarily understood in terms of disclosure to unauthorized parties, it extends to the systems used to store and process trust information. Putting beneficiary financial data into a cloud system your engagement letter did not disclose raises legitimate questions about whether you have met that standard.',
      },
      {
        type: 'h2',
        text: 'Vendor Risk',
      },
      {
        type: 'p',
        text: 'Cloud software vendors go out of business, get acquired, change their terms of service, and raise prices. If your trust administration software shuts down, what happens to your data? If it is acquired and the new owner changes the privacy policy, you may have limited recourse.',
      },
      {
        type: 'p',
        text: 'A local-first application eliminates vendor risk for the data itself. The software may stop being updated, but the data remains on your machine in an open format you can access independently.',
      },
      {
        type: 'h2',
        text: 'What Local-First Actually Means',
      },
      {
        type: 'p',
        text: 'A local-first application stores all data on your own machine in an encrypted database. There is no cloud sync, no remote server, and no third party with access to the data. The application may connect to the internet for limited purposes — license validation, software updates — but the trust data itself never leaves your machine.',
      },
      {
        type: 'p',
        text: 'This is not a privacy marketing claim. It is an architectural reality. When there is no mechanism for data to be transmitted, no amount of policy changes or vendor decisions can change that.',
      },
    ],
  },
  'trustee-annual-accounting-what-to-include': {
    title: 'The Trustee\'s Annual Accounting: What to Include and When to File',
    date: 'February 12, 2026',
    readTime: '9 min read',
    category: 'Compliance',
    body: [
      {
        type: 'p',
        text: 'The annual accounting is one of the most important duties a trustee has — and one of the most frequently misunderstood. It is not simply a summary of account balances. It is a formal fiduciary accounting that documents every significant financial event in the trust during the year.',
      },
      {
        type: 'h2',
        text: 'When Is an Annual Accounting Required',
      },
      {
        type: 'p',
        text: 'Most trust instruments require an annual accounting. In the absence of a trust instrument requirement, most state trust statutes also impose an accounting obligation — typically annually to current beneficiaries. Some states require court-filed accountings in specific circumstances.',
      },
      {
        type: 'p',
        text: 'The requirement to provide an accounting is generally owed to the current income beneficiaries and, in some cases, to remainder beneficiaries who have a vested interest. Review your trust instrument and applicable state law to determine exactly who must receive an accounting and on what schedule.',
      },
      {
        type: 'h2',
        text: 'What the Accounting Must Show',
      },
      {
        type: 'p',
        text: 'A complete fiduciary accounting includes separate statements for the principal account and the income account, each showing: beginning balance, receipts during the period (itemized), disbursements during the period (itemized), and ending balance.',
      },
      {
        type: 'p',
        text: 'It also typically includes: a schedule of assets at beginning and end of period, a schedule of distributions made to each beneficiary, trustee compensation paid, and any gains or losses on the sale of trust assets.',
      },
      {
        type: 'h2',
        text: 'The ACTEC Format',
      },
      {
        type: 'p',
        text: 'The American College of Trust and Estate Counsel (ACTEC) has developed a model format for fiduciary accountings that is widely used by estate attorneys and is the basis for court accounting requirements in many states. An ACTEC-format accounting presents the principal and income accounts separately, itemizes all receipts and disbursements, and includes a reconciliation to the asset schedule.',
      },
      {
        type: 'p',
        text: 'Some states — California, New York, and Florida among them — have their own mandatory accounting formats for court filings that differ somewhat from the ACTEC model. If you may need to file an accounting with a court, verify which format is required in your jurisdiction.',
      },
      {
        type: 'h2',
        text: 'Getting Beneficiary Approval',
      },
      {
        type: 'p',
        text: 'In most states, a trustee can seek a beneficiary\'s written approval of an accounting, which — if signed — generally starts the statute of limitations running on any claims related to the period covered. This is one of the most practical protections available to a trustee.',
      },
      {
        type: 'p',
        text: 'A beneficiary\'s approval does not waive claims for fraud or breach of a higher duty that was not disclosed in the accounting. The accounting must be accurate and complete for the approval to have protective effect.',
      },
      {
        type: 'h2',
        text: 'Practical Record-Keeping Requirements',
      },
      {
        type: 'p',
        text: 'You cannot produce a compliant annual accounting if your records do not maintain the principal/income distinction throughout the year. Every receipt and disbursement must be allocated to the correct pool at the time it is recorded — not reconstructed after the fact.',
      },
      {
        type: 'p',
        text: 'This is why purpose-built fiduciary accounting software matters. A system that enforces the principal/income separation at the transaction level makes the annual accounting a straightforward report generation task rather than a reconstruction exercise.',
      },
    ],
  },
};

export default function BlogPostPage({ params }) {
  const meta = posts.find(p => p.slug === params.slug);
  const content = postContent[params.slug];

  if (!meta || !content) {
    notFound();
  }

  const categoryColors = {
    'Fiduciary Accounting': { bg: 'var(--accent-dim)', color: 'var(--accent)', border: 'var(--accent-border)' },
    'Record-Keeping': { bg: 'rgba(139,92,246,0.1)', color: '#a78bfa', border: 'rgba(139,92,246,0.25)' },
    'Privacy & Security': { bg: 'rgba(245,158,11,0.1)', color: 'var(--warn)', border: 'rgba(245,158,11,0.25)' },
    'Compliance': { bg: 'rgba(34,197,94,0.1)', color: 'var(--success)', border: 'rgba(34,197,94,0.25)' },
  };

  const colors = categoryColors[meta.category] || categoryColors['Fiduciary Accounting'];

  const otherPosts = posts.filter(p => p.slug !== params.slug).slice(0, 3);

  return (
    <div>
      <div style={{ paddingTop: 60 }}>
        <div style={{ borderBottom: '1px solid var(--border)', padding: '80px 0 56px' }}>
          <div className="container">
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-3)', marginBottom: 32, textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{
                fontSize: 10, fontWeight: 700,
                padding: '3px 10px', borderRadius: 99,
                background: colors.bg, color: colors.color, border: '1px solid ' + colors.border,
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>{meta.category}</span>
              <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{meta.date}</span>
              <span style={{ fontSize: 13, color: 'var(--text-3)' }}>·</span>
              <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{meta.readTime}</span>
            </div>
            <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, maxWidth: 760 }}>
              {content.title}
            </h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 64, alignItems: 'start' }}>

            {/* Article body */}
            <article>
              {content.body.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={i} style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em', marginTop: 48, marginBottom: 16, color: 'var(--text-1)', lineHeight: 1.2 }}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'code') {
                  return (
                    <pre key={i} style={{
                      background: 'var(--bg-surface-2)',
                      border: '1px solid var(--border-md)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px 20px',
                      fontFamily: 'Courier New, monospace',
                      fontSize: 13,
                      color: 'var(--accent)',
                      overflowX: 'auto',
                      margin: '24px 0',
                      lineHeight: 1.7,
                    }}>{block.text}</pre>
                  );
                }
                return (
                  <p key={i} style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 20 }}>
                    {block.text}
                  </p>
                );
              })}

              <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  TrustArchive is fiduciary accounting software that runs entirely on your machine. No cloud, no data exposure. Built for trustees who take their records seriously.
                </p>
                <Link href="/pricing" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
                  <Shield size={14} /> Start a Free Trial
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 80 }}>
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-md)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                marginBottom: 24,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>More Articles</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {otherPosts.map(post => (
                    <Link key={post.slug} href={'/blog/' + post.slug} style={{ textDecoration: 'none' }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.4, marginBottom: 4 }}>{post.title}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{post.readTime}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'var(--accent-dim)',
                border: '1px solid var(--accent-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-1)', marginBottom: 8 }}>TrustArchive</div>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16 }}>
                  Fiduciary accounting software that runs entirely on your machine. 30-day free trial.
                </p>
                <Link href="/pricing" style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                  See plans &rarr;
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
