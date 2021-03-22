import { hsla } from 'polished'
import { ProjectName } from '../data/projects'
import { BreakpointList, breakpoints } from './responsive'

export type ThemeName = 'light' | 'dark'

type LimitedShadeRange = 'low' | 'medium' | 'high'
export type FullShadeRange = LimitedShadeRange | 'extraLow' | 'extraHigh'
type ColourRange = 'base' | 'light' | 'dark'
type ColorValue = [number, number, number]

type ThemeCommon = {
  accent: Record<ColourRange, ColorValue>
  projectAccent: Record<ColourRange, ColorValue>
  positive: Record<ColourRange, ColorValue>
  breakpoints: BreakpointList
  radius: Record<'base' | 'pill' | 'circle' | 'frame', string>
  index: Record<'floor' | 'low' | 'medium' | 'high' | 'highest', number>
  borderWidth: Record<'regular' | 'thick', string>
  textShadow: Record<'subtle' | 'heavy', string>
}

export type Theme = {
  name: ThemeName
  foreground: Record<FullShadeRange, ColorValue>
  background: Record<FullShadeRange, ColorValue>
  shadow: Record<LimitedShadeRange, string>
} & ThemeCommon

const accents: Record<'default' | ProjectName, ThemeCommon['accent']> = {
  default: {
    light: [300, 0.98, 0.7],
    base: [266, 0.92, 0.55],
    dark: [267, 0.9, 0.33],
  },
  aragon: {
    light: [184, 0.99, 0.55],
    base: [194, 1, 0.5],
    dark: [194, 1, 0.425],
  },
  bright: {
    light: [285, 1, 0.4],
    base: [267, 1, 0.6],
    dark: [267, 0.9, 0.33],
  },
  blocks: {
    light: [22, 0.63, 0.6],
    base: [15, 0.68, 0.55],
    dark: [11, 0.6, 0.45],
  },
  brandwatch: {
    light: [300, 1, 1],
    base: [300, 1, 0.1],
    dark: [300, 1, 1],
  },
}

const common: ThemeCommon = {
  accent: accents.default,
  projectAccent: accents.default,
  positive: {
    base: [115, 0.64, 0.55],
    light: [115, 0.64, 0.65],
    dark: [115, 0.65, 0.3],
  },
  breakpoints: breakpoints,
  radius: {
    base: 'clamp(12px, 1vw, 20px)',
    frame: 'clamp(6px, 1vw, 12px)',
    pill: '50000px',
    circle: '50%',
  },
  index: {
    floor: 0,
    low: 1,
    medium: 2,
    high: 3,
    highest: 4,
  },
  borderWidth: {
    regular: '1px',
    thick: '2px',
  },
  textShadow: {
    subtle: '0 0 0.03em rgba(0, 0, 0, 0.5)',
    heavy: '0 0 0.3em rgba(0, 0, 0, 0.3)',
  },
}

/* Dark
------------------------------------------------- */
export const darkTheme: Theme = {
  name: 'dark',
  foreground: {
    extraLow: [240, 0.08, 0.42],
    low: [230, 0.08, 0.6],
    medium: [230, 0.08, 0.75],
    high: [230, 0.08, 0.9],
    extraHigh: [0, 0, 1],
  },
  background: {
    extraLow: [240, 0.13, 0.06],
    low: [240, 0.13, 0.07],
    medium: [230, 0.13, 0.1],
    high: [230, 0.13, 0.12],
    extraHigh: [230, 0.13, 0.13],
  },
  shadow: {
    low: `0px 1px 2px ${hsla(240, 0.13, 0.06, 0.2)}, 0px 4px 20px ${hsla(
      240,
      0.13,
      0.06,
      0.125
    )}`,
    medium: `0px 2px 4px ${hsla(240, 0.13, 0.06, 0.4)}, 0px 10px 20px ${hsla(
      240,
      0.13,
      0.06,
      0.3
    )}`,
    high: `0px 10px 10px ${hsla(240, 0.13, 0.06, 0.4)}, 0px 25px 50px ${hsla(
      240,
      0.13,
      0.06,
      0.5
    )}`,
  },
  ...common,
}

/* Light
------------------------------------------------- */
export const lightTheme: Theme = {
  name: 'light',
  foreground: {
    extraLow: [206, 0.08, 0.9],
    low: [206, 0.08, 0.85],
    medium: [206, 0.1, 0.5],
    high: [206, 0.11, 0.35],
    extraHigh: [215, 0.13, 0.02],
  },
  background: {
    extraLow: [223, 0.16, 0.94],
    low: [223, 0.16, 0.95],
    medium: [220, 0.16, 0.96],
    high: [220, 0.16, 0.98],
    extraHigh: [220, 0.16, 0.99],
  },
  shadow: {
    low: `0px 1px 2px ${hsla(223, 0.16, 0.94, 0.125)}, 0px 2px 20px ${hsla(
      223,
      0.16,
      0.94,
      0.05
    )}`,
    medium: `0px 2px 4px ${hsla(223, 0.16, 0.94, 0.03)}, 0px 10px 20px ${hsla(
      223,
      0.16,
      0.94,
      0.06
    )}`,
    high: `0px 5px 10px ${hsla(223, 0.16, 0.94, 0.03)}, 0px 15px 50px ${hsla(
      223,
      0.16,
      0.94,
      0.08
    )}`,
  },
  ...common,
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export function getTheme(
  themeName: ThemeName,
  accentType: 'default' | ProjectName
): Theme {
  return { ...themes[themeName], projectAccent: accents[accentType] }
}

export function applyHsl(value: ColorValue, alpha?: number): string {
  const [hue, saturation, lightness] = value

  const props = {
    hue,
    saturation,
    lightness,
    alpha: alpha !== undefined && alpha < 1 ? alpha : 1,
  }

  return hsla(props)
}
