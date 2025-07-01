import * as React from 'react';
import { cx } from '@/cva.config';

type QuoteElement = React.ComponentRef<'blockquote'>;

interface QuoteProps extends React.ComponentPropsWithoutRef<'blockquote'> {}

export const Quote = React.forwardRef<QuoteElement, QuoteProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <blockquote className={cx('capsize', className)} {...props} ref={forwardedRef}>
        <p className="relative">
          <span className="absolute right-full top-0">“</span>
          {children}”
        </p>
      </blockquote>
    );
  },
);

Quote.displayName = 'Quote';
