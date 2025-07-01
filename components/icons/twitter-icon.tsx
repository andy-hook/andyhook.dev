import * as React from 'react';

type TwitterIconElement = React.ComponentRef<'svg'>;

interface TwitterIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const TwitterIcon = React.forwardRef<TwitterIconElement, TwitterIconProps>(
  (props, forwardedRef) => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props} ref={forwardedRef}>
        <path d="M20.19 8.7v.53a11.63 11.63 0 01-11.7 11.71 11.6 11.6 0 01-6.32-1.85 6.57 6.57 0 001 .05 8.24 8.24 0 005.11-1.75 4.13 4.13 0 01-3.85-2.86 6.85 6.85 0 00.78.07 5 5 0 001.09-.14 4.12 4.12 0 01-3.31-4v-.05a4.32 4.32 0 001.86.52 4.13 4.13 0 01-1.28-5.55 11.69 11.69 0 008.49 4.31 4.29 4.29 0 01-.1-.94 4.12 4.12 0 017.12-2.82 8.19 8.19 0 002.61-1 4.1 4.1 0 01-1.81 2.27 8.07 8.07 0 002.37-.63 8.87 8.87 0 01-2.06 2.13z" />
      </svg>
    );
  },
);

TwitterIcon.displayName = 'TwitterIcon';
