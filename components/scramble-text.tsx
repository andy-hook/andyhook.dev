'use client';

import * as React from 'react';
import { useScramble, UseScrambleProps } from 'use-scramble';
import { useComposedRefs } from './utils/compose-refs';

interface ScrambleTextElement {
  replay(): void;
}

type ScrambleTextOptions = Omit<UseScrambleProps, 'text'>;

interface ScrambleTextProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'onAnimationEnd' | 'onAnimationStart'>,
    ScrambleTextOptions {
  children: string;
}

export const ScrambleText = React.forwardRef<ScrambleTextElement, ScrambleTextProps>(
  (
    {
      children,
      playOnMount = false,
      speed,
      tick,
      step,
      chance,
      seed,
      scramble,
      ignore = [' '],
      range,
      overdrive,
      overflow,
      onAnimationStart,
      onAnimationEnd,
      onAnimationFrame,
      ...props
    },
    forwardedRef,
  ) => {
    const stepSeed = Math.round(children.length / 10);
    const stepDefault = step || stepSeed === 0 ? 1 : stepSeed;

    const scrambleOptions = {
      playOnMount,
      speed,
      tick,
      step: stepDefault,
      chance,
      seed,
      scramble,
      ignore,
      range,
      overdrive,
      overflow,
      onAnimationStart,
      onAnimationEnd,
      onAnimationFrame,
    };

    const { ref, replay: replayScramble } = useScramble({
      text: children,
      ...scrambleOptions,
    });
    const composedRefs = useComposedRefs(forwardedRef, ref);

    React.useImperativeHandle(forwardedRef, () => {
      return {
        replay() {
          replayScramble();
        },
      };
    }, [replayScramble]);

    return (
      <span {...props} ref={composedRefs}>
        {children}
      </span>
    );
  },
);

ScrambleText.displayName = 'ScrambleText';
