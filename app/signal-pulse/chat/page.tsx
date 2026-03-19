'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import GridTexture from '@/components/GridTexture';
import PulseChat from '@/components/pulse/PulseChat';

function ChatContent() {
  const searchParams = useSearchParams();
  const businessName = searchParams.get('business') || '';
  const url = searchParams.get('url') || '';
  const signalKey = searchParams.get('signal') || undefined;

  if (!businessName || !url) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <p className="font-body text-warmgray">
          Missing business information. Please start from the{' '}
          <a href="/signal-pulse" className="text-copper hover:underline">
            Signal Pulse checker
          </a>{' '}
          first.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <PulseChat
          businessName={businessName}
          url={url}
          signalKey={signalKey}
        />
      </FadeIn>
    </div>
  );
}

export default function SignalPulseChatPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">Signal Pulse Advisor</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white mb-3">
              Let us walk through your results together.
            </h1>
            <p className="font-body text-base text-white/70 max-w-2xl">
              A quick conversation about what we found and what it means for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Chat Section */}
      <section className="section-padding bg-stone">
        <Suspense
          fallback={
            <div className="max-w-2xl mx-auto text-center py-12">
              <p className="font-body text-warmgray">Loading conversation...</p>
            </div>
          }
        >
          <ChatContent />
        </Suspense>
      </section>
    </main>
  );
}
