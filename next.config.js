/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['thispersondoesnotexist.com/image'],
  },
};

module.exports = nextConfig;
