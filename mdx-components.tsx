import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import * as Prose from '@/components/prose';
import { TooltipLink } from '@/components/tooltip-link';

const components = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => <Prose.Heading {...props} size={1} />,
  h2: (props: ComponentPropsWithoutRef<'h2'>) => <Prose.Heading {...props} size={2} />,
  h3: (props: ComponentPropsWithoutRef<'h3'>) => <Prose.Heading {...props} size={3} />,
  p: (props: ComponentPropsWithoutRef<'p'>) => <Prose.Paragraph {...props} />,
  a: (props: ComponentPropsWithoutRef<'a'>) => <TooltipLink {...props} />,
  ul: (props: ComponentPropsWithoutRef<'ul'>) => <Prose.List {...props} />,
  ol: (props: ComponentPropsWithoutRef<'ol'>) => <Prose.List ordered {...props} />,
  li: (props: ComponentPropsWithoutRef<'li'>) => <Prose.ListItem {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => <Prose.Blockquote {...props} />,
  hr: (props: ComponentPropsWithoutRef<'hr'>) => <Prose.Hr {...props} />,
  pre: (props: ComponentPropsWithoutRef<'pre'>) => <Prose.Pre {...props} />,
  code: (props: ComponentPropsWithoutRef<'code'>) => <Prose.Code {...props} />,
  Figure: (props: ComponentPropsWithoutRef<typeof Prose.Figure>) => <Prose.Figure {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
