import * as React from 'react';

type DribbbleIconElement = React.ComponentRef<'svg'>;

interface DribbbleIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const DribbbleIcon = React.forwardRef<DribbbleIconElement, DribbbleIconProps>(
  (props, forwardedRef) => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props} ref={forwardedRef}>
        <path d="M11.92 22.36A10.36 10.36 0 1122.28 12a10.36 10.36 0 01-10.36 10.36zm.24-11.9a32.74 32.74 0 01-9.08 1.26 2.62 2.62 0 000 .28 8.88 8.88 0 002.26 5.91 14.05 14.05 0 017.2-5.84l.35-.11q-.34-.75-.73-1.5zM8.14 4a8.85 8.85 0 00-4.88 6.18 33.14 33.14 0 008.17-1.09A51.37 51.37 0 008.14 4zm5.34 9.43h-.05S8.19 15.28 6.48 19l-.2-.15a8.87 8.87 0 009.1 1.32 38.35 38.35 0 00-1.89-6.72zm-3.7-10s.01-.03 0-.01zm2.14-.27a9.19 9.19 0 00-2.09.25 43.12 43.12 0 013.32 5.16 9.49 9.49 0 004.61-3.2 8.79 8.79 0 00-5.84-2.22zm6.84 3.22a11.39 11.39 0 01-4.94 3.51c.21.42.41.85.6 1.28.07.15.12.31.19.46a20.44 20.44 0 016.17.29 9 9 0 00-2-5.54zM15.15 13a39.76 39.76 0 011.72 6.33 8.86 8.86 0 003.79-5.94 13.24 13.24 0 00-5.51-.39z" />
      </svg>
    );
  },
);

DribbbleIcon.displayName = 'DribbbleIcon';
