'use client';

import * as React from 'react';
import { createContext } from '@/components/utils/create-context';
import { useControllableState } from '../utils/use-controllable-state';
import { Primitive } from './primitive';
import { useComposedRefs } from '../utils/compose-refs';

/* -------------------------------------------------------------------------------------------------
 * Collapsible
 * -----------------------------------------------------------------------------------------------*/

type CollapsibleContextValue = {
  contentId: string;
  open: boolean;
  onOpenToggle(): void;
};

const [CollapsibleProvider, useCollapsibleContext] =
  createContext<CollapsibleContextValue>('Collapsible');

type CollapsibleElement = React.ComponentRef<typeof Primitive.div>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface CollapsibleProps extends PrimitiveDivProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

const Collapsible = React.forwardRef<CollapsibleElement, CollapsibleProps>(
  (props, forwardedRef) => {
    const { open: openProp, defaultOpen, onOpenChange, ...collapsibleProps } = props;

    const [open = false, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange,
    });

    return (
      <CollapsibleProvider
        contentId={React.useId()}
        open={open}
        onOpenToggle={() => setOpen((prevOpen) => !prevOpen)}
      >
        <Primitive.div {...collapsibleProps} ref={forwardedRef} />
      </CollapsibleProvider>
    );
  },
);

Collapsible.displayName = 'Collapsible';

/* -------------------------------------------------------------------------------------------------
 * CollapsibleTrigger
 * -----------------------------------------------------------------------------------------------*/

type CollapsibleTriggerElement = React.ComponentRef<typeof Primitive.button>;
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>;
interface CollapsibleTriggerProps extends PrimitiveButtonProps {}

const CollapsibleTrigger = React.forwardRef<CollapsibleTriggerElement, CollapsibleTriggerProps>(
  (props, forwardedRef) => {
    const { ...triggerProps } = props;
    const context = useCollapsibleContext();
    return (
      <Primitive.button
        type="button"
        aria-controls={context.contentId}
        aria-expanded={context.open || false}
        {...triggerProps}
        ref={forwardedRef}
        onClick={context.onOpenToggle}
      />
    );
  },
);

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

/* -------------------------------------------------------------------------------------------------
 * CollapsibleContent
 * -----------------------------------------------------------------------------------------------*/

type CollapsibleContentElement = CollapsibleContentImplElement;
interface CollapsibleContentProps extends CollapsibleContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

const CollapsibleContent = React.forwardRef<CollapsibleContentElement, CollapsibleContentProps>(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext();

    return forceMount || context.open ? (
      <CollapsibleContentImpl {...contentProps} ref={forwardedRef} />
    ) : null;
  },
);

CollapsibleContent.displayName = 'CollapsibleContent';

/* -----------------------------------------------------------------------------------------------*/

type CollapsibleContentImplElement = React.ComponentRef<typeof Primitive.div>;
interface CollapsibleContentImplProps extends PrimitiveDivProps {}

const CollapsibleContentImpl = React.forwardRef<
  CollapsibleContentImplElement,
  CollapsibleContentImplProps
>((props, forwardedRef) => {
  const { children, ...contentProps } = props;
  const context = useCollapsibleContext();
  const ref = React.useRef<CollapsibleContentImplElement>(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);

  return (
    <Primitive.div id={context.contentId} {...contentProps} ref={composedRefs}>
      {children}
    </Primitive.div>
  );
});

CollapsibleContentImpl.displayName = 'CollapsibleImpl';

/* -----------------------------------------------------------------------------------------------*/

export const Root = Collapsible;
export const Trigger = CollapsibleTrigger;
export const Content = CollapsibleContent;
