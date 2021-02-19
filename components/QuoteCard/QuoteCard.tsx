import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import ImageBase from '../ImageBase/ImageBase'
import { inclusiveUp } from '../../style/responsive'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

export type QuoteCardProps = {
  quote: string
  avatar: string
  title: string
  name: string
  company: string
}

function QuoteCard({
  quote,
  avatar,
  title,
  name,
  company,
  ...props
}: QuoteCardProps): JSX.Element {
  const { background, foreground, shadow } = useTheme()

  return (
    <figure
      css={`
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: ${background('medium')};
        background-color: ${background('medium')};
        border-radius: ${appearance.radius.base};

        box-shadow: ${shadow('medium')};

        padding: 3rem;

        ${inclusiveUp('lg')} {
          padding: 4rem;
        }
      `}
      {...props}
    >
      <div
        css={`
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          width: 1em;
          height: 1em;

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

      <div
        css={`
          ${setTextStyle('display', 'semiBold')}
          ${setResponsiveTextSize('display', 'xs')}
          ${setCropAndLineHeight('display', 'longform')}
            
          text-align: center;
          margin-top: 1.5em;
          margin-bottom: 2.5em;
        `}
      >
        <blockquote
          css={`
            quotes: '“' '”';

            &::before,
            &::after {
              ${setTextStyle('display', 'bold')}
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
            <RemoveWidow>{quote}</RemoveWidow>
          </p>
        </blockquote>
      </div>
      <figcaption
        css={`
          text-align: center;

          ${setResponsiveTextSize('body', 'sm')}
        `}
      >
        <div
          css={`
            ${setTextStyle('body', 'medium')}
            ${setCropAndLineHeight('body', 'regular')}

            color: ${foreground('extraHigh')};
            margin-bottom: 0.5em;
          `}
        >
          {name}
        </div>
        <div
          css={`
            ${setCropAndLineHeight('body', 'regular')}
            ${setTextStyle('body', 'regular')}
            color: ${foreground('low')};
          `}
        >
          {title}, {company}
        </div>
      </figcaption>
    </figure>
  )
}

export default QuoteCard
