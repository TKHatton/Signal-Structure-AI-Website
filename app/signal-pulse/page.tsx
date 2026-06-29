'use client';

import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import PulseForm from '@/components/pulse/PulseForm';
import PulseResultCard, { PulseResultData } from '@/components/pulse/PulseResultCard';
import PulseEmailCapture from '@/components/pulse/PulseEmailCapture';
import { API_URL } from '@/lib/constants';

export default function SignalPulsePage() {
  const [result, setResult] = useState<PulseResultData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (businessName: string, url: string) => {
    setIsLoading(true);
    setError('');
    setResult(null);

    const body = JSON.stringify({ business_name: businessName, url });
    const opts = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body };

    try {
      let res = await fetch(`${API_URL}/api/pulse-check`, opts);

      // Railway free tier sleeps between requests — one automatic retry on cold-start 502
      if (res.status === 502) {
        await new Promise((r) => setTimeout(r, 5000));
        res = await fetch(`${API_URL}/api/pulse-check`, opts);
      }

      if (res.status === 429) {
        setError('You have checked several sites recently. Try again in about an hour.');
        return;
      }

      if (res.status === 502) {
        setError('We could not reach that URL. Double-check the address and try again.');
        return;
      }

      if (!res.ok) {
        setError('Something went wrong on our end. Please try again later.');
        return;
      }

      const data = await res.json();
      setResult(data);
    } catch {
      setError('Could not connect to our server. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  // JSON-LD schemas for this page
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://signalstructure.ai/#organization',
    name: 'Signal & Structure AI',
    url: 'https://signalstructure.ai',
    sameAs: [
      'https://www.linkedin.com/company/signal-structure-ai',
      'https://share.google/5Ci2LRrbmjYiQpkCp',
    ],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Signal Pulse Checker',
    description:
      'Check how visible your business is to AI systems like ChatGPT, Claude, and Gemini.',
    url: 'https://signalstructure.ai/signal-pulse',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: { '@id': 'https://signalstructure.ai/#organization' },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-navy text-white py-20 sm:py-24">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">Signal Pulse</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white mb-4">
              A quick vital sign check for your online presence.
            </h1>
            <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl">
              Find out if AI systems like ChatGPT, Claude, and Gemini
              can find your business. Takes 10 seconds. No account needed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Result Section */}
      <section className="section-padding bg-stone">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
              <PulseForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          </FadeIn>

          {error && (
            <div className="mt-6 bg-status-red/5 border border-status-red/20 rounded-lg p-4">
              <p className="font-body text-sm text-status-red">{error}</p>
            </div>
          )}

          {result && (
            <div className="mt-8">
              <PulseResultCard result={result} />
              <PulseEmailCapture result={result} />
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-content mx-auto text-center">
          <FadeIn>
            <SectionLabel>Ready for the Full Picture?</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              The Signal Pulse is a vital sign check.
            </h2>
            <p className="font-body text-warmgray max-w-2xl mx-auto mb-8">
              It tells you something is off. The Signal Score Report tells you
              exactly what and why across every major AI platform, with a prioritized
              list of what to fix first.
            </p>
            <Button href="/signal-score-report" variant="primary">
              See the Signal Score Report
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
