'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { motion } from 'motion/react';
import { cx } from '@/cva.config';
import NextImage from 'next/image';

import { useComposedRefs } from '@/components/utils/compose-refs';
import { ImageWithMetadata } from '@/types';

/* -------------------------------------------------------------------------------------------------
 * RouterLink
 * -----------------------------------------------------------------------------------------------*/

type RouterLinkElement = React.ComponentRef<typeof NextLink>;
type NextLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;
interface RouterLinkProps extends NextLinkProps {
  href: string;
  newTab?: boolean;
  external?: boolean;
}

const RouterLink = React.forwardRef<RouterLinkElement, RouterLinkProps>((props, forwardedRef) => {
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

RouterLink.displayName = 'RouterLink';

/* -------------------------------------------------------------------------------------------------
 * RouterImage
 * -----------------------------------------------------------------------------------------------*/

type RouterImageElement = React.ComponentRef<typeof NextImage>;

interface RouterImageProps extends Omit<
  React.ComponentPropsWithoutRef<typeof NextImage>,
  'src' | 'alt'
> {
  image: ImageWithMetadata;
}

const RouterImage = React.forwardRef<RouterImageElement, RouterImageProps>(
  (props, forwardedRef) => {
    const { image, className, style, quality = 90, ...imageProps } = props;
    const ref = React.useRef<RouterImageElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
      <div
        style={{ backgroundColor: image.color ?? undefined, ...style }}
        className={cx('relative', className)}
      >
        <motion.div
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className={cx(props.fill && 'absolute inset-0')}
        >
          <NextImage
            ref={composedRefs}
            {...imageProps}
            quality={quality}
            src={image.src}
            alt={image.alt}
            draggable={false}
            onLoad={(event) => {
              setIsLoaded(true);
              imageProps.onLoad?.(event);
            }}
            className="select-none object-cover relative"
          />
        </motion.div>
      </div>
    );
  },
);
RouterImage.displayName = 'RouterImage';

/* -----------------------------------------------------------------------------------------------*/

export { RouterLink, RouterImage };
