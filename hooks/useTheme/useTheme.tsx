import React, { useCallback } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as styledUseTheme,
} from 'styled-components'
import { applyHsl, Theme } from '../../style/theme'

function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: Theme
}): JSX.Element {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

type ThemeMethods = {
  foreground: (value: keyof Theme['foreground'], alpha?: number) => string
  background: (value: keyof Theme['background'], alpha?: number) => string
  accent: (value: keyof Theme['accent'], alpha?: number) => string
  positive: (value: keyof Theme['positive'], alpha?: number) => string
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
    (value, alpha): string => applyHsl(theme.accent[value], alpha),
    [theme]
  )

  return {
    foreground,
    background,
    accent,
    positive,
  }
}

export { ThemeProvider, useTheme }
