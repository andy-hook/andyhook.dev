import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { themeForeground, themes } from '../style/theme'
import GlobalStyle from '../style/global-style'
import { typeBaseRegular } from '../style/typography'

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

      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <Component {...pageProps} />
        <footer
          css={`
            ${typeBaseRegular}
            color: ${themeForeground('medium')};
          `}
        >
          Footer
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App
