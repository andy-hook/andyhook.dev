import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import ArticleParagraph from '../Article/ArticleParagraph'
import ExpList from '../ExpList/ExpList'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

function About(): JSX.Element {
  const { foreground } = useTheme()
  return (
    <>
      <div
        css={`
          margin-bottom: 5rem;

          ${inclusiveUp('sm')} {
            display: grid;
            grid-template-columns: 50% 50%;
            margin-bottom: 8rem;
          }
        `}
      >
        <div>
          <h2
            css={`
              ${displayText.weight.semiBold}
              ${displayText.size.md}
              ${setCropAndLineHeight('display', 'tight')}

              color: ${foreground('extraHigh')};

              ${inclusiveDown('xs')} {
                margin-bottom: 0.8em;
              }

              ${inclusiveUp('sm')} {
                max-width: 9.5em;
              }
            `}
          >
            <RemoveWidow>More than 10 years doing work I love</RemoveWidow>
          </h2>
        </div>
        <div>
          <ArticleParagraph>
            <RemoveWidow>
              User experience is at the heart of everything I do, I believe that
              a close relationship between design, user needs and front-end
              engineering expertise leads to a superior customer experience
              within digital products.
            </RemoveWidow>
          </ArticleParagraph>

          <ArticleParagraph>
            <RemoveWidow>
              As a specialist in modular design systems and component libraries,
              I work to bridge the gap between design and engineering disiplines
              and am a catalyst for fast, iterative design processes within
              agile product teams. My technical experience spans a wealth of
              front-end technologies ranging from modern SPA frameworks to
              run-time performance profiling and testing. Some of my preferred
              tools include React, TypeScript, Styled Components and Jest.
            </RemoveWidow>
          </ArticleParagraph>
        </div>
      </div>

      <ExpList />
    </>
  )
}

export default About
