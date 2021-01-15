import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeBaseRegular,
  typeBaseSemibold,
  typeSizeBaseLg,
  typeSizeBaseMd,
} from '../../style/typography'

type WorkDetailsListProps = {
  title: string
  items: string[]
}

function WorkDetailsList({
  title,
  items,
  ...props
}: WorkDetailsListProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <div {...props}>
      <h3
        css={`
          ${typeBaseSemibold}
          ${typeSizeBaseMd}
          ${setCropAndLineHeight('body', 'flat')}
          color: ${foreground('low')};
          margin-bottom: 1em;
        `}
      >
        {title}
      </h3>
      <ul
        css={`
          ${typeBaseRegular}
          ${typeSizeBaseLg}
          ${setCropAndLineHeight('body', 'flat')}
          color: ${foreground('high')};
        `}
      >
        {items.map((item, i) => (
          <li
            key={i}
            css={`
              &:not(:last-child) {
                margin-bottom: 0.7em;
              }
            `}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkDetailsList
