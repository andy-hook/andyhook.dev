import * as React from 'react';
import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';
import { Gutter } from '@/components/gutter';
import { Container } from '@/components/container';
import { RouterTransition } from '@/app/router';

type ContentSectionElement = React.ComponentRef<'section'>;

interface ContentSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  title: string;
}

export const ContentSection = React.forwardRef<ContentSectionElement, ContentSectionProps>(
  ({ children, title, ...props }, forwardedRef) => {
    return (
      <section {...props} ref={forwardedRef}>
        <RouterTransition multiplier={10}>
          <Gutter>
            <Container className="md:px-7 xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-7 xl:gap-10 items-start">
              <h2 className="font-display tracking-tighter text-slate-12 text-3xl sm:text-4xl xl:text-5xl leading-tight lg:leading-tight xl:leading-tight capsize relative">
                <Line
                  className="absolute top-[0.7em] -left-[100vw] right-24"
                  solid
                  contrast="low"
                />

                <Line
                  orientation="vertical"
                  className="absolute left-0 top-0 -bottom-36 hidden sm:block"
                />

                <Hatch
                  orientation="vertical"
                  className="hidden wide:block absolute w-6 md:w-7 xl:w-10 -left-6 md:-left-7 xl:-left-10 top-[0.575em] h-32"
                />
                <div className="relative text-balance">{title}</div>
              </h2>

              <div className="font-body text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-relaxed lg:leading-relaxed text-slate-11 space-y-10">
                {children}
              </div>
            </Container>
          </Gutter>
        </RouterTransition>
      </section>
    );
  },
);

ContentSection.displayName = 'ContentSection';
