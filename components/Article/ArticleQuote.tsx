import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveUp } from '../../style/responsive'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

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
              <div
                css={`
                  ${setTextStyle('display', 'semiBold')}
                  ${setResponsiveTextSize('display', 'sm')}
                  ${setCropAndLineHeight('display', 'longform')}
                `}
              >
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
                      color: ${foreground('extraHigh')};
                    `}
                  >
                    <RemoveWidow>{testimonial}</RemoveWidow>
                  </p>
                </blockquote>
              </div>
            </div>
            <div
              css={`
                ${setResponsiveTextSize('body', 'md')}

                ${inclusiveUp('sm')} {
                  order: 1;
                }
              `}
            >
              <h3
                css={`
                  ${setTextStyle('display', 'medium')}

                  ${setCropAndLineHeight('body', 'flat')}
                    color: ${foreground('extraHigh')};
                `}
              >
                {name}
              </h3>
              <div
                css={`
                  ${setTextStyle('display', 'regular')}
                  ${setCropAndLineHeight('body', 'flat')}
            
                  color: ${foreground('low')};

                  margin-top: 0.5em;
                  margin-bottom: 0.5em;
                `}
              >
                {title}
              </div>
              <div
                css={`
                  ${setTextStyle('display', 'regular')}
                  ${setCropAndLineHeight('body', 'flat')}

                  color: ${foreground('low')};
                `}
              >
                {company}
              </div>
            </div>
          </div>
        </LayoutLimiter>
      </LayoutGutter>
    </LayoutRow>
  )
}

export default ArticleQuote
