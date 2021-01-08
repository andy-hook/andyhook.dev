import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle'
import Hero from '../components/Hero/Hero'

function Home(): JSX.Element {
  return (
    <>
      <PageTitle title="Hello world" />
      <Hero />
    </>
  )
}

export default Home
