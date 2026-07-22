import * as React from 'react';
import { cx } from '@/cva.config';

const BASE_DISTANCE = 6;

type RouteTransitionElement = HTMLDivElement;

interface RouteTransitionProps extends React.ComponentPropsWithoutRef<'div'> {
  multiplier: number;
}

const RouteTransition = React.forwardRef<RouteTransitionElement, RouteTransitionProps>(
  ({ multiplier, className, style, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={cx(
          'animate-route-enter will-change-motion motion-reduce:animate-none',
          className,
        )}
        style={
          {
            '--route-distance': `${BASE_DISTANCE * multiplier}px`,
            ...style,
          } as React.CSSProperties
        }
        ref={forwardedRef}
      />
    );
  },
);
RouteTransition.displayName = 'RouteTransition';

export { RouteTransition };
