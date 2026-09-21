import type { Metadata } from 'next';

// Next replaces a parent's openGraph/twitter objects wholesale when a page
// sets its own, and a page that sets neither inherits the homepage's title
// and description. This fills both from the page's own title, description,
// and canonical, plus the default share image, so a shared link always shows the right card.
export function withSocial(meta: Metadata): Metadata {
  const title = typeof meta.title === 'string' ? meta.title : undefined;
  const description = meta.description ?? undefined;
  const canonical = meta.alternates?.canonical;
  const url = typeof canonical === 'string' ? canonical : undefined;

  const images = [{ url: '/og-image.png', width: 1536, height: 768, alt: 'Signal & Structure AI' }];

  return {
    ...meta,
    openGraph: { title, description, url, type: 'website', siteName: 'Signal & Structure AI', images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}
