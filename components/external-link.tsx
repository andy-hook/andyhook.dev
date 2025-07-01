import * as React from 'react';
import { cx } from '@/cva.config';
import { FocusRing } from './focus-ring';

type ExternalLinkElement = React.ComponentRef<'a'>;

interface ExternalLinkProps extends React.ComponentPropsWithoutRef<'a'> {}

export const ExternalLink = React.forwardRef<ExternalLinkElement, ExternalLinkProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <FocusRing scheme="dark" className="outline-offset-0 focus-visible:outline-offset-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          className={cx(
            'font-body font-medium underline underline-offset-2 text-slate-12 hover:text-theme-5 decoration-slate-8 rounded-sm',
            className,
          )}
          ref={forwardedRef}
        >
          {children}
        </a>
      </FocusRing>
    );
  },
);

ExternalLink.displayName = 'ExternalLink';
