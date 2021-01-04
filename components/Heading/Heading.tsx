import React from 'react'
import { themeForeground } from '../../style/theme'
import {
  setDisplayCropAndLineHeight,
  typeDisplaySemibold,
  typeSizeDisplayXl,
} from '../../style/typography'

type HeadingProps = {
  children: React.ReactNode
}

function Heading({ children, ...props }: HeadingProps): JSX.Element {
  return (
    <h1
      css={`
        ${typeDisplaySemibold}
        ${typeSizeDisplayXl}
        ${setDisplayCropAndLineHeight('tight')}

        color: ${themeForeground('extraHigh')};
      `}
      {...props}
    >
      {children}
    </h1>
  )
}

export default Heading
