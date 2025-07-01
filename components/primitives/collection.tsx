'use client';

import React from 'react';
import { createContext } from '@/components/utils/create-context';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { Slot } from '@/components/primitives/slot';

type SlotProps = React.ComponentPropsWithoutRef<typeof Slot>;
type CollectionElement = HTMLElement;
interface CollectionProps extends SlotProps {}

function createCollection<ItemElement extends HTMLElement, ItemData = {}>(name: string) {
  /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/

  type ContextValue = {
    collectionRef: React.RefObject<CollectionElement | null>;
    itemMap: Map<
      React.RefObject<ItemElement | null>,
      { ref: React.RefObject<ItemElement | null> } & ItemData
    >;
  };

  const [CollectionProviderImpl, useCollectionContext] = createContext<ContextValue>(
    name + 'CollectionProvider',
    { collectionRef: { current: null }, itemMap: new Map() },
  );

  const CollectionProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
    const { children } = props;
    const ref = React.useRef<CollectionElement>(null);
    const itemMap = React.useRef<ContextValue['itemMap']>(new Map()).current;
    return (
      <CollectionProviderImpl itemMap={itemMap} collectionRef={ref}>
        {children}
      </CollectionProviderImpl>
    );
  };

  CollectionProvider.displayName = name + 'CollectionProvider';

  /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/

  const CollectionSlot = React.forwardRef<CollectionElement, CollectionProps>(
    (props, forwardedRef) => {
      const { children } = props;
      const context = useCollectionContext();
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return <Slot ref={composedRefs}>{children}</Slot>;
    },
  );

  CollectionSlot.displayName = name + 'CollectionSlot';

  /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/

  const ITEM_DATA_ATTR = 'data-collection-item';

  type CollectionItemSlotProps = ItemData & {
    children: React.ReactNode;
  };

  const CollectionItemSlot = React.forwardRef<ItemElement, CollectionItemSlotProps>(
    (props, forwardedRef) => {
      const { children, ...itemData } = props;
      const ref = React.useRef<ItemElement>(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext();

      React.useEffect(() => {
        context.itemMap.set(ref, { ref, ...(itemData as unknown as ItemData) });
        return () => void context.itemMap.delete(ref);
      });

      return (
        <Slot {...{ [ITEM_DATA_ATTR]: '' }} ref={composedRefs}>
          {children}
        </Slot>
      );
    },
  );

  CollectionItemSlot.displayName = name + 'CollectionItemSlot';

  /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/

  function useCollection() {
    const context = useCollectionContext();

    const getItems = React.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current!) - orderedNodes.indexOf(b.ref.current!),
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);

    return getItems;
  }

  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection,
  ] as const;
}

export { createCollection };
export type { CollectionProps };
