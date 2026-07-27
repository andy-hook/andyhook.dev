import * as React from 'react';
import { cx } from '@/cva.config';
import { Primitive } from '@/components/primitives/primitive';

/* -------------------------------------------------------------------------------------------------
 * Chip
 * -----------------------------------------------------------------------------------------------*/

type ChipElement = React.ComponentRef<typeof Primitive.div>;

interface ChipProps extends React.ComponentPropsWithoutRef<typeof Primitive.div> {}

export const Chip = React.forwardRef<ChipElement, ChipProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Primitive.div
        {...props}
        className={cx(
          'bg-slate-2 text-slate-12 z-10 font-body font-semibold text-xs lg:text-sm py-2 px-3.5 rounded-full flex items-center gap-1 lg:gap-1.5',
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </Primitive.div>
    );
  },
);

Chip.displayName = 'Chip';

/* -------------------------------------------------------------------------------------------------
 * ChipText
 * -----------------------------------------------------------------------------------------------*/

type ChipTextElement = React.ComponentRef<'span'>;

interface ChipTextProps extends React.ComponentPropsWithoutRef<'span'> {}

export const ChipText = React.forwardRef<ChipTextElement, ChipTextProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <span {...props} className={cx('capsize', className)} ref={forwardedRef}>
        {children}
      </span>
    );
  },
);

ChipText.displayName = 'ChipText';

/* -------------------------------------------------------------------------------------------------
 * ChipIcon
 * -----------------------------------------------------------------------------------------------*/

type ChipIconElement = React.ComponentRef<typeof Primitive.div>;

interface ChipIconProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Primitive.div>,
  'render' | 'children'
> {
  side: 'left' | 'right';
  render?: React.ComponentPropsWithoutRef<typeof Primitive.div>['render'];
  children?: React.ReactElement;
}

export const ChipIcon = React.forwardRef<ChipIconElement, ChipIconProps>(
  ({ children, className, render, side, ...props }, forwardedRef) => {
    return (
      <Primitive.div
        {...props}
        render={render ?? children}
        className={cx(
          'size-3.5 lg:size-4 text-slate-10',
          side === 'left' ? '-ml-0.5' : '-mr-0.5',
          className,
        )}
        ref={forwardedRef}
      />
    );
  },
);

ChipIcon.displayName = 'ChipIcon';

/* -----------------------------------------------------------------------------------------------*/

export const Root = Chip;
export const Text = ChipText;
export const Icon = ChipIcon;
