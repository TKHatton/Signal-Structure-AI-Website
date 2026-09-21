import { Metadata } from 'next';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Signal Pulse | Signal & Structure AI',
  description:
    'Check how visible your business is to AI systems like ChatGPT, Claude, and Gemini. Free instant results.',
  alternates: {
    canonical: '/signal-pulse',
  },
});

export default function SignalPulseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
