import React from 'react'
import TextParagraph from '../Text/TextParagraph'

type TypeParagraphProps = {
  children: React.ReactNode
  impact?: boolean
}

function ArticleParagraph({
  children,
  impact,
}: TypeParagraphProps): JSX.Element {
  return (
    <TextParagraph
      color={impact ? 'high' : 'medium'}
      size={impact ? 'lg' : 'md'}
      css={`
        max-width: 60rem;

        &:not(:last-child) {
          margin-bottom: 1.8em;
        }
      `}
    >
      {children}
    </TextParagraph>
  )
}

export default ArticleParagraph
