/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  images: {
    unoptimized: true
  },
  // trailingSlash: true,
};

module.exports = nextConfig;
