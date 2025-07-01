import * as React from 'react';

import { Container } from '@/components/container';
import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';

import { SocialLink } from '@/components/social-link';
import * as HoverGroup from '@/components/primitives/hover-group';
import { WorkItem } from '@/components/work-item';
import { getProjectById } from '@/data';
import { RouterTransition } from '../router';
import { cx } from '@/cva.config';
import { Gutter } from '@/components/gutter';

const radix = getProjectById('radix');
const aragon = getProjectById('aragon');
const blocks = getProjectById('blocks');
const dash = getProjectById('dash');

type WorkElement = React.ComponentRef<'section'>;

interface WorkProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Work = React.forwardRef<WorkElement, WorkProps>((props, forwardedRef) => {
  return (
    <section {...props} ref={forwardedRef} className={cx('relative z-10', props.className)}>
      <Gutter>
        <Container className="relative mb-14 sm:mb-16 md:mb-22 lg:mb-24 xl:mb-24">
          <div className="max-w-[14em] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl relative">
            <Hatch
              orientation="vertical"
              className="hidden wide:block absolute w-7 -left-7 xl:w-10 top-10 md:left-0 bottom-0"
            />
            <Line
              orientation="vertical"
              className="absolute hidden xl:block xl:left-10 -top-6 -bottom-10"
            />

            <div className="md:ml-7 xl:ml-10">
              <RouterTransition multiplier={1}>
                <div className="capsize font-body text-base sm:text-lg text-slate-10 mb-8 sm:mb-9 md:mb-10 xl:mb-11">
                  Software Engineer
                </div>
              </RouterTransition>
              <RouterTransition multiplier={4}>
                <h1 className="text-slate-12 font-display relative z-10 font-normal mb-10 sm:mb-12 lg:mb-16 xl:mb-18 tracking-tighter leading-tight capsize text-balance">
                  Building next-generation user interfaces out of the UK
                </h1>
              </RouterTransition>

              <RouterTransition multiplier={6}>
                <ul className="flex gap-2 sm:gap-3 lg:gap-4 relative">
                  {(['github', 'linkedin', 'dribbble', 'twitter', 'instagram'] as const).map(
                    (platform) => (
                      <li key={platform}>
                        <SocialLink platform={platform} />
                      </li>
                    ),
                  )}
                </ul>
              </RouterTransition>
            </div>
          </div>

          <HeroMark
            aria-hidden
            className="absolute w-[1400px] -right-[450px] -top-[300px] md:-top-[300px] md:w-[1500px] md:-right-[500px] lg:-top-[300px] lg:w-[2000px] lg:-right-[500px] xl:w-[2700px] xl:-right-[850px] xl:-top-[500px] -z-10"
          />
        </Container>
      </Gutter>

      <Gutter collapse>
        <Container width="wide" className="relative">
          <RouterTransition multiplier={10}>
            <Line
              className="absolute xl:top-10 hidden md:block md:top-7 -left-full -right-full"
              solid
              contrast="low"
            />
            <Line
              className="absolute xl:bottom-10 bottom-5 hidden md:block md:bottom-7 -left-full -right-full"
              solid
              contrast="low"
            />
            <div className="border-y md:border-x border-slate-3 from-slate-3/25 to-slate-2/50 bg-gradient-to-br rounded-3xl shadow-slate-1 shadow-2xl relative overflow-hidden">
              <Line
                orientation="vertical"
                className="absolute left-1/2 top-0 bottom-0 opacity-50 hidden sm:block"
                contrast="low"
                solid
              />
              <div className="absolute left-1/2 top-0 right-0 bottom-0 from-slate-3/30 to-slate-2/10 bg-gradient-to-br hidden sm:block" />

              <HoverGroup.Root>
                <ul className="grid grid-cols-1 sm:grid-cols-2">
                  <li className="relative">
                    <Line className="absolute -left-24 right-0 bottom-0" />

                    {radix && <WorkItem project={radix} className="relative" priority />}
                  </li>

                  <li className="relative">
                    <Line
                      orientation="vertical"
                      className="absolute left-5 md:left-7 xl:left-10 -bottom-44 h-full"
                    />

                    {aragon && <WorkItem project={aragon} className="relative" priority />}
                  </li>

                  <li>{blocks && <WorkItem project={blocks} priority />}</li>

                  <li className="relative sm:-mt-[31.5%]">
                    <Line className="absolute -left-10 sm:-left-5 md:-left-7 xl:-left-10 -right-24 top-0" />
                    <Line orientation="vertical" className="absolute right-0 -top-20" />
                    <Hatch
                      orientation="vertical"
                      className="absolute -top-5 xl:-top-10 h-1/2 w-5 md:w-7 xl:w-10 -right-5 md:-right-7 xl:-right-10"
                    />
                    {dash && <WorkItem project={dash} className="relative" priority />}
                  </li>
                </ul>
              </HoverGroup.Root>
            </div>
          </RouterTransition>
        </Container>
      </Gutter>
    </section>
  );
});

Work.displayName = 'Work';

/* -----------------------------------------------------------------------------------------------*/

type HeroMarkElement = React.ComponentRef<'svg'>;

interface HeroMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

const HeroMark = React.forwardRef<HeroMarkElement, HeroMarkProps>((props, forwardedRef) => {
  const uid = React.useId();

  const radialGradientId = `hero_mark_radial_gradient_${uid}`;
  const verticalGradientId1 = `hero_mark_vertical_gradient_1_${uid}`;
  const verticalGradientId2 = `hero_mark_vertical_gradient_2_${uid}`;

  return (
    <svg aria-hidden width="100%" viewBox="0 0 975 948" fill="none" {...props} ref={forwardedRef}>
      <path
        d="M401.574 776.473L637 59.247"
        className="stroke-slate-2 md:stroke-slate-3"
        strokeDasharray="5 5"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      <circle
        cx="399.866"
        cy="552.038"
        r="70.846"
        className="stroke-slate-4"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="5 5"
      />

      <circle
        cx="503.5"
        cy="301.5"
        r="71.0736"
        className="stroke-slate-3"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="5 5"
      />

      <path
        d="M305.894 302.426H382.218L268.762 646.227C258.815 676.369 230.655 696.73 198.914 696.73H122.59L236.046 352.929C245.993 322.787 274.153 302.426 305.894 302.426Z"
        fill="none"
        className="stroke-slate-3"
        strokeWidth="1"
        strokeDasharray="5 5"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M505.074 229.581H581.399L467.943 573.381C457.996 603.523 429.835 623.884 398.095 623.884H321.77L435.227 280.083C445.174 249.942 473.334 229.581 505.074 229.581Z"
        fill={`url(#${verticalGradientId1})`}
        className="stroke-slate-3/50"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M703.98 170.792L778.901 171.833L778.9 171.839L778.357 173.483L776.251 179.858L768.359 203.753L741.035 286.485L665.686 514.625C655.851 544.401 628.231 564.636 596.876 565.072L520.251 566.136L633.054 221.46C643.065 190.873 671.799 170.346 703.98 170.792Z"
        fill={`url(#${verticalGradientId2})`}
        className="stroke-slate-3/75"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      <defs>
        <radialGradient
          id={radialGradientId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(538.604 435.754) rotate(67.743) scale(273.922 455.359)"
          className="text-slate-1"
        >
          <stop offset="0.215" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>

        <linearGradient
          id={verticalGradientId1}
          x1="0"
          y1="0"
          x2="0.7"
          y2="0.5"
          className="text-slate-2/25"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id={verticalGradientId2}
          x1="0"
          y1="0"
          x2="0.7"
          y2="0.7"
          className="text-slate-2/25"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

HeroMark.displayName = 'HeroMark';
