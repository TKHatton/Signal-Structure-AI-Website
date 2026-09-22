// Security headers. See BUILD-DOC.md section 4.3.
//
// Two content security policies are sent on purpose:
// - ENFORCED is small and safe to enforce now: no other site may frame these
//   pages (stops clickjacking, e.g. tricking someone into approving the WebMCP
//   checkout prompt), no plugins from other sites, no <base> hijacking.
//   Framing and objects stay allowed from 'self' because the study pages embed
//   their own PDFs.
// - REPORT_ONLY is the full policy. Browsers log anything it would block but
//   block nothing, so it can be tested before it is switched to enforced.
//   'unsafe-inline' is needed for Next.js 14's inline scripts and the JSON-LD
//   schema blocks until nonces are added.
const API_ORIGIN = new URL(
  process.env.NEXT_PUBLIC_API_URL || 'https://signal-pulse-api.up.railway.app',
).origin;

const isDev = process.env.NODE_ENV !== 'production';

const ENFORCED = ["frame-ancestors 'self'", "object-src 'self'", "base-uri 'self'"].join('; ');

const REPORT_ONLY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self' ${API_ORIGIN}${isDev ? ' ws:' : ''}`,
  "frame-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'self'",
  "base-uri 'self'",
].join('; ');

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  { key: 'Content-Security-Policy', value: ENFORCED },
  { key: 'Content-Security-Policy-Report-Only', value: REPORT_ONLY },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        // The standalone Signal Score session is retired; send it to the program.
        source: '/signal-score',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
