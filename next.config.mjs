/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/alcohol-home-detox',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/training',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
