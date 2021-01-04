import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Heading from '../components/Heading/Heading'
import LayoutGutter from '../components/Layout/LayoutGutter'
import LayoutLimiter from '../components/Layout/LayoutLimiter'
import PageTitle from '../components/PageTitle/PageTitle'
import RemoveWidow from '../components/RemoveWidow/RemoveWidow'

function Home(): JSX.Element {
  return (
    <>
      <PageTitle title="Hello world" />
      <LayoutGutter>
        <LayoutLimiter
          size="large"
          css={`
            display: flex;
            flex-direction: column;
            height: 100vh;
            padding-top: 50px;
            padding-bottom: 50px;
          `}
        >
          <Header />
          <div
            css={`
              display: flex;
              align-items: center;
              height: 100%;
              flex: 1;
              padding-top: 100px;
              padding-bottom: 100px;
            `}
          >
            <Heading
              css={`
                max-width: 16em;
              `}
            >
              Senior UI Engineer building{' '}
              <span
                css={`
                  white-space: nowrap;
                `}
              >
                next-generation
              </span>{' '}
              <RemoveWidow>user interfaces out of Brighton, UK.</RemoveWidow>
            </Heading>
          </div>
          <Footer />
        </LayoutLimiter>
      </LayoutGutter>
    </>
  )
}

export default Home
