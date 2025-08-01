import * as React from 'react';

type BrightMarkElement = React.ComponentRef<'svg'>;

interface BrightMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const BrightMark = React.forwardRef<BrightMarkElement, BrightMarkProps>(
  (props, forwardedRef) => {
    const uid = React.useId();

    const brightGradientId = `bright_gradient_1_${uid}`;

    return (
      <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.7 48A24 24 0 0028 48a24.9 24.9 0 00-16 18 3.6 3.6 0 01-7-1.7 32.5 32.5 0 0120.6-23 31 31 0 0121.7.2l2.6.7c4.6 1.3 9.2 2.6 13.9 1a15.6 15.6 0 009.5-19.5 14.6 14.6 0 00-7.5-8.6 60.2 60.2 0 00-11.5-4.2 91.1 91.1 0 00-13-1.7 3.6 3.6 0 01.5-7A89.1 89.1 0 0056.1 4c4.4 1 8.7 2.6 12.8 4.6A21.6 21.6 0 0180 21.3 22.7 22.7 0 0158.7 51c-3.6 0-7.2-1-10.8-2l-3.2-1zM27 19.3h.6a56 56 0 0134 4.3 5.5 5.5 0 012.9 3.2 6 6 0 01-3.7 7.5c-2.8 1-7.3-.6-10.8-1.8a40 40 0 00-27.3 0c-5.5 1.9-10.6 5-14.8 9a3.6 3.6 0 002.5 6.2c.9 0 1.8-.4 2.4-1 3.5-3.4 7.7-6 12.3-7.6a33 33 0 0120-.7l4 1.2a34 34 0 009.8 2.1c1.5 0 3-.2 4.3-.7A13.1 13.1 0 0068.8 20a12.6 12.6 0 00-4-3 65.4 65.4 0 00-38.5-5 3.6 3.6 0 00.7 7zM17 32c.4 0 1 0 1.4-.3A43.6 43.6 0 0149 29.5a54.3 54.3 0 0110 2.8 3.6 3.6 0 001.7-6.8c-3.5-1.7-7.3-2.5-11-3.3l-2.9-.5a49.5 49.5 0 00-31.3 3.5 3.6 3.6 0 001.5 6.8zm29.7 39c-3.3-.6-6.5-1.7-9.5-3.2a3.6 3.6 0 10-3.1 6.4A49 49 0 0045.2 78c10.3 1.4 19.9 2 29.8-1.8a51.2 51.2 0 0020-13 3.6 3.6 0 10-5.2-5 44 44 0 01-17.2 11.3 50.4 50.4 0 01-25.9 1.6zm23-10.3c8.3-3 15.2-9.1 19.2-17a3.6 3.6 0 116.3 3.1 41 41 0 01-36.9 23 40.2 40.2 0 01-20.1-4 5.6 5.6 0 00-4.3-.3 6 6 0 00-3.7 7.5 5.5 5.5 0 002.9 3.3 59.2 59.2 0 0042.4 2c3.5-1.2 6.8-2.8 10-4.7a3.6 3.6 0 113.6 6 60.3 60.3 0 01-31 9c-9.8 0-19.3-1.6-28.2-6a12.6 12.6 0 01-6.4-7.3 13.1 13.1 0 018-16.5 12.6 12.6 0 019.8.5c8.3 4 19.8 4.4 28.4 1.4zm5.2 35a3.6 3.6 0 00-1.8-6.9 67 67 0 01-26.6 1.3c-6.1-.9-12-2.7-17.6-5.4a14.6 14.6 0 01-7.5-8.6 15.6 15.6 0 0115.3-20.3c2 .1 3.9.6 5.6 1.5a39.3 39.3 0 0026.8 1.3 32.3 32.3 0 0021.3-28.2 3.6 3.6 0 10-7.1-.5 25.2 25.2 0 01-16.6 22c-5.4 2.2-15 1.2-18.3 0-3.3-1.3-9.3-3-11.3-3.2A22.7 22.7 0 0018.9 86c2 2.2 4.3 4 6.9 5.2a75.4 75.4 0 0049 4.6z"
          fill={`url(#${brightGradientId})`}
        />
        <defs>
          <linearGradient
            id={brightGradientId}
            x1="74.3"
            y1="76.3"
            x2="17.7"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6705E5" />
            <stop offset="1" stopColor="#B94BFD" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

BrightMark.displayName = 'BrightMark';
