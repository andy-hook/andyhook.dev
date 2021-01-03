import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { themes } from '../style/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes.dark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
