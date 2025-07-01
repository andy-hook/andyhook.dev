'use client';

import * as React from 'react';
import * as Floating from '@floating-ui/react';
import { motion } from 'motion/react';
import { cx } from '@/cva.config';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { CheckIcon } from '@heroicons/react/16/solid';
import { ScrambleText } from './scramble-text';
import { FocusRing } from './focus-ring';

type CopyElement = React.ComponentRef<'button'>;

interface CopyProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
  scheme?: 'light' | 'dark';
}

export const Copy = React.forwardRef<CopyElement, CopyProps>(
  ({ children, className, scheme = 'light', ...props }, forwardedRef) => {
    const timeoutRef = React.useRef(0);
    const [open, setOpen] = React.useState(false);
    const [renderFloating, setRenderFloating] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    const { context, refs, floatingStyles } = Floating.useFloating({
      open,
      onOpenChange: (open) => {
        if (open) setRenderFloating(open);
        setOpen(open);
      },
      strategy: 'fixed',
      middleware: [
        Floating.offset(({ rects }) => {
          return -(rects.floating.height / 2);
        }),
      ],
    });
    const composedRefs = useComposedRefs((node) => refs.setReference(node), forwardedRef);

    const hover = Floating.useHover(context, { mouseOnly: true });
    const clientPoint = Floating.useClientPoint(context);

    const { getReferenceProps, getFloatingProps } = Floating.useInteractions([clientPoint, hover]);

    const textContent = copied ? 'Copied to clipboard!' : children;
    const isLightScheme = scheme === 'light';

    return (
      <>
        <FocusRing
          scheme={scheme === 'light' ? 'dark' : 'light'}
          className="outline-offset-0 focus-visible:outline-offset-2"
        >
          <button
            className={cx(
              'block relative text-left cursor-none after:content-[""] after:absolute after:-inset-[0.5em] rounded-md',
              className,
            )}
            {...props}
            onClick={async () => {
              try {
                clearTimeout(timeoutRef.current);
                await navigator.clipboard.writeText(children);
                setCopied(true);
                timeoutRef.current = window.setTimeout(() => {
                  setCopied(false);
                }, 3000);
              } catch (error) {
                console.error(error);
              }
            }}
            ref={composedRefs}
            {...getReferenceProps()}
          >
            <div className="whitespace-nowrap pointer-events-none">
              <ScrambleText speed={1.5} scramble={2} tick={2} overflow overdrive>
                {textContent}
              </ScrambleText>
            </div>
          </button>
        </FocusRing>

        {renderFloating && (
          <Floating.FloatingPortal>
            <div
              aria-hidden
              className="size-20 pointer-events-none"
              style={floatingStyles}
              ref={refs.setFloating}
              {...getFloatingProps()}
            >
              <motion.div
                variants={{
                  visible: { scale: 1 },
                  hidden: { scale: 0 },
                  copied: { scale: 0.5 },
                }}
                initial="hidden"
                animate={open ? (copied ? 'copied' : 'visible') : 'hidden'}
                className={cx(
                  'absolute inset-0 rounded-full shadow-sm flex items-center justify-center',
                  copied ? 'bg-green' : isLightScheme ? 'bg-slate-light-1' : 'bg-slate-1',
                )}
                onAnimationComplete={(variant) => {
                  if (variant === 'hidden' && !open) setRenderFloating(false);
                }}
              >
                <motion.div
                  className={cx(
                    'font-body font-bold text-base tracking-tighter capsize',
                    isLightScheme ? 'text-slate-light-12' : 'text-slate-12',
                  )}
                  animate={{ scale: copied ? 0 : 1 }}
                >
                  Copy
                </motion.div>

                {copied && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                  >
                    <CheckIcon className="size-14 text-white" />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </Floating.FloatingPortal>
        )}
      </>
    );
  },
);

Copy.displayName = 'Copy';
