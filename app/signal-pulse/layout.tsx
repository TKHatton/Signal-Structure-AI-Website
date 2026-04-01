import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signal Pulse | Signal & Structure AI',
  description:
    'Check how visible your business is to AI systems like ChatGPT, Claude, and Gemini. Free instant results.',
};

export default function SignalPulseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
