import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/container';
import { Gutter } from '@/components/gutter';

import { formatPostDate, getPostBySlug, getPostSlugs } from '@/posts';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} – Andy Hook`,
    description: post.description,
  };
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();
  const { Content } = post;

  return (
    <Gutter>
      <Container className="flex flex-col items-center">
        <h1 className="text-slate-12 font-display relative z-10 font-normal tracking-tighter xxl:leading-tight capsize text-balance text-3xl sm:text-4xl lg:text-5xl xxl:text-6xl text-center max-w-[15em]">
          {post.title}
        </h1>

        <div className="text-slate-10 font-medium mx-auto font-code pt-16 pb-20 after:content-[''] after:w-12 before:w-12 before:block before:h-[1px] before:bg-slate-4 after:block after:h-[1px] after:bg-slate-4 relative flex justify-center items-center gap-6">
          <time dateTime={post.date.toISOString()} className="whitespace-nowrap">
            {formatPostDate(post.date)}
          </time>
        </div>
      </Container>
      <Container width="narrow">
        <div>
          <Content />
        </div>

        <div className="text-white w-[500px]"></div>
      </Container>
    </Gutter>
  );
}
