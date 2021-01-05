import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { themes } from '../style/theme'

const DarkTheme: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <>{children}</>
    </ThemeProvider>
  )
}

const LightTheme: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={themes.light}>
      <>{children}</>
    </ThemeProvider>
  )
}

const renderDarkTheme = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: DarkTheme, ...options })

const renderLightTheme = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: LightTheme, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderDarkTheme as render, renderDarkTheme, renderLightTheme }
