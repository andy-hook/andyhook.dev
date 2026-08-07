'use client';

import * as React from 'react';
import { cx } from '@/cva.config';
import * as StickyLabel from '@/components/sticky-label';

const GRID_PRECISION = 40;

/* -------------------------------------------------------------------------------------------------
 * ArtifactGrid
 * -----------------------------------------------------------------------------------------------*/

type ArtifactGridElement = React.ComponentRef<'ul'>;

interface ArtifactGridProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const ArtifactGrid = React.forwardRef<ArtifactGridElement, ArtifactGridProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ul
        {...props}
        className={cx(
          '[--gap:20px]',
          'md:[--gap:30px]',
          'lg:[--gap:40px]',
          'xl:[--gap:50px]',
          'grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))]',
          'sm:grid-cols-[repeat(auto-fill,_minmax(50%,_1fr))]',
          'wide:grid-cols-[repeat(auto-fill,_minmax(33%,_1fr))]',
          'max:grid-cols-[repeat(auto-fill,_minmax(25%,_1fr))]',
          'grid m-[calc(-1_*_var(--gap)_/_2)]',
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </ul>
    );
  },
);

ArtifactGrid.displayName = 'ArtifactGrid';

/* -------------------------------------------------------------------------------------------------
 * ArtifactGridItem
 * -----------------------------------------------------------------------------------------------*/

type ArtifactGridItemElement = React.ComponentRef<'li'>;

interface ArtifactGridItemProps extends React.ComponentPropsWithoutRef<'li'> {
  width: number;
  height: number;
}

export const ArtifactGridItem = React.forwardRef<ArtifactGridItemElement, ArtifactGridItemProps>(
  ({ children, className, width, height, ...props }, forwardedRef) => {
    return (
      <li
        {...props}
        style={
          {
            ['--width']: width,
            ['--height']: height,
            gridRow: `span calc(var(--height) / var(--width) * ${GRID_PRECISION})`,
            ...props.style,
          } as React.CSSProperties
        }
        className={cx('relative aspect-[var(--width)_/_var(--height)]', className)}
        ref={forwardedRef}
      >
        {children}
      </li>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';

/* -------------------------------------------------------------------------------------------------
 * ArtifactGridFrame
 * -----------------------------------------------------------------------------------------------*/

type ArtifactGridFrameElement = React.ComponentRef<typeof StickyLabel.Root>;

interface ArtifactGridFrameProps extends React.ComponentPropsWithoutRef<typeof StickyLabel.Root> {
  label: string;
}

export const ArtifactGridFrame = React.forwardRef<ArtifactGridFrameElement, ArtifactGridFrameProps>(
  ({ children, className, label, ...props }, forwardedRef) => {
    return (
      <StickyLabel.Root
        {...props}
        className={cx('absolute shadow-md bg-slate-light-1', className)}
        style={{ inset: 'calc(var(--gap) / 2)', ...props.style }}
        ref={forwardedRef}
      >
        <div
          className={cx(
            'absolute',
            'inset-[6vw]',
            'sm:inset-[3vw]',
            'wide:inset-[1.5vw]',
            'max:inset-[1.25vw]',
          )}
        >
          <StickyLabel.Chip label={label} />
          {children}
        </div>
      </StickyLabel.Root>
    );
  },
);

ArtifactGridFrame.displayName = 'ArtifactGridFrame';

/* -----------------------------------------------------------------------------------------------*/

export const Root = ArtifactGrid;
export const Item = ArtifactGridItem;
export const Frame = ArtifactGridFrame;
