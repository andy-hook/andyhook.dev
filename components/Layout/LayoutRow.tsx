import React, { useMemo } from 'react'
import { css } from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { inclusiveUp } from '../../style/responsive'

type LayoutRowProps = {
  trimTop?: boolean
  trimBottom?: boolean
  children: React.ReactNode
  bordered?: boolean
}

function LayoutRow({
  children,
  trimTop,
  trimBottom,
  bordered,
  ...props
}: LayoutRowProps): JSX.Element {
  const { background } = useTheme()

  const borderedStyle = useMemo(
    () =>
      bordered
        ? css`
            background: linear-gradient(
              0deg,
              ${background('medium', 0.2)} 0%,
              ${background('medium', 0.6)} 70%
            );

            border-top: ${appearance.borderWidth.regular} solid
              ${background('extraHigh')};
            border-bottom: ${appearance.borderWidth.regular} solid
              ${background('extraHigh')};
          `
        : '',
    [background, bordered]
  )

  return (
    <div
      css={`
        ${borderedStyle}
        ${!trimTop && topSpaceStyle} ${!trimBottom && bottomSpaceStyle};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const topSpaceStyle = css`
  padding-top: 6rem;

  ${inclusiveUp('sm')} {
    padding-top: 8rem;
  }

  ${inclusiveUp('lg')} {
    padding-top: 11rem;
  }
`

const bottomSpaceStyle = css`
  padding-bottom: 6rem;

  ${inclusiveUp('sm')} {
    padding-bottom: 8rem;
  }

  ${inclusiveUp('lg')} {
    padding-bottom: 11rem;
  }
`

export default LayoutRow
