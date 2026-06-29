import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { EMAIL, LINKEDIN } from '@/lib/constants';

export const metadata = {
  title: 'Contact | Signal & Structure AI',
  description: 'Get in touch with Signal & Structure AI. Email or send a LinkedIn message to connect.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">CONTACT</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Two ways to reach Lenise.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact options */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="font-body text-lg text-warmgray mb-12 text-center">
              If you have a question about your Signal Score, want to talk about what AI is saying about your business, or want to start working together, here is how.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 flex flex-col h-full">
                <SectionLabel>EMAIL</SectionLabel>
                <h2 className="font-display text-2xl text-navy mb-3 mt-2">Send an email</h2>
                <p className="font-body text-warmgray leading-relaxed mb-6 flex-1">
                  Best for detailed questions, service inquiries, or starting a conversation about working together.
                </p>
                <Button href={`mailto:${EMAIL}`} variant="primary">
                  {EMAIL}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-8 flex flex-col h-full">
                <SectionLabel>LINKEDIN</SectionLabel>
                <h2 className="font-display text-2xl text-navy mb-3 mt-2">Send a DM</h2>
                <p className="font-body text-warmgray leading-relaxed mb-6 flex-1">
                  Prefer LinkedIn? Connect with Signal &amp; Structure AI and send a direct message.
                </p>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-body font-semibold text-white bg-navy hover:bg-navy-light transition-colors py-3 px-6 rounded-button text-sm"
                >
                  Message on LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
