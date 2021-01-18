import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Theme } from '../../style/theme'
import {
  displayText,
  setCropAndLineHeight,
  SupportedHeadingLevels,
  TextSize,
} from '../../style/typography'

type TextHeadingProps = {
  children: React.ReactNode
  level: SupportedHeadingLevels
  size: TextSize
  color?: keyof Theme['foreground']
}

function TextHeading({
  children,
  level,
  size,
  color = 'extraHigh',
  ...props
}: TextHeadingProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <div
      css={`
        ${displayText.size[size]}
        ${displayText.weight.semiBold}
        ${setCropAndLineHeight('display', 'tight')}

        color: ${foreground(color)};
      `}
      {...props}
    >
      <Heading as={level}>{children}</Heading>
    </div>
  )
}

const Heading = styled.h1``

export default TextHeading
