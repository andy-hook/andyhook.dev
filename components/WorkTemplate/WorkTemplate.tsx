import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import Image from 'next/image'
import { displayText, setCropAndLineHeight } from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import WorkDetailsList from './WorkDetailsList'
import LayoutRow from '../Layout/LayoutRow'
import { inclusiveUp } from '../../style/responsive'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

type WorkTemplate = {
  children: React.ReactNode
}

function WorkTemplate({ children }: WorkTemplate): JSX.Element {
  const { foreground } = useTheme()

  return (
    <article>
      <header
        css={`
          padding-top: 14rem;

          ${inclusiveUp('sm')} {
            padding-top: 16rem;
          }

          ${inclusiveUp('md')} {
            padding-top: 22rem;
          }
        `}
      >
        <LayoutGutter>
          <LayoutLimiter size="large">
            <h1
              css={`
                ${displayText.weight.semiBold}
                ${displayText.size.lg}
                ${setCropAndLineHeight('display', 'tight')}
                  
                max-width: 14em;
                color: ${foreground('extraHigh')};
              `}
            >
              <RemoveWidow>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RemoveWidow>
            </h1>
          </LayoutLimiter>
        </LayoutGutter>
        <div
          css={`
            opacity: 0.05;
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
          <Image
            src="/test.png"
            width={1000}
            height={500}
            layout="responsive"
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
                    items={['Bright Interactive']}
                    css={`
                      margin-bottom: 3.5rem;
                    `}
                  />
                  <WorkDetailsList
                    title="Role"
                    items={[
                      'UI Engineer',
                      'Sep 2018 – May 2020',
                      'Brighton, UK',
                    ]}
                    css={`
                      margin-bottom: 3.5rem;
                    `}
                  />
                  <WorkDetailsList
                    title="Technologies"
                    items={[
                      'React',
                      'Typescript',
                      'Ethereum',
                      'Styled Components',
                      'Ethers',
                      'Jest',
                    ]}
                  />
                </div>
              </aside>
            </LayoutLimiter>
          </LayoutRow>
        </LayoutGutter>
      </main>
    </article>
  )
}

export default WorkTemplate
