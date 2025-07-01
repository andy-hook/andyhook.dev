import * as React from 'react';

type FreelanceMarkElement = React.ComponentRef<'svg'>;

interface FreelanceMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const FreelanceMark = React.forwardRef<FreelanceMarkElement, FreelanceMarkProps>(
  (props, forwardedRef) => {
    const uid = React.useId();

    const freelanceGradientId = `freelance_gradient_${uid}`;

    return (
      <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
        <path
          d="M24 19.4C36.4 7 42.6 1 50 1c7.7 0 13.8 6.1 26 18.4l4.8 4.7C93 36.3 99 42.5 99 50c0 7.6-6 13.7-18.3 26L76 80.8C63.8 93 57.7 99 50 99c-7.6 0-13.8-6-26-18.3L19.4 76C7 63.8 1 57.7 1 50c0-7.6 6.1-13.8 18.4-26l4.7-4.7z"
          fill={`url(#${freelanceGradientId})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.8 46.3L61 27.1c.4-1-1.1-1.6-2-.8l-26 27c-.6.7 0 1.6 1 1.5l9.7-1-7 19.3c-.4 1 1 1.6 2 .8l25.9-27c.7-.7 0-1.7-1-1.6l-9.7 1z"
          fill="#fff"
        />
        <defs>
          <linearGradient
            id={freelanceGradientId}
            x1="71.2"
            y1="89.3"
            x2="27.7"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6217C2" />
            <stop offset="1" stopColor="#B15AE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

FreelanceMark.displayName = 'FreelanceMark';
