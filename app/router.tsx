'use client';

import * as React from 'react';
import NextImage from 'next/image';
import { motion } from 'motion/react';
import { cx } from '@/cva.config';

import { useComposedRefs } from '@/components/utils/compose-refs';
import { ImageWithMetadata } from '@/types';

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

export { RouterImage };
