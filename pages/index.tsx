import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import MetaSocial from '../components/Meta/MetaSocial'
import WorkGrid from '../components/WorkGrid/WorkGrid'

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
      <Footer />
    </>
  )
}

export default Home
