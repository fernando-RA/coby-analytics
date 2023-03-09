/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/MercadoBitcoin',
        destination: '/MercadoBitcoin.html',
      },
      {
        source: '/CryptoTitans',
        destination: '/CryptoTitans.html',
      },
      {
        source: '/KeepBored',
        destination: '/KeepBored.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://coby.studio/',
        permanent: false,
        basePath: false
      },
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
