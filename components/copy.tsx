'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '@/cva.config';
import { CheckIcon } from '@heroicons/react/16/solid';
import { ScrambleText } from './scramble-text';
import { FocusRing } from './focus-ring';
import { useComposedRefs } from '@/components/utils/compose-refs';

type CopyElement = React.ComponentRef<'button'>;
type Scheme = 'light' | 'dark';

interface CopyProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
  scheme?: Scheme;
}

export const Copy = React.forwardRef<CopyElement, CopyProps>(
  ({ children, className, scheme = 'light', ...props }, forwardedRef) => {
    const timeoutRef = React.useRef(0);
    const [open, setOpen] = React.useState(false);
    const [renderFloating, setRenderFloating] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    const textContent = copied ? 'Copied to clipboard!' : children;

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
            onPointerEnter={(event) => {
              if (event.pointerType !== 'mouse') return;
              setRenderFloating(true);
              setOpen(true);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType !== 'mouse') return;
              setOpen(false);
            }}
            ref={forwardedRef}
          >
            <div className="whitespace-nowrap pointer-events-none">
              <ScrambleText speed={1.5} scramble={2} tick={2} overflow overdrive>
                {textContent}
              </ScrambleText>
            </div>
          </button>
        </FocusRing>

        {renderFloating &&
          createPortal(
            <CopyFloating
              open={open}
              copied={copied}
              scheme={scheme}
              onHideComplete={() => setRenderFloating(false)}
            />,
            document.body,
          )}
      </>
    );
  },
);

Copy.displayName = 'Copy';

/* -----------------------------------------------------------------------------------------------*/

type CopyFloatingElement = React.ComponentRef<'div'>;

interface CopyFloatingProps extends React.ComponentPropsWithoutRef<'div'> {
  open: boolean;
  copied: boolean;
  scheme: Scheme;
  onHideComplete: () => void;
}

const CopyFloating = React.forwardRef<CopyFloatingElement, CopyFloatingProps>(
  ({ open, copied, scheme, onHideComplete, className, ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const [entered, setEntered] = React.useState(false);
    const isLightScheme = scheme === 'light';

    React.useLayoutEffect(() => {
      requestAnimationFrame(() => setEntered(true));
    }, []);

    React.useEffect(() => {
      const badge = ref.current;
      if (!badge) return;

      const handleMove = (event: PointerEvent) => {
        badge.style.left = `${event.clientX}px`;
        badge.style.top = `${event.clientY}px`;
      };

      document.addEventListener('pointermove', handleMove);
      return () => document.removeEventListener('pointermove', handleMove);
    }, []);

    const isVisible = entered && open;

    return (
      <div
        aria-hidden
        ref={composedRefs}
        className={cx(
          'size-20 pointer-events-none z-20 fixed -translate-x-1/2 -translate-y-1/2',
          className,
        )}
        {...props}
      >
        <div
          className={cx(
            'absolute inset-0 rounded-full shadow-sm flex items-center justify-center',
            'transition-transform duration-300',
            isVisible ? 'ease-spring' : 'ease-snappy',
            isVisible ? (copied ? 'scale-50' : 'scale-100') : 'scale-0',
            copied ? 'bg-green' : isLightScheme ? 'bg-slate-light-1' : 'bg-slate-1',
          )}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.propertyName !== 'transform') return;
            if (!open) onHideComplete();
          }}
        >
          <span
            className={cx(
              'font-body font-bold text-base tracking-tighter capsize',
              'transition-transform duration-300 ease-spring',
              isLightScheme ? 'text-slate-light-12' : 'text-slate-12',
              copied ? 'scale-0' : 'scale-100',
            )}
          >
            Copy
          </span>

          <span
            className={cx(
              'absolute inset-0 flex items-center justify-center',
              'transition-transform duration-300 ease-spring',
              copied ? 'scale-100 rotate-0' : 'scale-0 rotate-45',
            )}
          >
            <CheckIcon className="size-14 text-white" />
          </span>
        </div>
      </div>
    );
  },
);

CopyFloating.displayName = 'CopyFloating';
