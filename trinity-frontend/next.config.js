/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ru', 'ky', 'en'],
    defaultLocale: 'ru',
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/next/image/**',
      },
    ],
  },
}

module.exports = nextConfig
