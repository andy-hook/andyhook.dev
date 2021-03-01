import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import TextBase from '../Text/TextBase'
import TextHeading from '../Text/TextHeading'

type ExpListItemProps = {
  year: string
  company: string
  title: string
}

function ExpListItem({ year, company, title }: ExpListItemProps): JSX.Element {
  const { background, shadow } = useTheme()

  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 8rem 1fr 50%;

        background-color: ${background('medium')};
        border-radius: ${appearance.radius.base};

        box-shadow: ${shadow('medium')};

        padding-top: 2.1rem;
        padding-bottom: 2.1rem;

        ${inclusiveDown('xs')} {
          grid-template-columns: 5.25rem 1fr;
          grid-template-rows: 1fr 1fr;
        }

        ${inclusiveUp('sm')} {
          padding-top: 2.4rem;
          padding-bottom: 2.4rem;
        }

        ${inclusiveUp('md')} {
          padding-top: 2.75rem;
          padding-bottom: 2.75rem;
        }
      `}
    >
      <div
        css={`
          display: flex;

          padding-left: 2.1rem;

          ${inclusiveUp('sm')} {
            padding-left: 2.4rem;
            align-items: center;
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
          color="extraLow"
        >
          {year}
        </TextBase>
      </div>

      <TextHeading size="xs" lineHeight="tight">
        {title}
      </TextHeading>

      <div
        css={`
          display: flex;
          align-items: center;

          ${inclusiveDown('xs')} {
            grid-row-start: 2;
            grid-column-start: 2;
          }
        `}
      >
        <TextBase
          textStyle="body"
          size="sm"
          lineHeight="flat"
          color="low"
          css={`
            ${inclusiveDown('xs')} {
              margin-top: 0.4em;
            }
          `}
        >
          {company}
        </TextBase>
      </div>
    </div>
  )
}

export default ExpListItem
