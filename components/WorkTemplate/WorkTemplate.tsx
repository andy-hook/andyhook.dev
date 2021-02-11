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
import BackgroundTexture from '../BackgroundTexture/BackgroundTexture'
import { appearance } from '../../style/appearance'

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
        <header>
          <div
            css={`
              position: relative;

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
            <LayoutGutter
              css={`
                position: relative;
                z-index: ${appearance.index.low};
              `}
            >
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
            <BackgroundTexture
              css={`
                position: absolute;

                top: 0;
                left: 0;
                bottom: 0;
                right: 0;

                z-index: ${appearance.index.floor};
              `}
            />
          </div>
          <div
            css={`
              margin-bottom: 5rem;

              ${inclusiveUp('sm')} {
                margin-bottom: 6rem;
              }

              ${inclusiveUp('md')} {
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
                    grid-template-columns: 1fr 20%;
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
                        top: 6rem;
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
