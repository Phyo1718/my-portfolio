/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/my-portfolio',
  images: {
    unoptimized: true,  // Add this line
  },
}

module.exports = nextConfig
