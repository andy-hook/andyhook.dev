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
              --padding-y: 1.9rem;
              --grid-template-columns: var(--logo-size) 1fr;

              display: grid;
              grid-template-columns: var(--logo-size) 1fr;
              grid-template-rows: 1fr 1fr 2rem;

              background-color: ${theme.background('medium')};
              border-radius: ${theme.radius.base};
              box-shadow: ${theme.shadow.medium};
              padding-top: var(--padding-y);
              padding-bottom: var(--padding-y);

              ${inclusiveDown('xxs')} {
                padding-left: var(--padding-y);
              }

              ${inclusiveUp('xs')} {
                grid-template-columns: 6rem var(--logo-size) 1fr;
                grid-template-rows: 1fr 1fr;
              }

              ${inclusiveUp('sm')} {
                grid-template-columns: 6rem var(--logo-size) 1fr 50%;
                grid-template-rows: 1fr;
              }

              ${inclusiveUp('md')} {
                grid-template-columns: 8rem var(--logo-size) 1fr 50%;
              }
            `}
          >
            {/* Employment year */}
            <div
              css={`
                display: flex;

                padding-left: 1.25rem;
                align-items: flex-end;

                grid-column-start: 2;
                grid-row-start: 3;

                ${inclusiveUp('xs')} {
                  align-items: center;
                  padding-left: 2.25rem;
                  grid-column-start: 1;
                  grid-row-start: 1;
                  grid-row: span 2;
                }

                ${inclusiveUp('md')} {
                  padding-left: 2.75rem;
                  grid-row: auto;
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

            {/* Logo mark */}
            <div
              css={`
                display: flex;
                align-items: center;
                grid-column-start: 1;
                grid-row: span 2;

                ${inclusiveUp('xs')} {
                  grid-column-start: 2;
                }

                ${inclusiveUp('sm')} {
                  grid-column-start: auto;
                  grid-row: auto;
                }
              `}
            >
              <img
                alt=""
                src={`images/${logoPath}`}
                css={`
                  width: var(--logo-size);
                  height: var(--logo-size);
                `}
              />
            </div>

            {/* Company name */}
            <div
              css={`
                display: flex;
                align-items: center;

                padding-left: 1.25rem;

                grid-column-start: 2;
                grid-row-start: 1;

                ${inclusiveUp('xs')} {
                  grid-column-start: 3;
                  grid-row-start: 1;
                }

                ${inclusiveUp('sm')} {
                  grid-column-start: auto;
                  grid-row-start: auto;
                }
              `}
            >
              <TextHeading size="xs" lineHeight="tight">
                {company}
              </TextHeading>
            </div>

            {/* Job title */}
            <div
              css={`
                grid-column-start: 2;
                grid-row-start: 2;

                ${inclusiveUp('xs')} {
                  grid-column-start: 3;
                  grid-row-start: 2;
                }

                ${inclusiveDown('xs')} {
                  padding-left: 1.25rem;
                }

                ${inclusiveUp('sm')} {
                  display: flex;
                  align-items: center;
                  grid-column-start: auto;
                  grid-row-start: auto;
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
