import * as React from 'react';

type AragonMarkElement = React.ComponentRef<'svg'>;

interface AragonMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const AragonMark = React.forwardRef<AragonMarkElement, AragonMarkProps>(
  (props, forwardedRef) => {
    const uid = React.useId();

    const aragonGradientId1 = `aragon_gradient_1_${uid}`;
    const aragonGradientId2 = `aragon_gradient_2_${uid}`;
    const aragonGradientId3 = `aragon_gradient_3_${uid}`;
    const aragonGradientId4 = `aragon_gradient_3_${uid}`;

    return (
      <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
        <circle cx="50" cy="50" fill={`url(#${aragonGradientId1})`} r="47" />
        <path
          d="M86.7 46.9c.3-6.8-4.4-11.3-9.8-14.3l-3.4 20.3c2.4 0 3.5.8 4 1.2.5.6 1.8 2.2.2 4.7 3.4-.5 8.6-3.7 9-11.9z"
          fill={`url(#${aragonGradientId2})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.2 23.2L37 19c6.2-.8 22.6.2 38.5 10.2.3 1 0 2.7 0 2.7l1.3.7c1.2 1.6 3.2 6.3 1.8 11.9-1.4 5.6-3.8 8-4.8 8.4-2.2 0-5.8 1.3-7 6.7-1.1 5.5-3.4 6.7-4.4 6.6l-23.4.3-15.5-9.1-2.3-19 4.4-5.8 7.9-6.5 5.6-2.3 2-.6zM68.9 31c-1 1-2 1.6-2.3 1.7-6-1.3-8.2-4.4-8.2-4.4A28 28 0 0173 31.9l-4-1z"
          fill={`url(#${aragonGradientId3})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.9 59.7c-4.2 2-9 3.2-14.4 3.2-14.8 0-26.9-9.3-26.9-20.8 0-8.5 6.6-15.8 16-19C23.7 24 9.3 38.5 9.3 56c0 20.5 18.3 37.4 40.8 37.4a44 44 0 0038.2-22.7c-10 2.2-22-2-21.4-11.1z"
          fill={`url(#${aragonGradientId4})`}
        />
        <defs>
          <linearGradient
            id={aragonGradientId1}
            x1="50"
            y1="10.4"
            x2="50"
            y2="97"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" stopOpacity=".1" />
            <stop offset="1" stopColor="#fff" stopOpacity=".1" />
          </linearGradient>
          <linearGradient
            id={aragonGradientId2}
            x1="80.1"
            y1="40"
            x2="81.9"
            y2="63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01E8F7" />
            <stop offset="1" stopColor="#00C2FF" />
          </linearGradient>
          <linearGradient
            id={aragonGradientId3}
            x1="40"
            y1="23.9"
            x2="64.3"
            y2="62.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01E8F7" />
            <stop offset="1" stopColor="#00B3EC" />
          </linearGradient>
          <linearGradient
            id={aragonGradientId4}
            x1="49.1"
            y1="43"
            x2="51.3"
            y2="105"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01E8F7" />
            <stop offset="1" stopColor="#00C2FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

AragonMark.displayName = 'AragonMark';
