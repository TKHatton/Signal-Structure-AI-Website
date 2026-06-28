import Link from 'next/link';
import Image from 'next/image';
import GridTexture from './GridTexture';
import { COMPANY_NAME, TAGLINE, ADDRESS, EMAIL, LINKEDIN, SKOOL_URL } from '@/lib/constants';

const columns = [
  {
    heading: 'Start here',
    links: [
      { href: '/services', label: 'The Community' },
      { href: '/signal-score-report', label: 'Signal Score Report' },
      { href: '/signal-pulse', label: 'Free Signal Pulse' },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { href: '/signal-watch', label: 'Signal Watch' },
      { href: '/client-knowledge', label: 'Client Knowledge' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'Our Story' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/speaking', label: 'Speaking' },
    ],
  },
  {
    heading: 'More',
    links: [
      { href: '/resources', label: 'Resources' },
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white mt-24">
      <GridTexture opacity={0.04} />

      <div className="relative z-10 max-w-content mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-dark.png"
                alt="Signal & Structure AI"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-body font-semibold">{COMPANY_NAME}</span>
            </div>
            <p className="text-white/70 font-body text-sm mb-6 max-w-xs">{TAGLINE}</p>
            <ul className="space-y-2 text-white/70 font-body text-sm">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-copper transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">
                  Skool community
                </a>
              </li>
              <li className="text-white/50">{ADDRESS}</li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-body font-semibold text-white/90 text-sm mb-4">{col.heading}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-copper transition-colors font-body text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-body">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-copper transition-colors">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-copper transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
