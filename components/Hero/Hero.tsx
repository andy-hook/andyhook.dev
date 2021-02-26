import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import meta from '../../data/meta'
import { appearance } from '../../style/appearance'
import { inclusiveUp } from '../../style/responsive'
import { setTextStyle } from '../../style/typography'
import HireButton from '../HireButton/HireButton'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import GradientText from '../GradientText/GradientText'
import TextHeading from '../Text/TextHeading'

function Hero(): JSX.Element {
  const { foreground } = useTheme()

  return (
    <LayoutGutter
      css={`
        position: relative;
        z-index: ${appearance.index.low};
      `}
    >
      <LayoutLimiter
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
          <div
            css={`
              text-align: center;
            `}
          >
            <TextHeading
              size="lg"
              css={`
                max-width: 16em;
                margin-bottom: 1.25em;
              `}
            >
              <GradientText
                css={`
                  position: relative;
                  z-index: ${appearance.index.floor};
                  ${setTextStyle('display', 'bold')}
                `}
              >
                Senior UI Engineer
              </GradientText>{' '}
              <span
                css={`
                    position: relative;
                    z-index: ${appearance.index.low};
                    color ${foreground('high')};
                    text-shadow: ${appearance.textShadow.heavy};
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
                <RemoveWidow>user interfaces out of Brighton, UK.</RemoveWidow>
              </span>
            </TextHeading>

            <HireButton href={`mailto:${meta.email}`} />
          </div>
        </div>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default Hero
