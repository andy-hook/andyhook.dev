'use client';

import * as React from 'react';
import NextLink from 'next/link';

type LinkElement = React.ComponentRef<typeof NextLink>;
type NextLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

interface LinkProps extends NextLinkProps {
  href: string;
  newTab?: boolean;
  external?: boolean;
}

const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { newTab, external, ...linkProps } = props;

  const isExternal = external ?? props.href.startsWith('https://');
  const externalProps =
    isExternal || newTab
      ? { target: '_blank', rel: isExternal ? 'noopener noreferrer' : undefined }
      : {};

  if (isExternal) return <a {...linkProps} {...externalProps} ref={forwardedRef} />;

  return (
    <NextLink
      {...linkProps}
      ref={forwardedRef}
      onClick={(event) => {
        props.onClick?.(event);
      }}
      {...externalProps}
    />
  );
});

Link.displayName = 'Link';

export { Link };
