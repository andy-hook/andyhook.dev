'use client';

import * as React from 'react';
import { cx } from '@/cva.config';

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
          'grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))]',
          'sm:grid-cols-[repeat(auto-fill,_minmax(50%,_1fr))]',
          'wide:grid-cols-[repeat(auto-fill,_minmax(33%,_1fr))]',
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
        <div className="absolute shadow-md bg-white" style={{ inset: 'calc(var(--gap) / 2)' }}>
          <div className={cx('absolute', 'inset-[6vw]', 'sm:inset-[3vw]', 'wide:inset-[1.5vw]')}>
            {children}
          </div>
        </div>
      </li>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';

/* -----------------------------------------------------------------------------------------------*/

export const Root = ArtifactGrid;
export const Item = ArtifactGridItem;
