declare module '*.mdx' {
  import type { Element, MDXProps } from 'mdx/types';

  export default function MDXContent(props: MDXProps): Element;
  export const metadata: import('@/types').PostMetadata;
}
