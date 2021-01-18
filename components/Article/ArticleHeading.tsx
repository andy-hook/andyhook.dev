import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { displayText, setCropAndLineHeight } from '../../style/typography'

type TypeHeadingProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

function ArticleHeading({
  children,
  as = 'h2',
  size = 'sm',
}: TypeHeadingProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <Heading
      as={as}
      css={`
        ${displayText.size[size]}
        color: ${foreground('extraHigh')};
      `}
    >
      {children}
    </Heading>
  )
}

const Heading = styled.h1`
  ${displayText.weight.semiBold}
  ${setCropAndLineHeight('display', 'tight')}

  &:not(:first-child) {
    margin-top: 2.5em;
  }

  &:not(:last-child) {
    margin-bottom: 0.9em;
  }
`

export default ArticleHeading
