import React from 'react'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import WorkGridItem from './WorkGridItem'

function WorkGrid(): JSX.Element {
  return (
    <LayoutGutter>
      <LayoutLimiter size="large">
        <div
          css={`
            display: grid;
            column-gap: 80px;
            grid-template-columns: 1fr 1fr;
          `}
        >
          <div>
            <WorkGridItem
              src="/test.png"
              title="Dash"
              description="Description"
              width={565}
              height={597}
            />
          </div>
          <div>
            <WorkGridItem
              src="/test.png"
              title="Aragon"
              description="Description"
              width={565}
              height={382}
            />
          </div>
          <div
            css={`
              align-self: end;
            `}
          >
            <WorkGridItem
              src="/test.png"
              title="Blocks"
              description="Description"
              width={565}
              height={533}
            />
          </div>
          <div>
            <WorkGridItem
              src="/test.png"
              title="Brandwatch"
              description="Description"
              width={565}
              height={703}
            />
          </div>
        </div>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default WorkGrid
