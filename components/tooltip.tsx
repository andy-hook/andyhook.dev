'use client';

import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cx } from '@/cva.config';

/* -------------------------------------------------------------------------------------------------
 * TooltipProvider
 * -----------------------------------------------------------------------------------------------*/

export const TooltipProvider = TooltipPrimitive.Provider;

/* -------------------------------------------------------------------------------------------------
 * TooltipRoot
 * -----------------------------------------------------------------------------------------------*/

export const TooltipRoot = TooltipPrimitive.Root;

/* -------------------------------------------------------------------------------------------------
 * TooltipTrigger
 * -----------------------------------------------------------------------------------------------*/

interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
> {
  children: React.ReactElement;
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children, ...props }) => {
  return <TooltipPrimitive.Trigger {...props} render={children} />;
};

TooltipTrigger.displayName = 'TooltipTrigger';

/* -------------------------------------------------------------------------------------------------
 * TooltipContent
 * -----------------------------------------------------------------------------------------------*/

type TooltipContentElement = React.ComponentRef<typeof TooltipPrimitive.Popup>;

type TooltipPositionerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>;
type TooltipPopupProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup>;

interface TooltipContentProps extends TooltipPopupProps {
  side?: TooltipPositionerProps['side'];
  align?: TooltipPositionerProps['align'];
  sideOffset?: TooltipPositionerProps['sideOffset'];
  alignOffset?: TooltipPositionerProps['alignOffset'];
}

export const TooltipContent = React.forwardRef<TooltipContentElement, TooltipContentProps>(
  (
    {
      children,
      className,
      side = 'bottom',
      align = 'center',
      sideOffset = 5,
      alignOffset,
      ...popupProps
    },
    forwardedRef,
  ) => {
    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={cx(
            'h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)]',
            'transition-[top,left,right,bottom,transform] duration-[200ms] ease-snappy',
            'data-[instant]:transition-none',
          )}
        >
          <TooltipPrimitive.Popup
            {...popupProps}
            ref={forwardedRef}
            className={cx(
              'pointer-events-none',
              'relative w-[var(--popup-width,auto)]',
              'origin-[var(--transform-origin)] overflow-hidden',
              'bg-slate-light-1 rounded-lg shadow-lg p-4',
              'transition-[width,height,opacity,transform] duration-[200ms] ease-snappy',
              'data-[starting-style]:opacity-0',
              'data-[starting-style]:scale-[0.85]',
              'data-[starting-style]:-translate-y-2',
              'data-[ending-style]:opacity-0',
              'data-[ending-style]:scale-95',
              'data-[ending-style]:translate-y-0',
              'data-[instant]:transition-none',
              className,
            )}
          >
            {children}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    );
  },
);

TooltipContent.displayName = 'TooltipContent';

/* -------------------------------------------------------------------------------------------------
 * TooltipViewport
 * -----------------------------------------------------------------------------------------------*/

type TooltipViewportElement = React.ComponentRef<typeof TooltipPrimitive.Viewport>;

interface TooltipViewportProps extends React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Viewport
> {}

export const TooltipViewport = React.forwardRef<TooltipViewportElement, TooltipViewportProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <TooltipPrimitive.Viewport
        {...props}
        ref={forwardedRef}
        className={cx(
          'relative h-full w-full',
          '[&_[data-previous]]:translate-x-0',
          '[&_[data-current]]:translate-x-0',
          '[&_[data-previous]]:opacity-100',
          '[&_[data-current]]:opacity-100',
          '[&_[data-previous]]:transition-[transform,opacity]',
          '[&_[data-current]]:transition-[transform,opacity]',
          '[&_[data-previous]]:duration-[350ms,175ms]',
          '[&_[data-current]]:duration-[350ms,175ms]',
          '[&_[data-previous]]:ease-snappy',
          '[&_[data-current]]:ease-snappy',
          "[&[data-activation-direction~='left']_[data-current][data-starting-style]]:-translate-x-12",
          "[&[data-activation-direction~='left']_[data-current][data-starting-style]]:opacity-0",
          "[&[data-activation-direction~='right']_[data-current][data-starting-style]]:translate-x-12",
          "[&[data-activation-direction~='right']_[data-current][data-starting-style]]:opacity-0",
          "[&[data-activation-direction~='up']_[data-current][data-starting-style]]:opacity-0",
          "[&[data-activation-direction~='down']_[data-current][data-starting-style]]:opacity-0",
          "[&[data-activation-direction~='left']_[data-previous][data-ending-style]]:translate-x-12",
          "[&[data-activation-direction~='left']_[data-previous][data-ending-style]]:opacity-0",
          "[&[data-activation-direction~='right']_[data-previous][data-ending-style]]:-translate-x-12",
          "[&[data-activation-direction~='right']_[data-previous][data-ending-style]]:opacity-0",
          "[&[data-activation-direction~='up']_[data-previous][data-ending-style]]:opacity-0",
          "[&[data-activation-direction~='down']_[data-previous][data-ending-style]]:opacity-0",
          '[[data-instant]_&_[data-previous]]:transition-none',
          '[[data-instant]_&_[data-current]]:transition-none',
          className,
        )}
      >
        {children}
      </TooltipPrimitive.Viewport>
    );
  },
);

TooltipViewport.displayName = 'TooltipViewport';

/* -----------------------------------------------------------------------------------------------*/

export const createHandle = TooltipPrimitive.createHandle;

export const Provider = TooltipProvider;
export const Root = TooltipRoot;
export const Trigger = TooltipTrigger;
export const Content = TooltipContent;
export const Viewport = TooltipViewport;
