import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';
import { COMPANY_NAME, TAGLINE } from '@/lib/constants';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${TAGLINE}`,
  description: 'Signal & Structure AI helps businesses be found, be accurate, and be recommended in AI-generated results. Optimize your presence in ChatGPT, Perplexity, Claude, and other AI systems with our proprietary Signal Score™ methodology.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: 'Optimize your business presence in AI-generated results with our proprietary Signal Score™ methodology.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body className="font-body">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
