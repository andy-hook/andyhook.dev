import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveUp } from '../../style/responsive'
import { setResponsiveTextSize, setTextStyle } from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

type ArticleQuoteProps = {
  name: string
  title: string
  testimonial: string
  company: string
}

function ArticleQuote({
  name,
  title,
  company,
  testimonial,
}: ArticleQuoteProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <LayoutRow>
      <LayoutGutter>
        <LayoutLimiter>
          <div
            css={`
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: 4rem;

              ${inclusiveUp('sm')} {
                grid-template-columns: 30% 1fr;
              }
            `}
          >
            <div
              css={`
                ${inclusiveUp('sm')} {
                  order: 2;
                }
              `}
            >
              <TextHeading tag="div" size="sm" lineHeight="longform">
                <blockquote
                  css={`
                    quotes: '“' '”';

                    &::before,
                    &::after {
                      ${setTextStyle('display', 'bold')}
                      color: ${foreground('medium')};
                    }

                    &::before {
                      content: open-quote;

                      margin-left: -0.5em;
                      margin-right: 0.1em;
                    }

                    &::after {
                      content: close-quote;

                      margin-left: 0.1em;
                    }
                  `}
                >
                  <p
                    css={`
                      display: inline;
                    `}
                  >
                    <RemoveWidow>{testimonial}</RemoveWidow>
                  </p>
                </blockquote>
              </TextHeading>
            </div>
            <div
              css={`
                ${setResponsiveTextSize('body', 'md')}

                ${inclusiveUp('sm')} {
                  order: 1;
                }
              `}
            >
              <TextBase
                tag="h3"
                lineHeight="flat"
                weight="medium"
                color="extraHigh"
              >
                {name}
              </TextBase>

              <TextBase
                tag="div"
                lineHeight="flat"
                color="low"
                css={`
                  margin-top: 0.5em;
                  margin-bottom: 0.5em;
                `}
              >
                {title}
              </TextBase>

              <TextBase tag="div" lineHeight="flat" color="low">
                {company}
              </TextBase>
            </div>
          </div>
        </LayoutLimiter>
      </LayoutGutter>
    </LayoutRow>
  )
}

export default ArticleQuote
