import FadeIn from '@/components/FadeIn';
import SectionLabel from '@/components/SectionLabel';
import GridTexture from '@/components/GridTexture';
import PulseQuiz from '@/components/pulse/PulseQuiz';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signal Pulse Quiz | Signal & Structure AI',
  description:
    'Can AI find your business? Take this 60-second quiz to find out. No URL needed.',
};

export default function SignalPulseQuizPage() {
  return (
    <main>
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
