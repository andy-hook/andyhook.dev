import React from 'react'
import About from '../components/About/About'
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
      <About />
    </>
  )
}

export default Home
