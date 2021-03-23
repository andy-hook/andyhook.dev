import React from 'react'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import Button from '../Button/Button'
import ExperienceList from '../ExperienceList/ExperienceList'
import SocialProof from '../SocialProof/SocialProof'
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
            grid-template-areas:
              'a b'
              'c b';

            grid-template-rows: auto 1fr;
            grid-template-columns: 50%;
            margin-bottom: 8rem;
          }
        `}
      >
        <div
          css={`
            grid-area: a;
          `}
        >
          <TextHeading
            tag="h2"
            css={`
              grid-area: a;
              margin-bottom: 1em;

              ${inclusiveUp('sm')} {
                max-width: 9.5em;
              }
            `}
          >
            More than 10 years doing work I love
          </TextHeading>
        </div>

        <div
          css={`
            grid-area: b;
            ${inclusiveDown('sm')} {
              margin-bottom: 3rem;
            }
          `}
        >
          <TextParagraph>
            Great user experience is at the core of everything I do, I believe
            that close collaboration between design, user research and front-end
            engineering leads to a superior customer experience within digital
            products.
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

        <div
          css={`
            grid-area: c;
          `}
        >
          <Button href="/andy-hook-brighton-senior-ui-engineer.pdf" newTab>
            View my full Resume
          </Button>
        </div>
      </div>

      <ExperienceList />
      <SocialProof />
    </>
  )
}

export default About
