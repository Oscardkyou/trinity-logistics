const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    forceSwcTransforms: true
  },
  env: {
    NODE_ENV: 'production'
  }
};

module.exports = withNextIntl(nextConfig);
