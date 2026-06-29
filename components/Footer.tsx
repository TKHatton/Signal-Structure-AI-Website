import Link from 'next/link';
import Image from 'next/image';
import GridTexture from './GridTexture';
import { COMPANY_NAME, EMAIL } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white mt-24">
      <GridTexture opacity={0.04} />

      <div className="relative z-10 max-w-content mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
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
            <p className="text-white/70 font-body text-sm max-w-xs leading-relaxed">
              Getting your business found, and described correctly, by AI.
            </p>
          </div>

          {/* Start Here */}
          <div>
            <h3 className="font-body font-semibold text-copper text-sm mb-4">Start Here</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/signal-score-report" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  Signal Score
                </Link>
              </li>
              <li>
                <Link href="/signal-pulse" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  Signal Pulse
                </Link>
              </li>
              <li>
                <Link href="/signal-pulse/quiz" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-body font-semibold text-copper text-sm mb-4">Learn</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/resources/the-invisible-business" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  White Paper
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Work With Me */}
          <div>
            <h3 className="font-body font-semibold text-copper text-sm mb-4">Work With Me</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/signal-watch" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  Signal Watch
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact block */}
          <div>
            <ul className="space-y-2.5 pt-0 lg:pt-[2.125rem]">
              <li>
                <a href={`mailto:${EMAIL}`} className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  {EMAIL}
                </a>
              </li>
              <li>
                <Link href="/" className="text-white/60 hover:text-copper transition-colors font-body text-sm">
                  signalstructure.ai
                </Link>
              </li>
            </ul>
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
