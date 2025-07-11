'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { projects } from '@/data';
import { cx } from '@/cva.config';
import NextImage from 'next/image';

import { createContext } from '@/components/utils/create-context';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';
import { Spinner } from '@/components/spinner';
import { ImageWithMetadata } from '@/types';

const GENTLE_TRANSITION = {
  type: 'spring',
  stiffness: 110,
  damping: 20,
  mass: 1,
};

const SNAPPY_TRANSITION = {
  type: 'spring',
  stiffness: 250,
  damping: 30,
  mass: 1,
};

type TransitionState = 'initial' | 'idle' | 'cover' | 'loading' | 'enter' | 'intro';

/* -------------------------------------------------------------------------------------------------
 * RouterProvider
 * -----------------------------------------------------------------------------------------------*/

type RouterContextValue = {
  onLinkClick: (path: string) => void;
  state: TransitionState;
  onImageMount: (id: string) => void;
  onImageLoad: (id: string) => void;
};

const [RouterProviderImpl, useRouterContext] = createContext<RouterContextValue>('Router');

const RouterProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = React.useState<TransitionState>('initial');
  const [imagesReadyMap, setImagesReadyMap] = React.useState<Map<string, boolean> | null>(null);
  const [navigationPending, startTransition] = React.useTransition();
  const [screenFilled, setScreenFilled] = React.useState(false);
  const [path, setPath] = React.useState('');

  const spinnerVariant = state === 'initial' ? 'dark' : getSpinnerVariantFromPath(path);
  const allImagesReady = imagesReadyMap && [...imagesReadyMap.values()].every((value) => value);

  const title = React.useMemo(() => {
    const defaultTitle = 'Home';
    if (!path) return defaultTitle;

    const project = projects.find((project) => project.id === path.replace('/', ''));
    return project?.title ?? defaultTitle;
  }, [path]);

  React.useEffect(() => {
    if (screenFilled && !navigationPending) {
      setState('loading');
      setScreenFilled(false);
    }
  }, [screenFilled, navigationPending]);

  React.useEffect(() => {
    if (allImagesReady) {
      if (state === 'initial') setTimeout(() => setState('intro'), 500);
      if (state === 'loading') setTimeout(() => setState('enter'), 50);
      setImagesReadyMap(null);
    }
  }, [allImagesReady, state]);

  return (
    <RouterProviderImpl
      state={state}
      onLinkClick={(href) => {
        console.log('onLinkClick', href, pathname);
        setState('cover');
        setPath(href);
      }}
      onImageMount={(id) => {
        if (state === 'initial' || state === 'loading') {
          setImagesReadyMap((prev) => {
            const prevMap = new Map(prev ? prev : undefined);
            prevMap.set(id, false);
            return prevMap;
          });
        }
      }}
      onImageLoad={(id) => {
        if (state === 'initial' || state === 'loading') {
          setImagesReadyMap((prev) => {
            const prevMap = new Map(prev ? prev : undefined);
            prevMap.set(id, true);
            return prevMap;
          });
        }
      }}
    >
      <div className={cx(state !== 'idle' && 'pointer-events-none', 'overflow-hidden')}>
        {children}
      </div>
      <AnimatePresence>
        {(state === 'initial' || state === 'cover') && (
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 25, scale: 0.9 },
              exit: { opacity: 0, y: 0, scale: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-10 right-10 md:bottom-16 md:right-16 lg:bottom-24 lg:right-24 size-4 z-50 will-change-motion"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 30,
              mass: 1,
            }}
          >
            <Spinner
              visible
              width="100%"
              variant={spinnerVariant}
              height="100%"
              className="absolute top-0 left-0"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state === 'initial' && (
          <motion.div
            variants={{
              initial: { opacity: 1 },
              intro: { opacity: 0 },
            }}
            initial="initial"
            exit="intro"
            onAnimationComplete={(definition) => {
              if (definition === 'intro') setState('idle');
            }}
            className="fixed inset-0 bg-gradient-to-tl from-slate-1 to-slate-2 z-40 pointer-events-none will-change-motion"
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(state === 'cover' || state === 'loading') && (
          <motion.div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
            <motion.div
              variants={{
                idle: { y: '100vh' },
                cover: { y: '0%' },
                enter: { y: '-100vh' },
              }}
              initial="idle"
              animate="cover"
              exit="enter"
              onAnimationComplete={(definition) => {
                if (definition === 'cover') {
                  startTransition(() => router.push(path));
                  setScreenFilled(true);
                } else if (definition === 'enter') {
                  setPath('');
                  setState('idle');
                }
              }}
              className="absolute inset-0 bg-slate-light-1 overflow-hidden shadow-lg flex items-center justify-center will-change-motion"
              transition={SNAPPY_TRANSITION}
            >
              <motion.div
                variants={{
                  idle: {
                    y: '-80vh',
                    opacity: 0,
                  },
                  cover: {
                    y: 0,
                    opacity: 1,
                  },
                  enter: {
                    y: '80vh',
                    opacity: 0,
                  },
                }}
                transition={SNAPPY_TRANSITION}
                className="absolute inset-0 flex items-center will-change-motion"
              >
                <div className="flex flex-col gap-28 items-center justify-center w-full relative text-[min(20vh,20vw)]">
                  <div className="relative">
                    <div className="relative z-10 ml-[-0.03em] font-normal leading-none font-display text-slate-light-4 tracking-[-0.08em] -mb-[0.125em] -mt-[0.34em]">
                      {title}
                      <span className="w-[0.07em] inline-block" />
                    </div>

                    <Line
                      orientation="vertical"
                      className="absolute left-0 -top-[0.2em] -bottom-[1.6em]"
                      scheme="light"
                    />

                    <Line
                      orientation="vertical"
                      className="absolute right-0 -top-[1em] -bottom-[0.2em]"
                      scheme="light"
                    />

                    <Line
                      orientation="horizontal"
                      className="absolute -left-[0.8em] -right-[1em] top-0"
                      scheme="light"
                    />

                    <Line
                      orientation="horizontal"
                      solid
                      className="absolute -left-[100vw] -right-[100vw] bottom-0"
                      scheme="light"
                    />

                    <Hatch
                      orientation="horizontal"
                      className="absolute -left-[100vw] w-[100vw] top-0 bottom-0"
                      scheme="light"
                      contrast="low"
                    />

                    <Hatch
                      orientation="horizontal"
                      className="absolute -right-[100vw] w-[100vw] top-0 bottom-0"
                      scheme="light"
                      contrast="low"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </RouterProviderImpl>
  );
};

/* -------------------------------------------------------------------------------------------------
 * RouterLink
 * -----------------------------------------------------------------------------------------------*/

type RouterLinkElement = React.ComponentRef<typeof NextLink>;
type NextLinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;
interface RouterLinkProps extends NextLinkProps {
  href: string;
}

const RouterLink = React.forwardRef<RouterLinkElement, RouterLinkProps>((props, forwardedRef) => {
  const context = useRouterContext();

  const isExternal = props.href.startsWith('https://');
  const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <NextLink
      {...props}
      ref={forwardedRef}
      onClick={(event) => {
        props.onClick?.(event);

        if (isExternal) return;

        if (!event.isDefaultPrevented() && !isModifiedEvent(event)) {
          event.preventDefault();
          context.onLinkClick(props.href);
        }
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

const BASE_DISTANCE = 50;
interface RouterTransitionProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  multiplier: number;
}

const RouterTransition = React.forwardRef<RouterTransitionElement, RouterTransitionProps>(
  (props, forwardedRef) => {
    const { multiplier, ...transitionProps } = props;
    const ref = React.useRef<RouterTransitionElement>(null);
    const context = useRouterContext();
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        variants={{
          idle: { y: 0, opacity: 1 },
          cover: { y: -25, opacity: 0 },
          enter: { y: [BASE_DISTANCE * multiplier, 0], opacity: [0, 1] },
          intro: { y: [BASE_DISTANCE * (multiplier / 2), 0], opacity: [0, 1] },
        }}
        animate={isInView ? context.state : 'idle'}
        transition={context.state === 'intro' ? GENTLE_TRANSITION : SNAPPY_TRANSITION}
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

interface RouterImageProps
  extends Omit<React.ComponentPropsWithoutRef<typeof NextImage>, 'src' | 'alt'> {
  image: ImageWithMetadata;
}

const RouterImage = React.forwardRef<RouterImageElement, RouterImageProps>(
  (props, forwardedRef) => {
    const { image, className, ...imageProps } = props;
    const ref = React.useRef<RouterImageElement>(null);
    const id = React.useId();
    const context = useRouterContext();
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isInView, setInView] = React.useState<boolean | null>(null);

    React.useEffect(() => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          const [entry] = entries;
          setInView(entry.isIntersecting);
          observer.disconnect();
        });

        observer.observe(ref.current);
        return () => observer.disconnect();
      }
    }, []);

    const { onImageMount, onImageLoad } = context;

    React.useEffect(() => {
      onImageMount(id);
    }, [onImageMount, id]);

    // If navigating to the same route, the image will already be in cache
    // so onLoad won't fire, so we react to the global loading state as well
    // If an image is offset it also won't fire onLoad, so we immediately mark as ready
    React.useEffect(() => {
      const outOfView = isInView === false;
      const isReady = ref.current?.complete || outOfView;
      if (isReady) onImageLoad(id);
    }, [onImageLoad, id, isInView]);

    return (
      <div
        style={{ backgroundColor: image.color ?? undefined }}
        className={cx('relative', className)}
      >
        <motion.div
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
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
              onImageLoad(id);
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

const getSpinnerVariantFromPath = (path: string) => {
  if (path === 'radix') return 'radix';
  if (path === 'aragon') return 'aragon';
  if (path === 'blocks') return 'blocks';
  if (path === 'dash') return 'dash';
  return 'light';
};

const isModifiedEvent = (event: React.MouseEvent) => {
  const eventTarget = event.currentTarget;
  const target = eventTarget.getAttribute('target');
  return (
    (target && target !== '_self') ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (event.nativeEvent && event.nativeEvent.which === 2)
  );
};

const useRouterState = () => {
  const context = useRouterContext();
  return context.state;
};

export { RouterProvider, RouterLink, RouterTransition, RouterImage, useRouterState };
