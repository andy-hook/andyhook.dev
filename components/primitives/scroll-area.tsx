'use client';

import * as React from 'react';

import { createContext } from '@/components/utils/create-context';
import { useLayoutEffect } from '@/components/utils/use-layout-effect';
import { useCallbackRef } from '@/components/utils/use-callback-ref';
import { Slot } from '@/components/primitives/slot';
import { useComposedRefs } from '@/components/utils/compose-refs';

type Sizes = {
  content: number;
  viewport: number;
  scrollbar: {
    size: number;
    paddingStart: number;
    paddingEnd: number;
  };
};

/* -------------------------------------------------------------------------------------------------
 * ScrollArea
 * -----------------------------------------------------------------------------------------------*/

type ScrollAreaContextValue = {
  scrollArea: ScrollAreaElement | null;
  viewport: ScrollAreaViewportElement | null;
  onViewportChange(viewport: ScrollAreaViewportElement | null): void;
  content: HTMLDivElement | null;
  onContentChange(content: HTMLDivElement): void;
};

const [ScrollAreaProvider, useScrollAreaContext] =
  createContext<ScrollAreaContextValue>('ScrollArea');

type ScrollAreaElement = React.ComponentRef<'div'>;
interface ScrollAreaProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

const ScrollArea = React.forwardRef<ScrollAreaElement, ScrollAreaProps>(
  ({ asChild, ...props }, forwardedRef) => {
    const [scrollArea, setScrollArea] = React.useState<ScrollAreaElement | null>(null);
    const [viewport, setViewport] = React.useState<ScrollAreaViewportElement | null>(null);
    const [content, setContent] = React.useState<HTMLDivElement | null>(null);
    const composedRefs = useComposedRefs((node) => setScrollArea(node), forwardedRef);

    const Component = asChild ? Slot : 'div';

    return (
      <ScrollAreaProvider
        scrollArea={scrollArea}
        viewport={viewport}
        onViewportChange={setViewport}
        content={content}
        onContentChange={setContent}
      >
        <Component
          {...props}
          ref={composedRefs}
          style={{
            position: 'relative',
            ...props.style,
          }}
        />
      </ScrollAreaProvider>
    );
  },
);

ScrollArea.displayName = 'ScrollArea';

/* -------------------------------------------------------------------------------------------------
 * ScrollAreaViewport
 * -----------------------------------------------------------------------------------------------*/

type ScrollAreaViewportElement = React.ComponentRef<'div'>;
interface ScrollAreaViewportProps extends React.ComponentPropsWithoutRef<'div'> {}

const ScrollAreaViewport = React.forwardRef<ScrollAreaViewportElement, ScrollAreaViewportProps>(
  (props, forwardedRef) => {
    const { children, ...viewportProps } = props;
    const context = useScrollAreaContext();
    const ref = React.useRef<ScrollAreaViewportElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, (node) =>
      context.onViewportChange(node),
    );

    return (
      <>
        {/* Hide scrollbars cross-browser and enable momentum scroll for touch devices */}
        <style
          dangerouslySetInnerHTML={{
            __html: `[data-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-scroll-area-viewport]::-webkit-scrollbar{display:none}`,
          }}
        />
        <div
          data-scroll-area-viewport=""
          {...viewportProps}
          ref={composedRefs}
          style={{
            overflowY: 'scroll',
            ...props.style,
          }}
        >
          <div ref={context.onContentChange}>{children}</div>
        </div>
      </>
    );
  },
);

ScrollAreaViewport.displayName = 'ScrollAreaViewport';

/* -------------------------------------------------------------------------------------------------
 * ScrollAreaScrollbar
 * -----------------------------------------------------------------------------------------------*/

type ScrollbarContext = {
  hasThumb: boolean;
  scrollbar: ScrollAreaScrollbarElement | null;
  onThumbChange(thumb: ScrollAreaThumbElement | null): void;
  onThumbPointerUp(): void;
  onThumbPointerDown(pointerPos: { x: number; y: number }): void;
  onThumbPositionChange(): void;
};

const [ScrollbarProvider, useScrollbarContext] =
  createContext<ScrollbarContext>('ScrollAreaScrollbar');

interface ScrollAreaScrollbarProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

type ScrollAreaScrollbarElement = React.ComponentRef<'div'>;

const ScrollAreaScrollbar = React.forwardRef<ScrollAreaScrollbarElement, ScrollAreaScrollbarProps>(
  ({ asChild, ...props }, forwardedRef) => {
    const context = useScrollAreaContext();
    const thumbRef = React.useRef<ScrollAreaThumbElement | null>(null);
    const [computedStyle, setComputedStyle] = React.useState<CSSStyleDeclaration>();
    const pointerOffsetRef = React.useRef(0);
    const [sizes, setSizes] = React.useState<Sizes>({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
    });
    const [scrollbar, setScrollbar] = React.useState<ScrollAreaScrollbarElement | null>(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));

    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);

    function getScrollPosition(pointerPos: number) {
      return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes);
    }

    React.useEffect(() => {
      if (scrollbar) setComputedStyle(getComputedStyle(scrollbar));
    }, [scrollbar]);

    const rectRef = React.useRef<ClientRect | null>(null);
    const prevWebkitUserSelectRef = React.useRef<string>('');
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = useCallbackRef((event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollTop + event.deltaY;
        if (context.viewport) context.viewport.scrollTop = scrollPos;
        // prevent window scroll when wheeling on scrollbar
        if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
          event.preventDefault();
        }
      }
    });
    const handleThumbPositionChange = useCallbackRef(() => {
      if (context.viewport && thumbRef.current) {
        const scrollPos = context.viewport.scrollTop;
        const offset = getThumbOffsetFromScroll(scrollPos, sizes);
        thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });
    const handleResize = useDebounceCallback(() => {
      if (scrollbar && context.viewport && computedStyle) {
        setSizes({
          content: context.viewport.scrollHeight,
          viewport: context.viewport.offsetHeight,
          scrollbar: {
            size: scrollbar.clientHeight,
            paddingStart: toInt(computedStyle.paddingTop),
            paddingEnd: toInt(computedStyle.paddingBottom),
          },
        });
      }
    }, 10);

    function handleDragScroll(event: React.PointerEvent<HTMLElement>) {
      if (rectRef.current) {
        if (context.viewport) {
          context.viewport.scrollTop = getScrollPosition(event.clientY - rectRef.current.top);
        }
      }
    }

    /**
     * We bind wheel event imperatively so we can switch off passive
     * mode for document wheel event to allow it to be prevented
     */
    React.useEffect(() => {
      const handleWheel = (event: WheelEvent) => {
        const element = event.target as HTMLElement;
        const isScrollbarWheel = scrollbar?.contains(element);
        if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
      };
      document.addEventListener('wheel', handleWheel, { passive: false });
      return () => document.removeEventListener('wheel', handleWheel, { passive: false } as any);
    }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);

    /**
     * Update thumb position on sizes change
     */
    React.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);

    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);

    const Component = asChild ? Slot : 'div';

    return (
      <ScrollbarProvider
        scrollbar={scrollbar}
        hasThumb={Boolean(thumbRatio > 0 && thumbRatio < 1)}
        onThumbChange={useCallbackRef((thumb) => (thumbRef.current = thumb))}
        onThumbPointerUp={useCallbackRef(() => (pointerOffsetRef.current = 0))}
        onThumbPositionChange={handleThumbPositionChange}
        onThumbPointerDown={useCallbackRef((pointerPos) => {
          pointerOffsetRef.current = pointerPos.y;
        })}
      >
        <Component
          {...props}
          ref={composedRefs}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            ['--scroll-area-thumb-height' as any]: getThumbSize(sizes) + 'px',
            ...props.style,
          }}
          onPointerDown={(event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target as HTMLElement;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar!.getBoundingClientRect();
              // pointer capture doesn't prevent text selection in Safari
              // so we remove text selection manually when scrolling
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = 'none';
              if (context.viewport) context.viewport.style.scrollBehavior = 'auto';
              handleDragScroll(event);
            }
          }}
          onPointerMove={handleDragScroll}
          onPointerUp={(event) => {
            const element = event.target as HTMLElement;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = '';
            rectRef.current = null;
          }}
        />
      </ScrollbarProvider>
    );
  },
);

ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

/* -------------------------------------------------------------------------------------------------
 * ScrollAreaThumb
 * -----------------------------------------------------------------------------------------------*/

type ScrollAreaThumbElement = ScrollAreaThumbImplElement;
interface ScrollAreaThumbProps extends ScrollAreaThumbImplProps {}

const ScrollAreaThumb = React.forwardRef<ScrollAreaThumbElement, ScrollAreaThumbProps>(
  (props, forwardedRef) => {
    const scrollbarContext = useScrollbarContext();
    return scrollbarContext.hasThumb && <ScrollAreaThumbImpl ref={forwardedRef} {...props} />;
  },
);

type ScrollAreaThumbImplElement = React.ComponentRef<'div'>;
interface ScrollAreaThumbImplProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

const ScrollAreaThumbImpl = React.forwardRef<ScrollAreaThumbImplElement, ScrollAreaThumbImplProps>(
  ({ asChild, ...props }, forwardedRef) => {
    const { style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext();
    const scrollbarContext = useScrollbarContext();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRefs = useComposedRefs(forwardedRef, (node) =>
      scrollbarContext.onThumbChange(node),
    );
    const removeUnlinkedScrollListenerRef = React.useRef<() => void>(undefined);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = undefined;
      }
    }, 100);

    const Component = asChild ? Slot : 'div';

    React.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        /**
         * We only bind to native scroll event so we know when scroll starts and ends.
         * When scroll starts we start a requestAnimationFrame loop that checks for
         * changes to scroll position. That rAF loop triggers our thumb position change
         * when relevant to avoid scroll-linked effects. We cancel the loop when scroll ends.
         * https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
         */
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener('scroll', handleScroll);
        return () => viewport.removeEventListener('scroll', handleScroll);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);

    return (
      <Component
        {...thumbProps}
        ref={composedRefs}
        style={{
          height: 'var(--scroll-area-thumb-height)',
          ...style,
        }}
        onPointerDownCapture={(event) => {
          const thumb = event.target as HTMLElement;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }}
        onPointerUp={scrollbarContext.onThumbPointerUp}
      />
    );
  },
);

ScrollAreaThumbImpl.displayName = '';

ScrollAreaThumb.displayName = 'ScrollAreaThumb';

/* -----------------------------------------------------------------------------------------------*/

function toInt(value?: string) {
  return value ? parseInt(value, 10) : 0;
}

function getThumbRatio(viewportSize: number, contentSize: number) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}

function getThumbSize(sizes: Sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  // minimum of 18 matches macOS minimum
  return Math.max(thumbSize, 18);
}

function getScrollPositionFromPointer(pointerPos: number, pointerOffset: number, sizes: Sizes) {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = [0, maxScrollPos];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange as [number, number]);
  return interpolate(pointerPos);
}

function getThumbOffsetFromScroll(scrollPos: number, sizes: Sizes) {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = [0, maxScrollPos];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange as [number, number]);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}

// https://github.com/tmcw-up-for-adoption/simple-linear-scale/blob/master/index.js
function linearScale(input: readonly [number, number], output: readonly [number, number]) {
  return (value: number) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}

function isScrollingWithinScrollbarBounds(scrollPos: number, maxScrollPos: number) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}

// Custom scroll handler to avoid scroll-linked effects
// https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
const addUnlinkedScrollListener = (node: HTMLElement, handler = () => {}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};

function useDebounceCallback(callback: () => void, delay: number) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = React.useRef(0);
  React.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}

function useResizeObserver(element: HTMLElement | null, onResize: () => void) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect(() => {
    let rAF = 0;
    if (element) {
      /**
       * Resize Observer will throw an often benign error that says `ResizeObserver loop
       * completed with undelivered notifications`. This means that ResizeObserver was not
       * able to deliver all observations within a single animation frame, so we use
       * `requestAnimationFrame` to ensure we don't deliver unnecessary observations.
       * Further reading: https://github.com/WICG/resize-observer/issues/38
       */
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}

function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value));
}

/* -----------------------------------------------------------------------------------------------*/

export const Root = ScrollArea;
export const Viewport = ScrollAreaViewport;
export const Scrollbar = ScrollAreaScrollbar;
export const Thumb = ScrollAreaThumb;
