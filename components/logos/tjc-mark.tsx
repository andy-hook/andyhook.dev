import * as React from 'react';

type TjcMarkElement = React.ComponentRef<'svg'>;

interface TjcMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const TjcMark = React.forwardRef<TjcMarkElement, TjcMarkProps>((props, forwardedRef) => {
  const uid = React.useId();

  const tjcGradientId1 = `tjc_gradient_1_${uid}`;
  const tjcGradientId2 = `tjc_gradient_2_${uid}`;

  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
      <rect width="93.939" height="93.939" x="3" y="3" fill={`url(#${tjcGradientId1})`} rx="26" />
      <path
        fill={`url(#${tjcGradientId2})`}
        fillRule="evenodd"
        d="M51.944 29.705a.921.921 0 0 0-1.124-.898l-5.056 1.141a.921.921 0 0 0-.719.899v3.86a.921.921 0 0 0 1.14.895l5.057-1.234a.92.92 0 0 0 .702-.895v-3.768Zm-6.852 14.97v21.648c0 1.638-.792 2.457-2.378 2.457H41.05a.921.921 0 0 0-.921.92v4.24c0 .509.412.921.92.921h2.947c2.613 0 4.633-.82 6.062-2.456 1.255-1.43 1.882-3.205 1.882-5.332V39.147a.921.921 0 0 0-.92-.921H35.143a.921.921 0 0 1-.921-.92V31.1a.921.921 0 0 0-.922-.922h-5.003a.921.921 0 0 0-.921.921v6.207a.921.921 0 0 1-.921.92h-1.033a.921.921 0 0 0-.921.922v3.332c0 .508.412.92.92.92h1.034c.508 0 .92.413.92.922v12.563c0 2.125.627 3.9 1.882 5.33 1.428 1.638 3.432 2.456 6.01 2.456h2.788a.921.921 0 0 0 .921-.922v-4.238a.921.921 0 0 0-.92-.921H36.55c-1.553 0-2.327-.82-2.327-2.456V44.32c0-.509.412-.921.921-.921l9.028.002c.508 0 .92.413.92.921v.353Zm28.409 12.37c-.375-.337-.946-.305-1.325.028-1.144 1.005-2.386 1.508-3.725 1.508-1.596 0-2.888-.61-3.879-1.83-.99-1.218-1.483-2.532-1.483-5.32 0-.598.022-1.128.07-1.602.168-1.708.64-2.707 1.413-3.662.99-1.219 2.283-1.83 3.88-1.83 1.323 0 2.551.492 3.685 1.474.396.343.996.36 1.366-.01l3.27-3.283c.353-.354.36-.929-.01-1.264-2.233-2.02-5.014-3.032-8.344-3.032-3.312 0-6.01.94-8.1 2.822-2.717 2.405-4.076 5.407-4.076 10.387 0 4.985 1.36 8.004 4.076 10.441 2.09 1.882 4.788 2.824 8.1 2.824 3.287 0 6.057-1.37 8.312-3.472.38-.355.356-.956-.03-1.304l-3.2-2.875Z"
        clipRule="evenodd"
      />

      <defs>
        <linearGradient
          id={tjcGradientId1}
          x1="14.111"
          x2="88.859"
          y1="-9.121"
          y2="109.061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#43B0C8" />
          <stop offset="1" stopColor="#3278BA" />
        </linearGradient>
        <linearGradient
          id={tjcGradientId2}
          x1="35.349"
          x2="60.061"
          y1="24.766"
          y2="72.194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#E3ECF0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

TjcMark.displayName = 'TjcMark';
