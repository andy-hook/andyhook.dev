import React from 'react'
import { WORK, WORK_ORDER } from '../../data/work'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import WorkCard from '../WorkCard/WorkCard'

function WorkGrid(): JSX.Element {
  return (
    <LayoutGutter>
      <LayoutRow trimTop>
        <LayoutLimiter>
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
              const { thumbnailImage, route, title, subtitle, disabled } = WORK[
                key
              ]

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
                  <WorkCard
                    size="large"
                    filename={thumbnailImage.filename}
                    disabled={disabled}
                    href={route}
                    title={title}
                    subtitle={subtitle}
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
