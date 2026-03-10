'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { BOOKING_URL, COMPANY_NAME } from '@/lib/constants';

const mainLinks = [
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

const aboutLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-this-matters', label: 'Why This Matters' },
  { href: '/our-approach', label: 'Our Approach' },
];

const allLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-this-matters', label: 'Why This Matters' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isAboutActive = aboutLinks.some((link) => pathname === link.href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-navy rounded flex items-center justify-center font-display text-navy text-lg group-hover:bg-navy group-hover:text-white transition-colors duration-300">
              S&S
            </div>
            <span className="font-body font-semibold text-navy hidden sm:block">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-medium text-sm relative transition-colors duration-300 ${
                    isActive ? 'text-copper' : 'text-navy hover:text-copper'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-copper" />
                  )}
                </Link>
              );
            })}

            {/* About Dropdown */}
            <div ref={aboutRef} className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`font-body font-medium text-sm relative transition-colors duration-300 flex items-center gap-1 ${
                  isAboutActive ? 'text-copper' : 'text-navy hover:text-copper'
                }`}
              >
                About
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isAboutOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isAboutActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-copper" />
                )}
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-card shadow-card-hover border border-stone-dark py-2"
                  >
                    {aboutLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-4 py-2.5 font-body text-sm transition-colors ${
                            isActive
                              ? 'text-copper bg-stone'
                              : 'text-navy hover:text-copper hover:bg-stone'
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button href={BOOKING_URL} variant="primary" className="text-sm whitespace-nowrap">
              Book a Signal Check
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-navy hover:text-copper transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-body font-semibold text-navy">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-navy hover:text-copper transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {allLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-body font-medium text-lg py-2 border-b border-stone transition-colors ${
                        isActive ? 'text-copper' : 'text-navy hover:text-copper'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-4">
                  <Button href={BOOKING_URL} variant="primary" className="w-full text-center">
                    Book a Signal Check
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-navy/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-[72px]" />
    </>
  );
}
