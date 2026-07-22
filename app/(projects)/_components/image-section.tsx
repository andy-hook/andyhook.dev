import * as React from 'react';
import { Gutter } from '@/components/gutter';
import { Line } from '@/components/line';
import { Container } from '@/components/container';
import { Image } from '@/components/image';
import { RouteTransition } from '@/components/route-transition';
import { ImageWithMetadata } from '@/types';

type ImageSectionElement = React.ComponentRef<'section'>;

interface ImageSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  image: ImageWithMetadata;
}

export const ImageSection = React.forwardRef<ImageSectionElement, ImageSectionProps>(
  ({ image, ...props }, forwardedRef) => {
    return (
      <section {...props} ref={forwardedRef}>
        <RouteTransition multiplier={10}>
          <Gutter collapse>
            <Container width="widest">
              <div className="relative">
                <Line orientation="vertical" className="absolute left-0 -top-12 -bottom-12" />
                <Line orientation="vertical" className="absolute right-0 -top-8 -bottom-8" />

                <Line
                  className="absolute top-0 -left-[100vw] -right-[100vw]"
                  solid
                  contrast="low"
                />

                <Line
                  className="absolute bottom-0 -left-[100vw] -right-[100vw]"
                  solid
                  contrast="low"
                />

                <div className="rounded-xl lg:rounded-3xl overflow-hidden relative">
                  <Image image={image} className="w-full" sizes="100vw" />
                </div>
              </div>
            </Container>
          </Gutter>
        </RouteTransition>
      </section>
    );
  },
);

ImageSection.displayName = 'ImageSection';
