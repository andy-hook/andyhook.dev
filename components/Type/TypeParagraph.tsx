import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { baseText, setCropAndLineHeight } from '../../style/typography'

type TypeParagraphProps = {
  children: React.ReactNode
  impact?: boolean
}

function TypeParagraph({ children, impact }: TypeParagraphProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <p
      css={`
        ${baseText.weight.regular}
        ${impact ? baseText.size.xl : baseText.size.lg}
        ${setCropAndLineHeight('base', 'longform')}

        color: ${foreground(impact ? 'high' : 'medium')};
        max-width: 60rem;

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
