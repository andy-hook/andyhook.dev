import React, { useMemo } from 'react'
import { WORK, WorkName, WORK_ORDER } from '../../data/work'
import { useTheme } from '../../hooks/useTheme/useTheme'
import ArticleHeading from '../Article/ArticleHeading'
import ContentImage from '../ContentImage/ContentImage'
import InteractionBase from '../InteractionBase/InteractionBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'

type MoreWorkProps = {
  currentWorkName: WorkName
}

function MoreWork({ currentWorkName }: MoreWorkProps): JSX.Element {
  const { foreground } = useTheme()

  const items = useMemo(() => {
    return WORK_ORDER.filter((value) => value !== currentWorkName).map(
      (key) => WORK[key]
    )
  }, [currentWorkName])

  return (
    <LayoutGutter>
      <LayoutLimiter size="large" divider>
        <LayoutRow>
          <ArticleHeading>More Work</ArticleHeading>
          <div
            css={`
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 3rem;
            `}
          >
            {items.map(({ title, description, route }, i) => (
              <div key={i}>
                <InteractionBase
                  href={route}
                  offset={1}
                  css={`
                    display: block;
                  `}
                >
                  <ContentImage src="/test.png" width={500} height={300} />
                  <h4
                    css={`
                      color: ${foreground('high')};
                    `}
                  >
                    {title}
                  </h4>
                  <p
                    css={`
                      color: ${foreground('high')};
                    `}
                  >
                    {description}
                  </p>
                </InteractionBase>
              </div>
            ))}
          </div>
        </LayoutRow>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default MoreWork
