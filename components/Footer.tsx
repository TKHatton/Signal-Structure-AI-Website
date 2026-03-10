import Link from 'next/link';
import SignalDot from './SignalDot';
import GridTexture from './GridTexture';
import { COMPANY_NAME, TAGLINE, LOCATION, EMAIL, LINKEDIN, BOOKING_URL } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'Our Story' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-this-matters', label: 'Why This Matters' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white mt-24">
      <GridTexture opacity={0.04} />

      <div className="relative z-10 max-w-content mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-white rounded flex items-center justify-center font-display text-white text-lg">
                S&S
              </div>
              <span className="font-body font-semibold">{COMPANY_NAME}</span>
            </div>
            <p className="text-white/70 font-body text-sm">{TAGLINE}</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-body font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-copper transition-colors font-body text-sm flex items-center gap-2"
                  >
                    <SignalDot size={4} />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper hover:text-copper-light transition-colors font-body text-sm font-medium flex items-center gap-2 mt-4"
                >
                  <SignalDot size={4} />
                  Book a Signal Check
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-body font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/70 font-body text-sm">
              <li className="flex items-start gap-2">
                <SignalDot size={4} className="mt-1.5" />
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-start gap-2">
                <SignalDot size={4} className="mt-1.5" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-copper transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <SignalDot size={4} className="mt-1.5" />
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-body">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <p>Signal Score™ is a trademark of {COMPANY_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
