/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'testo-livid.vercel.app',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
