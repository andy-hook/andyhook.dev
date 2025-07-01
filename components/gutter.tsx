import * as React from 'react';
import { cva, VariantProps } from '@/cva.config';

const gutter = cva({
  variants: {
    size: {
      small: 'lg:px-4',
      normal: 'md:px-7 lg:px-8',
    },
    collapse: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      size: 'normal',
      collapse: false,
      className: 'px-5',
    },
  ],
});

type GutterElement = React.ComponentRef<'div'>;

interface GutterProps extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof gutter> {}

export const Gutter = React.forwardRef<GutterElement, GutterProps>(
  ({ children, className, size = 'normal', collapse = false, ...props }, forwardedRef) => {
    return (
      <div {...props} className={gutter({ size, collapse, className })} ref={forwardedRef}>
        {children}
      </div>
    );
  },
);

Gutter.displayName = 'Gutter';
