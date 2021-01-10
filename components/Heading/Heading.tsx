import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeDisplaySemibold,
  typeSizeDisplayLg,
} from '../../style/typography'

type HeadingProps = {
  children: React.ReactNode
}

function Heading({ children, ...props }: HeadingProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <h1
      css={`
        ${typeDisplaySemibold}
        ${typeSizeDisplayLg}
        ${setCropAndLineHeight('display', 'tight')}

        color: ${foreground('extraHigh')};
      `}
      {...props}
    >
      {children}
    </h1>
  )
}

export default Heading
