import React from 'react'
import styled, { css } from 'styled-components'
import meta from '../../meta'
import { appearance } from '../../style/appearance'
import { inclusiveUp } from '../../style/responsive'
import { applyBackground, applyForeground } from '../../style/theme'
import { typeBaseSemibold, typeSizeBaseLg } from '../../style/typography'
import Heading from '../Heading/Heading'
import HireButton from '../HireButton/HireButton'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import SocialIcons from '../SocialIcons/SocialIcons'

const bookendHeight = css`
  height: 3rem;
`

function Hero(): JSX.Element {
  return (
    <div
      css={`
        position: relative;
      `}
    >
      <LayoutGutter
        css={`
          position: relative;
          z-index: ${appearance.index.low};
        `}
      >
        <LayoutLimiter
          size="large"
          css={`
            display: flex;
            flex-direction: column;
            min-height: 100vh;

            padding-top: 2.5rem;
            padding-bottom: 2.5rem;

            ${inclusiveUp('sm')} {
              padding-top: 3.5rem;
              padding-bottom: 3.5rem;
            }

            ${inclusiveUp('md')} {
              padding-top: 4.5rem;
              padding-bottom: 4.5rem;
            }
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
                ${typeSizeBaseLg}
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
                  padding-top: 0.5em;
                  margin-bottom: 1.25em;
                `}
              >
                <span
                  css={`
                    position: relative;
                    z-index: ${appearance.index.floor};
                  `}
                >
                  <span
                    css={`
                      position: relative;
                      z-index: ${appearance.index.low};
                    `}
                  >
                    Senior UI Engineer
                  </span>
                  <span
                    css={`
                      position: absolute;
                      top: 0;
                      left: -0.35em;
                      bottom: -0.1em;
                      right: -0.4em;

                      background-color: ${applyBackground('high')};
                      z-index: ${appearance.index.floor};

                      border-radius: ${appearance.radius.base};
                      overflow: hidden;
                    `}
                  >
                    <span
                      css={`
                        position: absolute;
                        top: 0em;
                        left: 0;
                        bottom: 0;
                        right: 0;
                      `}
                    />
                  </span>
                </span>{' '}
                <span
                  css={`
                    position: relative;
                    z-index: ${appearance.index.low};
                    color ${applyForeground('high')}
                  `}
                >
                  building{' '}
                  <span
                    css={`
                      ${inclusiveUp('xs')} {
                        white-space: nowrap;
                      }
                    `}
                  >
                    next-generation
                  </span>{' '}
                  <RemoveWidow>
                    user interfaces out of Brighton, UK.
                  </RemoveWidow>
                </span>
              </Heading>
              <HireButton href={`mailto:${meta.email}`} />
            </div>
          </main>
          <footer
            css={`
              ${bookendHeight}

              display: flex;
              align-items: flex-end;

              ${inclusiveUp('md')} {
                justify-content: flex-end;
              }
            `}
          >
            <SocialIcons />
          </footer>
        </LayoutLimiter>
      </LayoutGutter>
      <HeroBackground />
    </div>
  )
}

function HeroBackground() {
  return (
    <PatternLayer
      css={`
        z-index: ${appearance.index.floor};
        background: url('/pattern.svg') repeat top left;
        opacity: 0.15;
      `}
    >
      {/* Right */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.high};

          background: linear-gradient(
            90deg,
            ${applyBackground('low', 0)} 20%,
            ${applyBackground('low', 0.95)} 110%
          );
        `}
      />

      {/* Left */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.medium};

          background: linear-gradient(
            -90deg,
            ${applyBackground('low', 0)} 30%,
            ${applyBackground('low', 0.95)} 100%
          );
        `}
      />

      {/* Top */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.low};

          background: linear-gradient(
            10deg,
            ${applyBackground('low', 0)} 30%,
            ${applyBackground('low', 0.95)} 80%
          );
        `}
      />

      {/* Bottom */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.floor};

          background: linear-gradient(
            175deg,
            ${applyBackground('low', 0)} 30%,
            ${applyBackground('low', 0.95)} 80%
          );
        `}
      />
    </PatternLayer>
  )
}

const PatternLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export default Hero
