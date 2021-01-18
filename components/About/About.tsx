import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import ExpList from '../ExpList/ExpList'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import TypeParagraph from '../Type/TypeParagraph'

function About(): JSX.Element {
  const { background, foreground } = useTheme()
  return (
    <LayoutGutter
      css={`
        background-color: ${background('low')};
      `}
    >
      <LayoutLimiter size="large" divider>
        <LayoutRow>
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
                    max-width: 8.75em;
                  }
                `}
              >
                <RemoveWidow>More than 10 years in the game</RemoveWidow>
              </h2>
            </div>
            <div>
              <TypeParagraph>
                <RemoveWidow>
                  I'm Andy, a web professional who's been working in the web
                  industry for more than 10 years. I'm formally educated in
                  visual design, digital graphics and GUI. My strong design
                  foundations and history collaborating with design teams
                  enables me to build quality front-ends that meet the high
                  expectations of modern users while operating within technical
                  and product constraints.
                </RemoveWidow>
              </TypeParagraph>

              <TypeParagraph>
                <RemoveWidow>
                  As a specialist in user interfaces, I have extensive
                  experience building modular design systems, component
                  libraries and scalable design solutions, this helps foster and
                  support fast, iterative processes within agile product teams.
                </RemoveWidow>
              </TypeParagraph>
            </div>
          </div>
          <div>
            <ExpList />
          </div>
        </LayoutRow>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default About
