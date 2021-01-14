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
        ${!trimTop && topSpace}
        ${!trimBottom && bottomSpace}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const topSpace = css`
  padding-top: 6rem;

  ${inclusiveUp('sm')} {
    padding-top: 8rem;
  }

  ${inclusiveUp('lg')} {
    padding-top: 11rem;
  }
`

const bottomSpace = css`
  padding-bottom: 6rem;

  ${inclusiveUp('sm')} {
    padding-bottom: 8rem;
  }

  ${inclusiveUp('lg')} {
    padding-bottom: 11rem;
  }
`

export default LayoutRow
