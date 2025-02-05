/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

module.exports = nextConfig;
