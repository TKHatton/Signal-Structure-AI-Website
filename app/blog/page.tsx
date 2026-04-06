import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import { BOOKING_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog-posts';

export const metadata = {
  title: 'The Signal Report | Signal & Structure AI Blog',
  description:
    'Insights on AI discoverability, visibility, and getting found. Learn how AI platforms find, understand, and recommend businesses.',
};

const blogPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://signalstructure.ai/blog/#blog',
  name: 'The Signal Report',
  description:
    'Insights on AI discoverability, visibility, and getting found. Learn how AI platforms find, understand, and recommend businesses.',
  url: 'https://signalstructure.ai/blog',
  isPartOf: { '@id': 'https://signalstructure.ai/#website' },
  publisher: { '@id': 'https://signalstructure.ai/#organization' },
  author: { '@id': 'https://signalstructure.ai/about#lenise-kenney' },
  about: [
    'AI discoverability',
    'AI visibility',
    'schema markup',
    'structured data',
    'local business AI optimization',
    'Signal Score',
    'generative engine optimization',
  ],
  inLanguage: 'en-US',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://signalstructure.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://signalstructure.ai/blog',
    },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Section 1: Page Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <SectionLabel variant="light">THE SIGNAL REPORT</SectionLabel>
            <h1 className="inner-page-hero-subtitle text-white">
              Insights on AI discoverability, visibility, and getting found.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Blog Posts */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          {posts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-16">
                <h2 className="font-display text-section-heading text-navy mb-4">
                  Coming soon.
                </h2>
                <p className="font-body text-lg text-warmgray">
                  The Signal Report launches soon with insights on AI
                  discoverability, schema markup, and getting your business
                  recommended by AI platforms.
                </p>
              </div>
            </FadeIn>
          ) : (
            <div className="space-y-8">
              {posts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <article className="bg-white rounded-card shadow-card p-6 md:p-8 transition-shadow duration-300 hover:shadow-card-hover">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-body text-xs font-semibold text-copper uppercase tracking-wider">
                          {post.pillar}
                        </span>
                        <span className="text-warmgray-light">|</span>
                        <span className="font-body text-xs text-warmgray">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="text-warmgray-light">|</span>
                        <span className="font-body text-xs text-warmgray">
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl md:text-3xl text-navy mb-3 group-hover:text-copper transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="font-body text-lg text-warmgray leading-relaxed mb-4">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-2 text-copper font-body font-medium text-sm">
                        <SignalDot size={6} />
                        <span>Read more</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          &rarr;
                        </span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              Want to know what AI is saying about your business right now?
            </h2>
            <Button href={BOOKING_URL} variant="primary">
              Get Your Signal Score
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
