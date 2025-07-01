import { cx } from '@/cva.config';
import * as React from 'react';
import { Primitive } from '@/components/primitives/primitive';

type FocusRingElement = React.ComponentRef<typeof Primitive.div>;

interface FocusRingProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Primitive.div>, 'asChild'> {
  scheme?: 'light' | 'dark';
}

export const FocusRing = React.forwardRef<FocusRingElement, FocusRingProps>(
  (props, forwardedRef) => {
    const { scheme = 'dark', ...focusRingsProps } = props;

    const isDarkScheme = scheme === 'dark';

    return (
      <Primitive.div
        ref={forwardedRef}
        {...focusRingsProps}
        className={cx(
          'outline outline-2 outline-transparent transition-[outline-color,outline-offset,border-radius] duration-75 ease-in',
          isDarkScheme ? 'focus-visible:outline-slate-12' : 'focus-visible:outline-slate-light-12',
          props.className,
        )}
        asChild
      />
    );
  },
);

FocusRing.displayName = 'FocusRing';
