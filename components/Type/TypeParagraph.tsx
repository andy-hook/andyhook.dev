import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeBaseRegular,
  typeSizeBaseLg,
} from '../../style/typography'

type TypeParagraphProps = {
  children: React.ReactNode
}

function TypeParagraph({ children }: TypeParagraphProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <p
      css={`
        ${typeBaseRegular}
        ${typeSizeBaseLg}
        ${setCropAndLineHeight('body', 'longform')}

        color: ${foreground('medium')};

        &:not(:last-child) {
          margin-bottom: 1.8em;
        }
      `}
    >
      {children}
    </p>
  )
}

export default TypeParagraph
