import * as React from 'react';

type WorkosMarkElement = React.ComponentRef<'svg'>;

interface WorkosMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const WorkosMark = React.forwardRef<WorkosMarkElement, WorkosMarkProps>(
  (props, forwardedRef) => {
    const uid = React.useId();

    const workosGradientId1 = `workos_gradient_1_${uid}`;
    const workosGradientId2 = `workos_gradient_2_${uid}`;

    return (
      <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
        <rect
          width="93.939"
          height="93.939"
          x="3"
          y="3"
          fill={`url(#${workosGradientId1})`}
          rx="20"
        />

        <path
          fill={`url(#${workosGradientId2})`}
          d="M23 50.5c0 1.03.27 2.06.792 2.947l9.469 16.468c.971 1.68 2.447 3.055 4.282 3.67a7.652 7.652 0 0 0 5.19-.078 7.691 7.691 0 0 0 3.956-3.375l2.021-3.517a.92.92 0 0 0 0-.92L40.22 50.96a.921.921 0 0 1 0-.919l9.257-16.117 2.288-3.976c.188-.326.396-.64.62-.94.54-.718.07-2.007-.826-2.007h-11.8a7.164 7.164 0 0 0-6.229 3.615l-9.738 16.94A5.832 5.832 0 0 0 23 50.5Zm54 0c0-1.03-.27-2.062-.792-2.947l-9.594-16.685a7.734 7.734 0 0 0-3.96-3.363 7.695 7.695 0 0 0-5.186-.09c-1.832.615-3.31 1.988-4.282 3.67l-1.895 3.28a.921.921 0 0 0 0 .92l8.49 14.756a.92.92 0 0 1 0 .918l-9.258 16.116-2.288 3.978c-.195.335-.41.656-.64.962-.542.712-.078 1.985.816 1.985h11.83a7.164 7.164 0 0 0 6.229-3.615l9.738-16.94A5.817 5.817 0 0 0 77 50.5Z"
        />

        <defs>
          <linearGradient
            id={workosGradientId1}
            x1="17.5"
            x2="88.859"
            y1="3"
            y2="109.061"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8965EF" />
            <stop offset="1" stopColor="#4343D9" />
          </linearGradient>
          <linearGradient
            id={workosGradientId2}
            x1="34.15"
            x2="59.246"
            y1="22.901"
            y2="71.436"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#E3ECF0" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

WorkosMark.displayName = 'WorkosMark';
