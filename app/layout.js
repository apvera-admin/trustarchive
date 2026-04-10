import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'TrustArchive — Private Trust Administration',
  description: 'Fiduciary software that runs entirely on your machine. No cloud. No data exposure. Complete control over your trust data, accounting, and audit trail.',
  keywords: 'trust administration, fiduciary software, private trust management, offline trust software, local trust accounting',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
