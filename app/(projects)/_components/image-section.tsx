import * as React from 'react';
import { Gutter } from '@/components/gutter';
import { Line } from '@/components/line';
import { Container } from '@/components/container';
import { MediaImage } from '@/components/media-image';
import { RouteTransition } from '@/components/route-transition';
import * as MediaImageViewer from '@/components/media-image-viewer';
import { FocusRing } from '@/components/focus-ring';
import * as StickyLabel from '@/components/sticky-label';

type ImageSectionElement = React.ComponentRef<'section'>;

type ImageSectionImage = MediaImageViewer.MediaImageViewerImage & {
  title: string;
};

interface ImageSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  image: ImageSectionImage;
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

                <FocusRing className="outline-offset-0 focus-visible:outline-offset-3 rounded lg:rounded-3xl">
                  <StickyLabel.Root
                    render={<MediaImageViewer.Trigger image={image} slug={image.slug} />}
                  >
                    <StickyLabel.Chip label={image.title} />
                    <div className="rounded-xl lg:rounded-3xl overflow-hidden relative">
                      <MediaImage image={image} className="w-full" sizes="100vw" />
                    </div>
                  </StickyLabel.Root>
                </FocusRing>
              </div>
            </Container>
          </Gutter>
        </RouteTransition>
      </section>
    );
  },
);

ImageSection.displayName = 'ImageSection';
