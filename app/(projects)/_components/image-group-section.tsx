import * as React from 'react';
import { cva } from '@/cva.config';
import { ImageWithMetadata, ProjectId } from '@/types';

import { Gutter } from '@/components/gutter';
import { Container } from '@/components/container';
import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';
import { RouterImage, RouterTransition } from '@/app/router';

const imageGroupSectionBackground = cva({
  base: 'bg-gradient-to-br px-4 md:px-12 lg:px-16 rounded-2xl md:rounded-3xl overflow-hidden',
  variants: {
    project: {
      radix: 'from-radix-3 to-radix-1',
      aragon: 'from-aragon-5 to-aragon-1',
      blocks: 'from-blocks-3 to-blocks-1',
      dash: 'from-dash-3 to-dash-1',
    },
  },
});

type ImageGroupSectionElement = React.ComponentRef<'section'>;

interface ImageGroupSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  images: ImageWithMetadata[];
  project: ProjectId;
}

export const ImageGroupSection = React.forwardRef<ImageGroupSectionElement, ImageGroupSectionProps>(
  ({ images, project, ...props }, forwardedRef) => {
    return (
      <section {...props} ref={forwardedRef}>
        <RouterTransition multiplier={10}>
          <Gutter size="small">
            <div className={imageGroupSectionBackground({ project })}>
              <Container width="widest" className="relative py-4 md:py-12 lg:py-16 2xl:py-[6vw]">
                <Line
                  orientation="vertical"
                  contrast="low"
                  scheme="light"
                  className="absolute left-0 top-0 bottom-0"
                  solid
                />
                <Line
                  orientation="vertical"
                  contrast="low"
                  scheme="light"
                  className="absolute right-0 top-0 bottom-0"
                  solid
                />
                <div className="space-y-4 md:space-y-12 lg:space-y-16 2xl:space-y-[6vw]">
                  {images.map((image) => {
                    return (
                      <div className="relative" key={image.alt}>
                        <Hatch
                          orientation="vertical"
                          className="absolute left-[-100vw] top-0 bottom-0 right-full opacity-30"
                          scheme="light"
                          contrast="low"
                        />
                        <Hatch
                          orientation="vertical"
                          className="absolute left-full top-0 bottom-0 right-[-100vw] opacity-30"
                          scheme="light"
                          contrast="low"
                        />
                        <Line
                          contrast="low"
                          scheme="light"
                          className="absolute -left-full top-0 -right-full"
                          solid
                        />
                        <Line
                          contrast="low"
                          scheme="light"
                          className="absolute -left-full bottom-0 -right-full"
                          solid
                        />
                        <div className="rounded-xl overflow-hidden shadow-xl relative">
                          <RouterImage
                            image={image}
                            className="w-full"
                            quality={90}
                            sizes="100vw"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </div>
          </Gutter>
        </RouterTransition>
      </section>
    );
  },
);

ImageGroupSection.displayName = 'ImageGroupSection';
