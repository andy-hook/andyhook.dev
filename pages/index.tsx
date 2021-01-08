import React from 'react'
import SocialIcons from '../components/SocialIcons/SocialIcons'
import Heading from '../components/Heading/Heading'
import HireButton from '../components/HireButton/HireButton'
import LayoutGutter from '../components/Layout/LayoutGutter'
import LayoutLimiter from '../components/Layout/LayoutLimiter'
import PageTitle from '../components/PageTitle/PageTitle'
import RemoveWidow from '../components/RemoveWidow/RemoveWidow'
import { typeBaseSemibold, typeSizeBaseXl } from '../style/typography'
import { applyForeground } from '../style/theme'
import { css } from 'styled-components'

const bookendHeight = css`
  height: 50px;
`

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
            min-height: 100vh;
            padding-top: 4rem;
            padding-bottom: 4rem;
          `}
        >
          <header
            css={`
              ${bookendHeight}
            `}
          >
            <h2
              css={`
                ${typeBaseSemibold}
                ${typeSizeBaseXl}
                color: ${applyForeground('medium')};
              `}
            >
              Andy Hook
            </h2>
          </header>
          <main
            css={`
              display: flex;
              align-items: center;
              height: 100%;
              flex: 1;
              padding-top: 100px;
              padding-bottom: 100px;
            `}
          >
            <div>
              <Heading
                css={`
                  max-width: 16em;
                  margin-bottom: 1.25em;
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
              <HireButton />
            </div>
          </main>
          <footer
            css={`
              ${bookendHeight}

              display: flex;
              align-items: flex-end;
              justify-content: flex-end;
            `}
          >
            <SocialIcons />
          </footer>
        </LayoutLimiter>
      </LayoutGutter>
    </>
  )
}

export default Home
