import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
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
};

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [path.join(__dirname, 'rehype-pretty-code.mjs')],
  },
});

export default withMDX(nextConfig);
