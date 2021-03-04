import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import GradientText from '../GradientText/GradientText'
import TextHeading from '../Text/TextHeading'
import meta from '../../data/meta'
import Button from '../Button/Button'
import { setTextStyle } from '../../style/typography'

function Hero(): JSX.Element {
  const theme = useTheme()

  return (
    <LayoutGutter
      css={`
        position: relative;
        z-index: ${theme.index.low};
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
                    ${theme.accent('light')} 0%,
                    ${theme.accent('base')} 100%
                  );
                  border-radius: ${theme.radius.circle};
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
