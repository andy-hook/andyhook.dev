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
              <h2 className="text-slate-12 font-display font-normal tracking-tighter text-3xl lg:text-4xl xl:text-5xl leading-tight lg:leading-tight xl:leading-tight capsize mb-10 lg:mb-12 xl:mb-16 pr-20">
                <div className="text-balance">More than 15 years of experience</div>
              </h2>

              <div className="text-slate-11 font-body font-normal leading-relaxed sm:leading-relaxed lg:leading-relaxed text-sm sm:text-base lg:text-lg space-y-10 lg:row-span-2 mb-14 lg:mb-0">
                <p className="capsize">
                  I’m a design-minded software engineer with more than 15 years of experience
                  building high-quality interfaces and design systems across AI, developer tooling,
                  SaaS, and collaborative web applications.
                </p>

                <p className="capsize">
                  My work spans UI architecture, design engineering, accessibility, performance, and
                  developer experience. I’ve worked on everything from AI-powered rich-text
                  environments and authentication products to widely adopted component systems that
                  power interfaces used by millions.
                </p>

                <p className="capsize">
                  I bring a deep understanding of usability and interaction design to product work,
                  simplifying complex surfaces into software that feels robust and intuitive.
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
