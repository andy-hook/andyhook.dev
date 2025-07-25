'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { cx } from '@/cva.config';

import { useControllableState } from '@/components/utils/use-controllable-state';
import * as TooltipPrimitive from '@/components/primitives/tooltip';

type TooltipElement = React.ComponentRef<typeof motion.div>;
type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;

interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.div>, 'content'> {
  open?: boolean;
  onOpenChange?(open: boolean): void;
  children: React.ReactNode;
  content: React.ReactNode;
  side?: TooltipPrimitiveProps['side'];
  align?: TooltipPrimitiveProps['align'];
}

export const Tooltip = React.forwardRef<TooltipElement, TooltipProps>((props, forwardedRef) => {
  const {
    children,
    content,
    side,
    align,
    className,
    open: openProp,
    onOpenChange,
    ...tooltipProps
  } = props;
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: false,
    onChange: onOpenChange,
  });

  return (
    <TooltipPrimitive.Root side={side} align={align} open={open} onOpenChange={setOpen}>
      {({ side, align }) => {
        const axis = side === 'top' || side === 'bottom' ? 'y' : 'x';
        const inverseSide = side === 'bottom' || side === 'right';

        return (
          <>
            <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
            <AnimatePresence>
              {open && (
                <TooltipPrimitive.Content asChild forceMount>
                  <motion.div
                    // Re-run animation with new offsets when placement changes
                    key={`${side}-${align}`}
                    {...tooltipProps}
                    className={cx('bg-slate-light-1 p-4 rounded-lg shadow-lg', className)}
                    initial={{ opacity: 0, scale: 0.85, [axis]: 10 * (inverseSide ? -1 : 1) }}
                    animate={{ opacity: 1, scale: 1, [axis]: 0 }}
                    exit={{ opacity: 0, scale: 0.95, [axis]: 2 * (inverseSide ? -1 : 1) }}
                    transition={{
                      type: 'spring',
                      duration: 0.3,
                      bounce: 0.25,
                    }}
                    style={{
                      originX: 'var(--floating-transform-origin-x)',
                      originY: 'var(--floating-transform-origin-y)',
                      ...tooltipProps.style,
                    }}
                    ref={forwardedRef}
                  >
                    {content}
                  </motion.div>
                </TooltipPrimitive.Content>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </TooltipPrimitive.Root>
  );
});

Tooltip.displayName = 'Tooltip';
