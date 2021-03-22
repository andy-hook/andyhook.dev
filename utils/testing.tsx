import React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeName } from '../style/theme'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider } from '../hooks/useTheme/useTheme'
import { LoadPercentageProvider } from '../hooks/useLoadPercentage/useLoadPercentage'

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
    <FocusVisibleProvider>
      <LoadPercentageProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </LoadPercentageProvider>
    </FocusVisibleProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
): RenderResult =>
  render(ui, {
    wrapper: function RenderWrapper(props) {
      return <RenderProviders {...props} theme={options?.theme} />
    },
    ...options,
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
