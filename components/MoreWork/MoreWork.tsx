import React, { useMemo } from 'react'
import { WORK, WorkName, WORK_ORDER } from '../../data/work'
import { inclusiveUp } from '../../style/responsive'
import ContentImage from '../ContentImage/ContentImage'
import InteractionBase from '../InteractionBase/InteractionBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import TextHeading from '../Text/TextHeading'
import TextParagraph from '../Text/TextParagraph'

type MoreWorkProps = {
  currentWorkName: WorkName
}

function MoreWork({ currentWorkName }: MoreWorkProps): JSX.Element {
  const items = useMemo(() => {
    return WORK_ORDER.filter((value) => value !== currentWorkName).map(
      (key) => WORK[key]
    )
  }, [currentWorkName])

  return (
    <LayoutGutter>
      <LayoutLimiter size="large" divider>
        <LayoutRow>
          <TextHeading
            level="h3"
            size="sm"
            css={`
              margin-bottom: 1.75em;
            `}
          >
            More Work
          </TextHeading>
          <div
            css={`
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: 6rem;

              ${inclusiveUp('sm')} {
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 3%;
              }

              ${inclusiveUp('xl')} {
                grid-gap: 3rem;
              }
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
                  <ContentImage
                    src="/test.png"
                    width={500}
                    height={300}
                    css={`
                      opacity: 0.05;
                    `}
                  />
                  <TextHeading
                    size="xs"
                    level="h4"
                    css={`
                      margin-top: 1.5em;
                      margin-bottom: 0.4em;
                    `}
                  >
                    {title}
                  </TextHeading>
                  <TextParagraph size="sm" color="medium">
                    {description}
                  </TextParagraph>
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
