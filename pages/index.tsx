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
import ProjectCard from '../components/ProjectCard/ProjectCard'
import RemoveWidow from '../components/RemoveWidow/RemoveWidow'
import StripeBackground from '../components/StripeBackground/StripeBackground'
import TextHeading from '../components/Text/TextHeading'
import meta from '../data/meta'
import { PROJECTS, PROJECT_ORDER } from '../data/projects'
import { useRelativeYMotion } from '../hooks/useRelativeYMotion/useRelativeYMotion'
import { useTheme } from '../hooks/useTheme/useTheme'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../style/motion'
import { inclusiveDown, inclusiveUp } from '../style/responsive'
import { setTextStyle } from '../style/typography'
import { getRatioAsPercentage } from '../style/utils'

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
                    padding-top: 12rem;
                    padding-bottom: 6rem;

                    ${inclusiveUp('sm')} {
                      padding-top: 15rem;
                      padding-bottom: 8rem;
                    }

                    ${inclusiveUp('md')} {
                      padding-top: 16rem;
                      padding-bottom: 8rem;
                    }

                    ${inclusiveUp('lg')} {
                      padding-top: 17rem;
                      padding-bottom: 8rem;
                    }

                    ${inclusiveUp('xl')} {
                      padding-top: 20rem;
                      padding-bottom: 12rem;
                    }
                  `}
                >
                  <motion.div
                    variants={entranceMotionVariants}
                    transition={spring.snappy}
                  >
                    <TextHeading
                      size="xl"
                      css={`
                        position: relative;
                        max-width: 16em;
                        margin-bottom: 1.3em;
                      `}
                    >
                      <GradientText
                        css={`
                          position: relative;
                          z-index: ${theme.index.low};
                          ${setTextStyle('display', 'extraBold')}
                        `}
                      >
                        Senior UI Engineer
                      </GradientText>{' '}
                      <span
                        css={`
                        position: relative;
                        z-index: ${theme.index.medium};
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
                      <Signature
                        css={`
                          position: absolute;
                          transform: translate(-17%, -35%);
                          top: 0;
                          left: 0;
                          z-index: ${theme.index.floor};
                          width: clamp(10em, calc(10em + 10vw), 10em);
                        `}
                      />
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
                      Limited availability for 2021
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
                  {PROJECT_ORDER.map((key) => {
                    const {
                      thumbnailImage,
                      route,
                      title,
                      subtitle,
                      disabled,
                    } = PROJECTS[key]

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
                        <ProjectCard
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
      <LayoutShade borderTop>
        <LayoutRow>
          <LayoutGutter>
            <LayoutLimiter>
              <About />
            </LayoutLimiter>
          </LayoutGutter>
        </LayoutRow>
      </LayoutShade>
    </>
  )
}

function Signature({ ...props }): JSX.Element {
  const theme = useTheme()

  const width = 673
  const height = 333
  const percentageRatio = getRatioAsPercentage(width, height)

  return (
    <div {...props}>
      <div
        css={`
          position: relative;
          padding-top: ${percentageRatio};
        `}
      >
        <svg
          role="presentation"
          viewBox={`0 0 ${width} ${height}`}
          css={`
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
          `}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.0148 173.861C50.921 178.27 49.5564 170.253 52.9679 167.046C95.2277 111.432 142.707 58.317 205.462 25.5448C229.684 13.1183 255.611 3.49778 281.879 0.691802C304.054 -1.71332 333.052 1.09266 345.674 26.3465C379.04 94.6748 299.257 178.252 254.059 225.032C296.475 217.69 334.02 198.546 367.869 172.189C375.259 122.592 397.268 76.4272 429.253 37.9716C436.149 29.8678 443.757 22.4899 450.962 14.6835C464.034 0.522058 469.566 30.7419 466.097 39.5751C450.122 81.1977 430.231 121.426 399.914 154.62C393.37 161.829 386.5 168.589 379.367 174.952C377.405 188.547 379.064 196.456 395.138 195.107C407.078 194.305 419.018 187.891 429.594 181.077C435.497 177.197 440.99 172.731 446.123 167.8C445.085 161.068 445.904 153.964 447.333 147.004C455.862 102.108 480.084 63.6263 509.423 33.9631C512.152 30.7563 515.563 33.1614 517.61 35.9674C518.732 40.2731 521.372 42.8046 521.5 47.5C522.698 91.3673 481.697 151.552 462.401 173.826C465.216 175.815 468.805 177.432 471.896 178.271C481.62 181.127 492.627 181.722 502.547 178.662C502.38 172.709 503.522 166.564 505.329 161.435C509.764 148.607 518.975 139.388 529.209 132.573C532.962 130.168 536.374 137.384 537.056 140.59C538.508 149.973 537.797 159.138 535.134 167.281C538.573 160.333 545.211 154.99 551.384 151.013C554.455 149.008 557.866 154.219 558.548 157.025C561.455 167.27 559.547 177.11 554.534 184.969C563.639 185.776 573.582 182.933 578.79 174.943C577.719 150.389 584.05 125.078 589.251 101.309C591.298 91.2873 603.239 100.906 602.557 108.121C600.73 127.975 594.672 166.526 594.672 166.526C594.672 166.526 592.5 178.271 594.028 181.878C606.507 191.653 618.549 161.268 619.955 153.418C621.661 141.793 636.33 150.612 634.966 159.831C632.559 178.685 639.381 199.005 663.622 190.697C670.787 188.292 677.268 204.727 669.422 207.533C651.816 214.242 630.533 203.397 622.562 186.991C612.898 198.092 597.012 206.659 585.144 192.709C574.761 204.164 554.179 206.849 542.01 196.783C531.837 202.587 516.514 205.32 508.033 195.252C495.645 199.405 481.456 198.756 469.508 194.305C463.675 191.906 457.843 188.628 453.288 183.47C437.728 198.619 417.115 211.973 396.502 213.145C386.268 213.546 375.351 209.938 369.893 199.115C367.875 195.006 367.024 190.647 366.838 186.212C328.681 218.778 280.708 236.658 232.015 246.511C213.84 263.141 194.641 278.101 174.417 290.91C150.537 305.742 125.633 318.97 99.3643 326.185C70.9105 333.856 25.0074 339.937 6.57156 310.151C-12.2094 279.501 11.3857 254.115 41.0277 246.015C58.7475 241.53 77.121 241.141 95.2775 240.757C139.122 239.828 182.835 235.751 226.207 229.321C252.738 205.058 276.981 177.487 298.937 147.805C315.312 125.758 331.005 100.905 337.487 72.4447C342.81 48.3188 341.099 25.2517 313.606 18.3294C264.847 7.03213 209.475 37.836 170.323 63.6259C125.816 93.2746 90.1908 134.121 55.0148 173.861ZM199.64 251.869C169.513 255.756 139.385 256.898 109.258 258.04C85.6876 258.934 20.4582 257.003 17.5 293.5C17.5 309.717 28.9282 313.497 43.0746 315.763C55.6971 317.367 70.0254 314.962 82.6479 312.156C95.2705 309.35 107.552 305.341 119.492 300.13C144.055 289.708 167.253 275.678 189.428 259.644C192.865 257.107 196.269 254.514 199.64 251.869ZM382.143 159.566C412.415 130.18 446.123 77 459.313 25.9847C437.455 47.6608 417.623 72.7778 402.984 101.707C393.692 119.904 386.548 139.249 382.143 159.566ZM523.4 186.16C526.852 186.102 530.372 185.151 533.674 183.639C532.454 179.234 532.526 175.233 533.494 171.608C531.085 177.155 527.694 182.104 523.4 186.16ZM526.307 154.351C524.328 162.479 519.439 169.211 512.688 173.846C515.151 166.341 520.461 159.502 526.307 154.351ZM512.868 52.9271C508.827 85.5601 479.728 127.038 460.468 151.772C468.434 114.614 487.532 80.9861 512.868 52.9271Z"
            fill="url(#signature_gradient)"
          />

          <defs>
            <linearGradient
              id="signature_gradient"
              x1="309.699"
              y1="-9.46004e-06"
              x2="388.044"
              y2="282.314"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme.background('extraHigh')} />
              <stop offset="1" stopColor={theme.background('low')} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Home
