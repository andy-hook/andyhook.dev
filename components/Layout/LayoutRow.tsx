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
  padding-top: 4rem;

  ${inclusiveUp('sm')} {
    padding-top: 7rem;
  }

  ${inclusiveUp('md')} {
    padding-top: 10rem;
  }

  ${inclusiveUp('lg')} {
    padding-top: 12rem;
  }
`

const bottomSpaceStyle = css`
  padding-bottom: 4rem;

  ${inclusiveUp('sm')} {
    padding-bottom: 7rem;
  }

  ${inclusiveUp('md')} {
    padding-bottom: 10rem;
  }

  ${inclusiveUp('lg')} {
    padding-bottom: 12rem;
  }
`

export default LayoutRow
