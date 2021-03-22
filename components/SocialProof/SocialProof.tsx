import React, { useMemo } from 'react'
import { Author, RECOMMENDATIONS } from '../../data/recommendations'
import { inclusiveUp } from '../../style/responsive'
import LayoutRow from '../Layout/LayoutRow'
import QuoteCard from '../QuoteCard/QuoteCard'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

function SocialProof(): JSX.Element {
  const items = useMemo(() => {
    const order: Author[] = [
      'michael',
      'brett',
      'jo',
      'ben',
      'ze',
      'andrew',
      'yohan',
    ]
    const list = order.map((author) => RECOMMENDATIONS[author])
    const half = Math.ceil(list.length / 2)

    const firstColumn = list.splice(0, half)
    const secondColumn = list.splice(-half)

    return [firstColumn, secondColumn]
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
          
          grid-gap: var(--grid-gap);

          margin-top: 4rem;

          ${inclusiveUp('sm')} {
            margin-top: 7rem;
          }

          ${inclusiveUp('md')} {
            grid-template-columns: 1fr 1fr;
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
              {itemChunk.map((item, i) => {
                return (
                  <QuoteCard
                    key={i}
                    quote={item.shortText}
                    company={item.company}
                    title={item.title}
                    name={item.name}
                    avatar={item.avatar}
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

export default SocialProof
