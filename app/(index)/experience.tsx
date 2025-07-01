import * as React from 'react';

import { Line } from '@/components/line';
import { Container } from '@/components/container';
import { Hatch } from '@/components/hatch';

import { ExperienceList } from './experience-list';
import { DownloadButton } from '@/components/download-button';
import { Gutter } from '@/components/gutter';

type ExperienceElement = React.ComponentRef<'section'>;

interface ExperienceProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Experience = React.forwardRef<ExperienceElement, ExperienceProps>(
  (props, forwardedRef) => {
    return (
      <section {...props} ref={forwardedRef}>
        <Gutter>
          <Container>
            <div className="mb-20 lg:mb-24 grid lg:grid-rows-[auto_1fr] grid-cols-1 lg:grid-cols-2 md:gap-x-0 md:px-7 xl:px-10 relative items-start">
              <h2 className="text-slate-12 font-display font-normal tracking-tighter text-3xl lg:text-4xl xl:text-5xl leading-tight lg:leading-tight xl:leading-tight capsize mb-10 lg:mb-12 xl:mb-16">
                <div className="text-balance">More than a decade building for the web</div>
              </h2>

              <div className="text-slate-11 font-body font-normal leading-relaxed sm:leading-relaxed lg:leading-relaxed text-sm sm:text-base lg:text-lg space-y-10 lg:row-span-2 mb-14 lg:mb-0">
                <p className="capsize">
                  Design is at the heart of everything I do, I believe that a close relationship
                  between visual design, UX and front-end engineering expertise leads to a better
                  customer experience within digital products.
                </p>
                <p className="capsize">
                  As a specialist in modular design systems and component libraries, I work to
                  bridge the gap between design and engineering disciplines and am a catalyst for
                  fast, iterative processes within agile product teams. My technical experience
                  spans a wealth of front-end technologies ranging from modern SPA frameworks to
                  run-time performance profiling, testing and accessibility.
                </p>
              </div>

              <div className="relative">
                <Line
                  orientation="vertical"
                  className="absolute hidden xl:block left-0 top-0 -bottom-28"
                />

                <Hatch
                  orientation="vertical"
                  className="hidden wide:block absolute -bottom-24 h-24 w-7 -left-7 xl:w-10 xl:-left-10"
                />

                <DownloadButton />

                <Line
                  className="absolute -left-[100vw] right-32 bottom-0 -z-10"
                  solid
                  contrast="low"
                />
              </div>

              <svg
                aria-hidden
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                className="text-slate-2 size-[1000px] absolute -top-[400px] -left-[300px] -z-10"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="10 10"
                />
              </svg>
            </div>
          </Container>

          <Container width="wide">
            <ExperienceList />
          </Container>
        </Gutter>
      </section>
    );
  },
);

Experience.displayName = 'Experience';
