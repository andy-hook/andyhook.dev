import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { setTextStyle } from '../../style/typography'
import ImageBase from '../ImageBase/ImageBase'
import { inclusiveUp } from '../../style/responsive'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import TextBase from '../Text/TextBase'
import { ImagePath } from '../../data/images'

export type QuoteCardProps = {
  quote: string
  avatar: ImagePath
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
  const theme = useTheme()

  return (
    <figure
      css={`
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: ${theme.background('medium')};
        background-color: ${theme.background('medium')};
        border-radius: ${theme.radius.base};

        box-shadow: ${theme.shadow.medium};

        padding: 1.5rem;

        ${inclusiveUp('xs')} {
          padding: 3rem;
        }

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

          background-color: ${theme.background('extraHigh')};
          flex-shrink: 0;
          box-shadow: ${theme.shadow.medium};
          border-radius: ${theme.radius.circle};

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
            background-color: ${theme.background('high')};
            box-shadow: ${theme.shadow.medium};
            border-radius: ${theme.radius.circle};

            // We must set this index to correctly clip the overflow on Safari
            z-index: ${theme.index.floor};
          `}
        >
          <ImageBase
            imagePath={avatar}
            alt={`Profile shot of ${name}`}
            backgroundColor="light"
          />
        </div>
      </div>

      <TextBase
        tag="div"
        textStyle="display"
        weight="semiBold"
        size="xs"
        lineHeight="longform"
        color="extraHigh"
        css={`
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
              color: ${theme.foreground('medium')};
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
            `}
          >
            <RemoveWidow>{quote}</RemoveWidow>
          </p>
        </blockquote>
      </TextBase>

      <figcaption
        css={`
          text-align: center;
        `}
      >
        <TextBase
          tag="div"
          size="sm"
          weight="medium"
          color="extraHigh"
          css={`
            margin-bottom: 0.5em;
          `}
        >
          {name}
        </TextBase>

        <TextBase
          tag="div"
          size="sm"
          color="low"
          css={`
            margin-bottom: 0.5em;
          `}
        >
          {title}, {company}
        </TextBase>
      </figcaption>
    </figure>
  )
}

export default QuoteCard
