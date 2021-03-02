import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import GradientText from '../GradientText/GradientText'
import TextHeading from '../Text/TextHeading'
import meta from '../../data/meta'
import Button from '../Button/Button'

function Hero(): JSX.Element {
  const { foreground } = useTheme()
  const { accent } = useTheme()

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
            height: 100%;
            flex: 1;

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
                z-index: ${appearance.index.floor};
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
                    ${accent('light')} 0%,
                    ${accent('base')} 100%
                  );
                  border-radius: ${appearance.radius.circle};
                `}
              />
            </div>
            Currently available for hire
          </Button>
        </div>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default Hero
