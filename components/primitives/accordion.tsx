'use client';

import React from 'react';
import { createContext } from '@/components/utils/create-context';

import * as CollapsiblePrimitive from '@/components/primitives/collapsible';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { createCollection } from '@/components/primitives/collection';
import { useControllableState } from '@/components/utils/use-controllable-state';
import { Primitive } from '@/components/primitives/primitive';

/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/

const ACCORDION_KEYS = ['Home', 'End', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];

const [Collection, useCollection] = createCollection<AccordionTriggerElement>('Accordion');

type AccordionValueContextValue = {
  value: string[];
  onItemOpen(value: string): void;
  onItemClose(value: string): void;
};

const [AccordionValueProvider, useAccordionValueContext] =
  createContext<AccordionValueContextValue>('Accordion');

type AccordionElement = AccordionImplElement;
interface AccordionProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string): void;
}

const Accordion = React.forwardRef<AccordionElement, AccordionProps>((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...accordionSingleProps
  } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  return (
    <Collection.Provider>
      <AccordionValueProvider
        value={value ? [value] : []}
        onItemOpen={setValue}
        onItemClose={() => setValue('')}
      >
        <AccordionImpl {...accordionSingleProps} ref={forwardedRef} />
      </AccordionValueProvider>
    </Collection.Provider>
  );
});

Accordion.displayName = 'Accordion';

/* -----------------------------------------------------------------------------------------------*/

type AccordionImplElement = React.ComponentRef<typeof Primitive.div>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface AccordionImplProps extends PrimitiveDivProps {}

const AccordionImpl = React.forwardRef<AccordionImplElement, AccordionImplProps>(
  (props, forwardedRef) => {
    const accordionRef = React.useRef<AccordionImplElement>(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection();

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target as HTMLElement;
      const triggerCollection = getItems();
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;

      if (triggerIndex === -1) return;

      // Prevents page scroll while user is navigating
      event.preventDefault();

      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;

      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };

      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };

      switch (event.key) {
        case 'Home':
          nextIndex = homeIndex;
          break;
        case 'End':
          nextIndex = endIndex;
          break;
        case 'ArrowDown':
          moveNext();
          break;
        case 'ArrowUp':
          movePrev();
          break;
      }

      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    };

    return (
      <Collection.Slot>
        <Primitive.div {...props} ref={composedRefs} onKeyDown={handleKeyDown} />
      </Collection.Slot>
    );
  },
);

AccordionImpl.displayName = 'AccordionImpl';

/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/

type AccordionItemContextValue = { open?: boolean; triggerId: string };
const [AccordionItemProvider, useAccordionItemContext] =
  createContext<AccordionItemContextValue>('AccordionItem');

type AccordionItemElement = React.ComponentRef<typeof CollapsiblePrimitive.Root>;
type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>;
interface AccordionItemProps
  extends Omit<CollapsibleProps, 'open' | 'defaultOpen' | 'onOpenChange'> {
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
}

/**
 * `AccordionItem` contains all of the parts of a collapsible section inside of an `Accordion`.
 */
const AccordionItem = React.forwardRef<AccordionItemElement, AccordionItemProps>(
  (props, forwardedRef) => {
    const { value, ...accordionItemProps } = props;
    const valueContext = useAccordionValueContext();
    const triggerId = React.useId();
    const open = (value && valueContext.value.includes(value)) || false;

    return (
      <AccordionItemProvider open={open} triggerId={triggerId}>
        <CollapsiblePrimitive.Root
          {...accordionItemProps}
          ref={forwardedRef}
          open={open}
          onOpenChange={(open) => {
            if (open) {
              valueContext.onItemOpen(value);
            } else {
              valueContext.onItemClose(value);
            }
          }}
        />
      </AccordionItemProvider>
    );
  },
);

AccordionItem.displayName = 'AccordionItem';

/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/

type AccordionTriggerElement = React.ComponentRef<typeof CollapsiblePrimitive.Trigger>;
type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>;
interface AccordionTriggerProps extends CollapsibleTriggerProps {}

/**
 * `AccordionTrigger` is the trigger that toggles the collapsed state of an `AccordionItem`. It
 * should always be nested inside of an `AccordionHeader`.
 */
const AccordionTrigger = React.forwardRef<AccordionTriggerElement, AccordionTriggerProps>(
  (props, forwardedRef) => {
    const { ...triggerProps } = props;
    const itemContext = useAccordionItemContext();

    return (
      <Collection.ItemSlot>
        <CollapsiblePrimitive.Trigger
          id={itemContext.triggerId}
          {...triggerProps}
          ref={forwardedRef}
        />
      </Collection.ItemSlot>
    );
  },
);

AccordionTrigger.displayName = 'AccordionTrigger';

/* -------------------------------------------------------------------------------------------------
 * AccordionContent
 * -----------------------------------------------------------------------------------------------*/

type AccordionContentElement = React.ComponentRef<typeof CollapsiblePrimitive.Content>;
type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>;
interface AccordionContentProps extends CollapsibleContentProps {}

/**
 * `AccordionContent` contains the collapsible content for an `AccordionItem`.
 */
const AccordionContent = React.forwardRef<AccordionContentElement, AccordionContentProps>(
  (props, forwardedRef) => {
    const itemContext = useAccordionItemContext();

    return (
      <CollapsiblePrimitive.Content
        role="region"
        aria-labelledby={itemContext.triggerId}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

AccordionContent.displayName = 'AccordionContent';

/* -----------------------------------------------------------------------------------------------*/

export const Root = Accordion;
export const Item = AccordionItem;
export const Trigger = AccordionTrigger;
export const Content = AccordionContent;
