import { css, CSSProp, ThemeProps, DefaultTheme } from 'styled-components'
import { createHsl, createHsla } from './utils'

export type ThemeName = 'light' | 'dark'

type BackgroundLayerName = 'low' | 'medium' | 'high'
type BackgroundLayers = Record<BackgroundLayerName, string>

type ForegroundToneName = 'extraLow' | 'low' | 'medium' | 'high' | 'extraHigh'
type ForegroundTones = Record<ForegroundToneName, string>

type BrandShadeNames = 'base' | 'light' | 'dark'
type BrandShades = Record<BrandShadeNames, string>

export interface Theme {
  name: ThemeName
  text: ForegroundTones
  layerTone: BackgroundLayers
  brand: BrandShades
}

/* Brand colours
------------------------------------------------- */
const darkThemeBrandShades: BrandShades = {
  light: '16, 96%, 69%',
  base: '354, 89%, 64%',
  dark: '346, 91%, 56%',
}

const lightThemeBrandShades: BrandShades = {
  light: '281, 86%, 46%',
  base: '259, 78%, 50%',
  dark: '259, 70%, 35%',
}

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

/* Background layers
------------------------------------------------- */
const darkThemeLayers: BackgroundLayers = {
  low: '206, 13%, 11%',
  medium: '207, 13%, 14%',
  high: '204, 13%, 15%',
}

const lightThemeLayers: BackgroundLayers = {
  low: '223, 16%, 95%',
  medium: '220, 16%, 96%',
  high: '220, 16%, 98%',
}

export const themeLayer = (value: BackgroundLayerName): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsl(props.theme.layerTone[value])}
`

export const themeLayerAlpha = (
  value: BackgroundLayerName,
  alpha: number
): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsla(props.theme.layerTone[value], alpha)}
`

/* Foreground
------------------------------------------------- */

// Text
const darkThemeForegroundHSL: ForegroundTones = {
  extraLow: '215, 13%, 20%',
  low: '206, 11%, 35%',
  medium: '206, 10%, 55%',
  high: '206, 8%, 62%',
  extraHigh: '0, 0%, 100%',
}

// Text
const lightThemeForegroundHSL: ForegroundTones = {
  extraLow: '206, 8%, 90%',
  low: '206, 8%, 85%',
  medium: '206, 10%, 40%',
  high: '206, 11%, 35%',
  extraHigh: '215, 13%, 2%',
}

export const themeForeground = (value: ForegroundToneName): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsl(props.theme.text[value])}
`

export const themeForegroundAlpha = (
  value: ForegroundToneName,
  alpha: number
): CSSProp => css`
  ${(props: ThemeProps<DefaultTheme>): string =>
    createHsla(props.theme.text[value], alpha)}
`

/* Utils
------------------------------------------------- */
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

/* Compiled themes
------------------------------------------------- */
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
