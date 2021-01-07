import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/global'
import { FocusVisibleManager } from '../hooks/useFocusVisible/useFocusVisible'
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

      <FocusVisibleManager>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      </FocusVisibleManager>
    </>
  )
}

export default App
