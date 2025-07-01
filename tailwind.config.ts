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
    },
    fontMetrics: {
      display: ibmPlexSerifMetrics,
      body: manropeMetrics,
    },
    outlineOffset: {
      ...defaultTheme.spacing,
    },
    extend: {
      willChange: {
        motion: 'transform, opacity',
      },
      maxWidth: {
        ...tailwindContainerWidths,
      },
    },
  },
  plugins: [capsize],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
