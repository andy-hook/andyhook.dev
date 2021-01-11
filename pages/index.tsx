import React from 'react'
import Hero from '../components/Hero/Hero'
import MetaSocial from '../components/Meta/MetaSocial'

function Home(): JSX.Element {
  return (
    <>
      <MetaSocial
        title="High performance UI engineering"
        description="Andy is a Brighton based software developer specialising in UI engineering"
      />
      <Hero />
    </>
  )
}

export default Home
