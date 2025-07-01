'use client';

import * as React from 'react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, cubicBezier, motion } from 'motion/react';
import { cx } from '@/cva.config';

import * as AccordionPrimitive from '@/components/primitives/accordion';

import { useCallbackRef } from '@/components/utils/use-callback-ref';
import { useScreen } from '@/components/utils/use-screen';
import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';

import { experience } from '@/data';
import { useLayoutEffect } from '@/components/utils/use-layout-effect';
import { ScrambleText } from '@/components/scramble-text';
import { getColorSlateDark } from '@/theme';
import * as HoverGroup from '@/components/primitives/hover-group';
import { ExternalLink } from '@/components/external-link';
import { FocusRing } from '@/components/focus-ring';

const MOTION_TRANSITION = {
  ease: cubicBezier(0.5, 0.2, 0.2, 1),
  duration: 0.3,
  opacity: { ease: 'linear', duration: 0.15 },
};

type ExperienceListElement = React.ComponentRef<'div'>;

interface ExperienceListProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ExperienceList = React.forwardRef<ExperienceListElement, ExperienceListProps>(
  ({ className, ...props }, forwardedRef) => {
    const [openItem, onOpenItemChange] = React.useState('');
    const [hoveredItem, setHoveredItem] = React.useState('');
    const animateCompanyName = useScreen({ max: 'md' });

    return (
      <div className={cx('relative', className)} {...props} ref={forwardedRef}>
        <div className="absolute right-5 md:right-9 lg:right-8 xl:right-11 top-0 bottom-0 w-8 lg:w-9">
          <Line orientation="vertical" className="absolute left-0 top-1/2 -bottom-24" />
          <Hatch className="absolute h-10 w-56 md:w-80 -bottom-10 right-9" />
          <Line className="absolute -bottom-10 right-5 w-64 md:w-96" />
        </div>

        <div className="rounded-3xl shadow-slate-1 shadow-2xl border border-slate-3 from-slate-3/30 to-slate-2/30 bg-gradient-to-br relative">
          <HoverGroup.Root value={hoveredItem} onValueChange={setHoveredItem}>
            <AccordionPrimitive.Root
              className="relative"
              aria-label="Work history"
              value={openItem}
              onValueChange={onOpenItemChange}
              asChild
            >
              <ul>
                {experience.map((entry, i) => {
                  const firstItem = i === 0;
                  const lastItem = experience.length - 1 === i;
                  const key = entry.company;
                  const open = openItem === key;
                  const hovered = hoveredItem === key;
                  const Logo = entry.logoAsset;

                  return (
                    <AccordionPrimitive.Item value={key} key={key} className="relative" asChild>
                      <li>
                        <AnimatePresence>
                          {(open || hovered) && (
                            <motion.div
                              className={cx(
                                'absolute inset-0 bg-gradient-to-br from-slate-5/25 -z-10',
                                lastItem && 'rounded-b-3xl',
                                firstItem && 'rounded-t-3xl',
                              )}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                              }}
                              transition={MOTION_TRANSITION}
                            />
                          )}
                        </AnimatePresence>

                        {!lastItem ? (
                          <Line
                            className={cx(
                              'absolute bottom-0',
                              i & 1 ? '-left-14 -right-14' : '-left-8 -right-8',
                            )}
                            solid
                            contrast="low"
                          />
                        ) : null}

                        <motion.div className="overflow-hidden" animate={open ? 'open' : 'closed'}>
                          <FocusRing className="-outline-offset-4 focus-visible:-outline-offset-2">
                            <ExperienceListItemTrigger
                              open={open}
                              className={cx(
                                'grid grid-cols-[auto_auto_1fr_auto] sm:grid-cols-[auto_auto_1fr_auto] md:grid-cols-[4.25rem_3.25rem_1fr_7.5rem] lg:grid-cols-[5.25rem_3.25rem_1fr_8.5rem] gap-y-2 px-5 md:px-7 xl:px-10 py-5 xl:py-6 items-center relative w-full text-left rounded-xl',
                                firstItem && 'rounded-t-3xl',
                                lastItem && 'rounded-b-3xl',
                              )}
                              aria-label={`${entry.year}, ${entry.title}, ${entry.company}`}
                              value={key}
                            >
                              {({ yearScrambleRef, companyScrambleRef, titleScrambleRef }) => (
                                <>
                                  <div className="hidden sm:block col-start-3 sm:col-start-auto sm:mr-10">
                                    <div className="relative font-body text-slate-9 text-xs md:text-sm font-semibold">
                                      <ScrambleText
                                        scramble={6}
                                        range={[48, 57]}
                                        className="absolute top-0 left-0 capsize tabular-nums"
                                        ref={yearScrambleRef}
                                        aria-hidden
                                      >
                                        {entry.year}
                                      </ScrambleText>

                                      <div className="opacity-0 capsize">{entry.year}</div>
                                    </div>
                                  </div>

                                  <div className="col-start-1 col-span-2 sm:col-span-1 sm:col-start-auto mr-4 md:mr-0">
                                    <Logo className="size-8 sm:size-9" />
                                  </div>

                                  <span className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-y-2 md:items-center col-start-3 sm:col-start-auto sm:row-start-auto pt-1 md:pt-0">
                                    <motion.h3
                                      className="text-sm sm:text-base md:text-lg xl:text-xl text-slate-12 font-body capsize col-span-2 md:col-span-1 font-medium"
                                      animate={{
                                        color: getCompanyTitleColor(openItem, hoveredItem, key),
                                        y: animateCompanyName ? (open ? '0.5em' : '0%') : undefined,
                                      }}
                                      transition={{
                                        ...MOTION_TRANSITION,
                                        color: { duration: 0.1 },
                                      }}
                                    >
                                      <ScrambleText ref={companyScrambleRef}>
                                        {entry.company}
                                      </ScrambleText>
                                    </motion.h3>

                                    <AnimatePresence initial={false}>
                                      {!open && (
                                        <motion.p
                                          className="text-xs md:text-sm lg:text-base font-body text-slate-10 font-normal capsize col-start-1 col-span-2 md:col-span-1 md:col-start-2"
                                          initial="closed"
                                          animate="open"
                                          exit="closed"
                                          variants={{
                                            open: { opacity: 1, y: '0%' },
                                            closed: { opacity: 0, y: '100%' },
                                          }}
                                          transition={MOTION_TRANSITION}
                                        >
                                          <ScrambleText ref={titleScrambleRef}>
                                            {entry.title}
                                          </ScrambleText>
                                        </motion.p>
                                      )}
                                    </AnimatePresence>
                                  </span>

                                  <div className="flex justify-end col-start-4">
                                    <div className="p-1.5 md:p-2 border border-slate-7 rounded-full bg-gradient-to-br from-slate-3">
                                      <motion.div
                                        initial={false}
                                        variants={{
                                          open: { rotate: 45, scale: 1 },
                                          closed: { rotate: 0, scale: 0.8 },
                                        }}
                                        transition={MOTION_TRANSITION}
                                      >
                                        <PlusIcon className="text-slate-12 size-4 md:size-5" />
                                      </motion.div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </ExperienceListItemTrigger>
                          </FocusRing>

                          <ExperienceListItemContent onBeforeMatch={() => onOpenItemChange(key)}>
                            <div className="md:pl-[4.25rem] lg:pl-[5.25rem] pb-14 pt-2 relative">
                              <Hatch
                                className="absolute left-0 top-14 hidden md:block w-7 xl:w-10 bottom-14"
                                orientation="vertical"
                              />
                              <Line
                                className="hidden md:block absolute left-7 xl:left-10 top-4 bottom-4"
                                orientation="vertical"
                              />
                              <Line className="hidden md:block absolute -left-14 bottom-14 w-28" />

                              <p className="font-body font-normal text-sm md:text-base text-slate-10 capsize max-w-[50em] leading-relaxed mb-10 md:mb-12">
                                {entry.description}
                              </p>

                              <div className="flex flex-col lg:flex-row gap-7 md:gap-8 lg:gap-16 items-start">
                                {[
                                  ['Home', entry.link],
                                  ['Role', entry.title],
                                  ['Tenure', entry.tenure],
                                ].map(([label, value]) => (
                                  <div key={label}>
                                    <div className="font-body font-medium text-sm md:text-base mb-3 md:mb-4 text-slate-12 capsize">
                                      {label}
                                    </div>

                                    {value === entry.link ? (
                                      <ExternalLink
                                        href={value}
                                        className="text-sm md:text-base block capsize underline underline-offset-2 decoration-slate-8"
                                      >
                                        {value}
                                      </ExternalLink>
                                    ) : (
                                      <div className="font-body font-normal text-sm md:text-base text-slate-10 capsize">
                                        {value}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </ExperienceListItemContent>
                        </motion.div>
                      </li>
                    </AccordionPrimitive.Item>
                  );
                })}
              </ul>
            </AccordionPrimitive.Root>
          </HoverGroup.Root>
        </div>
      </div>
    );
  },
);

ExperienceList.displayName = 'ExperienceList';

function getCompanyTitleColor(openItem: string, hoveredItem: string, key: string) {
  const open = openItem === key;
  const hovered = hoveredItem === key;
  const listHasOpen = openItem !== '';
  const listHasHovered = hoveredItem !== '';

  if (listHasOpen) {
    return getColorSlateDark(open || hovered ? 12 : 10);
  }

  return getColorSlateDark(hovered || !listHasHovered ? 12 : 10);
}

/* -----------------------------------------------------------------------------------------------*/

type ExperienceListItemTriggerElement = React.ComponentRef<typeof AccordionPrimitive.Trigger>;

interface ExperienceListItemTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, 'children'> {
  children(refs: {
    yearScrambleRef: React.RefObject<React.ComponentRef<typeof ScrambleText> | null>;
    companyScrambleRef: React.RefObject<React.ComponentRef<typeof ScrambleText> | null>;
    titleScrambleRef: React.RefObject<React.ComponentRef<typeof ScrambleText> | null>;
  }): React.ReactNode;
  open: boolean;
  value: string;
}

const ExperienceListItemTrigger = React.forwardRef<
  ExperienceListItemTriggerElement,
  ExperienceListItemTriggerProps
>(({ children, open, value, ...props }, forwardedRef) => {
  const yearScrambleRef = React.useRef<React.ComponentRef<typeof ScrambleText>>(null);
  const companyScrambleRef = React.useRef<React.ComponentRef<typeof ScrambleText>>(null);
  const titleScrambleRef = React.useRef<React.ComponentRef<typeof ScrambleText>>(null);

  return (
    <HoverGroup.Item
      value={value}
      onModeChange={(mode) => {
        if (mode === 'hovered' && !open) {
          yearScrambleRef.current?.replay();
          companyScrambleRef.current?.replay();
          titleScrambleRef.current?.replay();
        }
      }}
    >
      <AccordionPrimitive.Trigger {...props} ref={forwardedRef}>
        {children({ yearScrambleRef, companyScrambleRef, titleScrambleRef })}
      </AccordionPrimitive.Trigger>
    </HoverGroup.Item>
  );
});

ExperienceListItemTrigger.displayName = 'ExperienceListItemTrigger';

/* -----------------------------------------------------------------------------------------------*/

type ExperienceListItemContentElement = React.ComponentRef<typeof AccordionPrimitive.Content>;

interface ExperienceListItemContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  onBeforeMatch(): void;
}

const ExperienceListItemContent = React.forwardRef<
  ExperienceListItemContentElement,
  ExperienceListItemContentProps
>(({ children, onBeforeMatch, ...props }, forwardedRef) => {
  const handleBeforeMatch = useCallbackRef(onBeforeMatch);
  const innerRef = React.useRef<ExperienceListItemContentElement>(null);

  useLayoutEffect(() => {
    const innerContent = innerRef.current;

    if (innerContent) {
      innerContent.setAttribute('hidden', 'until-found');
      innerContent.addEventListener('beforematch', handleBeforeMatch);
      return () => {
        innerContent.removeEventListener('beforematch', handleBeforeMatch);
      };
    }
  }, [handleBeforeMatch]);

  return (
    <AccordionPrimitive.Content forceMount asChild {...props} ref={forwardedRef}>
      <motion.div
        initial={false}
        variants={{ open: { height: 'auto' }, closed: { height: 0 } }}
        transition={MOTION_TRANSITION}
        onAnimationStart={(variant) => {
          if (variant === 'open') {
            innerRef.current?.removeAttribute('hidden');
          }
        }}
        onAnimationComplete={(variant) => {
          if (variant === 'closed') {
            innerRef.current?.setAttribute('hidden', 'until-found');
          }
        }}
      >
        <motion.div
          variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
          transition={MOTION_TRANSITION}
          className="px-5 md:px-7 xl:px-10"
          ref={innerRef}
        >
          {children}
        </motion.div>
      </motion.div>
    </AccordionPrimitive.Content>
  );
});

ExperienceListItemContent.displayName = 'ExperienceListItemContent';
