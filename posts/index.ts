import type { MDXProps } from 'mdx/types';
import type { ComponentType } from 'react';

import MarkdownReference, { metadata as markdownReference } from '@/posts/markdown-reference.mdx';
import type { Post } from '@/types';

type RegisteredPost = Post & {
  Content: ComponentType<MDXProps>;
};

const posts: RegisteredPost[] = [
  { slug: 'markdown-reference', ...markdownReference, Content: MarkdownReference },
];

export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getPostBySlug(slug: string): RegisteredPost | undefined {
  return posts.find((post) => post.slug === slug);
}
