import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import { BOOKING_URL, EMAIL, REVIEW_BOOKING_URL, PERSONAL_LINKEDIN } from '@/lib/constants';
import { withSocial } from '@/lib/seo';

export const metadata = withSocial({
  title: 'Contact | Signal & Structure AI',
  description: 'Get in touch with Signal & Structure AI. Book First Signal, a free 20-minute AI check, send an email, or message Lenise on LinkedIn.',
  alternates: { canonical: '/contact' },
});

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://signalstructure.ai/contact#page',
      url: 'https://signalstructure.ai/contact',
      name: 'Contact Signal & Structure AI',
      about: { '@id': 'https://signalstructure.ai/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://signalstructure.ai/contact' },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
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
            <FadeIn delay={0.05} className="sm:col-span-2">
              <div className="bg-white rounded-card shadow-card p-8 flex flex-col h-full">
                <SectionLabel>BOOK A CALL</SectionLabel>
                <h2 className="font-display text-2xl text-navy mb-3 mt-2">Talk it through with Lenise</h2>
                <p className="font-body text-warmgray leading-relaxed mb-6 flex-1">
                  Curious about AEO, or wondering whether AI tools recommend you? Book First Signal, a free 20-minute AI check. Bring the one question a new customer asks, and we'll see who AI names. Already have your Signal Score? Book your Signal Score Review.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href={BOOKING_URL} variant="primary">
                    Book First Signal (free)
                  </Button>
                  <Button href={REVIEW_BOOKING_URL} variant="outline">
                    Book a Signal Score Review
                  </Button>
                </div>
              </div>
            </FadeIn>
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
                  Prefer LinkedIn? Connect with Lenise directly and send a message.
                </p>
                <a
                  href={PERSONAL_LINKEDIN}
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
