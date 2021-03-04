import React from 'react'
import { rem } from 'polished'
import { useTheme } from '../../hooks/useTheme/useTheme'

type LimiterWidth = 'small' | 'medium' | 'large'

interface LayoutLimiterProps {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  divider?: boolean
}

const widths: Record<LimiterWidth, string> = {
  small: rem('900px'),
  medium: rem('1550px'),
  large: rem('1900px'),
}

function LayoutLimiter({
  size = 'medium',
  divider,
  children,
  ...props
}: LayoutLimiterProps): JSX.Element {
  const theme = useTheme()
  const width = widths[size]

  return (
    <div
      css={`
        margin-left: auto;
        margin-right: auto;
        max-width: ${width};

        border-top: ${divider ? theme.borderWidth.regular : 0} solid
          ${theme.background('extraHigh')};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutLimiter
