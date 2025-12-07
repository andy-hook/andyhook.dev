import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
      },
    ],
    qualities: [90],
  },
  turbopack: {
    root: path.join(__dirname, '..'),
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
