import React, { useCallback } from 'react'
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as styledUseTheme,
} from 'styled-components'
import {
  applyHsl,
  Theme,
  ThemeName,
  themes,
  ProjectAccentName,
  AccentShade,
} from '../../style/theme'
import { useLocationState } from '../useLocationState/useLocationState'

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
  accent: (value: AccentShade, alpha?: number) => string
  currentProjectAccent: (value: AccentShade, alpha?: number) => string
  projectAccent: (
    projectName: ProjectAccentName,
    value: AccentShade,
    alpha?: number
  ) => string
  positive: (value: keyof Theme['positive'], alpha?: number) => string
} & Omit<
  Theme,
  'foreground' | 'background' | 'accent' | 'projectAccent' | 'positive'
>

function useTheme(): ThemeMethods {
  const theme = styledUseTheme()
  const { currentProjectName } = useLocationState()

  const foreground: ThemeMethods['foreground'] = useCallback(
    (value, alpha): string => applyHsl(theme.foreground[value], alpha),
    [theme]
  )

  const background: ThemeMethods['background'] = useCallback(
    (value, alpha): string => applyHsl(theme.background[value], alpha),
    [theme]
  )

  const accent: ThemeMethods['accent'] = useCallback(
    (value, alpha): string => applyHsl(theme.accent.default[value], alpha),
    [theme]
  )

  const currentProjectAccent: ThemeMethods['currentProjectAccent'] = useCallback(
    (value, alpha): string => {
      const projectAccent = currentProjectName
        ? theme.accent[currentProjectName]
        : theme.accent.default
      return applyHsl(projectAccent[value], alpha)
    },
    [theme, currentProjectName]
  )

  const projectAccent: ThemeMethods['projectAccent'] = useCallback(
    (projectName, value, alpha): string =>
      applyHsl(theme.accent[projectName][value], alpha),
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
    currentProjectAccent,
  }
}

export { ThemeProvider, useTheme }
