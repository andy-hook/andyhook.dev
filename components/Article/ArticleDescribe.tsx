import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import {
  displayText,
  setCropAndLineHeight,
  setTextStyle,
} from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import LayoutShade from '../Layout/LayoutShade'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

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
  const { foreground } = useTheme()

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
                <h2
                  css={`
                    ${setTextStyle('display', 'semiBold')}
                    ${displayText.size.md}
                ${setCropAndLineHeight('display', 'tight')}

                color: ${foreground('extraHigh')};

                    ${inclusiveDown('xs')} {
                      margin-bottom: 1em;
                    }

                    ${inclusiveUp('sm')} {
                      max-width: 12em;
                    }
                  `}
                >
                  <RemoveWidow>{title}</RemoveWidow>
                </h2>
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
