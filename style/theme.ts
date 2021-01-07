import { hsl } from 'polished'
import { css, CSSProp, DefaultTheme, ThemeProps } from 'styled-components'

export type ThemeName = 'light' | 'dark'

type LimitedShadeRange = 'low' | 'medium' | 'high'
type FullShadeRange = LimitedShadeRange | 'extraLow' | 'extraHigh'
type ColourRange = 'base' | 'light' | 'dark'

export type Theme = {
  name: ThemeName
  foreground: Record<FullShadeRange, string>
  background: Record<LimitedShadeRange, string>
  accent: Record<ColourRange, string>
  positive: Record<ColourRange, string>
}

/* Light
------------------------------------------------- */
export const lightTheme: Theme = {
  name: 'light',
  foreground: {
    extraLow: hsl(206, 0.08, 0.9),
    low: hsl(206, 0.08, 0.85),
    medium: hsl(206, 0.1, 0.5),
    high: hsl(206, 0.11, 0.35),
    extraHigh: hsl(215, 0.13, 0.02),
  },
  background: {
    low: hsl(223, 0.16, 0.95),
    medium: hsl(220, 0.16, 0.96),
    high: hsl(220, 0.16, 0.98),
  },
  accent: {
    base: hsl(259, 0.78, 0.5),
    light: hsl(281, 0.86, 0.46),
    dark: hsl(259, 0.7, 0.35),
  },
  positive: {
    base: hsl(259, 0.78, 0.5),
    light: hsl(259, 0.78, 0.5),
    dark: hsl(259, 0.78, 0.5),
  },
}

/* Dark
------------------------------------------------- */
export const darkTheme: Theme = {
  name: 'dark',
  foreground: {
    extraLow: hsl(215, 0.13, 0.2),
    low: hsl(206, 0.11, 0.35),
    medium: hsl(206, 0.1, 0.55),
    high: hsl(206, 0.8, 0.62),
    extraHigh: hsl(0, 0, 1),
  },
  background: {
    low: hsl(206, 0.13, 0.11),
    medium: hsl(207, 0.13, 0.14),
    high: hsl(204, 0.13, 0.15),
  },
  accent: {
    base: hsl(16, 0.96, 0.69),
    light: hsl(354, 0.89, 0.64),
    dark: hsl(346, 0.91, 0.56),
  },
  positive: {
    base: hsl(259, 0.78, 0.5),
    light: hsl(259, 0.78, 0.5),
    dark: hsl(259, 0.78, 0.5),
  },
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export function applyForeground(value: keyof Theme['foreground']): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string => theme.foreground[value]}
  `
}

export function applyBackground(value: keyof Theme['background']): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string => theme.background[value]}
  `
}

export function applyAccent(value: keyof Theme['accent']): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string => theme.accent[value]}
  `
}

export function applyPositive(value: keyof Theme['positive']): CSSProp {
  return css`
    ${({ theme }: ThemeProps<DefaultTheme>): string => theme.positive[value]}
  `
}
