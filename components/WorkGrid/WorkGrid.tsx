import React from 'react'
import { WORK, WORK_ORDER } from '../../data/work'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import WorkGridItem from './WorkGridItem'

function WorkGrid(): JSX.Element {
  return (
    <LayoutGutter>
      <LayoutRow trimTop>
        <LayoutLimiter size="large">
          <div
            css={`
              display: grid;

              ${inclusiveDown('xs')} {
                row-gap: 4rem;
                grid-template-columns: 1fr;
              }

              ${inclusiveUp('sm')} {
                grid-template-columns: 1fr 1fr;
                column-gap: 6%;
              }

              ${inclusiveUp('xl')} {
                column-gap: 4.8rem;
              }
            `}
          >
            {WORK_ORDER.map((key) => {
              const { thumbnailImage, route, title, description } = WORK[key]

              return (
                <div
                  key={key}
                  css={`
                    ${inclusiveUp('sm')} {
                      &:nth-child(4n),
                      &:nth-child(4n-1) {
                        align-self: end;
                      }
                    }
                  `}
                >
                  <WorkGridItem
                    src={thumbnailImage.src}
                    href={route}
                    title={title}
                    description={description}
                    width={thumbnailImage.width}
                    height={thumbnailImage.height}
                    backgroundColor={thumbnailImage.dominantColor}
                  />
                </div>
              )
            })}
          </div>
        </LayoutLimiter>
      </LayoutRow>
    </LayoutGutter>
  )
}

export default WorkGrid
