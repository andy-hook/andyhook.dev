'use client';

import * as React from 'react';
import { createContext } from '@/components/utils/create-context';
import { MouseHover } from './mouse-hover';
import { useCallbackRef } from '../utils/use-callback-ref';
import { useControllableState } from '../utils/use-controllable-state';

/* -------------------------------------------------------------------------------------------------
 * HoverGroup
 * -----------------------------------------------------------------------------------------------*/

type HoverGroupContextValue = {
  value: string;
  onValueChange(value: string): void;
};

const [HoverGroupProvider, useHoverGroup] = createContext<HoverGroupContextValue>('HoverGroup');

interface HoverGroupProps {
  value?: string;
  onValueChange?(value: string): void;
  children: React.ReactNode;
}

const HoverGroup = ({
  children,
  value: valueProp,
  onValueChange: onValueChangeProp,
}: HoverGroupProps) => {
  const [value = '', setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChangeProp,
  });

  return (
    <HoverGroupProvider value={value} onValueChange={setValue}>
      {children}
    </HoverGroupProvider>
  );
};

HoverGroup.displayName = 'HoverGroup';

/* -------------------------------------------------------------------------------------------------
 * HoverGroupItem
 * -----------------------------------------------------------------------------------------------*/

type Mode = 'hovered' | 'dimmed' | 'initial';

type HoverGroupItemElement = React.ComponentRef<typeof MouseHover>;
interface HoverGroupItemProps {
  value: string;
  children: React.ReactNode;
  onModeChange(mode: Mode): void;
}

const HoverGroupItem = React.forwardRef<HoverGroupItemElement, HoverGroupItemProps>(
  ({ value, onModeChange, children }, forwardedRef) => {
    const handleModeChange = useCallbackRef(onModeChange);
    const context = useHoverGroup();
    const mode = getMode(context.value, value);

    React.useEffect(() => {
      handleModeChange(mode);
    }, [mode, handleModeChange]);

    return (
      <MouseHover
        onValueChange={(hovered) => {
          context.onValueChange(hovered ? value : '');
        }}
        asChild
        ref={forwardedRef}
      >
        {children}
      </MouseHover>
    );
  },
);

HoverGroupItem.displayName = 'HoverGroupItem';

/* -----------------------------------------------------------------------------------------------*/

function getMode(activeItem: string | null, item: string): Mode {
  if (activeItem === item) {
    return 'hovered';
  }

  if (activeItem && activeItem !== item) {
    return 'dimmed';
  }

  return 'initial';
}

export const Root = HoverGroup;
export const Item = HoverGroupItem;
