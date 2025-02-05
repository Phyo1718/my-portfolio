/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/',
  images: {
    unoptimized: true,  // Add this line
  },
}

module.exports = nextConfig
