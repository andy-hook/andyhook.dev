import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import { inclusiveUp } from '../../style/responsive'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import { WORK, WorkName } from '../../data/work'
import MetaSocial from '../Meta/MetaSocial'
import MoreWork from '../MoreWork/MoreWork'
import ImageBase from '../ImageBase/ImageBase'

type WorkTemplate = {
  name: WorkName
  children: React.ReactNode
}

function WorkTemplate({
  children,
  name = 'aragon',
}: WorkTemplate): JSX.Element {
  const { foreground } = useTheme()

  const {
    title,
    description,
    intro,
    tenure,
    role,
    technologies,
    heroImage,
  } = WORK[name]

  return (
    <>
      <MetaSocial title={`Case study – ${title}`} description={description} />
      <article>
        <header>
          <div
            css={`
              padding-top: 14rem;
              padding-bottom: 5rem;

              ${inclusiveUp('sm')} {
                padding-top: 16rem;
                padding-bottom: 6rem;
              }

              ${inclusiveUp('md')} {
                padding-top: 18rem;
                padding-bottom: 9rem;
              }
            `}
          >
            <LayoutGutter>
              <LayoutLimiter size="large">
                <div
                  css={`
                    ${displayText.size.lg}/* max-width: 18em; */
                  `}
                >
                  <h1
                    css={`
                      ${displayText.weight.semiBold}
                      ${setCropAndLineHeight('display', 'tight')}
                  
                    color: ${foreground('extraHigh')};
                      margin-bottom: 0.25em;
                    `}
                  >
                    {title}
                  </h1>
                  <h2
                    css={`
                      ${displayText.weight.regular}
                      ${setCropAndLineHeight('display', 'tight')}

                    color: ${foreground('low')};
                    `}
                  >
                    <RemoveWidow>{description}</RemoveWidow>
                  </h2>
                </div>
              </LayoutLimiter>
            </LayoutGutter>
          </div>

          <ImageBase
            src={heroImage.src}
            width={heroImage.width}
            height={heroImage.height}
          />
        </header>
        <main>
          <LayoutGutter>
            <LayoutRow>
              <LayoutLimiter
                size="large"
                css={`
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 4rem;
                  width: 100%;

                  ${inclusiveUp('sm')} {
                    grid-template-columns: 25% 1fr;
                    grid-gap: 4rem;
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
                  <p
                    css={`
                      ${displayText.size.sm}
                      ${displayText.weight.medium}
                      ${setCropAndLineHeight('display', 'longform')}

                      margin-bottom: 3em;

                      color: ${foreground('high')};
                    `}
                  >
                    <RemoveWidow>{intro}</RemoveWidow>
                  </p>
                  <div
                    css={`
                      ${displayText.size.xs}
                      ${displayText.weight.regular}
                      ${setCropAndLineHeight('display', 'longform')}
                        
                      color: ${foreground('low')};
                    `}
                  >
                    <div>{role}</div>
                    <div>{tenure}</div>
                  </div>
                </div>

                <ul
                  css={`
                    ${inclusiveUp('sm')} {
                      order: 1;
                    }
                  `}
                >
                  {technologies.map((item, i) => (
                    <li
                      key={i}
                      css={`
                        ${displayText.size.xs}
                        ${displayText.weight.regular}
                        ${setCropAndLineHeight('display', 'flat')}
                        
                        color: ${foreground('medium')};

                        &:not(:last-child) {
                          margin-bottom: 1.1em;
                        }
                      `}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </LayoutLimiter>
            </LayoutRow>
          </LayoutGutter>
          <LayoutGutter>
            <LayoutRow>
              <LayoutLimiter size="large">{children}</LayoutLimiter>
            </LayoutRow>
          </LayoutGutter>
        </main>
      </article>
      <MoreWork currentWorkName={name} />
    </>
  )
}

export default WorkTemplate
