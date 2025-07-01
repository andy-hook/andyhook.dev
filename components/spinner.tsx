'use client';

import * as React from 'react';
import { cva, cx, VariantProps } from '@/cva.config';

import { cubicBezier, motion } from 'motion/react';

const spinnerLine = cva({
  variants: {
    variant: {
      dark: 'stroke-slate-12 fill-slate-12/5',
      light: 'stroke-slate-light-12 fill-slate-light-12/5',
      dribbble: 'stroke-dribbble fill-dribbble/5',
      github: 'stroke-github fill-github/5',
      instagram: 'stroke-instagram fill-instagram/5',
      twitter: 'stroke-twitter fill-twitter/5',
      linkedin: 'stroke-linkedin fill-linkedin/5',
      aragon: 'stroke-aragon-2 fill-aragon-2/5',
      blocks: 'stroke-blocks-2 fill-blocks-2/5',
      dash: 'stroke-dash-2 fill-dash-2/5',
      radix: 'stroke-radix-2 fill-radix-2/5',
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
});

type SpinnerElement = React.ComponentRef<typeof motion.svg>;

interface SpinnerProps
  extends React.ComponentPropsWithoutRef<typeof motion.svg>,
    VariantProps<typeof spinnerLine> {
  scheme?: 'light' | 'dark';
  visible: boolean;
}

export const Spinner = React.forwardRef<SpinnerElement, SpinnerProps>((props, forwardedRef) => {
  const { variant, scheme = 'dark', visible, ...spinnerProps } = props;
  const isLightScheme = scheme === 'light';

  return (
    <motion.svg
      variants={{
        hidden: { scale: 1 },
        visible: { scale: 1.2 },
      }}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      ref={forwardedRef}
      {...spinnerProps}
    >
      <motion.circle
        cx="50%"
        cy="50%"
        fill="none"
        className={cx(
          // Calc within the radius property directly on the SVG element
          // is not support in Safari, so use CSS instead.
          '[r:calc(50%-1px)]',
          isLightScheme ? 'stroke-slate-light-6' : 'stroke-slate-6',
          '[stroke-dasharray:10_2] md:[stroke-dasharray:16_4]',
        )}
        vectorEffect="non-scaling-stroke"
        strokeWidth="1"
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 0 },
        }}
      />

      <motion.circle
        cx="50%"
        cy="50%"
        fill="none"
        className={spinnerLine({ variant, className: '[r:calc(50%-2px)]' })}
        vectorEffect="non-scaling-stroke"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="100"
        variants={{
          hidden: {
            strokeDashoffset: 100,
            opacity: 0,
            rotate: 0,
            transition: { opacity: { duration: 0.2 } },
          },
          visible: { strokeDashoffset: 0, opacity: 1, rotate: 270 },
        }}
        transition={{
          ease: cubicBezier(0.7, 0.2, 0.2, 1),
          duration: 0.5,
          rotate: {
            ease: cubicBezier(0.2, 0.2, 0.2, 1),
            duration: 0.4,
          },
          opacity: { ease: 'linear', duration: 0.4 },
        }}
        style={{ originX: '50%', originY: '50%' }}
      />
    </motion.svg>
  );
});

Spinner.displayName = 'Spinner';
