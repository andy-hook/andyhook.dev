import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/andy-hook-uk-software-engineer.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
