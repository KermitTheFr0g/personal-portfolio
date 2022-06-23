/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'badges.pufler.dev',
      'wakatime.com'
    ]
  }
}

module.exports = nextConfig
