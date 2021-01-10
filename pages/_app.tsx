import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../style/global'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider } from '../hooks/useTheme/useTheme'

// Import fonts outside of styled-components to avoid flicker on state change
import '../style/font.css'

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
        <ThemeProvider>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      </FocusVisibleProvider>
    </>
  )
}

export default App
