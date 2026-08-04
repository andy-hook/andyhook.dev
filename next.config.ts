import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import path from 'path';
import { scrollPaths } from './scroll-paths';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.68.50'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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
        destination: '/andy-hook-uk-senior-design-engineer.pdf',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return Object.values(scrollPaths).map((path) => ({ source: `/${path}`, destination: '/' }));
  },
};

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [path.join(__dirname, 'rehype-pretty-code.mjs')],
  },
});

export default withMDX(nextConfig);
