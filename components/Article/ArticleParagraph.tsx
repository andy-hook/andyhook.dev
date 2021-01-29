import React, { useMemo } from 'react'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import TextParagraph from '../Text/TextParagraph'

type TypeParagraphProps = {
  children: React.ReactNode
  impact?: boolean
}

function ArticleParagraph({
  children,
  impact,
}: TypeParagraphProps): JSX.Element {
  const wrappedChildren = useMemo(() => {
    if (typeof children === 'string') {
      return <RemoveWidow>{children}</RemoveWidow>
    }

    return children
  }, [children])

  return (
    <TextParagraph
      color={impact ? 'high' : 'medium'}
      size={impact ? 'lg' : 'md'}
      weight={impact ? 'medium' : 'regular'}
      css={`
        max-width: 60rem;

        &:not(:last-child) {
          margin-bottom: 1.8em;
        }
      `}
    >
      {wrappedChildren}
    </TextParagraph>
  )
}

export default ArticleParagraph
