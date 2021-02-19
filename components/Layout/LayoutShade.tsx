import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'

type LayoutShadeProps = {
  children: React.ReactNode
  borderTop?: boolean
  borderBottom?: boolean
}

function LayoutShade({
  children,
  borderTop,
  borderBottom,
  ...props
}: LayoutShadeProps): JSX.Element {
  const { background } = useTheme()

  const borderStyle = `
    ${appearance.borderWidth.regular} solid
    ${background('extraHigh')}
  `

  return (
    <div
      css={`
        background: linear-gradient(
          0deg,
          ${background('medium', 0.2)} 0%,
          ${background('medium', 0.6)} 70%
        );

        ${borderTop && `border-top: ${borderStyle};`}
        ${borderBottom && `border-bottom: ${borderStyle};`}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutShade
