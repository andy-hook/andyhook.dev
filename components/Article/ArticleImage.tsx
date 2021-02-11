import React from 'react'
import { baseText } from '../../style/typography'
import ContentImage from '../ContentImage/ContentImage'

type ArticleImageProps = {
  src?: string
  width?: number
  height?: number
  backgroundColor?: string
}

function ArticleImage({
  src = '/test.png',
  width = 500,
  height = 250,
  backgroundColor,
}: ArticleImageProps): JSX.Element {
  return (
    <ContentImage
      src={src}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      css={`
        ${baseText.size.sm}

        margin-top: 5em;
        margin-bottom: 5em;
      `}
    />
  )
}

export default ArticleImage
