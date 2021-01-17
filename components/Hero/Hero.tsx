import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import meta from '../../data/meta'
import { appearance } from '../../style/appearance'
import { slideInMotion, spring } from '../../style/motion'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import HireButton from '../HireButton/HireButton'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

function Hero(): JSX.Element {
  const { background, foreground } = useTheme()

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
            min-height: 90vh;
          `}
        >
          <div
            css={`
              display: flex;
              align-items: center;
              height: 100%;
              flex: 1;

              padding-top: 6rem;
              padding-bottom: 6rem;

              ${inclusiveUp('md')} {
                padding-top: 11rem;
                padding-bottom: 11rem;
              }

              ${inclusiveDown('xs')} {
                justify-content: center;
              }
            `}
          >
            <motion.div
              variants={slideInMotion}
              initial="offset"
              animate="rest"
              custom={{ offset: 100, delay: 0.75 }}
              css={`
                ${inclusiveDown('xs')} {
                  text-align: center;
                }
              `}
            >
              <h1
                css={`
                  ${displayText.weight.semiBold}
                  ${displayText.size.lg}
                  ${setCropAndLineHeight('display', 'tight')}
                  
                  max-width: 16em;
                  padding-top: 1.75em;
                  margin-bottom: 1.25em;
                  text-shadow: ${appearance.textShadow.heavy};
                `}
              >
                <span
                  css={`
                    position: relative;
                    z-index: ${appearance.index.floor};
                  `}
                >
                  <motion.span
                    variants={{
                      offset: {
                        color: foreground('high'),
                      },
                      rest: {
                        color: foreground('extraHigh'),
                      },
                    }}
                    initial="offset"
                    animate="rest"
                    transition={{ delay: 1.15, ...spring.softOut }}
                    css={`
                      position: relative;
                      z-index: ${appearance.index.low};
                    `}
                  >
                    Senior UI Engineer
                  </motion.span>
                  <span
                    css={`
                      position: absolute;
                      top: 0;
                      left: -0.35em;
                      bottom: -0.1em;
                      right: -0.4em;

                      z-index: ${appearance.index.floor};

                      border-radius: ${appearance.radius.base};
                      overflow: hidden;
                    `}
                  >
                    <motion.span
                      variants={{
                        offset: {
                          x: '-100%',
                        },
                        rest: {
                          x: '0%',
                        },
                      }}
                      initial="offset"
                      animate="rest"
                      transition={{ delay: 1, ...spring.softOut }}
                      css={`
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;

                        background-color: ${background('high')};
                        border-radius: ${appearance.radius.base};
                      `}
                    />
                  </span>
                </span>{' '}
                <span
                  css={`
                    position: relative;
                    z-index: ${appearance.index.low};
                    color ${foreground('high')}
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
              </h1>
              <HireButton href={`mailto:${meta.email}`} />
            </motion.div>
          </div>
        </LayoutLimiter>
      </LayoutGutter>
      <motion.div
        variants={{
          out: {
            opacity: 0,
          },
          rest: {
            opacity: 1,
          },
        }}
        initial="out"
        animate="rest"
        transition={spring.softOut}
      >
        <HeroBackground />
      </motion.div>
    </div>
  )
}

function HeroBackground() {
  const { background } = useTheme()

  return (
    <PatternLayer
      css={`
        z-index: ${appearance.index.floor};
        background: url('/pattern.svg') repeat top left;
        opacity: 0.2;
      `}
    >
      {/* Right */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.high};

          background: linear-gradient(
            85deg,
            ${background('low', 0)} 20%,
            ${background('low', 0.95)} 110%
          );
        `}
      />

      {/* Left */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.medium};

          background: linear-gradient(
            -90deg,
            ${background('low', 0)} 30%,
            ${background('low', 0.95)} 100%
          );
        `}
      />

      {/* Top */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.low};

          background: linear-gradient(
            10deg,
            ${background('low', 0)} 30%,
            ${background('low', 0.95)} 80%
          );
        `}
      />

      {/* Bottom */}
      <PatternLayer
        css={`
          z-index: ${appearance.index.floor};

          background: linear-gradient(
            175deg,
            ${background('low', 0)} 30%,
            ${background('low', 0.95)} 80%
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
