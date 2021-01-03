import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../style/global-style'
import { themeForeground } from '../style/theme'

type LayoutProps = {
  children?: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>{title}</title>
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

      {children}

      <footer
        css={`
          color: ${themeForeground('medium')};
        `}
      >
        Footer
      </footer>
    </>
  )
}
