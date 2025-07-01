import * as React from 'react';

type BrandwatchMarkElement = React.ComponentRef<'svg'>;

interface BrandwatchMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const BrandwatchMark = React.forwardRef<BrandwatchMarkElement, BrandwatchMarkProps>(
  (props, forwardedRef) => {
    return (
      <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 31.4v24.5l28.6 13.6 29.3-31-19.2-35-1.8.8-31.8 18.4A10 10 0 008 31.4"
          fill="#57B7DD"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.6 69.5l34.5 16.3 15.6-9L66 38.5l-29.3 31z"
          fill="#F99132"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83 20.4l-28-16a10 10 0 00-8.2-.9l19.1 35 17.2-18z"
          fill="#A98BBC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M86.7 76.8h.1a10 10 0 005-8.7V31.4a10 10 0 00-5-8.8l-3.7-2.1-17.2 18 20.9 38.3z"
          fill="#FF6D56"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 56v12c0 3.6 2 7 5 8.8L23.9 83l12.8-13.5L8 55.9z"
          fill="#8AC539"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9 83l21 12.1a10 10 0 0010.1 0l16.1-9.3-34.5-16.3L24 83z"
          fill="#FFBE0A"
        />
      </svg>
    );
  },
);

BrandwatchMark.displayName = 'BrandwatchMark';
