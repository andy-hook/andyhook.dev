import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import WorkDetailsList from './WorkDetailsList'
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
    company,
    tenure,
    location,
    role,
    technologies,
    heroImage,
  } = WORK[name]

  return (
    <>
      <MetaSocial title={`Case study – ${title}`} description={description} />
      <article>
        <header
          css={`
            padding-top: 14rem;

            ${inclusiveUp('sm')} {
              padding-top: 16rem;
            }

            ${inclusiveUp('md')} {
              padding-top: 18rem;
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

                    color: ${foreground('medium')};
                  `}
                >
                  <RemoveWidow>{description}</RemoveWidow>
                </h2>
              </div>
            </LayoutLimiter>
          </LayoutGutter>
          <div
            css={`
              margin-top: 5rem;
              margin-bottom: 5rem;

              ${inclusiveUp('sm')} {
                margin-top: 6rem;
                margin-bottom: 6rem;
              }

              ${inclusiveUp('md')} {
                margin-top: 9rem;
                margin-bottom: 9rem;
              }
            `}
          >
            <ImageBase
              src={heroImage.src}
              width={heroImage.width}
              height={heroImage.height}
            />
          </div>
        </header>
        <main>
          <LayoutGutter>
            <LayoutRow trimTop>
              <LayoutLimiter
                size="large"
                css={`
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 6rem;
                  width: 100%;

                  ${inclusiveUp('sm')} {
                    grid-template-columns: 1fr 25%;
                    grid-gap: 4rem;
                  }

                  ${inclusiveUp('md')} {
                    grid-gap: 8rem;
                  }
                `}
              >
                <div
                  css={`
                    flex: 1;
                  `}
                >
                  {children}
                </div>
                <aside>
                  <div
                    css={`
                      ${inclusiveUp('sm')} {
                        position: sticky;
                        top: 4rem;
                      }
                    `}
                  >
                    <WorkDetailsList
                      title="Company"
                      items={[company]}
                      css={`
                        margin-bottom: 3.5rem;
                      `}
                    />
                    <WorkDetailsList
                      title="Role"
                      items={[role, tenure, location]}
                      css={`
                        margin-bottom: 3.5rem;
                      `}
                    />
                    <WorkDetailsList
                      title="Technologies"
                      items={technologies}
                    />
                  </div>
                </aside>
              </LayoutLimiter>
            </LayoutRow>
          </LayoutGutter>
        </main>
      </article>
      <MoreWork currentWorkName={name} />
    </>
  )
}

export default WorkTemplate
