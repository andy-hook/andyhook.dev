import { motion } from 'framer-motion'
import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import meta from '../../data/meta'
import { appearance } from '../../style/appearance'
import { slideInMotion } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import HireButton from '../HireButton/HireButton'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import ImageBase from '../ImageBase/ImageBase'

function Hero(): JSX.Element {
  const { accent, foreground, background } = useTheme()

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
              justify-content: center;

              height: 100%;
              flex: 1;

              padding-top: 14rem;
              padding-bottom: 7rem;

              ${inclusiveUp('md')} {
                padding-top: 20rem;
                padding-bottom: 14rem;
              }
            `}
          >
            <motion.div
              variants={slideInMotion}
              initial="offset"
              animate="rest"
              custom={{ offset: 100, delay: 0.75 }}
              css={`
                text-align: center;
              `}
            >
              <h1
                css={`
                  ${displayText.weight.semiBold}
                  ${displayText.size.lg}
                  ${setCropAndLineHeight('display', 'tight')}
                  
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
                  <span
                    css={`
                      ${displayText.weight.bold}
                      background: linear-gradient(
                      160deg,
                      ${accent('light')} 0%,
                      ${accent('base')} 90%
                    );

                      background-clip: text;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                    `}
                  >
                    Senior UI Engineer
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

      <div
        css={`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: ${appearance.index.floor};
        `}
      >
        <div
          css={`
            position: absolute;
            background: linear-gradient(
              ${background('low', 0.6)} 0%,
              ${background('low', 0)} 70%
            );

            top: 0;
            left: 0;
            width: 100%;
            height: 20%;
            z-index: ${appearance.index.low};
          `}
        />
        <div
          css={`
            position: absolute;
            background: linear-gradient(
              ${background('low', 0)} 0%,
              ${background('low', 1)} 100%
            );

            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            z-index: ${appearance.index.low};
          `}
        />
        <ImageBase
          src="/images/home-bg.jpg"
          width={6059}
          height={5941}
          css={`
            opacity: 0.04;
            z-index: ${appearance.index.floor};
          `}
        />
      </div>
    </div>
  )
}

export default Hero
