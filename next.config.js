/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
      unoptimized: true,
    },
  assetPrefix: isProd ? '/<projectname>/' : '',
}

module.exports = nextConfig
