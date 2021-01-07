import React, { useCallback, useContext, useState } from 'react'
import { darkTheme, lightTheme, Theme } from '../../style/theme2'

type ThemeContextState = {
  theme: Theme
  setDarkTheme: () => void
  setLightTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextState | null>(null)

function ThemeProvider(props: { children: React.ReactNode }): JSX.Element {
  const [activeTheme, setActiveTheme] = useState(darkTheme)

  const setDarkTheme = useCallback(() => setActiveTheme(darkTheme), [])
  const setLightTheme = useCallback(() => setActiveTheme(lightTheme), [])

  return (
    <ThemeContext.Provider
      value={{ theme: activeTheme, setDarkTheme, setLightTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

function useTheme(): {
  toggleTheme: () => void
} & Theme {
  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext)!

  const toggleTheme = useCallback(
    () => (theme.name === 'dark' ? setLightTheme : setDarkTheme),
    []
  )

  return {
    ...theme,
    toggleTheme,
  }
}

export { ThemeProvider, useTheme }
