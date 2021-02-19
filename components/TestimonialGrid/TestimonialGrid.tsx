import React, { useMemo } from 'react'
import { TESTIMONIALS } from '../../data/testimonials'
import { inclusiveUp } from '../../style/responsive'
import { keys } from '../../utils/general'
import LayoutRow from '../Layout/LayoutRow'
import QuoteCard from '../QuoteCard/QuoteCard'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

function TestimonialGrid(): JSX.Element {
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
      <TextHeading
        css={`
          margin-bottom: 0.6em;
          text-align: center;
        `}
      >
        Kind words from great teams
      </TextHeading>

      <TextBase
        css={`
          text-align: center;
        `}
      >
        I’ve worked with some amazing people over the years, here is what they
        have to say
      </TextBase>

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
