import React from 'react'
import { AuthorName, AUTHORS } from '../../data/testimonials'
import { baseText } from '../../style/typography'
import Quote from '../Quote/Quote'

type ArticleQuoteProps = {
  author: AuthorName
}

function ArticleQuote({ author }: ArticleQuoteProps): JSX.Element {
  const { title, testimonial, name, avatar, company } = AUTHORS[author]

  return (
    <Quote
      avatar={`/avatars/${avatar}.jpg`}
      subline={`${name}, ${title}, ${company}`}
      text={testimonial}
      css={`
        ${baseText.size.sm}

        margin-top: 5em;
        margin-bottom: 5em;
      `}
    />
  )
}

export default ArticleQuote
