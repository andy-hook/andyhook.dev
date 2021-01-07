import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { ThemeName, themes } from '../style/theme'
import { FocusVisibleManager } from '../hooks/useFocusVisible/useFocusVisible'

type ComponentProps = {
  children?: React.ReactNode
  theme?: ThemeName
}

interface CustomRenderOptions extends RenderOptions {
  theme?: ThemeName
}

function RenderProviders({
  children,
  theme = 'dark',
}: ComponentProps): JSX.Element {
  return (
    <FocusVisibleManager>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </FocusVisibleManager>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
): RenderResult =>
  render(ui, {
    wrapper: (props) => <RenderProviders {...props} theme={options?.theme} />,
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
