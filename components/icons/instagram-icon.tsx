import * as React from 'react';

type InstagramIconElement = React.ComponentRef<'svg'>;

interface InstagramIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const InstagramIcon = React.forwardRef<InstagramIconElement, InstagramIconProps>(
  (props, forwardedRef) => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props} ref={forwardedRef}>
        <path d="M21.56 16A5.72 5.72 0 0120 20a5.72 5.72 0 01-4 1.56c-1.33.07-2.64.06-4 .06s-2.64 0-4-.06A5.72 5.72 0 014 20a5.72 5.72 0 01-1.56-4c-.07-1.33-.06-2.64-.06-4s0-2.64.06-4A5.72 5.72 0 014 4a5.72 5.72 0 014-1.56c1.33-.07 2.64-.06 4-.06s2.64 0 4 .06A5.72 5.72 0 0120 4a5.72 5.72 0 011.56 4c.07 1.33.06 2.64.06 4s.01 2.64-.06 4zM6.33 4.5a3.18 3.18 0 00-1.11.72 3.13 3.13 0 00-.72 1.11C4 7.59 4.11 10.6 4.11 12s-.11 4.41.39 5.67a3.17 3.17 0 001.83 1.83c1.26.5 4.27.39 5.67.39s4.41.11 5.67-.39a3.23 3.23 0 001.83-1.83c.5-1.26.39-4.27.39-5.67s.11-4.41-.39-5.67a3.25 3.25 0 00-1.83-1.83C16.41 4 13.4 4.11 12 4.11S7.59 4 6.33 4.5zM12 16.94A4.94 4.94 0 1116.93 12 4.93 4.93 0 0112 16.94zm0-8.15A3.21 3.21 0 1015.21 12 3.23 3.23 0 0012 8.79zM17.14 8a1.16 1.16 0 111.15-1.15A1.16 1.16 0 0117.14 8z" />
      </svg>
    );
  },
);

InstagramIcon.displayName = 'InstagramIcon';
