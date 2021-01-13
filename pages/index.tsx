import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import MetaSocial from '../components/Meta/MetaSocial'
import WorkGrid from '../components/WorkGrid/WorkGrid'
import { ThemeProvider } from '../hooks/useTheme/useTheme'

function Home(): JSX.Element {
  return (
    <>
      <MetaSocial
        title="Next-Generation Interfaces"
        description="Brighton based software developer specialising in high-performance
        UI Engineering"
      />
      <Hero />
      <WorkGrid />
      <ThemeProvider theme="light">
        <About />
      </ThemeProvider>
      <Footer />
    </>
  )
}

export default Home
