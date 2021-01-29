import React, { useCallback } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as styledUseTheme,
} from 'styled-components'
import { applyHsl, Theme, ThemeName, themes } from '../../style/theme'

function ThemeProvider({
  children,
  theme = 'dark',
}: {
  children: React.ReactNode
  theme?: ThemeName
}): JSX.Element {
  return (
    <StyledThemeProvider theme={themes[theme]}>{children}</StyledThemeProvider>
  )
}

type ThemeMethods = {
  foreground: (value: keyof Theme['foreground'], alpha?: number) => string
  background: (value: keyof Theme['background'], alpha?: number) => string
  accent: (value: keyof Theme['accent'], alpha?: number) => string
  positive: (value: keyof Theme['positive'], alpha?: number) => string
  shadow: (value: keyof Theme['shadow']) => string
}

function useTheme(): ThemeMethods {
  const theme = styledUseTheme()

  const foreground: ThemeMethods['foreground'] = useCallback(
    (value, alpha): string => applyHsl(theme.foreground[value], alpha),
    [theme]
  )

  const background: ThemeMethods['background'] = useCallback(
    (value, alpha): string => applyHsl(theme.background[value], alpha),
    [theme]
  )

  const accent: ThemeMethods['accent'] = useCallback(
    (value, alpha): string => applyHsl(theme.accent[value], alpha),
    [theme]
  )

  const positive: ThemeMethods['positive'] = useCallback(
    (value, alpha): string => applyHsl(theme.positive[value], alpha),
    [theme]
  )

  const shadow: ThemeMethods['shadow'] = useCallback(
    (value) => theme.shadow[value],
    [theme]
  )

  return {
    foreground,
    background,
    accent,
    positive,
    shadow,
  }
}

export { ThemeProvider, useTheme }
