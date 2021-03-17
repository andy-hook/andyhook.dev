import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'

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
  const theme = useTheme()

  const borderStyle = `
    ${theme.borderWidth.regular} solid
    ${theme.background('extraHigh')}
  `

  return (
    <div
      css={`
        background: linear-gradient(
          0deg,
          ${theme.background('medium', 0)} 0%,
          ${theme.background('medium', 0.6)} 50%
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
