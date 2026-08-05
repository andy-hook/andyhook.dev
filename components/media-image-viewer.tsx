'use client';

import * as React from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { AnimatePresence, animate, motion, useMotionValue } from 'motion/react';
import { createContext } from './utils/create-context';
import type { StaticImageWithMetadata } from '@/types';
import { cx, cva, type VariantProps } from '@/cva.config';
import { MediaImage } from './media-image';
import { useSearchParams } from 'next/navigation';
import { useEventCallback, useWindowSize } from 'usehooks-ts';
import { FocusRing } from './focus-ring';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

type PaginateDirection = -1 | 1;

const DRAG_DISTANCE_THRESHOLD = 48;
const DRAG_VELOCITY_DISTANCE = 12;
const SWIPE_VELOCITY = 800;

const KEYBOARD_PAGINATE_DIRECTION: Record<string, PaginateDirection> = {
  ArrowLeft: -1,
  ArrowUp: -1,
  ArrowRight: 1,
  ArrowDown: 1,
};

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
            'transition-[opacity,transform] duration-300 ease-snappy',
            'data-[starting-style]:opacity-0 data-[starting-style]:translate-y-[5vh] data-[starting-style]:scale-110',
            'data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[ending-style]:-translate-y-[1vh] data-[ending-style]:scale-105',
          )}
        >
          <Dialog.Title className="sr-only">Image viewer</Dialog.Title>
          <Dialog.Description className="sr-only">
            Use the left and right arrow keys to browse images. Press Escape to close.
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
  const [snapSlides, setSnapSlides] = React.useState(false);

  const windowSize = useWindowSize();
  const radius = getWindowRadius(context.images, index, {
    width: windowSize.width,
    height: windowSize.height,
  });

  const windowSlides = React.useMemo(
    () => getWindow(context.images, index, radius),
    [context.images, index, radius],
  );

  const { slideLayouts, slotOffsets, fadeWidthPx } = React.useMemo(() => {
    const viewport = {
      width: windowSize.width,
      height: windowSize.height,
    };

    const layouts = windowSlides.map(({ image }) =>
      fitSlide(viewport, {
        width: image.src.width,
        height: image.src.height,
      }),
    );

    const widths = layouts.map((layout) => layout.width);
    const activeWidth = widths[radius] ?? 0;

    return {
      slideLayouts: layouts,
      slotOffsets: computeSlotOffsets(widths, radius),
      fadeWidthPx: getFadeWidthPx(windowSize.width, activeWidth),
    };
  }, [windowSlides, windowSize.width, windowSize.height, radius]);

  const paginate = React.useCallback(
    (direction: PaginateDirection, { snap }: { snap: boolean }) => {
      const count = context.images.length;
      if (count <= 1) return;

      const nextIndex = (index + direction + count) % count;
      const image = context.images[nextIndex];
      if (!image) return;

      window.history.replaceState(null, '', `?image=${image.slug}`);
      setSnapSlides(snap);
      setIndex(nextIndex);
    },
    [context.images, index],
  );

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const direction = KEYBOARD_PAGINATE_DIRECTION[event.key];
      if (direction == null) return;

      event.preventDefault();
      paginate(direction, { snap: false });
    };

    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [paginate]);

  return (
    <div className="relative flex-1 min-h-0 overflow-hidden touch-none [container-type:size]">
      <div className="fixed bottom-10 w-full z-20 flex items-center justify-center gap-2">
        {context.images.length > 1 && (
          <MediaImageViewerNavigation
            size="sm"
            aria-label="Previous"
            onClick={() => paginate(-1, { snap: false })}
          >
            <ChevronLeftIcon className="size-5" />
          </MediaImageViewerNavigation>
        )}

        <Dialog.Close
          render={
            <MediaImageViewerNavigation aria-label="Close">
              <XMarkIcon className="size-8" />
            </MediaImageViewerNavigation>
          }
        />

        {context.images.length > 1 && (
          <MediaImageViewerNavigation
            size="sm"
            aria-label="Next"
            onClick={() => paginate(1, { snap: false })}
          >
            <ChevronRightIcon className="size-5" />
          </MediaImageViewerNavigation>
        )}
      </div>

      <MediaImageViewerTrack
        onCalculateOffset={(direction: PaginateDirection) => slotOffsets[radius + direction]}
        onCommit={(direction) => paginate(direction, { snap: true })}
      >
        <AnimatePresence initial={false}>
          {windowSlides.map((slide, slideIndex) => {
            const { width, height } = slide.image.src;
            const isActive = slide.slot === 0;
            const layout = slideLayouts[slideIndex] ?? { width: 0, height: 0 };
            const offsetX = slotOffsets[slideIndex] ?? 0;
            const priority = Math.abs(slide.slot) <= 1;

            return (
              <motion.div
                key={slide.image.slug}
                aria-hidden={!isActive}
                variants={{
                  enter: () => ({ x: offsetX }),
                  center: { x: offsetX },
                  exit: () => ({ x: offsetX }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: snapSlides ? INSTANT_TRANSITION : SLIDE_TRANSITION,
                  opacity: snapSlides ? INSTANT_TRANSITION : SLIDE_TRANSITION,
                }}
                transformTemplate={({ x }) => `translate3d(${roundTransformPx(x)}px, 0, 0)`}
                style={{
                  width: layout.width,
                  height: layout.height,
                  left: '50%',
                  top: '50%',
                  marginLeft: -Math.round(layout.width / 2),
                  marginTop: -Math.round(layout.height / 2),
                }}
                className={cx('absolute overflow-hidden bg-slate-1', isActive ? 'z-10' : 'z-0')}
              >
                <MediaImage
                  image={slide.image}
                  withFallback={false}
                  fill
                  sizes={`min(100vw, calc(100vh * ${width} / ${height}))`}
                  priority={priority}
                  className={cx(
                    'absolute inset-0 pointer-events-none',
                    isActive ? 'opacity-100' : 'opacity-10',
                  )}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </MediaImageViewerTrack>

      {radius > 0 &&
        fadeWidthPx > 0 &&
        ['left', 'right'].map((direction) => (
          <div
            key={direction}
            aria-hidden
            className={cx(
              'pointer-events-none absolute inset-y-0 z-10  from-slate-1/90 via-slate-1/30 to-transparent',
              direction === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
            )}
            style={{ width: fadeWidthPx }}
          />
        ))}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * MediaImageViewerNavigation
 * -----------------------------------------------------------------------------------------------*/

const mediaImageViewerNavigation = cva({
  base: 'relative rounded-full text-slate-12 before:content-[""] before:absolute before:rounded-full before:bg-gradient-to-tl before:from-slate-2 before:to-slate-5 before:scale-75 hover:before:scale-90 before:transition',
  variants: {
    size: {
      sm: 'p-3 before:-inset-1.5',
      md: 'p-4 before:-inset-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type MediaImageViewerNavigationElement = React.ComponentRef<'button'>;

interface MediaImageViewerNavigationProps
  extends
    React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof mediaImageViewerNavigation> {}

const MediaImageViewerNavigation = React.forwardRef<
  MediaImageViewerNavigationElement,
  MediaImageViewerNavigationProps
>(({ className, size, children, ...props }, forwardedRef) => {
  return (
    <FocusRing className="outline-offset-0 focus-visible:outline-offset-2">
      <button
        type="button"
        {...props}
        ref={forwardedRef}
        className={mediaImageViewerNavigation({ size, className })}
      >
        <span className="relative">{children}</span>
      </button>
    </FocusRing>
  );
});

MediaImageViewerNavigation.displayName = 'MediaImageViewerNavigation';

/* -------------------------------------------------------------------------------------------------
 * MediaImageViewerTrack
 * -----------------------------------------------------------------------------------------------*/

interface MediaImageViewerTrackProps {
  children: React.ReactNode;
  onCalculateOffset: (direction: PaginateDirection) => number | undefined;
  onCommit: (direction: PaginateDirection) => void;
}

const MediaImageViewerTrack: React.FC<MediaImageViewerTrackProps> = ({
  children,
  onCalculateOffset,
  onCommit,
}) => {
  const handleCommit = useEventCallback(onCommit);
  const handleCalculateOffset = useEventCallback(onCalculateOffset);
  const dragX = useMotionValue(0);

  const settleDrag = React.useCallback(
    (direction: PaginateDirection, offset: number, releaseX: number) => {
      dragX.set(releaseX + offset);
      handleCommit(direction);
      animate(dragX, 0, SLIDE_TRANSITION);
    },
    [dragX, handleCommit],
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x: dragX }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
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
          const offset = handleCalculateOffset(1);
          if (offset != null) {
            settleDrag(1, offset, releaseX);
            return;
          }
        }

        if (goPrev) {
          const offset = handleCalculateOffset(-1);
          if (offset != null) {
            settleDrag(-1, offset, releaseX);
            return;
          }
        }

        animate(dragX, 0, SLIDE_TRANSITION);
      }}
    >
      {children}
    </motion.div>
  );
};

MediaImageViewerTrack.displayName = 'MediaImageViewerTrack';

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

type Dimensions = {
  width: number;
  height: number;
};

function roundTransformPx(value: string | number | undefined) {
  if (typeof value === 'number') return Math.round(value);
  if (typeof value === 'string') return Math.round(parseFloat(value) || 0);
  return 0;
}

function fitSlide(viewport: Dimensions, intrinsic: Dimensions) {
  const aspect = intrinsic.width / intrinsic.height;

  if (viewport.width / viewport.height > aspect) {
    const height = Math.round(viewport.height);
    return { width: Math.round(height * aspect), height };
  }

  const width = Math.round(viewport.width);
  return { width, height: Math.round(width / aspect) };
}

function getWindowRadius(
  images: StaticImageWithMetadata[],
  index: number,
  viewport: Dimensions,
): number {
  const count = images.length;
  if (count <= 1) return 0;

  const maxRadius = Math.floor((count - 1) / 2);
  if (viewport.width <= 0 || viewport.height <= 0) return Math.min(1, maxRadius);

  return Math.max(
    getSideRadius(images, index, -1, viewport, maxRadius),
    getSideRadius(images, index, 1, viewport, maxRadius),
  );
}

function getSideRadius(
  images: StaticImageWithMetadata[],
  index: number,
  direction: PaginateDirection,
  viewport: Dimensions,
  maxRadius: number,
): number {
  const count = images.length;
  const halfViewport = viewport.width / 2;
  const centerImage = images[index];
  if (!centerImage) return Math.min(1, maxRadius);

  const intrinsic = {
    width: centerImage.src.width,
    height: centerImage.src.height,
  };

  let covered = fitSlide(viewport, intrinsic).width / 2;

  let radius = 0;
  while (radius < maxRadius) {
    if (covered >= halfViewport) return radius + 1;
    radius += 1;
    const image = images[(index + direction * radius + count) % count];
    if (!image) return radius;
    covered += fitSlide(viewport, intrinsic).width;
  }

  return maxRadius;
}

function getWindow(images: StaticImageWithMetadata[], index: number, radius: number) {
  const count = images.length;

  return Array.from({ length: radius * 2 + 1 }, (_, i) => {
    const slot = i - radius;
    const imageIndex = (index + slot + count) % count;

    return {
      slot,
      image: images[imageIndex],
    };
  });
}

function computeSlotOffsets(widths: number[], centerIndex: number): number[] {
  const offsets = new Array<number>(widths.length).fill(0);

  for (let i = centerIndex + 1; i < widths.length; i++) {
    offsets[i] = Math.round(offsets[i - 1] + widths[i - 1] / 2 + widths[i] / 2);
  }

  for (let i = centerIndex - 1; i >= 0; i--) {
    offsets[i] = Math.round(offsets[i + 1] - widths[i] / 2 - widths[i + 1] / 2);
  }

  return offsets;
}

function getFadeWidthPx(viewportWidth: number, activeWidth: number): number {
  return Math.max(0, Math.round((viewportWidth - activeWidth) / 2));
}

/* -----------------------------------------------------------------------------------------------*/

export const Root = MediaImageViewer;
export const Content = MediaImageViewerContent;
export const Trigger = MediaImageViewerTrigger;
