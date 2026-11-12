import {
  User, Users, Briefcase, BookOpen, Upload, FileText, Bot, Shield, CheckSquare,
} from 'lucide-react';
import AudienceLanding from '../../components/AudienceLanding';

export const metadata = {
  title: 'For Individual Trustees & Solo Practitioners — TrustArchive',
  description: 'Private trust accounting for family trustees, private trustees, and solo attorneys or CPAs. Runs entirely on your computer. Join the waitlist.',
};

export default function IndividualsPage() {
  return (
    <AudienceLanding
      audience="individual"
      hero={{
        tag: 'For Individuals & Solo Practitioners',
        tagIcon: <User size={11} />,
        title: 'Do This Right. Without an Accountant’s Software.',
        sub: 'You were named trustee, or you manage a few trusts on your own. TrustArchive gives you proper fiduciary records, plain-English answers, and reports your attorney and beneficiaries can read — all private, on your own computer.',
        primary: { label: 'Join the Waitlist', href: '/waitlist?tier=individual' },
        secondary: { label: 'See the Demo', href: '/demo?for=individual' },
        note: '30-day free trial at launch · Runs fully offline · No account to create',
      }}
      personas={{
        title: 'Built for people who do this themselves',
        items: [
          {
            icon: <Users size={18} />,
            title: 'Family trustee',
            desc: 'A parent, sibling, or spouse named as trustee — no accounting background, but a real obligation to record distributions, keep documents, and show your work.',
            scenario: 'Margaret was named sole trustee of her late mother’s trust: three beneficiaries, a rental property, and annual distributions. Her attorney told her to keep good records.',
          },
          {
            icon: <BookOpen size={18} />,
            title: 'Private trustee',
            desc: 'You look after a handful of trusts — for family or friends — and need each one kept separate, accurate, and ready to report on.',
          },
          {
            icon: <Briefcase size={18} />,
            title: 'Solo attorney or CPA',
            desc: 'You serve as trustee or advisor for a few client trusts on your own. You need defensible records without paying for firm-scale software.',
          },
        ],
      }}
      problems={{
        title: 'From “am I doing this right?” to records you can stand behind',
        items: [
          { problem: 'A spreadsheet that mixes principal and income', answer: 'Fiduciary ledger that keeps principal and income separate automatically' },
          { problem: 'Typing in every bank transaction', answer: 'Import bank statements (CSV, OFX, QFX, QBO) and let rules sort them' },
          { problem: 'Beneficiaries asking for an accounting', answer: 'Trust accounting statements and distribution reports in a few clicks' },
          { problem: 'Worrying about missed deadlines', answer: 'Obligations tracking with due dates and overdue alerts' },
          { problem: 'Family financial data in someone else’s cloud', answer: 'Encrypted on your computer. Works offline. Nothing is sent anywhere.' },
        ],
      }}
      features={{
        title: 'Everything one trustee needs',
        items: [
          { icon: <BookOpen size={18} />, title: 'Fiduciary accounting', desc: 'Double-entry ledger with principal and income separation, distributions, and period close.' },
          { icon: <Upload size={18} />, title: 'Bank statement import', desc: 'Bring in CSV, OFX, QFX, and QBO files. Review in a staging inbox before anything posts.' },
          { icon: <FileText size={18} />, title: 'Documents & letters', desc: 'Keep the trust deed and correspondence in one vault. Generate distribution letters from templates.' },
          { icon: <Bot size={18} />, title: 'Private AI assistant', desc: 'Ask about balances, distributions, and obligations in plain English. Runs on your computer, fully offline.' },
          { icon: <Shield size={18} />, title: 'Cryptographic audit trail', desc: 'Every change is recorded in a tamper-evident log you can export if anyone questions your records.' },
          { icon: <CheckSquare size={18} />, title: 'Rules & obligations', desc: 'Auto-sort recurring transactions and track every due date the trust requires.' },
        ],
      }}
      finalCta={{
        title: 'Be ready the day it launches',
        sub: 'Join the waitlist and we’ll email you the moment TrustArchive is available — with a 30-day free trial.',
      }}
      crossLink={{ text: 'Part of a firm or family office?', label: 'See TrustArchive for firms →', href: '/firms' }}
    />
  );
}
