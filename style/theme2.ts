import { hsl } from 'polished'

type ThemeName = 'light' | 'dark'

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
    extraLow: hsl(206, 8, 90),
    low: hsl(206, 8, 85),
    medium: hsl(206, 10, 50),
    high: hsl(206, 11, 35),
    extraHigh: hsl(215, 13, 2),
  },
  background: {
    low: hsl(223, 16, 95),
    medium: hsl(220, 16, 96),
    high: hsl(220, 16, 98),
  },
  accent: {
    base: hsl(259, 78, 50),
    light: hsl(281, 86, 46),
    dark: hsl(259, 70, 35),
  },
  positive: {
    base: hsl(259, 78, 50),
    light: hsl(259, 78, 50),
    dark: hsl(259, 78, 50),
  },
}

/* Dark
------------------------------------------------- */
export const darkTheme: Theme = {
  name: 'dark',
  foreground: {
    extraLow: hsl(215, 13, 20),
    low: hsl(206, 11, 35),
    medium: hsl(206, 10, 55),
    high: hsl(206, 8, 62),
    extraHigh: hsl(0, 0, 100),
  },
  background: {
    low: hsl(206, 13, 11),
    medium: hsl(207, 13, 14),
    high: hsl(204, 13, 15),
  },
  accent: {
    base: hsl(16, 96, 69),
    light: hsl(354, 89, 64),
    dark: hsl(346, 91, 56),
  },
  positive: {
    base: hsl(259, 78, 50),
    light: hsl(259, 78, 50),
    dark: hsl(259, 78, 50),
  },
}
