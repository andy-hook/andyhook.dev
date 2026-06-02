import * as React from 'react';
import { cx } from '@/cva.config';
import { Slot } from '@/components/primitives/slot';

/* -------------------------------------------------------------------------------------------------
 * Chip
 * -----------------------------------------------------------------------------------------------*/

type ChipElement = React.ComponentRef<'div'>;

interface ChipProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export const Chip = React.forwardRef<ChipElement, ChipProps>(
  ({ children, className, asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        {...props}
        className={cx(
          'bg-slate-2 absolute text-slate-12 z-10 font-body font-semibold text-sm py-2 px-3.5 rounded-full flex items-center gap-1.5',
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </Comp>
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

type ChipIconElement = React.ComponentRef<'div'>;

interface ChipIconProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
  side: 'left' | 'right';
}

export const ChipIcon = React.forwardRef<ChipIconElement, ChipIconProps>(
  ({ children, className, asChild = true, side, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        {...props}
        className={cx('size-4 text-slate-10', side === 'left' ? '-ml-0.5' : '-mr-0.5', className)}
        ref={forwardedRef}
      >
        {children}
      </Comp>
    );
  },
);

ChipIcon.displayName = 'ChipIcon';

/* -----------------------------------------------------------------------------------------------*/

export const Root = Chip;
export const Text = ChipText;
export const Icon = ChipIcon;
