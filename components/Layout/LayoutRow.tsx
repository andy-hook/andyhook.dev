import React from 'react'
import { css } from 'styled-components'
import { inclusiveUp } from '../../style/responsive'

type LayoutRowProps = {
  trimTop?: boolean
  trimBottom?: boolean
  children: React.ReactNode
}

function LayoutRow({
  children,
  trimTop,
  trimBottom,
  ...props
}: LayoutRowProps): JSX.Element {
  return (
    <div
      css={`
        ${!trimTop && topSpaceStyle} ${!trimBottom && bottomSpaceStyle};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const topSpaceStyle = css`
  padding-top: 5rem;

  ${inclusiveUp('sm')} {
    padding-top: 9rem;
  }

  ${inclusiveUp('lg')} {
    padding-top: 12rem;
  }
`

const bottomSpaceStyle = css`
  padding-bottom: 5rem;

  ${inclusiveUp('sm')} {
    padding-bottom: 9rem;
  }

  ${inclusiveUp('lg')} {
    padding-bottom: 12rem;
  }
`

export default LayoutRow
