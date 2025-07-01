import * as React from 'react';

type ModulzMarkElement = React.ComponentRef<'svg'>;

interface ModulzMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const ModulzMark = React.forwardRef<ModulzMarkElement, ModulzMarkProps>(
  (props, forwardedRef) => {
    return (
      <svg viewBox="0 0 100 100" width="100" height="100" fill="none" {...props} ref={forwardedRef}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.8 28 34 39V17l14.7 11ZM17 53.7l14.7-11-14.7-11v22ZM17 83l14.7-11L17 61v22Zm34.2-29.3 14.7-11-14.7-11v22ZM83 28 68.3 39V17L83 28ZM68.3 68.3l14.7-11-14.7-11v22Zm-36.6 0L17 57.3l14.7-11v22ZM34 42.7l14.7 11v-22L34 42.7ZM31.7 39 17 28l14.7-11v22Zm19.5-11L66 39V17L51.2 28ZM83 53.7l-14.7-11 14.7-11v22ZM68.3 72 83 83V61L68.3 72Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

ModulzMark.displayName = 'ModulzMark';
