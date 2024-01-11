/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, encoding: false }
    return config
  }
}

module.exports = nextConfig
