import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WebMcpProvider from '@/components/WebMcpProvider';
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
  metadataBase: new URL('https://signalstructure.ai'),
  title: `${COMPANY_NAME} | ${TAGLINE}`,
  description: 'Signal & Structure AI helps businesses be found, be accurate, and be recommended in AI-generated results. We monitor 5 AI platforms (ChatGPT, Claude, Gemini, Perplexity, and Copilot), show you what they say about your business, and fix what is wrong.',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: 'We monitor how AI describes your business across 5 AI platforms, show you what they say, and fix what is wrong.',
    url: '/',
    siteName: COMPANY_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: 'We monitor how AI describes your business across 5 AI platforms, show you what they say, and fix what is wrong.',
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
        <WebMcpProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
