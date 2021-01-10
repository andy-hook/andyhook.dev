import React, { useEffect, useState, useContext, useCallback } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { applyHsl, darkTheme, Theme } from '../../style/theme'

const ThemeContext = React.createContext<Theme | null>(null)

function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [theme] = useState(darkTheme)

  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

type ThemeMethods = {
  foreground: (value: keyof Theme['foreground'], alpha?: number) => string
  background: (value: keyof Theme['background'], alpha?: number) => string
  accent: (value: keyof Theme['accent'], alpha?: number) => string
  positive: (value: keyof Theme['positive'], alpha?: number) => string
}

function useTheme(): ThemeMethods {
  const theme = useContext(ThemeContext)!

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
