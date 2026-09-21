import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import {
  BOOK_AMAZON_URL,
  BOOK_PRICE,
  BOOK_SITE_URL,
  BOOK_SUBTITLE,
  BOOK_TITLE,
  REPORT_PRICE,
} from '@/lib/constants';

const PAGE_URL = 'https://signalstructure.ai/book';

export const metadata = {
  title: 'The New Word of Mouth | Signal & Structure AI',
  description:
    'A business book about reputation. How Fama built reputation for 2,000 years, and how AI is its new voice. By Lenise Kenney. Paperback on Amazon.',
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'The New Word of Mouth, by Lenise Kenney',
    description:
      'Word of mouth never disappeared. It changed form. A business book about reputation in the age of AI.',
    url: PAGE_URL,
    type: 'book',
    images: ['/images/nwom-cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The New Word of Mouth, by Lenise Kenney',
    description:
      'Word of mouth never disappeared. It changed form. A business book about reputation in the age of AI.',
    images: ['/images/nwom-cover.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://signalstructure.ai' },
    { '@type': 'ListItem', position: 2, name: 'The New Word of Mouth', item: PAGE_URL },
  ],
};

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  '@id': PAGE_URL + '#book',
  name: BOOK_TITLE,
  alternateName: `${BOOK_TITLE}: ${BOOK_SUBTITLE}`,
  bookFormat: 'https://schema.org/Paperback',
  isbn: '9798234163769',
  inLanguage: 'en',
  url: PAGE_URL,
  image: 'https://signalstructure.ai/images/nwom-cover.jpg',
  description:
    'The New Word of Mouth follows reputation across more than 2,000 years, beginning with Fama, the ancient Roman embodiment of rumor and reputation, and tracing the forces that carried human opinion through oral culture, print, public relations, directories, reviews, search, and now AI.',
  numberOfPages: 22,
  author: {
    '@type': 'Person',
    '@id': 'https://signalstructure.ai/#lenise',
    name: 'Lenise Kenney',
    jobTitle: 'Founder, Signal & Structure AI',
  },
  offers: {
    '@type': 'Offer',
    price: '18.99',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: BOOK_AMAZON_URL,
  },
};

const forms = [
  { n: '01', t: 'Spoken', b: 'It was spoken.' },
  { n: '02', t: 'Written', b: 'Then words began to last.' },
  { n: '03', t: 'Printed', b: 'Then reputation traveled farther than the room.' },
  { n: '04', t: 'Promoted', b: 'Then businesses learned to shape the story.' },
  { n: '05', t: 'Reviewed', b: 'Then the crowd started talking back.' },
  { n: '06', t: 'Searched', b: 'Then machines began sorting the story.' },
];

const outcomes = [
  'See what AI already says about you.',
  'Recognize why answers go wrong.',
  'Understand the difference between being good and being findable.',
  'Recognize the pattern the next time technology changes.',
];

export default function BookPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />

      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-content mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-10 lg:gap-16 items-center">
            <FadeIn>
              <Image
                src="/images/nwom-cover.jpg"
                alt={`${BOOK_TITLE}: ${BOOK_SUBTITLE}, by Lenise Kenney`}
                width={1024}
                height={1536}
                priority
                className="w-full max-w-[280px] mx-auto lg:max-w-none rounded-lg shadow-2xl"
              />
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <SectionLabel variant="light">THE BOOK</SectionLabel>
              <h1 className="font-display text-4xl lg:text-6xl leading-[1.02] text-white tracking-tight mb-4 mt-2">
                {BOOK_TITLE}
              </h1>
              <p className="font-body text-lg lg:text-xl text-copper mb-6 leading-snug">
                {BOOK_SUBTITLE}
              </p>
              <p className="font-body text-white/80 leading-relaxed mb-4">
                Long before websites, search engines, reviews, or artificial intelligence,
                business depended on one person telling another whom to trust.
              </p>
              <p className="font-body text-white/80 leading-relaxed mb-8">
                That conversation never stopped. The medium kept changing.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button href={BOOK_AMAZON_URL} variant="primary" className="text-lg px-8 py-4">
                  Get the paperback, {BOOK_PRICE}
                </Button>
                <a
                  href={BOOK_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/90 hover:text-copper transition-colors text-base underline underline-offset-4 decoration-copper decoration-2"
                >
                  Or read more at newwordofmouth.fyi
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The six forms: the anti-fear spine of the book */}
      <section className="section-padding bg-stone">
        <div className="max-w-content mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <SectionLabel>THIS HAS HAPPENED BEFORE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Word of mouth never disappeared. It changed form.
            </h2>
            <p className="font-body text-warmgray text-lg max-w-2xl mx-auto">
              Six times businesses have had to learn a new way of being talked about.
              Six times the ones who moved early were fine. This is the seventh.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {forms.map((f) => (
              <FadeIn key={f.n}>
                <div className="bg-white rounded-card shadow-card p-6 h-full">
                  <div className="font-mono text-copper text-sm font-bold mb-3">{f.n}</div>
                  <h3 className="font-display text-2xl text-navy mb-2">{f.t}</h3>
                  <p className="font-body text-warmgray leading-relaxed">{f.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-display text-2xl sm:text-3xl text-navy leading-snug mb-3">
                And now it speaks.
              </p>
              <p className="font-body text-warmgray text-lg">
                Same human question. A new voice answering it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What this book is */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto px-6">
          <FadeIn>
            <SectionLabel>WHAT THIS BOOK IS</SectionLabel>
            <h2 className="font-display text-3xl text-navy mb-6 mt-2">
              A business book about reputation.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                Not an AI-tool manual. Not a collection of prompts. Not another prediction
                about what technology might do someday.
              </p>
              <p>
                {BOOK_TITLE} connects history, reputation, customer behavior, marketing,
                search, and artificial intelligence to explain a change businesses are
                already living through.
              </p>
              <p>
                It follows reputation across more than 2,000 years, beginning with Fama, the
                ancient Roman embodiment of rumor and reputation, and traces what carried
                human opinion through oral culture, print, public relations, directories,
                reviews, search, and now AI.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Fama */}
      <section className="relative bg-navy text-white section-padding overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-prose mx-auto px-6">
          <FadeIn>
            <SectionLabel variant="light">WHO IS FAMA</SectionLabel>
            <h2 className="font-display text-3xl text-white mb-6 mt-2">
              The Romans gave rumor a body.
            </h2>
            <div className="font-body text-white/80 leading-relaxed space-y-4">
              <p>
                More than 2,000 years ago, they called her Fama. She listened. She watched.
                She repeated what she heard. Sometimes accurately. Sometimes not.
              </p>
              <p>
                Once reputation begins traveling, the person or business being discussed no
                longer controls every version of the story. AI did not invent that problem.
                It gave it a new voice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The opportunity */}
      <section className="section-padding bg-stone">
        <div className="max-w-prose mx-auto px-6">
          <FadeIn>
            <SectionLabel>WHY THIS IS NOT A FEAR BOOK</SectionLabel>
            <h2 className="font-display text-3xl text-navy mb-6 mt-2">
              The opportunity is bigger than the problem.
            </h2>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
              <p>
                AI can leave a business out. It can get a business wrong. It can also
                introduce a business to a customer who might never have discovered it
                otherwise.
              </p>
              <p>
                That is why this is not a book about fearing AI. It is a book about
                understanding the system your reputation is entering, and moving before
                the decision gets made without you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's inside */}
      <section className="section-padding">
        <div className="max-w-content mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <SectionLabel>WHAT&rsquo;S INSIDE</SectionLabel>
            <h2 className="font-display text-section-heading text-navy mb-4">
              Twenty-two chapters. Three parts. One question.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <div className="font-mono text-copper text-sm font-bold mb-3">PART ONE</div>
                <h3 className="font-display text-2xl text-navy">What&rsquo;s Always Been True</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <div className="font-mono text-copper text-sm font-bold mb-3">PART TWO</div>
                <h3 className="font-display text-2xl text-navy">What&rsquo;s Different Now</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-8 h-full">
                <div className="font-mono text-copper text-sm font-bold mb-3">PART THREE</div>
                <h3 className="font-display text-2xl text-navy">What You Do Now</h3>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="max-w-prose mx-auto">
              <h3 className="font-display text-2xl text-navy mb-6 text-center">
                What you walk away with.
              </h3>
              <ul className="space-y-4 font-body text-ink">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <SignalDot size={6} className="mt-2 flex-shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy text-white section-padding overflow-hidden">
        <GridTexture />
        <div className="relative z-10 max-w-prose mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel variant="light">GET THE BOOK</SectionLabel>
            <h2 className="font-display text-3xl lg:text-4xl text-white leading-tight mb-6 mt-2">
              The newest voice in word of mouth is no longer always human.
            </h2>
            <p className="font-body text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Paperback on Amazon, {BOOK_PRICE}. If you want to see what AI is saying about
              your own business while you read it, the Signal Score Report is the
              diagnostic version of the same idea, {REPORT_PRICE}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={BOOK_AMAZON_URL} variant="primary" className="text-lg px-8 py-4">
                Get the paperback on Amazon
              </Button>
              <a
                href="/signal-score-report"
                className="font-body text-white/90 hover:text-copper transition-colors text-base underline underline-offset-4 decoration-copper decoration-2"
              >
                Or see the Signal Score Report
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
