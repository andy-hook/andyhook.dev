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

type AuthorName = 'brett' | 'mikey' | 'jo' | 'ze' | 'ben' | 'andrew' | 'yohan'

export type QuoteProps = {
  text: string
  author: AuthorName
}

type AuthorDetails = {
  avatar: string
  name: string
  title: string
  company: string
}

const AUTHORS: Record<AuthorName, AuthorDetails> = {
  brett: {
    avatar: 'brett',
    name: 'Brett Sun',
    title: 'CTO',
    company: 'Aragon One',
  },
  mikey: {
    avatar: 'mikey',
    name: 'Mikey Allan',
    title: 'Head of Design',
    company: 'Brandwatch',
  },
  jo: {
    avatar: 'jo',
    name: 'Jo Petty',
    title: 'Digital Project Manager',
    company: 'Brandwatch',
  },
  ze: {
    avatar: 'ze',
    name: 'Zé Meirinhos',
    title: 'Javascript Developer',
    company: 'Bright Interactive',
  },
  ben: {
    avatar: 'ben',
    name: 'Ben Browning',
    title: 'UI/UX Developer',
    company: 'Bright Interactive',
  },
  andrew: {
    avatar: 'andrew',
    name: 'Andrew Khan',
    title: 'Lead Software Architect',
    company: 'Opia',
  },
  yohan: {
    avatar: 'yohan',
    name: 'Yohan Fernando',
    title: 'Senior Software Engineer',
    company: 'Brandwatch',
  },
}

const RENDER_AVATAR_BP = 'sm'

function Quote({ text, author, ...props }: QuoteProps): JSX.Element {
  const renderAvatar = useBreakpoint(inclusiveUp(RENDER_AVATAR_BP))

  const { background, foreground, shadow } = useTheme()

  const { avatar, name, title, company } = AUTHORS[author]

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
              overflow: hidden;
              font-size: 0.75em;
              width: 1em;
              height: 1em;
              background-color: ${background('high')};
              box-shadow: ${shadow('medium')};
              border-radius: ${appearance.radius.circle};
            `}
          >
            <ImageBase
              width={300}
              height={300}
              src={`/avatars/${avatar}.jpg`}
            />
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
                color: ${foreground('medium')};
              }

              &::before {
                content: open-quote;
                font-weight: bold;
                margin-left: -0.6em;
                margin-right: 0.2em;
              }

              &::after {
                content: close-quote;
                font-weight: bold;
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
          – {name}, {title}, {company}
        </figcaption>
      </div>
    </figure>
  )
}

export default Quote
