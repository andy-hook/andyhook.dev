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
                          transform: translate(-18%, -35%);
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
            d="M55.2583 173.585L55.0144 173.861C50.9206 178.27 49.556 170.253 52.9675 167.046C61.496 155.823 70.3658 145 79.2355 134.177C96.9753 112.13 115.398 91.2849 136.208 72.8456C157.7 54.0054 180.899 38.3721 205.461 25.5448C229.683 13.1183 255.61 3.49778 281.879 0.691802C304.054 -1.71332 333.051 1.09265 345.674 26.3465C357.614 50.7986 349.085 84.4704 339.192 107.72C327.252 135.78 309.171 159.831 291.09 182.68C279.315 197.484 266.971 211.667 254.059 225.032C275.118 221.386 295.548 216.273 316.335 205.127C332.335 196.424 352.195 184.394 367.869 172.189C368.083 170.75 368.312 169.322 368.539 167.911C368.65 167.218 368.761 166.529 368.869 165.844C376.715 116.94 399.913 73.2468 429.252 37.9716C433.687 32.7605 438.122 27.9503 442.557 23.14C443.751 21.9375 444.86 20.8351 445.968 19.7328C447.077 18.6304 448.186 17.5281 449.38 16.3255C449.881 15.8548 450.411 15.2804 450.962 14.6835C452.288 13.2473 453.734 11.6807 455.179 11.1144C460.297 9.51099 466.096 17.9289 467.461 22.7392C468.826 28.3511 468.143 34.364 466.096 39.5751C458.25 60.0186 449.721 80.4622 439.145 99.3024C427.888 119.345 414.924 138.185 399.913 154.62C393.37 161.829 386.499 168.589 379.367 174.952C379.15 176.454 378.948 177.961 378.762 179.473C378.697 180.159 378.595 180.903 378.489 181.678C378.037 184.976 377.51 188.826 379.444 191.098C382.856 195.507 390.361 195.507 395.137 195.107C407.077 194.305 419.018 187.891 429.593 181.077C435.497 177.197 440.989 172.731 446.123 167.8C445.085 161.068 445.903 153.964 447.333 147.004C455.862 102.108 480.083 63.6263 509.422 33.9631C512.151 30.7563 515.563 33.1614 517.61 35.9674C527.162 48.7947 524.433 63.6263 518.292 77.2554C511.469 92.4878 503.964 107.72 496.117 122.151C486.379 140.325 475.678 158.499 462.401 173.826C465.216 175.815 468.804 177.432 471.896 178.271C481.62 181.127 492.627 181.722 502.547 178.662C502.38 172.709 503.522 166.564 505.328 161.435C509.763 148.607 518.974 139.388 529.209 132.573C532.962 130.168 536.373 137.384 537.055 140.59C538.507 149.973 537.797 159.138 535.134 167.281C538.573 160.333 545.211 154.99 551.384 151.013C554.454 149.008 557.866 154.219 558.548 157.025C561.454 167.27 559.546 177.11 554.533 184.969C555.522 185.057 556.523 185.085 557.524 185.085C565.649 185.085 573.99 182.306 578.789 174.943C578.635 171.408 578.882 167.7 579.118 164.158C579.207 162.819 579.294 161.505 579.358 160.232C579.661 155.247 580.233 150.578 580.836 145.664C580.911 145.046 580.988 144.424 581.064 143.797C583.111 129.367 586.181 115.338 589.251 101.309C591.298 91.2873 603.238 100.906 602.556 108.121C602.521 108.503 602.487 108.885 602.454 109.268C602.488 109.287 602.522 109.305 602.556 109.324C602.496 109.619 602.436 109.914 602.375 110.209C602.092 113.669 601.886 117.167 601.679 120.672C601.037 131.552 600.39 142.501 597.439 152.616C596.05 157.15 595.359 161.849 594.671 166.526C594.363 168.622 594.056 170.713 593.686 172.783V180.676C593.686 181.077 593.686 181.477 594.027 181.878C594.027 181.878 595.051 182.68 595.392 182.68C597.78 183.482 600.168 182.279 602.215 180.676C610.299 175.356 617.464 166.075 619.641 155.222C619.743 154.616 619.848 154.014 619.955 153.418C621.661 141.793 636.33 150.612 634.965 159.831C634.76 161.437 634.484 163.002 634.14 164.527C632.836 172.704 632.388 181.597 638.377 186.288C645.541 191.499 655.434 193.503 663.622 190.697C670.786 188.292 677.268 204.727 669.422 207.533C656.799 212.343 641.788 207.934 631.554 198.714C627.868 195.586 624.797 191.592 622.561 186.991C619.521 190.484 616.092 193.585 612.45 196.309C603.446 202.774 592.059 200.837 585.143 192.709C580.333 198.016 573.935 200.979 567.077 202.322C558.456 203.921 548.93 202.507 542.01 196.783C532.347 202.296 519.735 204.696 510.787 197.912C509.762 197.11 508.846 196.218 508.033 195.252C495.644 199.405 481.456 198.756 469.508 194.305C463.675 191.906 457.842 188.628 453.288 183.47C437.727 198.619 417.114 211.973 396.502 213.145C386.267 213.546 375.35 209.938 369.892 199.115C367.874 195.006 367.024 190.647 366.838 186.212C350.337 200.295 332.723 211.734 311.9 221.162C286.085 232.874 259.313 240.987 232.014 246.511C213.84 263.141 194.64 278.101 174.417 290.91C150.536 305.742 125.632 318.97 99.3638 326.185C85.7178 330.194 71.7307 332.599 57.7436 333C51.2617 333 44.4387 333 38.298 330.595C38.0796 330.338 36.1831 329.589 35.384 329.293C35.1045 329.156 34.8249 329.074 34.5454 328.991C34.2042 328.891 33.8631 328.791 33.5219 328.591C32.8396 328.39 32.072 328.09 31.3045 327.789C30.5369 327.488 29.7693 327.188 29.087 326.987C20.2171 323.78 12.0295 318.97 6.5711 310.151C0.430402 300.13 -1.95765 286.902 1.795 275.277C7.59455 256.838 26.3578 250.023 41.0272 246.015C58.7471 241.53 77.1205 241.141 95.277 240.757C99.8417 240.66 104.393 240.564 108.916 240.403C142.349 239.2 176.123 237.597 209.214 231.985C214.959 231.012 220.618 230.149 226.207 229.321C252.737 205.058 276.981 177.487 298.936 147.805C315.312 125.758 331.004 100.905 337.486 72.4447C339.874 61.6217 341.921 48.3935 338.51 37.5704C334.757 25.9456 323.158 20.7345 313.606 18.3294C289.384 12.7174 264.139 19.1311 241.282 27.1482C216.719 35.967 192.839 48.7943 170.323 63.6259C127.096 92.4213 90.6613 133.586 55.2583 173.585ZM199.64 251.869C169.512 255.756 139.385 256.898 109.257 258.04C105.681 258.176 102.076 258.277 98.4525 258.379C80.6465 258.878 62.4127 259.39 45.121 264.053C44.5823 264.211 44.2562 264.307 43.933 264.414C43.4374 264.579 42.9483 264.77 41.7095 265.256C41.0272 265.456 40.2596 265.757 39.492 266.057C38.7245 266.358 37.9569 266.659 37.2746 266.859C33.5219 268.062 30.1104 270.066 26.6989 272.07C20.5582 275.678 14.7587 282.092 14.0764 290.509C14.0764 295.32 14.7587 299.729 16.8056 302.936C16.1233 302.134 17.4879 304.139 17.829 304.539C17.9703 304.705 18.1117 304.803 18.2772 304.917C18.5113 305.078 18.794 305.272 19.1936 305.742C19.8452 306.201 20.1981 306.485 20.4995 306.728C20.9872 307.12 21.3401 307.404 22.6051 308.147C28.4047 311.755 35.5688 314.561 43.0741 315.763C55.6967 317.367 70.0249 314.962 82.6475 312.156C95.27 309.35 107.551 305.341 119.492 300.13C144.054 289.708 167.253 275.678 189.427 259.644C192.865 257.107 196.269 254.514 199.64 251.869ZM382.143 159.566C384.216 157.555 386.564 155.258 389.075 152.793C406.322 133.958 421.386 113.263 433.687 89.6818C439.828 78.4579 444.945 66.8332 449.721 54.8075C452.109 48.7957 454.497 42.781 456.544 36.7691C456.845 35.8262 457.175 34.918 457.501 34.024C458.281 31.8776 459.032 29.8134 459.273 27.5494C459.402 26.7922 459.434 26.3211 459.313 25.9847C437.454 47.6608 417.623 72.7778 402.984 101.707C393.692 119.904 386.548 139.249 382.143 159.566ZM523.399 186.16C526.852 186.102 530.371 185.151 533.673 183.639C532.453 179.234 532.526 175.233 533.493 171.608C531.084 177.155 527.694 182.104 523.399 186.16ZM512.687 173.846C519.439 169.211 524.327 162.479 526.306 154.351C522.35 157.837 518.761 162.012 515.904 167.047C514.656 169.18 513.446 171.535 512.687 173.846ZM460.467 151.772C466.775 143.672 472.469 134.887 477.695 125.759C485.883 112.13 493.047 97.6989 500.211 83.2682C503.964 76.0528 507.375 68.4366 510.446 60.8203C511.571 58.1753 512.545 55.5302 512.868 52.9271C500.959 66.1156 490.158 80.7723 481.107 96.8972C472.578 112.531 465.755 129.767 461.32 147.806C461.148 148.615 460.976 149.413 460.805 150.203C460.692 150.729 460.579 151.252 460.467 151.772Z"
            fill="url(#paint0_linear)"
          />

          <defs>
            <linearGradient
              id="paint0_linear"
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
