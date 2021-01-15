import React from 'react'
import { appearance } from '../../style/appearance'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type LayoutProps = { children: React.ReactNode }

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header
        css={`
          position: absolute;
          top: 0;
          left: 0;
          z-index: ${appearance.index.highest};
        `}
      />
      <main
        css={`
          position: relative;
          z-index: ${appearance.index.floor};
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
