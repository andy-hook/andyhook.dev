import React, { useEffect } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalStyle from '../style/global'
import { FocusVisibleProvider } from '../hooks/useFocusVisible/useFocusVisible'
import { ThemeProvider, useTheme } from '../hooks/useTheme/useTheme'
import MetaBrowser from '../components/Meta/MetaBrowser'
import MetaIcons from '../components/Meta/MetaIcons'
import { unregisterServiceWorker } from '../serviceWorker'
import Footer from '../components/Footer/Footer'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import { LoadPercentageProvider } from '../hooks/useLoadPercentage/useLoadPercentage'
import TopBar from '../components/TopBar/TopBar'

// Import fonts outside of styled-components to avoid flicker on state change
import '../style/font.css'
import { LocationStateProvider } from '../hooks/useLocationState/useLocationState'
import { ScrollPositionProvider } from '../hooks/useScrollPosition/useScrollPosition'

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
      <ScrollPositionProvider>
        <FocusVisibleProvider>
          <LocationStateProvider>
            <ThemeProvider>
              <LoadPercentageProvider>
                <GlobalStyle />

                <AppLayout>
                  <Component {...pageProps} />
                </AppLayout>
              </LoadPercentageProvider>
            </ThemeProvider>
          </LocationStateProvider>
        </FocusVisibleProvider>
      </ScrollPositionProvider>
    </>
  )
}

function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <LoadingIndicator />
      <TopBar />
      <main
        css={`
          position: relative;
          z-index: ${theme.index.floor};
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default App
