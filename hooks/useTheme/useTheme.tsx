import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as styledUseTheme,
} from 'styled-components'
import { PROJECTS } from '../../data/projects'
import { applyHsl, getTheme, Theme, ThemeName } from '../../style/theme'
import { keys } from '../../utils/general'

function ThemeProvider({
  children,
  theme = 'dark',
}: {
  children: React.ReactNode
  theme?: ThemeName
}): JSX.Element {
  const router = useRouter()

  // Update projectAccent based on route
  const selectedTheme = useMemo(() => {
    const accentName =
      keys(PROJECTS).find((key) => PROJECTS[key].route === router.pathname) ??
      'default'

    return getTheme(theme, accentName)
  }, [theme, router.pathname])

  return (
    <StyledThemeProvider theme={selectedTheme}>{children}</StyledThemeProvider>
  )
}

type ThemeMethods = {
  foreground: (value: keyof Theme['foreground'], alpha?: number) => string
  background: (value: keyof Theme['background'], alpha?: number) => string
  accent: (value: keyof Theme['accent'], alpha?: number) => string
  projectAccent: (value: keyof Theme['projectAccent'], alpha?: number) => string
  positive: (value: keyof Theme['positive'], alpha?: number) => string
} & Omit<
  Theme,
  'foreground' | 'background' | 'accent' | 'projectAccent' | 'positive'
>

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

  const projectAccent: ThemeMethods['projectAccent'] = useCallback(
    (value, alpha): string => applyHsl(theme.projectAccent[value], alpha),
    [theme]
  )

  const positive: ThemeMethods['positive'] = useCallback(
    (value, alpha): string => applyHsl(theme.positive[value], alpha),
    [theme]
  )

  return {
    ...theme,
    foreground,
    background,
    accent,
    projectAccent,
    positive,
  }
}

export { ThemeProvider, useTheme }
