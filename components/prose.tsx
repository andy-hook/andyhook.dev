import * as React from 'react';
import { cva, cx } from '@/cva.config';
import { Gutter } from './gutter';
import { Line } from './line';
import { Container } from './container';
import { MediaImage } from '@/components/media-image';
import { ImageWithMetadata } from '@/types';

/* -------------------------------------------------------------------------------------------------
 * Heading
 * -----------------------------------------------------------------------------------------------*/

const sizeToComp = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
} as const;

const heading = cva({
  base: 'font-display tracking-tighter xl:leading-[1.2] text-slate-12 capsize mb-[1em] mt-[2em] text-balance',
  variants: {
    size: {
      1: 'text-3xl',
      2: 'text-3xl',
      3: 'text-3xl',
    },
  },
});

type HeadingElement = React.ComponentRef<'h1'>;

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {
  size: 1 | 2 | 3;
}

export const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  ({ size, ...props }, forwardedRef) => {
    const Comp = sizeToComp[size];
    return (
      <Comp
        {...props}
        className={heading({ size, className: props.className })}
        ref={forwardedRef}
      />
    );
  },
);

Heading.displayName = 'Heading';

/* -------------------------------------------------------------------------------------------------
 * Paragraph
 * -----------------------------------------------------------------------------------------------*/

type ParagraphElement = React.ComponentRef<'p'>;

interface ParagraphProps extends React.ComponentPropsWithoutRef<'p'> {}

export const Paragraph = React.forwardRef<ParagraphElement, ParagraphProps>(
  (props, forwardedRef) => {
    return (
      <p
        {...props}
        className={cx(
          'font-body text-base lg:text-lg text-slate-11 capsize lg:leading-relaxed mb-[2em]',
          props.className,
        )}
        ref={forwardedRef}
      />
    );
  },
);

Paragraph.displayName = 'Paragraph';

/* -------------------------------------------------------------------------------------------------
 * List
 * -----------------------------------------------------------------------------------------------*/

type ListElement = React.ComponentRef<'ol'>;

interface ListProps extends React.ComponentPropsWithoutRef<'ol'> {
  ordered?: boolean;
}

export const List = React.forwardRef<ListElement, ListProps>(
  ({ ordered, ...props }, forwardedRef) => {
    const Comp = ordered ? 'ol' : 'ul';
    return (
      <Comp
        {...props}
        className={cx(
          'text-slate-11 list-disc list-inside ml-[1em] mb-[2em] text-base lg:text-lg',
          props.className,
        )}
        ref={forwardedRef}
      />
    );
  },
);

List.displayName = 'List';

/* -------------------------------------------------------------------------------------------------
 * ListItem
 * -----------------------------------------------------------------------------------------------*/

type ListItemElement = React.ComponentRef<'li'>;

interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {}

export const ListItem = React.forwardRef<ListItemElement, ListItemProps>((props, forwardedRef) => {
  return <li {...props} className={cx('', props.className)} ref={forwardedRef} />;
});

ListItem.displayName = 'ListItem';

/* -------------------------------------------------------------------------------------------------
 * Blockquote
 * -----------------------------------------------------------------------------------------------*/

type BlockquoteElement = React.ComponentRef<'blockquote'>;

interface BlockquoteProps extends React.ComponentPropsWithoutRef<'blockquote'> {}

export const Blockquote = React.forwardRef<BlockquoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    return (
      <blockquote {...props} className={cx('text-slate-11', props.className)} ref={forwardedRef} />
    );
  },
);

Blockquote.displayName = 'Blockquote';

/* -------------------------------------------------------------------------------------------------
 * Hr
 * -----------------------------------------------------------------------------------------------*/

type HrElement = React.ComponentRef<'hr'>;

interface HrProps extends React.ComponentPropsWithoutRef<'hr'> {}

export const Hr = React.forwardRef<HrElement, HrProps>((props, forwardedRef) => {
  return (
    <hr {...props} className={cx('border-slate-5 my-[4em]', props.className)} ref={forwardedRef} />
  );
});

Hr.displayName = 'Hr';

/* -------------------------------------------------------------------------------------------------
 * Pre
 * -----------------------------------------------------------------------------------------------*/

type PreElement = React.ComponentRef<'pre'>;

interface PreProps extends React.ComponentPropsWithoutRef<'pre'> {}

export const Pre = React.forwardRef<PreElement, PreProps>((props, forwardedRef) => {
  return (
    <pre
      {...props}
      className={cx(
        'font-code my-[2em] rounded-xl border border-slate-4 bg-slate-3 p-4 text-sm leading-relaxed',
        props.className,
      )}
      ref={forwardedRef}
    />
  );
});

Pre.displayName = 'Pre';

/* -------------------------------------------------------------------------------------------------
 * Code
 * -----------------------------------------------------------------------------------------------*/

type CodeElement = React.ComponentRef<'code'>;

interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {}

export const Code = React.forwardRef<CodeElement, CodeProps>((props, forwardedRef) => {
  return (
    <code
      {...props}
      className={cx('font-code min-w-full text-slate-12', props.className)}
      ref={forwardedRef}
    />
  );
});

Code.displayName = 'Code';

/* -------------------------------------------------------------------------------------------------
 * Figure
 * -----------------------------------------------------------------------------------------------*/

type FigureElement = React.ComponentRef<'figure'>;

interface FigureProps extends React.ComponentPropsWithoutRef<'figure'> {
  image: ImageWithMetadata;
}

export const Figure = React.forwardRef<FigureElement, FigureProps>(
  ({ image, ...props }, forwardedRef) => {
    return (
      <figure
        {...props}
        className={cx('relative -mx-[50vw] left-1/2 right-1/2 w-screen my-[4em]', props.className)}
        ref={forwardedRef}
      >
        <Gutter collapse>
          <Container>
            <div className="relative">
              <Line orientation="vertical" className="absolute left-0 -top-12 -bottom-12" />
              <Line orientation="vertical" className="absolute right-0 -top-8 -bottom-8" />

              <Line className="absolute top-0 -left-[100vw] -right-[100vw]" solid contrast="low" />

              <Line
                className="absolute bottom-0 -left-[100vw] -right-[100vw]"
                solid
                contrast="low"
              />

              <div className="rounded-xl lg:rounded-3xl overflow-hidden relative">
                <MediaImage image={image} className="w-full" sizes="100vw" />
              </div>
            </div>
          </Container>
        </Gutter>
      </figure>
    );
  },
);

Figure.displayName = 'Figure';
