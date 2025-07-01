'use client';

import * as React from 'react';
import { Primitive } from './primitive';

/* -------------------------------------------------------------------------------------------------
 * MouseHover
 * -----------------------------------------------------------------------------------------------*/

type MouseHoverElement = React.ComponentRef<typeof Primitive.div>;
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface MouseHoverProps extends PrimitiveButtonProps {
  onValueChange: (active: boolean) => void;
}

export const MouseHover = React.forwardRef<MouseHoverElement, MouseHoverProps>(
  ({ onValueChange, ...props }, forwardedRef) => {
    const pointerTypeRef = React.useRef<string>(undefined);

    return (
      <Primitive.div
        {...props}
        onPointerDown={(event) => {
          props.onPointerDown?.(event);
          pointerTypeRef.current = event.pointerType;
        }}
        onPointerEnter={(event) => {
          props.onPointerEnter?.(event);
          pointerTypeRef.current = event.pointerType;
        }}
        onMouseEnter={(event) => {
          props.onMouseEnter?.(event);
          if (isMousePointer(pointerTypeRef.current)) {
            onValueChange(true);
          }
        }}
        onMouseLeave={(event) => {
          props.onMouseLeave?.(event);
          onValueChange(false);
        }}
        ref={forwardedRef}
      />
    );
  },
);

MouseHover.displayName = 'MouseHover';

/* -----------------------------------------------------------------------------------------------*/

function isMousePointer(pointerType: string | undefined) {
  const values: Array<string | undefined> = ['mouse', 'pen'];
  return values.includes(pointerType);
}
