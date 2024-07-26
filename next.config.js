/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  distDir: 'build',
  reactStrictMode: true,
  images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
