import React from 'react'
import { baseText } from '../../style/typography'
import ContentImage from '../ContentImage/ContentImage'

function ArticleImage(): JSX.Element {
  return (
    <ContentImage
      src={'/test.png'}
      width={500}
      height={250}
      css={`
        ${baseText.size.md}

        margin-top: 5em;
        margin-bottom: 5em;
        opacity: 0.05;
      `}
    />
  )
}

export default ArticleImage
