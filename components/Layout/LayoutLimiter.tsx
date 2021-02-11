import React from 'react'
import { rem } from 'polished'
import { appearance } from '../../style/appearance'
import { useTheme } from '../../hooks/useTheme/useTheme'

type Sizes = 'small' | 'medium' | 'large'

interface LayoutLimiterProps {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  divider?: boolean
}

const widths: Record<Sizes, string> = {
  small: rem('900px'),
  medium: rem('1200px'),
  large: rem('1600px'),
}

function LayoutLimiter({
  size = 'medium',
  divider,
  children,
  ...props
}: LayoutLimiterProps): JSX.Element {
  const { background } = useTheme()
  const width = widths[size]

  return (
    <div
      css={`
        margin-left: auto;
        margin-right: auto;
        max-width: ${width};

        border-top: ${divider ? appearance.borderWidth.regular : 0} solid
          ${background('extraHigh')};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutLimiter
