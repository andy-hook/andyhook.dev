import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../style/global'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider, useTheme } from '../hooks/useTheme/useTheme'

// Import fonts outside of styled-components to avoid flicker on state change
import '../style/font.css'
import { darkTheme } from '../style/theme'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        {/* Preload fonts */}
        <link
          rel="preload"
          href="/manrope-variable.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </Head>

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
