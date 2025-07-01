'use client';

import * as React from 'react';
import * as Floating from '@floating-ui/react';
import { cva, cx } from '@/cva.config';

import * as ScrollArea from '@/components/primitives/scroll-area';

import { useLayoutEffect } from '@/components/utils/use-layout-effect';

import { AnimatePresence, cubicBezier, motion, useInView } from 'motion/react';
import { createContext } from '@/components/utils/create-context';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { Copy } from '@/components/copy';
import { SocialLink } from '@/components/social-link';
import { Line } from '@/components/line';
import { MouseHover } from '@/components/primitives/mouse-hover';
import { ProjectId } from '@/types';
import { getProjectById } from '@/data';
import { RouterLink, useRouterState } from './router';
import { useDevice } from '@/components/utils/use-device';
import { FocusRing } from '@/components/focus-ring';

const MOTION_TRANSITION = {
  ease: cubicBezier(0.5, 0.2, 0.2, 1),
  duration: 0.35,
};

function useFloating({ open, onOpenChange }: { open: boolean; onOpenChange(open: boolean): void }) {
  const { context, refs } = Floating.useFloating({
    open,
    onOpenChange,
  });

  const { setReference, setFloating } = refs;

  const { getReferenceProps, getFloatingProps } = Floating.useInteractions([
    Floating.useClick(context),
    Floating.useRole(context),
    Floating.useDismiss(context, { outsidePressEvent: 'mousedown' }),
  ]);

  return React.useMemo(
    () => ({ context, getReferenceProps, getFloatingProps, setReference, setFloating }),
    [context, getReferenceProps, getFloatingProps, setReference, setFloating],
  );
}

/* -------------------------------------------------------------------------------------------------
 * Sidebar
 * -----------------------------------------------------------------------------------------------*/

type SidebarContextValue = {
  open: boolean;
  sidebarWidth: number | undefined;
  onExitAnimationComplete(): void;
  headingId: string;
  descriptionId: string;
  floating: ReturnType<typeof useFloating>;
};

const SIDEBAR_NAME = 'Sidebar';

const [SidebarProvider, useSidebarContext] = createContext<SidebarContextValue>(SIDEBAR_NAME);

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState<number>();
  const id = React.useId();
  const floating = useFloating({ open, onOpenChange: setOpen });
  const routerState = useRouterState();

  // Close sidebar when navigating
  React.useEffect(() => {
    if (routerState === 'cover') setOpen(false);
  }, [routerState]);

  // Match fixed element offset applied by floating ui lockScroll
  useLayoutEffect(() => {
    if (open) {
      const scrollbarWidth = parseInt(document.body.style.paddingRight) || undefined;
      setSidebarWidth(open ? scrollbarWidth : undefined);
    }
  }, [open]);

  return (
    <SidebarProvider
      open={open}
      sidebarWidth={sidebarWidth}
      onExitAnimationComplete={() => setSidebarWidth(undefined)}
      headingId={id}
      descriptionId={id}
      floating={floating}
    >
      {children}
    </SidebarProvider>
  );
};

Sidebar.displayName = 'Sidebar';

/* -------------------------------------------------------------------------------------------------
 * SidebarTrigger
 * -----------------------------------------------------------------------------------------------*/

type SidebarTriggerElement = React.ComponentRef<'button'>;

interface SidebarTriggerProps extends React.ComponentPropsWithoutRef<'button'> {}

const SidebarTrigger = React.forwardRef<SidebarTriggerElement, SidebarTriggerProps>(
  ({ className, ...props }, forwardedRef) => {
    const context = useSidebarContext();
    const composedRefs = useComposedRefs(
      (node) => context.floating.setReference(node),
      forwardedRef,
    );

    return (
      <FocusRing
        className="outline-offset-0 focus-visible:outline-offset-2"
        scheme={context.open ? 'light' : 'dark'}
      >
        <button
          {...props}
          className={cx(
            'p-4 lg:p-5 rounded-full fixed top-5 right-5 md:top-7 md:right-7 lg:top-10 lg:right-10 before:content-[""] before:absolute before:-inset-2 before:rounded-full before:bg-gradient-to-tl before:from-slate-2 before:to-slate-5 before:scale-75 hover:before:scale-90 before:transition',
            className,
          )}
          ref={composedRefs}
          style={{ marginRight: context.sidebarWidth }}
          aria-label="Sidebar menu"
          {...context.floating.getReferenceProps()}
        >
          <div className="relative">
            <div className="size-5 flex flex-col justify-center">
              <div className="space-y-[6px]">
                <motion.div
                  animate={{ rotate: context.open ? 45 : 0, y: context.open ? 4 : 0 }}
                  className="h-[2px] bg-slate-12 rounded-full"
                />
                <motion.div
                  animate={{ rotate: context.open ? -45 : 0, y: context.open ? -4 : 0 }}
                  className="h-[2px] bg-slate-12 rounded-full"
                />
              </div>
            </div>
          </div>
        </button>
      </FocusRing>
    );
  },
);

SidebarTrigger.displayName = 'SidebarTrigger';

/* -------------------------------------------------------------------------------------------------
 * SidebarMenu
 * -----------------------------------------------------------------------------------------------*/

type SidebarMenuElement = React.ComponentRef<'div'>;

interface SidebarMenuProps extends React.ComponentPropsWithoutRef<'div'> {}

const SidebarMenu = React.forwardRef<SidebarMenuElement, SidebarMenuProps>(
  ({ className, ...props }, forwardedRef) => {
    const context = useSidebarContext();
    const composedRefs = useComposedRefs(
      (node) => context.floating.setFloating(node),
      forwardedRef,
    );

    return (
      <AnimatePresence>
        {context.open && (
          <Floating.FloatingFocusManager
            context={context.floating.context}
            order={['reference', 'content']}
          >
            <div
              className={cx(
                'fixed right-0 top-0 bottom-0 w-full sm:w-[28rem] md:w-[30rem] lg:w-[35rem] xl:w-[38rem]',
                className,
              )}
              {...context.floating.getFloatingProps()}
              aria-labelledby={context.headingId}
              aria-describedby={context.descriptionId}
              ref={composedRefs}
              {...props}
            >
              <ScrollArea.Root asChild className="h-full">
                <motion.div
                  key="content"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { x: '100%' },
                    visible: { x: '0%' },
                  }}
                  style={{ originX: 1, originY: 0.5 }}
                  transition={MOTION_TRANSITION}
                  className="pl-2 pr-2 py-2 md:pr-4 md:py-4 will-change-motion"
                >
                  <div className="bg-slate-light-1 rounded-3xl shadow-lg h-full">
                    <motion.div
                      key="contentInner"
                      className="h-full relative will-change-motion"
                      style={{ marginRight: context.sidebarWidth }}
                      variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={MOTION_TRANSITION}
                    >
                      <ScrollArea.Viewport className="h-full grid">
                        <SidebarMenuContent />
                      </ScrollArea.Viewport>

                      <div className="absolute px-4 lg:px-5 right-4 bottom-8 top-24 md:right-4 md:bottom-10 lg:right-6 lg:bottom-14 lg:top-32 xl:bottom-16">
                        <div className="flex justify-center w-4 lg:w-5 h-full ">
                          <div className="h-full w-[3px] flex justify-center before:content-[''] before:h-full before:w-px before:bg-slate-light-5 relative">
                            <ScrollArea.Scrollbar className="w-full">
                              <ScrollArea.Thumb className="bg-slate-light-8 bg-gradient-to-br from-slate-light-6 to-slate-light-8 rounded-full before:content-[''] before:absolute before:-inset-3" />
                            </ScrollArea.Scrollbar>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollArea.Root>
            </div>
          </Floating.FloatingFocusManager>
        )}
      </AnimatePresence>
    );
  },
);

SidebarMenu.displayName = 'SidebarMenu';

/* -----------------------------------------------------------------------------------------------*/

type SidebarMenuContentElement = React.ComponentRef<'div'>;

interface SidebarMenuContentProps extends React.ComponentPropsWithoutRef<'div'> {}

const SidebarMenuContent = React.forwardRef<SidebarMenuContentElement, SidebarMenuContentProps>(
  ({ className, ...props }, forwardedRef) => {
    const context = useSidebarContext();

    return (
      <div
        {...props}
        className={cx(
          'px-8 md:px-12 lg:px-14 xl:px-16 flex flex-col justify-end h-full',
          className,
        )}
        ref={forwardedRef}
      >
        <h2 className="sr-only" id={context.headingId}>
          Navigation
        </h2>
        <p className="sr-only" id={context.descriptionId}>
          Select an item to navigate
        </p>

        <div className="h-full flex flex-col justify-between gap-12 md:gap-14 lg:gap-20 xl:gap-24">
          <div className="grow flex items-center">
            <div className="mt-[10vh] pt-8 md:pt-12 lg:pt-14 xl:pt-16 grow">
              <h3 className="font-body text-sm lg:text-base xl:text-lg font-medium capsize text-slate-light-9 mb-7 md:mb-8 lg:mb-10 xl:mb-12">
                Work
              </h3>

              <motion.ul
                className="-my-[0.35em] text-3xl lg:text-4xl xl:text-5xl group/list font-display font-medium tracking-tighter"
                variants={{
                  hidden: {
                    transition: {
                      staggerChildren: 0.01,
                    },
                  },
                  visible: {
                    transition: {
                      staggerChildren: 0.02,
                    },
                  },
                }}
              >
                {(['radix', 'aragon', 'blocks', 'dash'] as const)
                  .map((projectId) => getProjectById(projectId))
                  .filter((project): project is NonNullable<typeof project> => project !== null)
                  .map((project) => (
                    <motion.li
                      key={project.id}
                      variants={{
                        hidden: { x: 100, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      }}
                      transition={MOTION_TRANSITION}
                      className="will-change-motion"
                    >
                      <SidebarProjectLink
                        path={project.id}
                        title={project.title}
                        projectId={project.id}
                      />
                    </motion.li>
                  ))}
              </motion.ul>
            </div>
          </div>

          <div className="pb-8 md:pb-12 lg:pb-14 xl:pb-16">
            <div className="relative">
              <Line
                className="absolute -top-16 left-0 -bottom-6"
                orientation="vertical"
                scheme="light"
              />
              <h3 className="font-body text-sm lg:text-base xl:text-lg font-medium capsize text-slate-light-9 mb-6 md:mb-7 lg:mb-9 xl:mb-10">
                Get in touch
              </h3>

              <div className="font-display font-medium text-slate-light-12 text-2xl lg:text-3xl xl:text-3xl tracking-tighter capsize mb-6 md:mb-7 lg:mb-8">
                <Copy scheme="dark">hello@andyhook.dev</Copy>
              </div>

              <div className="relative">
                <Line className="absolute -left-10 right-16 top-0" scheme="light" />
                <Line className="absolute -left-6 right-28 bottom-0" scheme="light" />
                <ul className="flex gap-2 lg:gap-3">
                  {(['github', 'linkedin', 'dribbble', 'twitter', 'instagram'] as const).map(
                    (platform) => (
                      <li key={platform}>
                        <SocialLink platform={platform} scheme="light" size="small" />
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

SidebarMenuContent.displayName = 'SidebarMenuContent';

/* -----------------------------------------------------------------------------------------------*/

const sidebarProjectLinkLine = cva({
  base: 'h-full absolute top-0 right-0 rounded-full bg-gradient-to-tl',
  variants: {
    projectId: {
      radix: 'from-radix-1 to-radix-5',
      aragon: 'from-aragon-1 to-aragon-5',
      blocks: 'from-blocks-1 to-blocks-5',
      dash: 'from-dash-1 to-dash-4',
    },
  },
});

type SidebarProjectLinkElement = React.ComponentRef<typeof RouterLink>;

interface SidebarProjectLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RouterLink>, 'href'> {
  projectId: ProjectId;
  title: string;
  path: string;
}

const SidebarProjectLink = React.forwardRef<SidebarProjectLinkElement, SidebarProjectLinkProps>(
  ({ className, path, title, projectId, ...props }, forwardedRef) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <FocusRing className="outline-offset-0 focus-visible:outline-offset-1" scheme="light">
        <MouseHover onValueChange={setHovered} asChild>
          <RouterLink
            href={path}
            className={cx(
              'flex gap-5 lg:gap-5 items-center py-[0.35em] px-[0.35em] -mx-[0.35em] group/item mr-12 lg:mr-16 rounded-md',
              className,
            )}
            {...props}
            ref={forwardedRef}
          >
            <motion.div
              className="grow relative flex"
              initial="initial"
              animate={hovered ? 'hovered' : 'initial'}
            >
              <motion.div
                variants={{
                  initial: { x: 0 },
                  hovered: { x: 3 },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 700,
                  damping: 40,
                  mass: 1,
                }}
                className="relative text-slate-light-12 group-hover/list:text-slate-light-9 group-hover/item:!text-slate-light-12 transition-colors duration-200 capsize will-change-motion"
              >
                {title}
              </motion.div>

              <div className="grow ml-12 lg:ml-14 flex items-center">
                <div className="h-[4px] relative w-full flex items-center justify-center before:content-[''] before:bg-slate-light-3 before:rounded-full before:h-1/2 before:w-full">
                  <motion.div
                    className={sidebarProjectLinkLine({
                      projectId,
                      className: 'will-change-motion',
                    })}
                    variants={{
                      initial: { width: 4 },
                      hovered: { width: '100%' },
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 700,
                      damping: 50,
                      mass: 1,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </RouterLink>
        </MouseHover>
      </FocusRing>
    );
  },
);

SidebarProjectLink.displayName = 'SidebarProjectLink';

/* -------------------------------------------------------------------------------------------------
 * SidebarOverlay
 * -----------------------------------------------------------------------------------------------*/

type SidebarOverlayElement = React.ComponentRef<'div'>;

interface SidebarOverlayProps extends React.ComponentPropsWithoutRef<'div'> {}

const SidebarOverlay = React.forwardRef<SidebarOverlayElement, SidebarOverlayProps>(
  (props, forwardedRef) => {
    const context = useSidebarContext();
    const device = useDevice();

    return (
      <AnimatePresence>
        {context.open && (
          <Floating.FloatingOverlay lockScroll={!device.isMobile} {...props} ref={forwardedRef}>
            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={MOTION_TRANSITION}
              className="absolute inset-0 bg-gradient-to-tl from-slate-1 to-slate-1/75 will-change-motion"
              onAnimationComplete={(definition) => {
                if (definition === 'hidden') {
                  context.onExitAnimationComplete();
                }
              }}
            />
          </Floating.FloatingOverlay>
        )}
      </AnimatePresence>
    );
  },
);

SidebarOverlay.displayName = 'SidebarOverlay';

/* -------------------------------------------------------------------------------------------------
 * SidebarAnimation
 * -----------------------------------------------------------------------------------------------*/

type SidebarAnimationElement = React.ComponentRef<typeof motion.div>;

interface SidebarAnimationProps extends React.ComponentPropsWithoutRef<typeof motion.div> {}

const SidebarAnimation = React.forwardRef<SidebarAnimationElement, SidebarAnimationProps>(
  ({ className, ...props }, forwardedRef) => {
    const ref = React.useRef<SidebarAnimationElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const context = useSidebarContext();
    const isInView = useInView(ref);

    return (
      <motion.div
        transition={MOTION_TRANSITION}
        animate={{ x: context.open && isInView ? -30 : 0 }}
        className={cx('will-change-motion', className)}
        {...props}
        ref={composedRefs}
      />
    );
  },
);

SidebarAnimation.displayName = 'SidebarAnimation';

/* -----------------------------------------------------------------------------------------------*/

export const Root = Sidebar;
export const Menu = SidebarMenu;
export const Overlay = SidebarOverlay;
export const Trigger = SidebarTrigger;
export const Animation = SidebarAnimation;
