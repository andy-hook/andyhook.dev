'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { cva, cx } from '@/cva.config';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

import { screens } from '@/theme';
import { ScrambleText } from '@/components/scramble-text';
import * as HoverGroup from '@/components/primitives/hover-group';
import { Project } from '@/types';
import { RouterImage, RouterLink } from '@/app/router';
import { FocusRing } from './focus-ring';

const MOTION_TRANSITION = {
  type: 'spring',
  stiffness: 500,
  damping: 25,
  mass: 0.5,
};

const workItemTitle = cva({
  base: 'font-body text-slate-12 font-medium capsize block',
  variants: {
    size: {
      small: 'text-lg lg:text-xl mb-3 mt-6 lg:mt-7',
      large: 'mb-3 xl:mb-4 mt-6 xl:mt-8 text-lg lg:text-xl xl:text-2xl ',
    },
  },
});

const workItemSubtitle = cva({
  base: 'font-body font-normal capsize block text-base lg:text-lg text-slate-10',
  variants: {
    size: {
      small: '',
      large: 'xl:text-xl',
    },
  },
});

type WorkItemElement = React.ComponentRef<typeof Link>;

interface WorkItemProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> {
  project: Project;
  size?: 'small' | 'large';
  priority?: boolean;
}

export const WorkItem = React.forwardRef<WorkItemElement, WorkItemProps>(
  ({ className, project, size = 'large', priority, ...props }, forwardedRef) => {
    const [variant, setVariant] = React.useState<'hovered' | 'dimmed' | 'initial'>('initial');
    const titleScrambleRef = React.useRef<React.ComponentRef<typeof ScrambleText>>(null);
    const subtitleScrambleRef = React.useRef<React.ComponentRef<typeof ScrambleText>>(null);

    const isLarge = size === 'large';

    const thumb = isLarge
      ? { image: project.thumbnail, sizes: `(min-width: ${screens.sm}px) 50vw, 100vw` }
      : { image: project.thumbnailSmall, sizes: `(min-width: ${screens.sm}px) 33vw, 100vw` };

    const hovered = variant === 'hovered';

    const arrowIcon = (
      <ArrowUpRightIcon
        className={cx(
          'text-slate-light-1',
          isLarge ? 'size-5 sm:size-6 lg:size-7' : 'size-5 lg:size-6 xl:size-7',
        )}
      />
    );

    return (
      <HoverGroup.Item
        value={project.id}
        onModeChange={(mode) => {
          setVariant(mode);
          if (mode === 'hovered') {
            titleScrambleRef.current?.replay();
            subtitleScrambleRef.current?.replay();
          }
        }}
      >
        <FocusRing
          className={cx(
            isLarge
              ? [
                  '-outline-offset-5 focus-visible:-outline-offset-3 rounded-[32px] focus-visible:rounded-[28px]',
                  'md:-outline-offset-7 md:focus-visible:-outline-offset-4 md:rounded-[40px] md:focus-visible:rounded-[32px]',
                  'xl:-outline-offset-10 xl:focus-visible:-outline-offset-5 xl:rounded-[50px] xl:focus-visible:rounded-[36px]',
                ]
              : 'outline-offset-0 focus-visible:outline-offset-3 rounded-md',
          )}
        >
          <RouterLink
            href={project.externalUrl ?? `/${project.id}`}
            className={cx('block relative', isLarge && 'p-5 md:p-7 xl:p-10', className)}
            {...props}
            ref={forwardedRef}
            aria-label={`${project.title} – ${project.subtitle}`}
          >
            <motion.div initial="initial" animate={variant}>
              <div className="overflow-hidden rounded-xl shadow-slate-1 shadow-sm bg-slate-2 relative">
                <motion.div
                  variants={{
                    initial: { opacity: 1 },
                    dimmed: { opacity: 0.5 },
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {project.externalUrl && (
                    <motion.div
                      variants={{
                        initial: { scale: 0.9 },
                        dimmed: { scale: 0.9 },
                        hovered: { scale: 1 },
                      }}
                      className={cx(
                        'absolute border-slate-light-1/20 border z-40 rounded-full flex items-center justify-center overflow-hidden from-slate-1/20 bg-gradient-to-br',
                        isLarge ? 'size-10 sm:size-12 lg:size-14' : 'size-10 lg:size-11 xl:size-12',
                        isLarge
                          ? 'top-5 right-5 lg:top-6 lg:right-6 xl:top-7 xl:right-7'
                          : 'bottom-5 right-5 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 xl:bottom-6 xl:right-6',
                      )}
                      transition={MOTION_TRANSITION}
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        {!hovered && (
                          <motion.div
                            key="initial"
                            initial={{ opacity: 1, x: '0%', y: '0%' }}
                            exit={{ opacity: 0, x: '100%', y: '-100%' }}
                            transition={MOTION_TRANSITION}
                          >
                            {arrowIcon}
                          </motion.div>
                        )}

                        {hovered && (
                          <motion.div
                            key="hovered"
                            animate={{ opacity: [0, 1], x: ['-100%', '0%'], y: ['100%', '0%'] }}
                            transition={MOTION_TRANSITION}
                          >
                            {arrowIcon}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  <motion.div variants={{ hovered: { scale: 1.02 } }}>
                    <RouterImage
                      aria-hidden
                      image={thumb.image}
                      priority={priority}
                      className="w-full"
                      quality={90}
                      sizes={thumb.sizes}
                    />
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                variants={{
                  initial: { opacity: 1 },
                  dimmed: { opacity: 0.5 },
                }}
                transition={{ duration: 0.1 }}
              >
                <ScrambleText className={workItemTitle({ size })} ref={titleScrambleRef} tick={2}>
                  {project.title}
                </ScrambleText>
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 1 },
                  dimmed: { opacity: 0.5 },
                }}
                transition={{ duration: 0.1 }}
                className={workItemSubtitle({ size })}
              >
                <ScrambleText className="truncate block" ref={subtitleScrambleRef} tick={2}>
                  {project.subtitle}
                </ScrambleText>
              </motion.div>
            </motion.div>
          </RouterLink>
        </FocusRing>
      </HoverGroup.Item>
    );
  },
);

WorkItem.displayName = 'WorkItem';
