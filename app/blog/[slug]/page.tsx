import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';
import FadeIn from '@/components/FadeIn';
import GridTexture from '@/components/GridTexture';
import Button from '@/components/Button';
import SignalDot from '@/components/SignalDot';
import { BOOKING_URL } from '@/lib/constants';
import { getPostBySlug, getAllPosts } from '@/lib/blog-posts';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | The Signal Report`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
      />

      {/* Section 1: Post Header */}
      <section className="relative bg-navy text-white">
        <GridTexture />
        <div className="relative z-10 hero-container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-xs font-semibold text-copper uppercase tracking-wider">
                {post.pillar}
              </span>
              <span className="text-white/30">|</span>
              <span className="font-body text-xs text-white/70">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="text-white/30">|</span>
              <span className="font-body text-xs text-white/70">
                {post.readTime}
              </span>
            </div>
            <h1 className="inner-page-hero-subtitle text-white">
              {post.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Post Content */}
      <section className="section-padding">
        <div className="max-w-prose mx-auto">
          {/* Opening paragraphs */}
          <FadeIn>
            <div className="font-body text-lg text-warmgray leading-relaxed space-y-4 mb-12">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          {/* Sections */}
          {post.sections.map((section, index) => (
            <FadeIn key={index} delay={0.1 * (index + 1)}>
              <div className="mb-12">
                <h2 className="font-display text-section-heading text-navy mb-6">
                  {section.heading}
                </h2>
                <div className="font-body text-lg text-warmgray leading-relaxed space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="bg-stone-dark p-8 rounded-card border-l-4 border-copper mt-12">
              <h2 className="font-display text-2xl text-navy mb-4">
                What to Do Next
              </h2>
              <p className="font-body text-lg text-warmgray mb-6">
                {post.cta.text}
              </p>
              <Button href={post.cta.href} variant="primary">
                Get Your Signal Score
              </Button>
            </div>
          </FadeIn>

          {/* Post Footer */}
          <FadeIn delay={0.4}>
            <div className="mt-12 pt-8 border-t border-stone-dark">
              <p className="font-body text-sm text-warmgray italic text-center">
                Published in The Signal Report by Signal & Structure AI
              </p>
              <div className="flex justify-center mt-6">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-copper font-body font-medium text-sm hover:text-copper-dark transition-colors"
                >
                  <span>&larr;</span>
                  <SignalDot size={4} />
                  <span>Back to The Signal Report</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Bottom CTA */}
      <section className="relative bg-navy text-white section-padding">
        <GridTexture />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-section-heading mb-8 text-white">
              AI is already talking about businesses in your industry. Make sure
              it knows yours.
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
