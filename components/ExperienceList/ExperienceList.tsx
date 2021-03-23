import React from 'react'
import { ImagePath } from '../../data/images'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

const ENTRIES: [string, ImagePath, string, string][] = [
  ['2020', 'logos/aragon-mark.svg', 'Senior UI Engineer', 'Aragon One'],
  ['2018', 'logos/bright-mark.svg', 'UI Engineer', 'Bright Interactive'],
  [
    '2016',
    'logos/brandwatch-mark.svg',
    'Senior Front-End Developer',
    'Brandwatch',
  ],
  ['2012', 'logos/tjc-mark.svg', 'Front-End Developer', 'Jamieson Consultancy'],
  ['2009', 'logos/andyhook-mark.svg', 'Digital Designer', 'Freelance'],
]

function ExperienceList(): JSX.Element {
  const theme = useTheme()

  return (
    <ul>
      {ENTRIES.map(([year, logoPath, title, company], i) => (
        <li
          css={`
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          `}
          key={i}
        >
          <div
            css={`
              --logo-size: 2.5rem;
              --padding-y: 2.1rem;

              display: grid;
              grid-template-columns: 8rem var(--logo-size) 1fr 50%;

              background-color: ${theme.background('medium')};
              border-radius: ${theme.radius.base};

              box-shadow: ${theme.shadow.medium};

              padding-top: var(--padding-y);
              padding-bottom: var(--padding-y);

              ${inclusiveDown('sm')} {
                grid-template-columns: 6.5rem var(--logo-size) 1fr;
                grid-template-rows: 1fr 1fr;
              }

              ${inclusiveUp('sm')} {
                --padding-y: 2.4rem;
              }

              ${inclusiveUp('md')} {
                --padding-y: 2rem;
              }
            `}
          >
            <div
              css={`
                display: flex;

                padding-left: 2.1rem;
                align-items: center;

                ${inclusiveDown('sm')} {
                  grid-row: span 2;
                }

                ${inclusiveUp('sm')} {
                  padding-left: 2.4rem;
                }

                ${inclusiveUp('md')} {
                  padding-left: 2.75rem;
                }
              `}
            >
              <TextBase
                tag="span"
                lineHeight="flat"
                weight="semiBold"
                size="xs"
                color="low"
              >
                {year}
              </TextBase>
            </div>

            <div
              css={`
                display: flex;
                align-items: center;
                ${inclusiveDown('sm')} {
                  grid-column-start: 2;
                  grid-row: span 2;
                }
              `}
            >
              <img
                src={`images/${logoPath}`}
                css={`
                  width: 2.5rem;
                  height: 2.5rem;
                `}
              />
            </div>

            <div
              css={`
                display: flex;
                align-items: center;

                padding-left: 1.25rem;
              `}
            >
              <TextHeading
                size="xs"
                lineHeight="tight"
                css={`
                  ${inclusiveDown('sm')} {
                    grid-column-start: 3;
                    grid-row-start: 1;
                  }
                `}
              >
                {company}
              </TextHeading>
            </div>

            <div
              css={`
                display: flex;
                align-items: center;

                ${inclusiveDown('sm')} {
                  padding-left: 1.25rem;
                  grid-column-start: 3;
                  grid-row-start: 2;
                }
              `}
            >
              <TextBase
                textStyle="body"
                size="sm"
                lineHeight="flat"
                color="low"
                css={`
                  ${inclusiveDown('sm')} {
                    margin-top: 0.4em;
                  }
                `}
              >
                {title}
              </TextBase>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ExperienceList
