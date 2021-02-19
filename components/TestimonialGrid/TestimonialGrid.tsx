import React, { useMemo } from 'react'
import { TESTIMONIALS } from '../../data/testimonials'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveUp } from '../../style/responsive'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import { keys } from '../../utils/general'
import LayoutRow from '../Layout/LayoutRow'
import QuoteCard from '../QuoteCard/QuoteCard'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

function TestimonialGrid(): JSX.Element {
  const { foreground } = useTheme()

  const items = useMemo(() => {
    const list = keys(TESTIMONIALS)
    const half = Math.ceil(list.length / 2)

    return [list.splice(0, half), list.splice(-half)]
  }, [])

  return (
    <LayoutRow
      trimBottom
      css={`
        --grid-gap: 3rem;

        ${inclusiveUp('lg')} {
          --grid-gap: 4.8rem;
        }
      `}
    >
      <h2
        css={`
          ${setTextStyle('display', 'semiBold')}
          ${setResponsiveTextSize('display', 'md')}
          ${setCropAndLineHeight('display', 'tight')}

          color: ${foreground('extraHigh')};
          margin-bottom: 0.6em;
          text-align: center;
        `}
      >
        <RemoveWidow>Kind words from great teams</RemoveWidow>
      </h2>
      <p
        css={`
          ${setTextStyle('body', 'regular')}
          ${setResponsiveTextSize('body', 'md')}
          ${setCropAndLineHeight('body', 'regular')}

          color: ${foreground('medium')};

          text-align: center;
        `}
      >
        <RemoveWidow>
          I’ve worked with some amazing people over the years, here is what they
          have to say
        </RemoveWidow>
      </p>
      <div
        css={`
          display: grid;
          grid-auto-flow: row;
          grid-gap: var(--grid-gap);

          margin-top: 5rem;

          ${inclusiveUp('md')} {
            grid-auto-flow: column;
            margin-top: 9rem;
          }
        }
        `}
      >
        {items.map((items, i) => (
          <div
            key={i}
            css={`
              &:last-child {
                ${inclusiveUp('md')} {
                  padding-top: 10rem;
                }
              }
            `}
          >
            <div
              css={`
                display: grid;
                grid-auto-flow: row;

                grid-gap: var(--grid-gap);
              `}
            >
              {items.map((key) => {
                const {
                  avatar,
                  title,
                  company,
                  name,
                  shortTestimonial,
                } = TESTIMONIALS[key]

                return (
                  <QuoteCard
                    key={key}
                    quote={shortTestimonial}
                    company={company}
                    title={title}
                    name={name}
                    avatar={`/avatars/${avatar}.jpg`}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </LayoutRow>
  )
}

export default TestimonialGrid
