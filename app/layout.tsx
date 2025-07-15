import './globals.css';

import * as React from 'react';
import type { Metadata } from 'next';
import { Manrope, IBM_Plex_Serif } from 'next/font/google';
import { cx } from '@/cva.config';

import { Container } from '@/components/container';

import * as Sidebar from './sidebar';

import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';
import { Gutter } from '@/components/gutter';
import { Copy } from '@/components/copy';

import * as TooltipPrimitive from '@/components/primitives/tooltip';
import { SocialLink } from '@/components/social-link';
import { DeviceProvider } from '@/components/utils/use-device';
import { Theme } from './theme';
import { RouterLink, RouterProvider, RouterTransition } from './router';
import { FocusRing } from '@/components/focus-ring';

const displayFont = IBM_Plex_Serif({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Andy Hook – Software Engineer',
  description: 'Building next-generation user interfaces out of the UK',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          displayFont.variable,
          bodyFont.variable,
          'bg-slate-2 relative antialiased overflow-x-hidden',
        )}
      >
        <DeviceProvider>
          <TooltipPrimitive.DelayProvider delay={{ open: 250, close: 0 }} timeoutMs={250}>
            <Theme className="relative overflow-x-hidden z-0">
              <RouterProvider>
                <Sidebar.Root>
                  <Sidebar.Animation className="relative z-10">
                    <Header />
                  </Sidebar.Animation>

                  <Sidebar.Trigger className="z-30" />
                  <Sidebar.Menu className="z-20" />
                  <Sidebar.Overlay className="z-10" />

                  <main className="relative z-0">
                    <Sidebar.Animation>
                      {children}

                      <RouterTransition multiplier={10}>
                        <Footer />
                      </RouterTransition>
                    </Sidebar.Animation>
                  </main>

                  <Background className="absolute inset-0 -z-10" />
                </Sidebar.Root>
              </RouterProvider>
            </Theme>
          </TooltipPrimitive.DelayProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}

/* -----------------------------------------------------------------------------------------------*/

type HeaderElement = React.ComponentRef<'header'>;

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

const Header = React.forwardRef<HeaderElement, HeaderProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <header
        className={cx(
          'pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-20 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-28 w-full',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Gutter>
          <Container className="flex justify-between items-center md:px-7 xl:px-10" width="wide">
            <FocusRing className="outline-offset-0 focus-visible:outline-offset-1">
              <RouterLink
                href="/"
                className="text-slate-12 font-body tracking-tight font-bold text-base capsize p-2 -m-2 rounded-md"
              >
                Andy Hook
              </RouterLink>
            </FocusRing>
          </Container>
        </Gutter>
      </header>
    );
  },
);

Header.displayName = 'Header';

/* -----------------------------------------------------------------------------------------------*/

type FooterElement = React.ComponentRef<'footer'>;

interface FooterProps extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer = React.forwardRef<FooterElement, FooterProps>((props, forwardedRef) => {
  return (
    <footer {...props} ref={forwardedRef}>
      <Gutter className="relative overflow-hidden">
        <Container className="pb-44 md:pb-24 lg:pb-72 xl:pb-96 pt-44 md:pt-52 md:px-7 lg:pt-80 xl:pt-96 xl:px-10 xl:mt-8">
          <div className="relative">
            <div className="h-px w-full absolute -left-full right-full bottom-0 bg-slate-4" />
            <div className="grid grid-cols-[60%,20%,20%] xl:grid-cols-[65%,22%,13%] h-px w-full absolute left-0 right-0 bottom-0">
              <div className="bg-gradient-to-r from-slate-4 via-slate-4" />
              <div />
              <div className="bg-gradient-to-l from-slate-4 from-0%" />
            </div>
            <div className="h-px w-full absolute left-full -right-full bottom-0 bg-slate-4" />

            <FooterMark className="absolute w-[1100px] -right-[440px] sm:-right-[330px] -top-[390px] md:w-[840px] md:-right-[100px] md:-top-[355px] lg:w-[700px] lg:-top-[300px] lg:-right-auto lg:left-[33vw] lg:-ml-[3%] xl:ml-0 xl:left-[36%] xl:w-[840px] xl:-top-[355px]" />

            <Line orientation="vertical" className="absolute left-0 -top-24 -bottom-32" />

            <div className="font-body text-slate-10 text-base lg:text-lg capsize absolute -top-11 lg:-top-16 left-0">
              Get in touch
            </div>

            <div className="font-display text-slate-12 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter capsize relative z-10">
              <Copy>hello@andyhook.dev</Copy>
            </div>

            <div className="absolute -bottom-7 sm:-bottom-10 left-0 md:left-auto md:bottom-11 md:right-0 lg:right-auto lg:left-0 lg:-bottom-14">
              <Hatch className="h-7 sm:h-10 w-56 md:h-6 lg:h-14 lg:w-80" />

              <div className="absolute -bottom-7 sm:-bottom-9 -mb-2 lg:-bottom-11 left-0 md:left-auto md:right-0 lg:right-auto lg:left-0 inline-flex z-20">
                <Line className="absolute top-0 -left-12 -right-24" />
                <Line className="absolute bottom-0 -left-6 right-32" contrast="low" />

                <ul className="flex gap-2 sm:gap-3 lg:gap-4 relative">
                  {(['github', 'linkedin', 'dribbble', 'twitter', 'instagram'] as const).map(
                    (platform) => (
                      <li key={platform}>
                        <SocialLink platform={platform} />
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Gutter>
    </footer>
  );
});

Footer.displayName = 'Footer';

/* -----------------------------------------------------------------------------------------------*/

type FooterMarkElement = React.ComponentRef<'svg'>;

interface FooterMarkProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const FooterMark = React.forwardRef<FooterMarkElement, FooterMarkProps>(
  (props, forwardedRef) => {
    const uid = React.useId();

    const verticalGradientId1 = `footer_mark_vertical_gradient_1_${uid}`;
    const verticalGradientId2 = `footer_mark_vertical_gradient_2_${uid}`;

    return (
      <svg viewBox="0 0 790 790" fill="none" {...props} ref={forwardedRef} aria-hidden>
        <path
          d="M343.971 647.634L522.729 101.979"
          className="stroke-slate-3 lg:stroke-slate-5"
          strokeWidth="0.75"
          strokeDasharray="5 5"
        />

        <line
          x1="362"
          y1="710"
          x2="540"
          y2="166.361"
          className="stroke-slate-3 lg:stroke-slate-6"
          strokeWidth="0.75"
          strokeDasharray="5 5"
          vectorEffect="non-scaling-stroke"
        />

        <circle
          cx="341.917"
          cy="476.759"
          r="53.461"
          className="stroke-slate-3 lg:stroke-slate-6"
          strokeWidth="0.75"
          strokeDasharray="5 5"
          vectorEffect="non-scaling-stroke"
        />

        <circle
          cx="421.349"
          cy="285.026"
          r="53.461"
          className="stroke-slate-3 lg:stroke-slate-5"
          strokeWidth="0.75"
          strokeDasharray="5 5"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M420.025 231.247H480.485L393.793 494.935C386.809 516.179 366.974 530.538 344.611 530.538H284.151L370.843 266.85C377.827 245.606 397.663 231.247 420.025 231.247Z"
          fill={`url(#${verticalGradientId1})`}
          className="stroke-slate-2 lg:stroke-slate-5"
          strokeWidth="0.75"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M571.273 186.585L631.134 187.416L544.301 450.328C537.379 471.287 517.93 485.552 495.86 485.859L434.8 486.707L521.35 222.249C528.396 200.719 548.621 186.27 571.273 186.585Z"
          fill={`url(#${verticalGradientId2})`}
          className="stroke-slate-2 lg:stroke-slate-5"
          strokeWidth="0.75"
          vectorEffect="non-scaling-stroke"
        />

        <defs>
          <linearGradient
            id={verticalGradientId1}
            x1="0"
            y1="0"
            x2="0.55"
            y2="0.6"
            className="text-transparent lg:text-slate-2"
          >
            <stop stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id={verticalGradientId2}
            x1="0"
            y1="0"
            x2="0.6"
            y2="0.7"
            className="text-transparent lg:text-slate-2"
          >
            <stop stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

FooterMark.displayName = 'FooterMark';

/* -----------------------------------------------------------------------------------------------*/

type BackgroundElement = React.ComponentRef<'div'>;

interface BackgroundProps extends React.ComponentPropsWithoutRef<'div'> {}

const Background = React.forwardRef<BackgroundElement, BackgroundProps>(
  ({ className, ...props }, forwardedRef) => {
    const uid = React.useId();
    const patternId = `root_background_pattern_${uid}`;

    return (
      <div className={cx(className, 'absolute inset-0')} {...props} ref={forwardedRef}>
        <Sidebar.Animation className="absolute top-0 left-0 inset-0 z-30">
          <Gutter className="h-full">
            <Container width="wide" className="relative h-full">
              <Line
                orientation="vertical"
                className="hidden md:block absolute left-0 md:left-7 xl:left-10 top-0 bottom-0"
              />
              <Line
                orientation="vertical"
                className="hidden md:block absolute right-0 md:right-7 xl:right-10 top-0 bottom-0"
              />
            </Container>
          </Gutter>
        </Sidebar.Animation>

        <div className="from-slate-1 via-slate-1/50 fixed inset-0 z-20 bg-gradient-to-tl" />

        <svg width="100%" height="100%">
          <defs>
            <pattern
              id={patternId}
              patternUnits="userSpaceOnUse"
              width="100%"
              height="5"
              x="50%"
              y="50%"
            >
              <rect width="1" height="100%" y="1" className="fill-slate-3/75" />
              <rect width="100%" height="1" className="fill-slate-3/80" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  },
);

Background.displayName = 'Background';
