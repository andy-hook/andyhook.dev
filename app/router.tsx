'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { motion } from 'motion/react';
import { cx } from '@/cva.config';
import NextImage from 'next/image';

import { useComposedRefs } from '@/components/utils/compose-refs';
import { ImageWithMetadata } from '@/types';

const SNAPPY_TRANSITION = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
  mass: 1,
  delay: 0.15,
} as const;

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
 * RouterTransition
 * -----------------------------------------------------------------------------------------------*/

type RouterTransitionElement = React.ComponentRef<typeof motion.div>;

const BASE_DISTANCE = 6;
interface RouterTransitionProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  multiplier: number;
}

const RouterTransition = React.forwardRef<RouterTransitionElement, RouterTransitionProps>(
  (props, forwardedRef) => {
    const { multiplier, ...transitionProps } = props;
    const ref = React.useRef<RouterTransitionElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);

    return (
      <motion.div
        variants={{
          idle: { y: 0, opacity: 0 },
          enter: { y: [BASE_DISTANCE * multiplier, 0], opacity: 1 },
        }}
        initial="idle"
        animate="enter"
        transition={SNAPPY_TRANSITION}
        {...transitionProps}
        className={cx('will-change-motion', transitionProps.className)}
        ref={composedRefs}
      />
    );
  },
);
RouterTransition.displayName = 'RouterTransition';

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
    const { image, className, style, ...imageProps } = props;
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

export { RouterLink, RouterTransition, RouterImage };
