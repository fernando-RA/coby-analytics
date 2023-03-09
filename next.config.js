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
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
