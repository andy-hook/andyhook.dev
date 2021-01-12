import React from 'react'
import Hero from '../components/Hero/Hero'
import MetaSocial from '../components/Meta/MetaSocial'

function Home(): JSX.Element {
  return (
    <>
      <MetaSocial
        title="Next-Generation Interfaces"
        description="Brighton based software developer specialising in high-performance
        UI Engineering"
      />
      <Hero />
    </>
  )
}

export default Home
