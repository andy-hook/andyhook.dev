import React, { useMemo } from 'react'
import { WORK, WorkName, WORK_ORDER } from '../../data/work'
import { inclusiveUp } from '../../style/responsive'
import InteractionBase from '../InteractionBase/InteractionBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import TextHeading from '../Text/TextHeading'
import TextParagraph from '../Text/TextParagraph'
import { appearance } from '../../style/appearance'
import ImageBase from '../ImageBase/ImageBase'

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
    <LayoutRow bordered>
      <LayoutGutter>
        <LayoutLimiter size="large">
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
            {items.map(
              ({ title, description, route, thumbnailImageSmall }, i) => (
                <div key={i}>
                  <InteractionBase
                    href={route}
                    offset={1}
                    css={`
                      display: block;
                    `}
                  >
                    <div
                      css={`
                        overflow: hidden;
                        border-radius: ${appearance.radius.base};
                      `}
                    >
                      <ImageBase
                        src={thumbnailImageSmall.src}
                        width={thumbnailImageSmall.width}
                        height={thumbnailImageSmall.height}
                        scaleRenderFromBp={['sm', 50]}
                      />
                    </div>
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
              )
            )}
          </div>
        </LayoutLimiter>
      </LayoutGutter>
    </LayoutRow>
  )
}

export default MoreWork
