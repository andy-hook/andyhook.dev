'use client';

import * as React from 'react';
import * as Floating from '@floating-ui/react';
import { createContext } from '@/components/utils/create-context';
import { Primitive } from '@/components/primitives/primitive';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { useControllableState } from '@/components/utils/use-controllable-state';

type Side = 'top' | 'right' | 'bottom' | 'left';
type Align = 'start' | 'center' | 'end';

function useFloating({
  open,
  onOpenChange,
  side,
  align,
}: {
  open: boolean;
  onOpenChange(open: boolean): void;
  side: Side;
  align: Align;
}) {
  const desiredPlacement = (side + (align !== 'center' ? '-' + align : '')) as Floating.Placement;

  const { context, placement, refs, floatingStyles, middlewareData } = Floating.useFloating({
    open,
    onOpenChange,
    placement: desiredPlacement,
    // Make sure the tooltip stays on the screen
    whileElementsMounted: Floating.autoUpdate,
    middleware: [Floating.offset(5), Floating.flip(), Floating.shift(), transformOrigin()],
  });

  const { delay } = Floating.useDelayGroup(context);

  const { setReference, setFloating } = refs;

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = Floating.useInteractions([
    Floating.useHover(context, { mouseOnly: true, delay }),
    Floating.useFocus(context),
    Floating.useDismiss(context),
    Floating.useRole(context, { role: 'tooltip' }),
  ]);

  return React.useMemo(
    () => ({
      context,
      getReferenceProps,
      getFloatingProps,
      setReference,
      setFloating,
      placement,
      floatingStyles,
      middlewareData,
    }),
    [
      context,
      getReferenceProps,
      getFloatingProps,
      setReference,
      setFloating,
      placement,
      floatingStyles,
      middlewareData,
    ],
  );
}

/* -------------------------------------------------------------------------------------------------
 * Tooltip
 * -----------------------------------------------------------------------------------------------*/

type TooltipContextValue = {
  open: boolean;
  onOpenChange(open: boolean): void;
  floating: ReturnType<typeof useFloating>;
};

const [TooltipProvider, useTooltipContext] = createContext<TooltipContextValue>('Tooltip');

interface TooltipProps {
  side?: Side;
  align?: Align;
  children: React.ReactNode | ((placement: { side: Side; align: Align }) => React.ReactNode);
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

const Tooltip = ({
  children,
  side = 'bottom',
  align = 'center',
  open: openProp,
  onOpenChange,
}: TooltipProps) => {
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    onChange: onOpenChange,
  });
  const floating = useFloating({ open, onOpenChange: setOpen, side, align });

  const [sideRender, alignRender] = getSideAndAlignFromPlacement(floating.placement);

  return (
    <TooltipProvider open={open} onOpenChange={setOpen} floating={floating}>
      {typeof children === 'function'
        ? children({ side: sideRender, align: alignRender })
        : children}
    </TooltipProvider>
  );
};

Tooltip.displayName = 'Tooltip';

/* -------------------------------------------------------------------------------------------------
 * TooltipTrigger
 * -----------------------------------------------------------------------------------------------*/

type TooltipTriggerElement = React.ComponentRef<typeof Primitive.button>;

interface TooltipTriggerProps extends React.ComponentPropsWithoutRef<typeof Primitive.button> {}

const TooltipTrigger = React.forwardRef<TooltipTriggerElement, TooltipTriggerProps>(
  (props, forwardedRef) => {
    const context = useTooltipContext();

    const composedRefs = useComposedRefs(
      (node) => context.floating.setReference(node),
      forwardedRef,
    );

    return (
      <Primitive.button {...props} {...context.floating.getReferenceProps()} ref={composedRefs} />
    );
  },
);

TooltipTrigger.displayName = 'TooltipTrigger';

/* -------------------------------------------------------------------------------------------------
 * TooltipContent
 * -----------------------------------------------------------------------------------------------*/

type TooltipContentElement = React.ComponentRef<typeof Primitive.div>;

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof Primitive.div> {
  forceMount?: boolean;
}

const TooltipContent = React.forwardRef<TooltipContentElement, TooltipContentProps>(
  ({ forceMount, ...props }, forwardedRef) => {
    const context = useTooltipContext();

    return (
      (forceMount || context.open) && (
        <Floating.FloatingPortal>
          <div
            ref={context.floating.setFloating}
            style={
              {
                ...context.floating.floatingStyles,
                ['--floating-transform-origin-x']:
                  context.floating.middlewareData.transformOrigin?.x,
                ['--floating-transform-origin-y']:
                  context.floating.middlewareData.transformOrigin?.y,
              } as React.CSSProperties
            }
            {...context.floating.getFloatingProps()}
            className="pointer-events-none"
          >
            <Primitive.div {...props} ref={forwardedRef} />
          </div>
        </Floating.FloatingPortal>
      )
    );
  },
);

TooltipContent.displayName = 'TooltipContent';

/* -----------------------------------------------------------------------------------------------*/

const transformOrigin = (): Floating.Middleware => ({
  name: 'transformOrigin',
  fn(data) {
    const { placement } = data;

    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const align = { start: '0%', center: '50%', end: '100%' }[placedAlign];

    let x = '';
    let y = '';

    if (placedSide === 'bottom') {
      x = align;
      y = '0%';
    } else if (placedSide === 'top') {
      x = align;
      y = '100%';
    } else if (placedSide === 'right') {
      x = '0%';
      y = align;
    } else if (placedSide === 'left') {
      x = '100%';
      y = align;
    }
    return { data: { x, y } };
  },
});

function getSideAndAlignFromPlacement(placement: Floating.Placement) {
  const [side, align = 'center'] = placement.split('-');
  return [side as Side, align as Align] as const;
}

/* -----------------------------------------------------------------------------------------------*/

export const Root = Tooltip;
export const Trigger = TooltipTrigger;
export const Content = TooltipContent;
export const DelayProvider = Floating.FloatingDelayGroup;
