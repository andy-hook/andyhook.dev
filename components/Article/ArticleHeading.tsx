import React, { useMemo } from 'react'
import {
  SupportedHeadingLevels,
  ResponsiveTextSize,
} from '../../style/typography'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import TextHeading from '../Text/TextHeading'

type TypeHeadingProps = {
  children: React.ReactNode
  level?: SupportedHeadingLevels
  size?: ResponsiveTextSize
}

function ArticleHeading({
  children,
  level = 'h2',
  size = 'sm',
}: TypeHeadingProps): JSX.Element {
  const wrappedChildren = useMemo(() => {
    if (typeof children === 'string') {
      return <RemoveWidow>{children}</RemoveWidow>
    }

    return children
  }, [children])

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
      {wrappedChildren}
    </TextHeading>
  )
}

export default ArticleHeading
