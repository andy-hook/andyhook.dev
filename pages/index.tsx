import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import LayoutGutter from '../components/Layout/LayoutGutter'
import LayoutLimiter from '../components/Layout/LayoutLimiter'
import LayoutRow from '../components/Layout/LayoutRow'
import LayoutShade from '../components/Layout/LayoutShade'
import MetaSocial from '../components/Meta/MetaSocial'
import StripeBackground from '../components/StripeBackground/StripeBackground'
import Testimonials from '../components/Testimonials/Testimonials'
import WorkGrid from '../components/WorkGrid/WorkGrid'
import { useTheme } from '../hooks/useTheme/useTheme'
import { appearance } from '../style/appearance'

function Home(): JSX.Element {
  const { background } = useTheme()

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
        <div
          css={`
            position: relative;
            z-index: ${appearance.index.medium};
          `}
        >
          <Hero />
          <WorkGrid />
        </div>
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
                ${background('low', 0.8)} 0%,
                ${background('low', 0)} 70%
              );

              top: 0;
              left: 0;
              width: 100%;
              height: 30%;
              z-index: ${appearance.index.low};
            `}
          />
          <StripeBackground
            css={`
              display: block;
              width: 100%;

              z-index: ${appearance.index.floor};
            `}
          />
        </div>
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
            height: 40%;
            z-index: ${appearance.index.low};
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
