import { motion } from 'framer-motion'
import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import meta from '../../data/meta'
import { appearance } from '../../style/appearance'
import { slideInMotion, spring } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import HireButton from '../HireButton/HireButton'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import BackgroundTexture from '../BackgroundTexture/BackgroundTexture'

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
          `}
        >
          <div
            css={`
              display: flex;

              height: 100%;
              flex: 1;

              padding-top: 14rem;
              padding-bottom: 7rem;

              ${inclusiveUp('md')} {
                padding-top: 20rem;
                padding-bottom: 12rem;
              }
            `}
          >
            <motion.div
              variants={slideInMotion}
              initial="offset"
              animate="rest"
              custom={{ offset: 100, delay: 0.75 }}
            >
              <h1
                css={`
                  ${displayText.weight.semiBold}
                  ${displayText.size.lg}
                  ${setCropAndLineHeight('display', 'regular')}
                  
                  max-width: 16em;

                  margin-bottom: 1.25em;
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

                        background: linear-gradient(
                          -20deg,
                          ${foreground('extraLow', 0)} 40%,
                          ${foreground('extraLow', 0.1)} 100%
                        );

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

      <BackgroundTexture
        css={`
          position: absolute;

          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        `}
      />
    </div>
  )
}

export default Hero
