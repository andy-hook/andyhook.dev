import * as React from 'react';
import { cva, VariantProps } from '@/cva.config';

type ContainerElement = React.ComponentRef<'div'>;

const container = cva({
  base: 'mx-auto',
  variants: {
    width: {
      normal: 'max-w-7xl',
      wide: 'max-w-wide',
      widest: 'max-w-widest',
    },
  },
});

interface ContainerProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof container> {}

export const Container = React.forwardRef<ContainerElement, ContainerProps>(
  ({ children, className, width = 'normal', ...props }, forwardedRef) => {
    return (
      <div {...props} className={container({ width, className })} ref={forwardedRef}>
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
