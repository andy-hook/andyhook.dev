import { motion } from 'framer-motion'
import React from 'react'
import About from '../components/About/About'
import Button from '../components/Button/Button'
import GradientText from '../components/GradientText/GradientText'
import LayoutGutter from '../components/Layout/LayoutGutter'
import LayoutLimiter from '../components/Layout/LayoutLimiter'
import LayoutRow from '../components/Layout/LayoutRow'
import LayoutShade from '../components/Layout/LayoutShade'
import MetaSocial from '../components/Meta/MetaSocial'
import RemoveWidow from '../components/RemoveWidow/RemoveWidow'
import StripeBackground from '../components/StripeBackground/StripeBackground'
import Testimonials from '../components/Testimonials/Testimonials'
import TextHeading from '../components/Text/TextHeading'
import WorkCard from '../components/WorkCard/WorkCard'
import meta from '../data/meta'
import { WORK, WORK_ORDER } from '../data/work'
import { useRelativeYMotion } from '../hooks/useRelativeYMotion/useRelativeYMotion'
import { useTheme } from '../hooks/useTheme/useTheme'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../style/motion'
import { inclusiveDown, inclusiveUp } from '../style/responsive'
import { setTextStyle } from '../style/typography'

const MOTION_ORCHESTRATION = {
  staggerChildren: 0.05,
  delayChildren: ENTRANCE_TRANSITION_DELAY,
}

function Home(): JSX.Element {
  const entranceMotionVariants = useRelativeYMotion(
    ENTRANCE_TRANSITION_Y_DISTANCE
  )

  const theme = useTheme()

  return (
    <>
      <MetaSocial
        title="Next-Generation Interfaces"
        description="Brighton based software developer specialising in high-performance
        UI Engineering"
      />
      <div
        css={`
          position: relative;
          overflow: hidden;
        `}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={MOTION_ORCHESTRATION}
          css={`
            position: relative;
            z-index: ${theme.index.medium};
          `}
        >
          <LayoutGutter
            css={`
              position: relative;
              z-index: ${theme.index.low};
            `}
          >
            <LayoutRow trimTop>
              <LayoutLimiter>
                <div
                  css={`
                    padding-top: 11rem;
                    padding-bottom: 6rem;

                    ${inclusiveUp('sm')} {
                      padding-top: 14rem;
                      padding-bottom: 8rem;
                    }

                    ${inclusiveUp('xl')} {
                      padding-top: 18rem;
                      padding-bottom: 12rem;
                    }
                  `}
                >
                  <motion.div
                    variants={entranceMotionVariants}
                    transition={spring.snappy}
                  >
                    <TextHeading
                      size="lg"
                      css={`
                        max-width: 16em;
                        margin-bottom: 1.3em;
                      `}
                    >
                      <GradientText
                        css={`
                          position: relative;
                          z-index: ${theme.index.floor};
                          ${setTextStyle('display', 'extraBold')}
                        `}
                      >
                        Senior UI Engineer
                      </GradientText>{' '}
                      <span
                        css={`
                        position: relative;
                        z-index: ${theme.index.low};
                        color ${theme.foreground('high')};
                        text-shadow: ${theme.textShadow.heavy};
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
                    </TextHeading>

                    <Button href={`mailto:${meta.email}`}>
                      <div
                        css={`
                          position: relative;
                          font-size: 0.65em;
                          margin-right: 1.4em;
                        `}
                      >
                        <div
                          css={`
                            width: 1em;
                            height: 1em;
                            background: linear-gradient(
                              135deg,
                              ${theme.accent('light')} 0%,
                              ${theme.accent('base')} 100%
                            );
                            border-radius: ${theme.radius.circle};
                          `}
                        />
                      </div>
                      Currently available for hire
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  css={`
                    display: grid;

                    ${inclusiveDown('xs')} {
                      row-gap: 4rem;
                      grid-template-columns: 1fr;
                    }

                    ${inclusiveUp('sm')} {
                      grid-template-columns: 1fr 1fr;
                      column-gap: 6%;
                    }

                    ${inclusiveUp('xl')} {
                      column-gap: 4.8rem;
                    }
                  `}
                >
                  {WORK_ORDER.map((key) => {
                    const {
                      thumbnailImage,
                      route,
                      title,
                      subtitle,
                      disabled,
                    } = WORK[key]

                    return (
                      <motion.div
                        variants={entranceMotionVariants}
                        transition={spring.snappy}
                        key={key}
                        css={`
                          ${inclusiveUp('sm')} {
                            &:nth-child(4n),
                            &:nth-child(4n-1) {
                              align-self: end;
                            }
                          }
                        `}
                      >
                        <WorkCard
                          size="large"
                          imagePath={thumbnailImage.imagePath}
                          alt={thumbnailImage.alt}
                          disabled={disabled}
                          href={route}
                          title={title}
                          subtitle={subtitle}
                          backgroundColor={thumbnailImage.color}
                        />
                      </motion.div>
                    )
                  })}
                </motion.div>
              </LayoutLimiter>
            </LayoutRow>
          </LayoutGutter>
        </motion.div>
        <div
          css={`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: ${theme.index.floor};
          `}
        >
          <div
            css={`
              position: absolute;
              background: linear-gradient(
                ${theme.background('low', 0.8)} 0%,
                ${theme.background('low', 0)} 70%
              );

              top: 0;
              left: 0;
              width: 100%;
              height: 30%;
              z-index: ${theme.index.low};
            `}
          />
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ ...spring.soft, delay: ENTRANCE_TRANSITION_DELAY }}
            css={`
              z-index: ${theme.index.floor};
            `}
          >
            <StripeBackground
              css={`
                display: block;
                width: 100%;
              `}
            />
          </motion.div>
        </div>
        <div
          css={`
            position: absolute;
            background: linear-gradient(
              ${theme.background('low', 0)} 0%,
              ${theme.background('low', 1)} 100%
            );

            bottom: 0;
            left: 0;
            width: 100%;
            height: 40%;
            z-index: ${theme.index.low};
          `}
        />
      </div>
      <LayoutShade borderTop borderBottom>
        <LayoutRow>
          <LayoutGutter>
            <LayoutLimiter>
              <About />
              <Testimonials />
            </LayoutLimiter>
          </LayoutGutter>
        </LayoutRow>
      </LayoutShade>
    </>
  )
}

export default Home
