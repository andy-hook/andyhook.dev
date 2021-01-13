import React from 'react'
import { css } from 'styled-components'

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
  padding-top: 150px;
`

const bottomSpace = css`
  padding-bottom: 150px;
`

export default LayoutRow
