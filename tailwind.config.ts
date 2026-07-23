import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import ibmPlexSerifMetrics from '@capsizecss/metrics/iBMPlexSerif';
import manropeMetrics from '@capsizecss/metrics/manrope';
import capsize from 'tailwindcss-capsize';
import {
  colorProject,
  colorSlateDark,
  colorSlateLight,
  colorSocial,
  colorTheme,
  containerWidths,
  curves,
  screens,
} from './theme';

const tailwindScreens: Record<string, string> = {};
const tailwindContainerWidths: Record<string, string> = {};

Object.keys(screens).forEach((key) => {
  tailwindScreens[key] = `${screens[key as keyof typeof screens]}px`;
});

Object.keys(containerWidths).forEach((key) => {
  tailwindContainerWidths[key] = `${containerWidths[key as keyof typeof containerWidths]}px`;
});

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: tailwindScreens,
    colors: {
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      green: 'oklch(52.89% 0.127 167.17 / <alpha-value>)',
      slate: {
        ...colorSlateDark,
        light: colorSlateLight,
      },
      ...colorProject,
      ...colorSocial,
      theme: {
        ...colorTheme,
      },
    },
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      code: ['var(--font-code)'],
    },
    fontMetrics: {
      display: ibmPlexSerifMetrics,
      body: manropeMetrics,
    },
    outlineOffset: {
      ...defaultTheme.spacing,
    },
    extend: {
      keyframes: {
        'route-enter': {
          from: {
            opacity: '0',
            transform: 'translateY(var(--route-distance, 60px))',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'route-enter': `route-enter 550ms ${curves.snappy} 150ms both`,
      },
      transitionTimingFunction: {
        ...curves,
      },
      willChange: {
        motion: 'transform, opacity',
      },
      maxWidth: {
        ...tailwindContainerWidths,
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
    },
  },
  plugins: [capsize],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
