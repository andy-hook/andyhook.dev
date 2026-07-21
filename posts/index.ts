import MarkdownReference, {
  metadata as markdownReferenceMetadata,
} from '@/posts/markdown-reference.mdx';
import type { Post } from '@/types';

const posts = [
  { slug: 'markdown-reference', ...markdownReferenceMetadata, Content: MarkdownReference },
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

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
