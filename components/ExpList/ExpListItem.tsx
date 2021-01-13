import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import {
  setCropAndLineHeight,
  typeBaseRegular,
  typeDisplaySemibold,
  typeSizeBaseMd,
  typeSizeDisplayXs,
} from '../../style/typography'

const PADDING_AMOUNT = '2.75rem'

type ExpListItemProps = {
  year: string
  company: string
  title: string
}

function ExpListItem({ year, company, title }: ExpListItemProps): JSX.Element {
  const { background, foreground } = useTheme()

  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;

        grid-gap: 20px;

        padding-top: ${PADDING_AMOUNT};
        padding-bottom: ${PADDING_AMOUNT};

        background-color: ${background('extraHigh')};
        border-radius: ${appearance.radius.large};
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          padding-left: ${PADDING_AMOUNT};
        `}
      >
        <span
          css={`
            ${typeBaseRegular}
            ${typeSizeBaseMd}
            ${setCropAndLineHeight('body', 'flat')}

            color: ${foreground('medium')};
          `}
        >
          {year}
        </span>
        <h3
          css={`
            ${typeDisplaySemibold}
            ${typeSizeDisplayXs}
            ${setCropAndLineHeight('display', 'flat')}

            color: ${foreground('extraHigh')};

            margin-left: 2.25em;
          `}
        >
          {company}
        </h3>
      </div>
      <div
        css={`
          display: flex;
          align-items: center;
          padding-right: ${PADDING_AMOUNT};
        `}
      >
        <span
          css={`
            ${typeBaseRegular}
            ${typeSizeBaseMd}
            ${setCropAndLineHeight('body', 'flat')}

            color: ${foreground('medium')};
          `}
        >
          {title}
        </span>
      </div>
    </div>
  )
}

export default ExpListItem
