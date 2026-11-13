import {
  Building2, Briefcase, BookOpen, Shield, RefreshCw, FileCheck, Users, Upload, TrendingUp, CheckSquare,
} from 'lucide-react';
import AudienceLanding from '../../components/AudienceLanding';

export const metadata = {
  title: 'For Firms & Family Offices — TrustArchive',
  description: 'Trust administration software for estate law firms, CPA firms, professional trustees, and family offices. Fiduciary reporting, role-based access, and encrypted firm sync. See the demo.',
};

export default function FirmsPage() {
  return (
    <AudienceLanding
      audience="firm"
      hero={{
        tag: 'For Firms & Family Offices',
        tagIcon: <Building2 size={11} />,
        title: 'Trust Administration for Your Whole Practice.',
        sub: 'Every client trust isolated, every action on a defensible audit trail, and trust accountings on demand — with your team working from the same records and client data encrypted on your own machines.',
        primary: { label: 'See the Demo', href: '/demo?for=firm' },
        secondary: { label: 'Talk to Us', href: '/contact' },
        note: 'Per-seat pricing · Up to 25 trusts on Professional, unlimited on Practice · End-to-end encrypted firm sync',
      }}
      personas={{
        title: 'Built for practices that administer trusts for clients',
        items: [
          {
            icon: <Briefcase size={18} />,
            title: 'Estate law & CPA firms',
            desc: 'Attorneys and CPAs serving as trustee or co-trustee across active client files, who need formal accountings and can’t put client data in an undisclosed SaaS platform.',
            scenario: 'David serves as trustee for fourteen client trusts. He needed court-ready reports and complete isolation between clients — without moving client data to a vendor’s cloud.',
          },
          {
            icon: <BookOpen size={18} />,
            title: 'Trust companies & professional trustees',
            desc: 'Dozens to hundreds of trusts, a team of attorneys and paralegals, and compliance obligations that demand role separation and a record of every action.',
            scenario: 'Carson and Associates runs 60 active trusts across four attorneys and two paralegals, and needed to tell clients with confidence where their data lives.',
          },
          {
            icon: <Shield size={18} />,
            title: 'Family offices',
            desc: 'Wealth across multiple trusts and family branches, with a controller or CFO who needs the consolidated picture and each trust’s books kept separate.',
            scenario: 'The Whitmore family office manages eight trusts across three generations and needs family-wide reporting with trust-level accountings.',
          },
        ],
      }}
      problems={{
        title: 'Replace the spreadsheets — and the liability questions',
        items: [
          { problem: 'Client files in spreadsheets that can’t produce a formal accounting', answer: 'Trust accounting statements now; ACTEC-format court accountings on the roadmap' },
          { problem: 'Client financial data sitting in a vendor’s cloud', answer: 'Data stays encrypted on your firm’s machines; sync is end-to-end encrypted' },
          { problem: 'Staff need access, but not to everything', answer: 'Operator profiles with role-based access across trustee, attorney, and staff' },
          { problem: 'Hours lost keying in statements', answer: 'Bank statement import, including PDF statements via OCR' },
          { problem: 'Defending your records when questioned', answer: 'Cryptographic audit trail on every action, exportable for filings' },
        ],
      }}
      features={{
        title: 'Built for the way firms administer trusts',
        items: [
          { icon: <RefreshCw size={18} />, title: 'Encrypted firm sync', desc: 'Your team works from the same records. Data is encrypted on each device before it leaves.' },
          { icon: <FileCheck size={18} />, title: 'Fiduciary reporting', desc: 'Trust accounting statements, beneficiary distribution reports, and trial balance. ACTEC formal accounts are on the roadmap.' },
          { icon: <Users size={18} />, title: 'Roles & seats', desc: 'Operator profiles for trustees, attorneys, co-trustees, and staff. Add seats as your team grows.' },
          { icon: <Upload size={18} />, title: 'Faster data entry', desc: 'Import CSV, OFX, QFX, and QBO files, plus PDF bank statement OCR, with rules that sort transactions.' },
          { icon: <TrendingUp size={18} />, title: 'Securities & entities', desc: 'Lot-level securities tracking (FIFO, LIFO, specific ID) and entity interests with a basis ledger.' },
          { icon: <CheckSquare size={18} />, title: 'Distribution approvals', desc: 'Co-trustee and attorney sign-off before a distribution posts, with a full approval record.', roadmap: true },
        ],
      }}
      finalCta={{
        title: 'See it with your own trusts in mind',
        sub: 'Tell us about your practice, watch the demo, and book a follow-up call to size the right plan and seats.',
      }}
      crossLink={{ text: 'Managing your own trust or a few on your own?', label: 'See TrustArchive for individuals →', href: '/individuals' }}
    />
  );
}
