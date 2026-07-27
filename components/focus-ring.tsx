import { cx } from '@/cva.config';
import * as React from 'react';
import { Primitive } from '@/components/primitives/primitive';
import type { useRender as UseRender } from '@base-ui/react/use-render';

type FocusRingElement = React.ComponentRef<typeof Primitive.div>;

interface FocusRingProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Primitive.div>,
  'render' | 'children'
> {
  scheme?: 'light' | 'dark';
  render?: UseRender.RenderProp;
  children?: React.ReactElement;
}

export const FocusRing = React.forwardRef<FocusRingElement, FocusRingProps>(
  (props, forwardedRef) => {
    const { scheme = 'dark', render, children, ...focusRingProps } = props;

    const isDarkScheme = scheme === 'dark';

    return (
      <Primitive.div
        ref={forwardedRef}
        {...focusRingProps}
        render={render ?? children}
        className={cx(
          'outline outline-2 outline-transparent',
          isDarkScheme ? 'focus-visible:outline-slate-12' : 'focus-visible:outline-slate-light-12',
          props.className,
        )}
      />
    );
  },
);

FocusRing.displayName = 'FocusRing';
