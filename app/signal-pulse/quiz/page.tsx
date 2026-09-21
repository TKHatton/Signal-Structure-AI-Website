import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import GridTexture from '@/components/GridTexture';
import PulseQuiz from '@/components/pulse/PulseQuiz';
import { Metadata } from 'next';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Signal Pulse Quiz | Signal & Structure AI',
  description:
    'Can AI find your business? Take this 60-second quiz to find out. No URL needed.',
  alternates: {
    canonical: '/signal-pulse/quiz',
  },
});

const quizSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://signalstructure.ai/signal-pulse/quiz#page',
      url: 'https://signalstructure.ai/signal-pulse/quiz',
      name: 'Signal Pulse Quiz',
      isPartOf: { '@id': 'https://signalstructure.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
        { '@type': 'ListItem', position: 2, name: 'Signal Pulse', item: 'https://signalstructure.ai/signal-pulse' },
        { '@type': 'ListItem', position: 3, name: 'Quiz', item: 'https://signalstructure.ai/signal-pulse/quiz' },
      ],
    },
  ],
};

export default function SignalPulseQuizPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">Signal Pulse Quiz</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white mb-3">
              Can AI find your business?
            </h1>
            <p className="font-body text-base text-white/70 max-w-2xl">
              Five questions. Sixty seconds. No URL needed.
              Find out where you stand.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section-padding bg-stone">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <PulseQuiz />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
