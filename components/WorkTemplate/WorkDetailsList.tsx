import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { baseText, setCropAndLineHeight } from '../../style/typography'

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
          ${baseText.weight.semiBold}
          ${baseText.size.sm}
          ${setCropAndLineHeight('base', 'flat')}
          color: ${foreground('low')};
          margin-bottom: 1em;
        `}
      >
        {title}
      </h3>
      <ul
        css={`
          ${baseText.weight.regular}
          ${baseText.size.md}
          ${setCropAndLineHeight('base', 'flat')}
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
