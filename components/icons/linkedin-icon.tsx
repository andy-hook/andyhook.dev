import * as React from 'react';

type LinkedinIconElement = React.ComponentRef<'svg'>;

interface LinkedinIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const LinkedinIcon = React.forwardRef<LinkedinIconElement, LinkedinIconProps>(
  (props, forwardedRef) => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props} ref={forwardedRef}>
        <path d="M5.2 7.1c-1.2.1-2.1-.8-2.2-2V5c0-1.1.9-2 2.1-2h.1c1.1-.1 2.2.7 2.3 1.9S6.7 7 5.6 7.1h-.4zm1.9 13.6h-4v-12h4v12zm14.3 0h-4v-6.4c0-1.6-.6-2.7-2-2.7-.9 0-1.7.6-2 1.4-.1.3-.1.6-.1 1v6.6h-4c.1-10.9 0-12 0-12h4v1.7a3.8 3.8 0 013.6-2c2.6 0 4.6 1.7 4.6 5.4l-.1 7z" />
      </svg>
    );
  },
);

LinkedinIcon.displayName = 'LinkedinIcon';
