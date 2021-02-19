import React from 'react'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import ExpList from '../ExpList/ExpList'
import TextHeading from '../Text/TextHeading'
import TextParagraph from '../Text/TextParagraph'

function About(): JSX.Element {
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
          <TextHeading
            css={`
              ${inclusiveDown('xs')} {
                margin-bottom: 0.8em;
              }

              ${inclusiveUp('sm')} {
                max-width: 9.5em;
              }
            `}
          >
            More than 10 years doing work I love
          </TextHeading>
        </div>
        <div>
          <TextParagraph>
            User experience is at the heart of everything I do, I believe that a
            close relationship between design, user needs and front-end
            engineering expertise leads to a superior customer experience within
            digital products.
          </TextParagraph>

          <TextParagraph>
            As a specialist in modular design systems and component libraries, I
            work to bridge the gap between design and engineering disiplines and
            am a catalyst for fast, iterative design processes within agile
            product teams. My technical experience spans a wealth of front-end
            technologies ranging from modern SPA frameworks to run-time
            performance profiling and testing. Some of my preferred tools
            include React, TypeScript, Styled Components and Jest.
          </TextParagraph>
        </div>
      </div>

      <ExpList />
    </>
  )
}

export default About
