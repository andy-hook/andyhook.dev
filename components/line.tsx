import { cva, VariantProps } from '@/cva.config';
import * as React from 'react';

const line = cva({
  variants: {
    contrast: {
      low: 'stroke-slate-3',
      normal: 'stroke-slate-4',
    },
    scheme: {
      light: null,
      dark: null,
    },
  },
  compoundVariants: [
    {
      contrast: 'low',
      scheme: 'light',
      class: 'stroke-slate-light-1/20',
    },
    {
      contrast: 'normal',
      scheme: 'light',
      class: 'stroke-slate-light-5',
    },
  ],
});

type LineElement = React.ComponentRef<'div'>;

interface LineProps extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof line> {
  orientation?: 'horizontal' | 'vertical';
  solid?: boolean;
}

export const Line = React.forwardRef<LineElement, LineProps>(
  (
    { orientation = 'horizontal', solid, contrast = 'normal', scheme = 'dark', ...props },
    forwardedRef,
  ) => {
    const vertical = orientation === 'vertical';

    return (
      <div {...props} ref={forwardedRef}>
        <svg
          height={vertical ? '100%' : '1'}
          width={vertical ? '1' : '100%'}
          fill="none"
          aria-hidden
        >
          <line
            y1={vertical ? '0' : '0.5'}
            y2={vertical ? '100%' : '0.5'}
            x1={vertical ? '0.5' : '0'}
            x2={vertical ? '0.5' : '100%'}
            className={line({ contrast, scheme })}
            strokeWidth="1"
            strokeDasharray={solid ? undefined : '9 5'}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );
  },
);

Line.displayName = 'Line';
