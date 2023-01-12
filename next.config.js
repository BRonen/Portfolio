/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/BRonen/**/main/.github/**',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        pathname: '/images/modules/logos_page/GitHub-Mark.png',
      },
    ],
  },
}

module.exports = nextConfig
