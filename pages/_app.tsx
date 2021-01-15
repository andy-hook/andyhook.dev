import React, { useEffect } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../style/global'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider } from '../hooks/useTheme/useTheme'
import MetaBrowser from '../components/Meta/MetaBrowser'
import MetaIcons from '../components/Meta/MetaIcons'
import { unregisterServiceWorker } from '../serviceWorker'
import Layout from '../components/Layout/Layout'

// Import fonts outside of styled-components to avoid flicker on state change
import '../style/font.css'

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

export default App
