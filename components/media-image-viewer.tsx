'use client';

import * as React from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { AnimatePresence, animate, motion, useMotionValue } from 'motion/react';
import { createContext } from './utils/create-context';
import { useCoarsePointer } from './utils/use-coarse-pointer';
import type { StaticImageWithMetadata } from '@/types';
import { cx } from '@/cva.config';
import { MediaImage } from './media-image';
import { useSearchParams } from 'next/navigation';
import { useWindowSize } from 'usehooks-ts';
import { FocusRing } from './focus-ring';

const RENDER_OVERFLOW = 3;

const DRAG_DISTANCE_THRESHOLD = 48;
const DRAG_VELOCITY_DISTANCE = 12;
const SWIPE_VELOCITY = 800;

const SLIDE_TRANSITION = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
};
const INSTANT_TRANSITION = { duration: 0 } as const;

const mediaImageViewerHandle = Dialog.createHandle();

/* -------------------------------------------------------------------------------------------------
 * MediaImageViewer
 * -----------------------------------------------------------------------------------------------*/

type MediaImageViewerContextValue = {
  images: StaticImageWithMetadata[];
  onImageAdd: (image: StaticImageWithMetadata) => void;
  onImageRemove: (slug: string) => void;
};

const [MediaImageViewerProvider, useMediaImageViewerContext] =
  createContext<MediaImageViewerContextValue>('MediaImageViewer');

export const MediaImageViewer = ({ children }: { children: React.ReactNode }) => {
  const [images, setImages] = React.useState(() => new Map<string, StaticImageWithMetadata>());

  const onImageAdd = React.useCallback((image: StaticImageWithMetadata) => {
    setImages((prev) => {
      if (prev.get(image.slug) === image) return prev;
      return new Map(prev).set(image.slug, image);
    });
  }, []);

  const onImageRemove = React.useCallback((slug: string) => {
    setImages((prev) => {
      if (!prev.has(slug)) return prev;
      const next = new Map(prev);
      next.delete(slug);
      return next;
    });
  }, []);

  return (
    <MediaImageViewerProvider
      images={[...images.values()]}
      onImageAdd={onImageAdd}
      onImageRemove={onImageRemove}
    >
      {children}

      <React.Suspense fallback={null}>
        <MediaImageViewerContent />
      </React.Suspense>
    </MediaImageViewerProvider>
  );
};

MediaImageViewer.displayName = 'MediaImageViewer';

/* -------------------------------------------------------------------------------------------------
 * MediaImageViewerContent
 * -----------------------------------------------------------------------------------------------*/

interface MediaImageViewerContentProps {}

const MediaImageViewerContent: React.FC<MediaImageViewerContentProps> = () => {
  const context = useMediaImageViewerContext();
  const searchParams = useSearchParams();
  const imageParam = searchParams.get('image');

  const initialIndex = imageParam
    ? context.images.findIndex((image) => image.slug === imageParam)
    : 0;

  return (
    <Dialog.Root
      open={Boolean(imageParam)}
      onOpenChange={(open) => {
        if (!open) window.history.pushState(null, '', `?`);
      }}
      handle={mediaImageViewerHandle}
    >
      <Dialog.Portal>
        <Dialog.Popup
          className={cx(
            'fixed inset-0 bg-slate-1 outline-none flex flex-col z-50',
            'transition-opacity duration-250 ease-gentle',
            'data-[starting-style]:opacity-0',
            'data-[ending-style]:opacity-0',
          )}
        >
          <Dialog.Title className="sr-only">Artifact viewer</Dialog.Title>
          <Dialog.Description className="sr-only">
            Drag left or right to browse artifacts. Press Escape to close.
          </Dialog.Description>

          <MediaImageViewerContentImpl initialIndex={initialIndex} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

MediaImageViewerContent.displayName = 'MediaImageViewerContent';

/* -----------------------------------------------------------------------------------------------*/

interface MediaImageViewerContentImplProps {
  initialIndex: number;
}

const MediaImageViewerContentImpl: React.FC<MediaImageViewerContentImplProps> = ({
  initialIndex,
}) => {
  const context = useMediaImageViewerContext();
  const [index, setIndex] = React.useState(initialIndex);
  const [snapSlideX, setSnapSlideX] = React.useState(false);
  // Pixel shift of the last navigation; drives enter/exit so edge slides travel with the track.
  const [slideShift, setSlideShift] = React.useState(0);

  const windowSize = useWindowSize();
  const coarsePointer = useCoarsePointer();
  const dragX = useMotionValue(0);
  const radius = getWindowRadius(context.images.length);

  const windowSlides = React.useMemo(
    () => getWindow(context.images, index, radius),
    [context.images, index, radius],
  );

  const { slotOffsets, fadeWidthPx } = React.useMemo(() => {
    const widths = windowSlides.map(({ image }) => {
      const { width, height } = image.src;
      return fitSlide(windowSize.width, windowSize.height, width, height).width;
    });

    const activeWidth = widths[radius] ?? 0;

    return {
      slotOffsets: computeSlotOffsets(widths, radius),
      fadeWidthPx: getFadeWidthPx(windowSize.width, activeWidth),
    };
  }, [windowSlides, windowSize.width, windowSize.height, radius]);

  React.useLayoutEffect(() => {
    if (snapSlideX) setSnapSlideX(false);
  }, [snapSlideX, index]);

  const handleSelect = React.useCallback(
    (logicalIndex: number, slug: string) => {
      window.history.replaceState(null, '', `?image=${slug}`);
      if (logicalIndex === index) return;

      const slideIndex = windowSlides.findIndex((slide) => slide.logicalIndex === logicalIndex);
      setSlideShift(slideIndex === -1 ? 0 : (slotOffsets[slideIndex] ?? 0));
      setIndex(logicalIndex);
    },
    [index, slotOffsets, windowSlides],
  );

  const settleDrag = React.useCallback(
    (targetIndex: number, slug: string, slotOffset: number, releaseX: number) => {
      dragX.set(releaseX + slotOffset);
      setSnapSlideX(true);
      handleSelect(targetIndex, slug);
      animate(dragX, 0, SLIDE_TRANSITION);
    },
    [dragX, handleSelect],
  );

  return (
    <div className="relative flex-1 min-h-0 overflow-hidden touch-none [container-type:size]">
      <div className="fixed bottom-10 w-full z-20 flex items-center justify-center">
        <Dialog.Close
          render={
            <FocusRing className="outline-offset-0 focus-visible:outline-offset-2">
              <button className="relative p-4 lg:p-5 rounded-full before:content-[''] before:absolute before:-inset-2 before:rounded-full before:bg-gradient-to-tl before:from-slate-2 before:to-slate-5 before:scale-75 hover:before:scale-90 before:transition">
                <div className="relative">
                  <div className="size-5 flex flex-col justify-center">
                    <div className="space-y-[6px]">
                      <div
                        className={cx(
                          'h-0.5 bg-slate-12 rounded-full transition-transform duration-300 ease-spring',
                          'rotate-45 translate-y-1',
                        )}
                      />
                      <div
                        className={cx(
                          'h-0.5 bg-slate-12 rounded-full transition-transform duration-300 ease-spring',
                          '-rotate-45 -translate-y-1',
                        )}
                      />
                    </div>
                  </div>
                </div>
              </button>
            </FocusRing>
          }
        ></Dialog.Close>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ x: dragX }}
        drag={coarsePointer ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.4}
        dragMomentum={false}
        onDragStart={() => dragX.stop()}
        onDragEnd={(_event, info) => {
          const releaseX = dragX.get();
          const { velocity } = info;

          const goNext =
            releaseX <= -DRAG_DISTANCE_THRESHOLD ||
            (releaseX <= -DRAG_VELOCITY_DISTANCE && velocity.x <= -SWIPE_VELOCITY);
          const goPrev =
            releaseX >= DRAG_DISTANCE_THRESHOLD ||
            (releaseX >= DRAG_VELOCITY_DISTANCE && velocity.x >= SWIPE_VELOCITY);

          if (goNext) {
            const next = windowSlides.find((slide) => slide.slot === 1);
            const nextOffset = slotOffsets[radius + 1];
            if (next && nextOffset != null) {
              settleDrag(next.logicalIndex, next.image.slug, nextOffset, releaseX);
              return;
            }
          }

          if (goPrev) {
            const prev = windowSlides.find((slide) => slide.slot === -1);
            const prevOffset = slotOffsets[radius - 1];
            if (prev && prevOffset != null) {
              settleDrag(prev.logicalIndex, prev.image.slug, prevOffset, releaseX);
              return;
            }
          }

          animate(dragX, 0, SLIDE_TRANSITION);
        }}
      >
        <AnimatePresence custom={slideShift} initial={false}>
          {windowSlides.map((slide, slideIndex) => {
            const { width, height } = slide.image.src;
            const isActive = slide.slot === 0;
            const offsetX = slotOffsets[slideIndex] ?? 0;
            const priority = Math.abs(slide.slot) <= 1;

            return (
              <motion.div
                key={slide.image.slug}
                aria-hidden={!isActive}
                custom={slideShift}
                variants={{
                  enter: (shift: number) => ({
                    x: offsetX + shift,
                    opacity: 0,
                  }),
                  center: {
                    x: offsetX,
                    opacity: isActive ? 1 : 0.1,
                  },
                  exit: (shift: number) => ({
                    x: offsetX - shift,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: snapSlideX ? INSTANT_TRANSITION : SLIDE_TRANSITION,
                  opacity: SLIDE_TRANSITION,
                  zIndex: INSTANT_TRANSITION,
                }}
                transformTemplate={({ x }) => {
                  const xValue = typeof x === 'number' ? `${x}px` : (x ?? '0px');
                  return `translate3d(calc(-50% + ${xValue}), -50%, 0)`;
                }}
                style={{
                  width: `min(100cqw, calc(100cqh * ${width} / ${height}))`,
                  height: `min(100cqh, calc(100cqw * ${height} / ${width}))`,
                  left: '50%',
                  top: '50%',
                }}
                className={cx('absolute overflow-hidden')}
              >
                <MediaImage
                  image={slide.image}
                  fill
                  sizes={`min(100vw, calc(100vh * ${width} / ${height}))`}
                  priority={priority}
                  className="absolute inset-0 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {radius > 0 && fadeWidthPx > 0 && (
        <>
          {['left', 'right'].map((direction) => (
            <div
              key={direction}
              aria-hidden
              className={cx(
                'pointer-events-none absolute inset-y-0 z-10  from-slate-1 via-slate-1/50 to-transparent',
                direction === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
              )}
              style={{ width: fadeWidthPx }}
            />
          ))}
        </>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * MediaImageViewerTrigger
 * -----------------------------------------------------------------------------------------------*/

interface MediaImageViewerTriggerProps extends React.ComponentPropsWithoutRef<
  typeof Dialog.Trigger
> {
  image: StaticImageWithMetadata;
}

const MediaImageViewerTrigger: React.FC<MediaImageViewerTriggerProps> = ({ image, ...props }) => {
  const { onImageAdd, onImageRemove } = useMediaImageViewerContext();

  React.useLayoutEffect(() => {
    onImageAdd(image);
    return () => onImageRemove(image.slug);
  }, [image, onImageAdd, onImageRemove]);

  return (
    <Dialog.Trigger
      handle={mediaImageViewerHandle}
      {...props}
      className={cx('block', props.className)}
      onClick={(event) => {
        props.onClick?.(event);
        event.preventBaseUIHandler();
        window.history.pushState(null, '', `?image=${image.slug}`);
      }}
    />
  );
};

MediaImageViewerTrigger.displayName = 'MediaImageViewerTrigger';

/* -----------------------------------------------------------------------------------------------*/

function fitSlide(
  viewportWidth: number,
  viewportHeight: number,
  intrinsicWidth: number,
  intrinsicHeight: number,
) {
  const aspect = intrinsicWidth / intrinsicHeight;

  if (viewportWidth / viewportHeight > aspect) {
    const height = viewportHeight;
    return { width: height * aspect, height };
  }

  const width = viewportWidth;
  return { width, height: width / aspect };
}

function getWindowRadius(artifactCount: number): number {
  if (artifactCount <= 1) return 0;
  return Math.min(RENDER_OVERFLOW, Math.max(1, Math.floor((artifactCount - 1) / 2)));
}

function getWindow(images: StaticImageWithMetadata[], index: number, radius: number) {
  const count = images.length;

  return Array.from({ length: radius * 2 + 1 }, (_, i) => {
    const slot = i - radius;
    const logicalIndex = (index + slot + count) % count;

    return {
      slot,
      logicalIndex,
      image: images[logicalIndex],
    };
  });
}

function computeSlotOffsets(widths: number[], centerIndex: number): number[] {
  const offsets = new Array<number>(widths.length).fill(0);

  for (let i = centerIndex + 1; i < widths.length; i++) {
    offsets[i] = offsets[i - 1] + widths[i - 1] / 2 + widths[i] / 2;
  }

  for (let i = centerIndex - 1; i >= 0; i--) {
    offsets[i] = offsets[i + 1] - widths[i] / 2 - widths[i + 1] / 2;
  }

  return offsets;
}

function getFadeWidthPx(viewportWidth: number, activeWidth: number): number {
  return Math.max(0, (viewportWidth - activeWidth) / 2);
}

/* -----------------------------------------------------------------------------------------------*/

export const Root = MediaImageViewer;
export const Content = MediaImageViewerContent;
export const Trigger = MediaImageViewerTrigger;
