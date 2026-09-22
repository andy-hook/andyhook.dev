'use client';

import * as React from 'react';
import NextImage from 'next/image';
import { cx } from '@/cva.config';

import { useComposedRefs } from '@/components/utils/compose-refs';
import { ImageWithMetadata } from '@/types';

type MediaImageElement = React.ComponentRef<typeof NextImage>;

interface MediaImageProps extends Omit<
  React.ComponentPropsWithoutRef<typeof NextImage>,
  'src' | 'alt'
> {
  image: ImageWithMetadata;
  withFallback?: boolean;
}

const MediaImage = React.forwardRef<MediaImageElement, MediaImageProps>((props, forwardedRef) => {
  const { image, className, style, quality = 90, withFallback = true, ...imageProps } = props;
  const ref = React.useRef<MediaImageElement>(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div
      style={{ backgroundColor: withFallback ? (image.color ?? undefined) : undefined, ...style }}
      className={cx('relative', className)}
    >
      <div
        className={cx(
          'transition-opacity duration-300',
          props.fill && 'absolute inset-0',
          isLoaded ? 'opacity-100' : 'opacity-0',
        )}
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
      </div>
    </div>
  );
});
MediaImage.displayName = 'MediaImage';

export { MediaImage };
