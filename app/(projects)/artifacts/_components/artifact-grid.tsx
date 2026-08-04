'use client';

import * as React from 'react';
import { cx } from '@/cva.config';
import * as Chip from '@/components/chip';
import { InformationCircleIcon } from '@heroicons/react/16/solid';
import { Primitive } from '@/components/primitives/primitive';

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
          'widest:[--gap:70px]',
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
        {children}
      </li>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';

/* -------------------------------------------------------------------------------------------------
 * ArtifactGridFrame
 * -----------------------------------------------------------------------------------------------*/

type ArtifactGridFrameElement = React.ComponentRef<typeof Primitive.div>;

interface ArtifactGridFrameProps extends React.ComponentPropsWithoutRef<typeof Primitive.div> {
  label: string;
}

export const ArtifactGridFrame = React.forwardRef<ArtifactGridFrameElement, ArtifactGridFrameProps>(
  ({ children, className, label, ...props }, forwardedRef) => {
    return (
      <Primitive.div
        {...props}
        className={cx('group absolute shadow-md bg-slate-light-1', className)}
        style={{ inset: 'calc(var(--gap) / 2)', ...props.style }}
        ref={forwardedRef}
      >
        <div className={cx('absolute', 'inset-[6vw]', 'sm:inset-[3vw]', 'wide:inset-[1.5vw]')}>
          <div
            className={cx(
              'z-10 sticky top-0 inset-x-0 p-6 flex justify-end pointer-events-none will-change-motion',
              'opacity-0 -translate-y-1 transition-[opacity,transform] duration-150 ease-snappy',
              'group-hover:opacity-100 group-hover:translate-y-0',
              'group-focus-visible:opacity-100 group-focus-visible:translate-y-0',
            )}
          >
            <Chip.Root>
              <Chip.Text>{label}</Chip.Text>
              <Chip.Icon side="right">
                <InformationCircleIcon />
              </Chip.Icon>
            </Chip.Root>
          </div>

          {children}
        </div>
      </Primitive.div>
    );
  },
);

ArtifactGridFrame.displayName = 'ArtifactGridFrame';

/* -----------------------------------------------------------------------------------------------*/

export const Root = ArtifactGrid;
export const Item = ArtifactGridItem;
export const Frame = ArtifactGridFrame;
