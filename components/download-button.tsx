'use client';

import * as React from 'react';
import { cx } from '@/cva.config';
import { DocumentTextIcon, DocumentArrowDownIcon } from '@heroicons/react/16/solid';
import { MouseHover } from './primitives/mouse-hover';
import { AnimatePresence, motion } from 'motion/react';
import { ScrambleText } from './scramble-text';
import { getColorSlateDark } from '@/theme';
import { FocusRing } from './focus-ring';

type DownloadButtonElement = React.ComponentRef<'div'>;

interface DownloadButtonProps extends React.ComponentPropsWithoutRef<'div'> {}

export const DownloadButton = React.forwardRef<DownloadButtonElement, DownloadButtonProps>(
  ({ className, ...props }, forwardedRef) => {
    const scrambleTextRef = React.useRef<React.ComponentRef<typeof ScrambleText>>(null);
    const [hovered, setHovered] = React.useState(false);

    return (
      <div className="relative" {...props} ref={forwardedRef}>
        <div className="-inset-2 sm:inset-auto sm:size-24 border border-slate-3 rounded-full absolute sm:-bottom-5 sm:-left-4" />
        <FocusRing className="outline-offset-0 focus-visible:outline-offset-2">
          <MouseHover onValueChange={setHovered} asChild>
            <motion.a
              href="/cv"
              className={cx(
                'relative inline-flex py-4 lg:py-5 px-7 border rounded-full items-center gap-3 w-full sm:w-auto justify-center overflow-hidden',
                className,
              )}
              initial="initial"
              animate={hovered ? 'hovered' : 'initial'}
              variants={{
                initial: {
                  borderColor: getColorSlateDark(5),
                  backgroundColor: getColorSlateDark(2, 0.6),
                },
                hovered: {
                  borderColor: getColorSlateDark(6),
                  backgroundColor: getColorSlateDark(3, 0.3),
                },
              }}
              transition={{ duration: 0.05 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative size-4 -ml-px">
                {hovered && (
                  <motion.div
                    animate={{ opacity: [0, 1], x: ['-300%', '0%'] }}
                    className="absolute top-0 left-0"
                  >
                    <DocumentArrowDownIcon className="size-4 text-slate-12" />
                  </motion.div>
                )}

                <AnimatePresence initial={false}>
                  {!hovered && (
                    <motion.div
                      initial={{ opacity: 1, x: '0%' }}
                      exit={{ opacity: 0, x: '50%' }}
                      className="absolute top-0 left-0"
                    >
                      <DocumentTextIcon className="size-4 text-slate-10" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.div
                animate={hovered ? 'hover' : 'initial'}
                className="inline-block font-body text-slate-12 text-sm md:text-base xl:text-lg font-medium capsize tracking-wide relative"
                transition={{ duration: 0.2, delay: 0.07 }}
                variants={{
                  initial: { x: 0 },
                  hover: { x: [0, 3, 0] },
                }}
                onAnimationStart={(variant) => {
                  if (variant === 'hover') {
                    setTimeout(() => {
                      scrambleTextRef.current?.replay();
                    }, 70);
                  }
                }}
              >
                <ScrambleText
                  className="absolute inset-0 capsize text-nowrap"
                  playOnMount={false}
                  overflow
                  ref={scrambleTextRef}
                  aria-hidden
                >
                  Download full CV
                </ScrambleText>
                <div className="opacity-0">Download full CV</div>
              </motion.div>
            </motion.a>
          </MouseHover>
        </FocusRing>
      </div>
    );
  },
);

DownloadButton.displayName = 'DownloadButton';
