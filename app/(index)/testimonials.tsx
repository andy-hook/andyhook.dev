import * as React from 'react';
import { cx } from '@/cva.config';
import { getTestimonialById } from '@/data';

import { Container } from '@/components/container';
import { Quote } from '@/components/quote';
import { Line } from '@/components/line';
import { Author } from '@/components/author';
import { Gutter } from '@/components/gutter';

const vlad = getTestimonialById('vlad');
const benoit = getTestimonialById('benoit');
const michael = getTestimonialById('michael');
const andrew = getTestimonialById('andrew');
const brett = getTestimonialById('brett');

type TestimonialsElement = React.ComponentRef<'section'>;

interface TestimonialsProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Testimonials = React.forwardRef<TestimonialsElement, TestimonialsProps>(
  (props, forwardedRef) => {
    return (
      <section {...props} ref={forwardedRef}>
        <Gutter>
          <Container>
            <div className="mb-12 md:mb-14 xl:mb-20 lg:text-center relative z-10 md:pl-7 lg:pl-0">
              <h2 className="text-slate-12 font-display mb-8 lg:mb-7 xl:mb-8 font-normal tracking-tighter text-3xl lg:text-4xl xl:text-5xl capsize leading-tight lg:leading-tight xl:leading-tight">
                <div className="text-balance">Trusted by world-class teams</div>
              </h2>

              <p className="text-slate-10 leading-relaxed sm:leading-relaxed lg:leading-relaxed text-sm sm:text-base font-body lg:text-lg capsize sm:text-pretty text-balance">
                I’ve worked with some amazing people throughout the years, here is what they have to
                say
              </p>
            </div>
          </Container>

          <Container width="wide">
            <div className="relative">
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                fill="none"
                className="text-slate-2 size-[700px] absolute -top-80 right-0 pointer-events-none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <svg
                aria-hidden
                viewBox="0 0 100 100"
                fill="none"
                className="text-slate-4 size-[800px] -bottom-40 md:size-[900px] absolute md:-bottom-60 -left-8 pointer-events-none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="10 10"
                />
              </svg>

              <TestimonialGrid />
            </div>
          </Container>
        </Gutter>
      </section>
    );
  },
);

Testimonials.displayName = 'Testimonials';

/* -----------------------------------------------------------------------------------------------*/

type TestimonialGridElement = React.ComponentRef<'div'>;

interface TestimonialGridProps extends React.ComponentPropsWithoutRef<'div'> {}

const TestimonialGrid = React.forwardRef<TestimonialGridElement, TestimonialGridProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div className="relative">
        <Line
          className="absolute top-5 md:top-7 xl:top-10 -left-full right-1/2 lg:-right-full"
          solid
          contrast="low"
        />
        <Line
          className="absolute bottom-5 sm:bottom-10 -left-full -right-full"
          solid
          contrast="low"
        />
        <div
          className={cx(
            'border-slate-3 rounded-3xl border from-slate-3/30 to-slate-2/30 bg-gradient-to-br relative shadow-slate-1 shadow-2xl',
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <li className="sm:col-span-2 lg:col-span-1 lg:row-span-2 p-5 pb-7 md:p-7 xl:p-10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-3/0 via-slate-3/40 border-b lg:border-b-0 lg:border-r border-slate-3 rounded-3xl rounded-b-none lg:rounded-bl-3xl lg:rounded-r-none" />

              <div className="relative h-full flex flex-col">
                <div className="relative mb-10 lg:mb-16 self-start">
                  <Line className="absolute -left-16 -right-6 bottom-0" />
                  <Line orientation="vertical" className="absolute right-0 -top-6 -bottom-5" />
                  <QuoteMark className="relative w-8 sm:w-12 lg:w-13" />
                </div>

                {vlad && (
                  <figure className="flex flex-grow flex-col justify-between relative">
                    <Quote className="font-body font-medium text-base sm:text-lg md:text-xl xl:text-2xl text-slate-12 leading-relaxed sm:leading-relaxed md:leading-relaxed xl:leading-relaxed mb-10 sm:mb-12">
                      {vlad.excerpt}
                    </Quote>

                    <Line orientation="vertical" className="absolute left-0 -top-8 bottom-16" />

                    <figcaption>
                      <Author
                        name={vlad.name}
                        company={vlad.company}
                        role={vlad.role}
                        avatar={vlad.avatar}
                      />
                    </figcaption>
                  </figure>
                )}
              </div>
            </li>

            <li className="px-5 py-7 md:p-7 xl:p-10 relative">
              {benoit && (
                <TestimonialGridItem content={benoit.excerpt}>
                  <Author
                    name={benoit.name}
                    company={benoit.company}
                    role={benoit.role}
                    avatar={benoit.avatar}
                  />
                </TestimonialGridItem>
              )}

              <Line className="absolute bottom-0 left-0 right-0 sm:right-auto sm:w-[180%]" />
              <Line
                orientation="vertical"
                className="absolute right-0 top-0 lg:top-10 h-[150%] hidden sm:block"
                solid
                contrast="low"
              />
            </li>

            {michael && (
              <li className="lg:col-start-2 lg:row-start-2 px-5 py-7 md:p-7 xl:p-10 relative">
                <TestimonialGridItem content={michael.excerpt}>
                  <Author
                    name={michael.name}
                    company={michael.company}
                    role={michael.role}
                    avatar={michael.avatar}
                  />
                </TestimonialGridItem>

                <Line className="absolute bottom-0 left-0 right-0 sm:hidden" />
              </li>
            )}

            {andrew && (
              <li className="lg:col-start-3 lg:row-start-2 px-5 py-7 md:p-7 xl:p-10 relative">
                <TestimonialGridItem content={andrew.excerpt}>
                  <Author
                    name={andrew.name}
                    company={andrew.company}
                    role={andrew.role}
                    avatar={andrew.avatar}
                  />
                </TestimonialGridItem>

                <Line className="absolute bottom-0 left-0 right-0 sm:hidden" />
              </li>
            )}

            {brett && (
              <li className="lg:col-start-3 lg:row-start-1 p-5 pt-7 md:p-7 xl:p-10">
                <TestimonialGridItem content={brett.excerpt}>
                  <Author
                    name={brett.name}
                    company={brett.company}
                    role={brett.role}
                    avatar={brett.avatar}
                  />
                </TestimonialGridItem>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  },
);

TestimonialGrid.displayName = 'TestimonialGrid';

/* -----------------------------------------------------------------------------------------------*/

type TestimonialGridItemElement = React.ComponentRef<'figure'>;

interface TestimonialGridItemProps extends React.ComponentPropsWithoutRef<'figure'> {
  content: string;
}

const TestimonialGridItem = React.forwardRef<TestimonialGridItemElement, TestimonialGridItemProps>(
  ({ className, content, children, ...props }, forwardedRef) => {
    return (
      <figure
        {...props}
        className={cx('flex flex-col justify-between h-full', className)}
        ref={forwardedRef}
      >
        <Quote className="font-body text-slate-11 font-medium text-sm sm:text-base mb-10 sm:mb-12 lg:mb-16 leading-relaxed sm:leading-relaxed">
          {content}
        </Quote>

        <figcaption>{children}</figcaption>
      </figure>
    );
  },
);

TestimonialGridItem.displayName = 'TestimonialGridItem';

/* -----------------------------------------------------------------------------------------------*/

type QuoteMarkElement = React.ComponentRef<'svg'>;

interface QuoteMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

const QuoteMark = React.forwardRef<QuoteMarkElement, QuoteMarkProps>((props, forwardedRef) => {
  const uid = React.useId();

  const gradientId = `decorative_quote_gradient_${uid}`;

  return (
    <svg aria-hidden viewBox="0 0 52 45" fill="none" {...props} ref={forwardedRef}>
      <path
        d="M50.4948 1.48439L50.5654 1.00047L50.0832 0.919124C43.0807 -0.262037 37.6923 1.04445 34.0584 4.98098C30.4614 8.82205 28.7045 14.4547 28.7045 21.7911V44V44.5H29.2045H50H50.5V44V22.6229V22.1229H50H39.6644C39.4005 19.8566 39.5033 17.8515 39.9586 16.0993C40.4929 14.2023 41.4692 12.7826 42.8765 11.8042L42.8766 11.8043L42.8864 11.7972C44.2727 10.7826 46.1871 10.3456 48.6943 10.561L49.1638 10.6013L49.2319 10.135L50.4948 1.48439ZM22.2903 1.48439L22.3609 1.00047L21.8787 0.919124C14.8761 -0.26205 9.48774 1.04448 5.85377 4.98111C2.25686 8.82218 0.5 14.4548 0.5 21.7911V44V44.5H1H21.7955H22.2955V44V22.6229V22.1229H21.7955H11.4599C11.1961 19.8566 11.2988 17.8514 11.7541 16.0992C12.2884 14.2023 13.2648 12.7826 14.672 11.8042L14.6721 11.8043L14.6819 11.7972C16.0682 10.7826 17.9826 10.3456 20.4898 10.561L20.9593 10.6013L21.0274 10.135L22.2903 1.48439Z"
        fill={`url(#${gradientId})`}
        className="stroke-slate-8"
        vectorEffect="non-scaling-stroke"
        strokeWidth="0.75"
      />
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.5" y2="0.9" className="text-slate-5">
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

QuoteMark.displayName = 'QuoteMark';
