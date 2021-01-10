import { hsla } from 'polished'
import { css, CSSProp, DefaultTheme, ThemeProps } from 'styled-components'
import { BreakpointList, breakpoints } from './responsive'

export type ThemeName = 'light' | 'dark'

type LimitedShadeRange = 'low' | 'medium' | 'high'
type FullShadeRange = LimitedShadeRange | 'extraLow' | 'extraHigh'
type ColourRange = 'base' | 'light' | 'dark'

type ColorValue = [number, number, number]

type ThemeCommon = {
  accent: Record<ColourRange, ColorValue>
  positive: Record<ColourRange, ColorValue>
  breakpoints: BreakpointList
}

export type Theme = {
  name: ThemeName
  foreground: Record<FullShadeRange, ColorValue>
  background: Record<LimitedShadeRange, ColorValue>
} & ThemeCommon

const common: ThemeCommon = {
  accent: {
    base: [194, 0.7, 0.5],
    light: [194, 0.7, 0.6],
    dark: [194, 0.7, 0.1],
  },
  positive: {
    base: [115, 0.64, 0.5],
    light: [115, 0.64, 0.65],
    dark: [115, 0.65, 0.3],
  },
  breakpoints: breakpoints,
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
    low: [223, 0.16, 0.95],
    medium: [220, 0.16, 0.96],
    high: [220, 0.16, 0.98],
  },
  ...common,
}

/* Dark
------------------------------------------------- */
export const darkTheme: Theme = {
  name: 'dark',
  foreground: {
    extraLow: [215, 0.13, 0.2],
    low: [206, 0.11, 0.35],
    medium: [206, 0.1, 0.5],
    high: [206, 0.08, 0.8],
    extraHigh: [0, 0, 1],
  },
  background: {
    low: [206, 0.14, 0.07],
    medium: [207, 0.14, 0.1],
    high: [204, 0.14, 0.11],
  },
  ...common,
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
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

export function applyForeground(
  value: keyof Theme['foreground'],
  alpha?: number
): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string =>
      applyHsl(theme.foreground[value], alpha)}
  `
}

export function applyBackground(
  value: keyof Theme['background'],
  alpha?: number
): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string =>
      applyHsl(theme.background[value], alpha)}
  `
}

export function applyAccent(
  value: keyof Theme['accent'],
  alpha?: number
): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string =>
      applyHsl(theme.accent[value], alpha)}
  `
}

export function applyPositive(
  value: keyof Theme['positive'],
  alpha?: number
): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string =>
      applyHsl(theme.positive[value], alpha)}
  `
}
