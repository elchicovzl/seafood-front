/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
      minimumCacheTTL: 60,
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'mrmv.me',
        }
      ],
    },
    experimental: {
        appDir: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
  }
  
  module.exports = nextConfig
  