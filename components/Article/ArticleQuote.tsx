import React from 'react'
import { baseText } from '../../style/typography'
import Quote, { QuoteProps } from '../Quote/Quote'

type ArticleQuoteProps = QuoteProps

function ArticleQuote({ text, author }: ArticleQuoteProps): JSX.Element {
  return (
    <Quote
      text={text}
      author={author}
      css={`
        ${baseText.size.sm}

        margin-top: 5em;
        margin-bottom: 5em;
      `}
    />
  )
}

export default ArticleQuote
