import React from 'react'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import LayoutShade from '../Layout/LayoutShade'
import TextHeading from '../Text/TextHeading'

type ArticleDescribeProps = {
  children?: React.ReactNode
  title: string
  bordered?: boolean
}

function ArticleDescribe({
  children,
  title,
  bordered,
  ...props
}: ArticleDescribeProps): JSX.Element {
  return (
    <ConditionalBorder bordered={bordered}>
      <LayoutRow>
        <LayoutGutter>
          <LayoutLimiter>
            <div
              css={`
                ${inclusiveUp('sm')} {
                  display: grid;
                  grid-template-columns: 50% 50%;
                }
              `}
              {...props}
            >
              <div>
                <TextHeading
                  css={`
                    ${inclusiveDown('xs')} {
                      margin-bottom: 1em;
                    }

                    ${inclusiveUp('sm')} {
                      max-width: 12em;
                    }
                  `}
                >
                  {title}
                </TextHeading>
              </div>
              <div>{children}</div>
            </div>
          </LayoutLimiter>
        </LayoutGutter>
      </LayoutRow>
    </ConditionalBorder>
  )
}

type ConditionalBorderProps = {
  bordered?: boolean
  children: JSX.Element
}

function ConditionalBorder({
  bordered,
  children,
}: ConditionalBorderProps): JSX.Element {
  return bordered ? <LayoutShade borderTop>{children}</LayoutShade> : children
}

export default ArticleDescribe
