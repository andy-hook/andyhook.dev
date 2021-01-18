import React from 'react'
import { SupportedHeadingLevels, TextSize } from '../../style/typography'
import TextHeading from '../Text/TextHeading'

type TypeHeadingProps = {
  children: React.ReactNode
  level?: SupportedHeadingLevels
  size?: TextSize
}

function ArticleHeading({
  children,
  level = 'h2',
  size = 'sm',
}: TypeHeadingProps): JSX.Element {
  return (
    <TextHeading
      level={level}
      size={size}
      color="extraHigh"
      css={`
        &:not(:first-child) {
          margin-top: 2.5em;
        }

        &:not(:last-child) {
          margin-bottom: 0.9em;
        }
      `}
    >
      {children}
    </TextHeading>
  )
}

export default ArticleHeading
