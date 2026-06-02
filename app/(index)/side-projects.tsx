import * as React from 'react';
import { getProjectById } from '@/data';

import { Container } from '@/components/container';
import { Line } from '@/components/line';
import { Gutter } from '@/components/gutter';
import * as HoverGroup from '@/components/primitives/hover-group';
import { WorkItem } from '@/components/work-item';

const blocks = getProjectById('blocks');
const artifacts = getProjectById('artifacts');

type SideProjectsElement = React.ComponentRef<'section'>;

interface SideProjectsProps extends React.ComponentPropsWithoutRef<'section'> {}

export const SideProjects = React.forwardRef<SideProjectsElement, SideProjectsProps>(
  (props, forwardedRef) => {
    return (
      <section {...props} ref={forwardedRef}>
        <Gutter className="relative pt-12 md:pt-20 lg:pt-24 xl:pt-32">
          <Container>
            <div className="mb-12 md:mb-14 lg:mb-20 xl:mb-24 lg:text-center relative z-10 md:pl-7 lg:pl-0">
              <h2 className="text-slate-8 font-display font-normal tracking-tighter text-3xl lg:text-4xl xl:text-5xl capsize leading-tight lg:leading-tight xl:leading-tight max-w-[25em] lg:mx-auto">
                <div className="text-balance">
                  <span className="text-slate-12">Side projects</span> are where I reconnect with
                  the joy of exploring. There are no requirements, no deadlines, just{' '}
                  <span className="text-slate-12">curiosity</span>,{' '}
                  <span className="text-slate-12">practice</span>, and{' '}
                  <span className="text-slate-12">craft</span>
                </div>
              </h2>
            </div>
          </Container>

          <Container width="wide" className="relative">
            <div className="relative">
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
                    <li>
                      <WorkItem project={artifacts} />
                    </li>

                    <li>
                      <WorkItem project={blocks} />
                    </li>
                  </ul>
                </HoverGroup.Root>
              </div>
            </div>
          </Container>
        </Gutter>
      </section>
    );
  },
);

SideProjects.displayName = 'SideProjects';
