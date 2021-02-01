import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import {
  baseText,
  displayText,
  setCropAndLineHeight,
} from '../../style/typography'
import ImageBase from '../ImageBase/ImageBase'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { inclusiveUp } from '../../style/responsive'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

export type QuoteProps = {
  text: string
  avatar: string
  subline: string
}

const RENDER_AVATAR_BP = 'sm'

function Quote({ text, avatar, subline, ...props }: QuoteProps): JSX.Element {
  const renderAvatar = useBreakpoint(inclusiveUp(RENDER_AVATAR_BP))

  const { background, foreground, shadow } = useTheme()

  return (
    <figure
      css={`
        display: flex;
        background-color: ${background('medium')};
        background-color: ${background('medium')};
        border-radius: ${appearance.radius.base};

        box-shadow: ${shadow('medium')};

        padding: 3rem;

        ${inclusiveUp('lg')} {
          padding: 4rem;
        }

        ${inclusiveUp(RENDER_AVATAR_BP)} {
          padding-left: 0;
        }
      `}
      {...props}
    >
      {renderAvatar && (
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5rem;
            width: 1em;
            height: 1em;

            margin-right: 0.4em;

            margin-top: -0.25em;
            margin-left: -0.5em;

            background-color: ${background('extraHigh')};
            flex-shrink: 0;
            box-shadow: ${shadow('medium')};
            border-radius: ${appearance.radius.circle};

            ${inclusiveUp('lg')} {
              font-size: 6rem;
            }
          `}
        >
          <div
            css={`
              position: relative;
              overflow: hidden;
              font-size: 0.75em;
              width: 1em;
              height: 1em;
              background-color: ${background('high')};
              box-shadow: ${shadow('medium')};
              border-radius: ${appearance.radius.circle};

              // We must set this index to correctly clip the overflow on Safari
              z-index: ${appearance.index.floor};
            `}
          >
            <ImageBase width={300} height={300} src={avatar} />
          </div>
        </div>
      )}
      <div>
        <div
          css={`
            ${displayText.weight.semiBold}
            ${displayText.size.xs}
           
            ${setCropAndLineHeight('display', 'longform')}

            margin-bottom: 1.65em;
          `}
        >
          <blockquote
            css={`
              quotes: '“' '”';

              &::before,
              &::after {
                ${displayText.weight.bold}
                color: ${foreground('medium')};
              }

              &::before {
                content: open-quote;

                margin-left: -0.6em;
                margin-right: 0.2em;
              }

              &::after {
                content: close-quote;

                margin-left: 0.2em;
              }
            `}
          >
            <p
              css={`
                display: inline;
                color: ${foreground('extraHigh')};
              `}
            >
              <RemoveWidow>{text}</RemoveWidow>
            </p>
          </blockquote>
        </div>
        <figcaption
          css={`
            ${baseText.weight.medium}
            ${baseText.size.sm}
            ${setCropAndLineHeight('display', 'regular')}

            color: ${foreground('low')};
          `}
        >
          – {subline}
        </figcaption>
      </div>
    </figure>
  )
}

export default Quote
