/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nomadix-backend.onrender.com',
      },
    ],
  },
}

module.exports = nextConfig