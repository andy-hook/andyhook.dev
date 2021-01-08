import React from 'react'
import { applyForeground } from '../../style/theme'
import {
  setCropAndLineHeight,
  typeDisplaySemibold,
  typeSizeDisplayLg,
} from '../../style/typography'

type HeadingProps = {
  children: React.ReactNode
}

function Heading({ children, ...props }: HeadingProps): JSX.Element {
  return (
    <h1
      css={`
        ${typeDisplaySemibold}
        ${typeSizeDisplayLg}
        ${setCropAndLineHeight('display', 'tight')}

        color: ${applyForeground('extraHigh')};
      `}
      {...props}
    >
      {children}
    </h1>
  )
}

export default Heading
