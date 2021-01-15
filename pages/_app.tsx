import React, { useEffect } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../style/global'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider } from '../hooks/useTheme/useTheme'
import MetaBrowser from '../components/Meta/MetaBrowser'
import MetaIcons from '../components/Meta/MetaIcons'

// Import fonts outside of styled-components to avoid flicker on state change
import '../style/font.css'
import { unregisterServiceWorker } from '../serviceWorker'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { appearance } from '../style/appearance'

function App({ Component, pageProps }: AppProps): JSX.Element {
  // Remove any previously installed service worker
  // This resolves an issue with stale cache from previous gatsby project
  useEffect(() => {
    unregisterServiceWorker()
  }, [])

  return (
    <>
      <MetaBrowser />
      <MetaIcons />
      <FocusVisibleProvider>
        <ThemeProvider>
          <GlobalStyle />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </FocusVisibleProvider>
    </>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
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

export default App
