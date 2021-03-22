import React, { useMemo } from 'react'
import { RECOMMENDATIONS } from '../../data/recommendations'
import { inclusiveUp } from '../../style/responsive'
import { keys } from '../../utils/general'
import Button from '../Button/Button'
import LayoutRow from '../Layout/LayoutRow'
import QuoteCard from '../QuoteCard/QuoteCard'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

function SocialProof(): JSX.Element {
  const items = useMemo(() => {
    const list = keys(RECOMMENDATIONS)
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
          margin-top: 1em;
          margin-bottom: 0.55em;
          text-align: center;
        `}
      >
        Kind words from great teams
      </TextHeading>

      <TextBase
        color="low"
        size="lg"
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

          margin-top: 4rem;

          ${inclusiveUp('sm')} {
            margin-top: 7rem;
          }

          ${inclusiveUp('md')} {
            grid-auto-flow: column;
          }

          ${inclusiveUp('lg')} {
            margin-top: 9rem;
          }
        }
        `}
      >
        {items.map((itemChunk, i) => (
          <div
            key={i}
            css={`
              // Offset second column
              &:last-child {
                ${inclusiveUp('md')} {
                  padding-top: 17rem;
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
              {itemChunk.map((key) => {
                const {
                  avatar,
                  title,
                  company,
                  name,
                  testimonial,
                } = RECOMMENDATIONS[key]

                return (
                  <QuoteCard
                    key={key}
                    quote={testimonial}
                    company={company}
                    title={title}
                    name={name}
                    avatar={avatar}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div
        css={`
          margin-top: 5rem;
          display: flex;
          justify-content: center;
        `}
      >
        <Button>Load More Recommendations</Button>
      </div>
    </LayoutRow>
  )
}

export default SocialProof
