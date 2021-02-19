import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Theme } from '../../style/theme'
import {
  setCropAndLineHeight,
  setTextStyle,
  SupportedHeadingLevels,
  ResponsiveTextSize,
  setResponsiveTextSize,
} from '../../style/typography'

type TextHeadingProps = {
  children: React.ReactNode
  level: SupportedHeadingLevels
  size: ResponsiveTextSize
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
        ${setResponsiveTextSize('display', size)}
        ${setTextStyle('display', 'semiBold')}
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
