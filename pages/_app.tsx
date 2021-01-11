import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../style/global'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider, useTheme } from '../hooks/useTheme/useTheme'
import MetaBrowser from '../components/Meta/MetaBrowser'
import MetaIcons from '../components/Meta/MetaIcons'
import { darkTheme } from '../style/theme'

// Import fonts outside of styled-components to avoid flicker on state change
import '../style/font.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <MetaBrowser />
      <MetaIcons />
      <FocusVisibleProvider>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Body>
            <Component {...pageProps} />
          </Body>
        </ThemeProvider>
      </FocusVisibleProvider>
    </>
  )
}

function Body({ children }: { children: React.ReactNode }): JSX.Element {
  const { background } = useTheme()

  return (
    <div
      css={`
        // Set initial background to avoid possible colour flash
        background-color: ${background('low')};
      `}
    >
      {children}
    </div>
  )
}

export default App
