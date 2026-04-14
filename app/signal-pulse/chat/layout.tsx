import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signal Pulse Chat | Signal & Structure AI',
  description: 'Interactive AI discoverability chat. Explore how AI platforms see your business.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/signal-pulse/chat',
  },
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
