import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/signal-pulse/chat'],
      },
    ],
    sitemap: 'https://signalstructure.ai/sitemap.xml',
  }
}
