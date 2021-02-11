import React from 'react'
import { baseText } from '../../style/typography'
import ContentImage from '../ContentImage/ContentImage'

type ArticleImageProps = {
  src?: string
  width?: number
  height?: number
}

function ArticleImage({
  src = '/test.png',
  width = 500,
  height = 250,
}: ArticleImageProps): JSX.Element {
  return (
    <ContentImage
      src={src}
      width={width}
      height={height}
      css={`
        ${baseText.size.sm}

        margin-top: 5em;
        margin-bottom: 5em;
      `}
    />
  )
}

export default ArticleImage
