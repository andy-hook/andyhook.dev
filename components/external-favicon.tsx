'use client';

import * as React from 'react';

import { useLayoutEffect } from '@/components/utils/use-layout-effect';
import { RouterImage } from '@/app/router';

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

type ExternalFaviconElement = React.ComponentRef<typeof RouterImage>;

interface ExternalFaviconProps extends React.ComponentPropsWithoutRef<typeof RouterImage> {}

export const ExternalFavicon = React.forwardRef<ExternalFaviconElement, ExternalFaviconProps>(
  ({ image: imageProp, ...props }, forwardedRef) => {
    const imageSrc = `https://www.google.com/s2/favicons?domain=${imageProp.src}`;
    const imageLoadingStatus = useImageLoadingStatus(imageSrc);

    const image = { ...imageProp, src: imageSrc };

    return imageLoadingStatus === 'loaded' ? (
      <RouterImage image={image} {...props} ref={forwardedRef} />
    ) : null;
  },
);

ExternalFavicon.displayName = 'ExternalFavicon';

/* -----------------------------------------------------------------------------------------------*/

function useImageLoadingStatus(src: string) {
  const [loadingStatus, setLoadingStatus] = React.useState<ImageLoadingStatus>('idle');

  useLayoutEffect(() => {
    let isMounted = true;
    const image = new window.Image();

    const updateStatus = (status: ImageLoadingStatus) => () => {
      if (!isMounted) return;
      setLoadingStatus(status);
    };

    setLoadingStatus('loading');
    image.onload = updateStatus('loaded');
    image.onerror = updateStatus('error');
    image.src = src;

    return () => {
      isMounted = false;
    };
  }, [src]);

  return loadingStatus;
}
