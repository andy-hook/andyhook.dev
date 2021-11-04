import React from 'react'
import { ImagePath } from '../../data/images'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import Panel from '../Panel/Panel'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

type ExperienceEntry = {
  year: string
  logoSrc: ImagePath
  title: string
  company: string
}

const ENTRIES: ExperienceEntry[] = [
  {
    year: '2021',
    logoSrc: 'logos/modulz-mark.svg',
    title: 'Senior Product Engineer',
    company: 'Modulz',
  },
  {
    year: '2020',
    logoSrc: 'logos/aragon-mark.svg',
    title: 'Senior UI Engineer',
    company: 'Aragon One',
  },
  {
    year: '2018',
    logoSrc: 'logos/bright-mark.svg',
    title: 'UI Engineer',
    company: 'Bright Interactive',
  },
  {
    year: '2016',
    logoSrc: 'logos/brandwatch-mark.svg',
    title: 'Senior Front-End Developer',
    company: 'Brandwatch',
  },
  {
    year: '2012',
    logoSrc: 'logos/tjc-mark.svg',
    title: 'Front-End Developer',
    company: 'Jamieson Consultancy',
  },
  {
    year: '2009',
    logoSrc: 'logos/andyhook-mark.svg',
    title: 'Digital Designer',
    company: 'Freelance',
  },
]

function ExperienceList(): JSX.Element {
  return (
    <ul>
      {ENTRIES.map((item, i) => (
        <li
          css={`
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          `}
          key={i}
        >
          <Panel
            css={`
              --logo-size: 2.5rem;
              --padding-y: 1.9rem;
              --grid-template-columns: var(--logo-size) 1fr;

              display: grid;
              grid-template-columns: var(--logo-size) 1fr;
              grid-template-rows: 1fr 1fr 2rem;

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
                {item.year}
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
                src={`images/${item.logoSrc}`}
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
                {item.company}
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
                {item.title}
              </TextBase>
            </div>
          </Panel>
        </li>
      ))}
    </ul>
  )
}

export default ExperienceList
