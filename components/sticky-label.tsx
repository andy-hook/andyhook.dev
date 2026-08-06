import * as React from 'react';
import { cx } from '@/cva.config';
import * as BaseChip from '@/components/chip';
import { InformationCircleIcon } from '@heroicons/react/16/solid';
import { Primitive } from '@/components/primitives/primitive';

/* -------------------------------------------------------------------------------------------------
 * StickyLabel
 * -----------------------------------------------------------------------------------------------*/

type StickyLabelElement = React.ComponentRef<typeof Primitive.div>;

interface StickyLabelProps extends React.ComponentPropsWithoutRef<typeof Primitive.div> {}

export const StickyLabel = React.forwardRef<StickyLabelElement, StickyLabelProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Primitive.div {...props} className={cx('group relative', className)} ref={forwardedRef}>
        {children}
      </Primitive.div>
    );
  },
);

StickyLabel.displayName = 'StickyLabel';

/* -------------------------------------------------------------------------------------------------
 * StickyLabelChip
 * -----------------------------------------------------------------------------------------------*/

type StickyLabelChipElement = React.ComponentRef<'div'>;

interface StickyLabelChipProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
}

export const StickyLabelChip = React.forwardRef<StickyLabelChipElement, StickyLabelChipProps>(
  ({ className, label, ...props }, forwardedRef) => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        <div
          {...props}
          className={cx(
            'z-10 sticky top-0 inset-x-0 p-6 flex justify-end  will-change-motion',
            'opacity-0 -translate-y-1 transition-[opacity,transform] duration-150 ease-snappy',
            'group-hover:opacity-100 group-hover:translate-y-0',
            'group-focus-visible:opacity-100 group-focus-visible:translate-y-0',
            className,
          )}
          ref={forwardedRef}
        >
          <BaseChip.Root>
            <BaseChip.Icon side="left">
              <InformationCircleIcon />
            </BaseChip.Icon>
            <BaseChip.Text>{label}</BaseChip.Text>
          </BaseChip.Root>
        </div>
      </div>
    );
  },
);

StickyLabelChip.displayName = 'StickyLabelChip';

/* -----------------------------------------------------------------------------------------------*/

export const Root = StickyLabel;
export const Chip = StickyLabelChip;
