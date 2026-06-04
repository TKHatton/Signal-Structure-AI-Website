/** @type {import('next').NextConfig} */
const nextConfig = {
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
