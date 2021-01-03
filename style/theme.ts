import { css, CSSProp, ThemeProps, DefaultTheme } from 'styled-components'
import { createHsl, createHsla } from './utils'

export type ThemeName = 'light' | 'dark'

type LayerNames = 'low' | 'medium' | 'high'
type Layers = Record<LayerNames, string>

type GreyNames = 'extraLow' | 'low' | 'medium' | 'high' | 'extraHigh'
type Greys = Record<GreyNames, string>

type BrandShadeNames = 'base' | 'light' | 'dark'
type BrandShades = { [key in BrandShadeNames]: string }

export interface Theme {
  name: ThemeName
  text: Greys
  layerTone: Layers
  brand: BrandShades
}

/* Brand colours
------------------------------------------------- */
const darkThemeBrandShades: BrandShades = {
  light: '16, 96%, 69%',
  base: '354, 89%, 64%',
  dark: '346, 91%, 56%',
}

export const darkThemeToneShade = (value: BrandShadeNames): string =>
  createHsl(darkThemeBrandShades[value])

export const darkThemeToneShadeAlpha = (
  value: BrandShadeNames,
  alpha: number
): string => createHsla(darkThemeBrandShades[value], alpha)

const lightThemeBrandShades: BrandShades = {
  light: '281, 86%, 46%',
  base: '259, 78%, 50%',
  dark: '259, 70%, 35%',
}

export const lightThemeToneShade = (value: BrandShadeNames): string =>
  createHsl(lightThemeBrandShades[value])

export const lightThemeToneShadeAlpha = (
  value: BrandShadeNames,
  alpha: number
): string => createHsla(lightThemeBrandShades[value], alpha)

/* Dark theme app layers
------------------------------------------------- */
const darkThemeLayers: Layers = {
  low: '206, 13%, 11%',
  medium: '207, 13%, 14%',
  high: '204, 13%, 15%',
}

export const darkThemeLayer = (value: LayerNames): string =>
  createHsl(darkThemeLayers[value])

export const darkThemeLayerAlpha = (value: LayerNames, alpha: number): string =>
  createHsla(darkThemeLayers[value], alpha)

/* Light theme app layers
------------------------------------------------- */
const lightThemeLayers: Layers = {
  low: '223, 16%, 95%',
  medium: '220, 16%, 96%',
  high: '220, 16%, 98%',
}

export const lightThemeLayer = (value: LayerNames): string =>
  createHsl(lightThemeLayers[value])

export const lightThemeLayerAlpha = (
  value: LayerNames,
  alpha: number
): string => createHsla(lightThemeLayers[value], alpha)

/* Dark theme foreground
------------------------------------------------- */

// Text
const darkThemeForegroundHSL: Greys = {
  extraLow: '215, 13%, 20%',
  low: '206, 11%, 35%',
  medium: '206, 10%, 55%',
  high: '206, 8%, 62%',
  extraHigh: '0, 0%, 100%',
}

export const darkThemeForeground = (value: GreyNames): string =>
  createHsl(darkThemeForegroundHSL[value])

export const darkThemeForegroundAlpha = (
  value: GreyNames,
  alpha: number
): string => createHsla(darkThemeForegroundHSL[value], alpha)

/* Light theme foreground
------------------------------------------------- */

// Text
const lightThemeForegroundHSL: Greys = {
  extraLow: '206, 8%, 90%',
  low: '206, 8%, 85%',
  medium: '206, 10%, 40%',
  high: '206, 11%, 35%',
  extraHigh: '215, 13%, 2%',
}

export const lightThemeForeground = (value: GreyNames): string =>
  createHsl(darkThemeForegroundHSL[value])

export const lightThemeForegroundAlpha = (
  value: GreyNames,
  alpha: number
): string => createHsla(darkThemeForegroundHSL[value], alpha)

const lightTheme: Theme = {
  name: 'light',
  text: lightThemeForegroundHSL,
  layerTone: lightThemeLayers,
  brand: lightThemeBrandShades,
}

const darkTheme: Theme = {
  name: 'dark',
  text: darkThemeForegroundHSL,
  layerTone: darkThemeLayers,
  brand: darkThemeBrandShades,
}

export const themes: Record<ThemeName, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}

export const themeForeground = (value: GreyNames): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsl(props.theme.text[value])}
`

export const themeForegroundAlpha = (
  value: GreyNames,
  alpha: number
): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsla(props.theme.text[value], alpha)}
`

export const themeLayer = (value: LayerNames): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsl(props.theme.layerTone[value])}
`

export const themeLayerAlpha = (
  value: LayerNames,
  alpha: number
): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsla(props.theme.layerTone[value], alpha)}
`

export const themeBrand = (value: BrandShadeNames = 'base'): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsl(props.theme.brand[value])}
`

export const themeBrandAlpha = (
  value: BrandShadeNames = 'base',
  alpha = 1
): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsla(props.theme.brand[value], alpha)}
`

export const isDarkTheme = (output: string | CSSProp): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): CSSProp | string | false =>
    props.theme.name === 'dark' && output}
`

export const isLightTheme = (output: string | CSSProp): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): CSSProp | string | false =>
    props.theme.name === 'light' && output}
`

export const isTheme = (
  themeName: ThemeName,
  validOutput: string | CSSProp,
  invalidOutput?: string | CSSProp
): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): CSSProp | false => {
    if (invalidOutput) {
      return props.theme.name === themeName ? validOutput : invalidOutput
    } else {
      return props.theme.name === themeName && validOutput
    }
  }}
`
