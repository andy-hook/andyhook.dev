import React from 'react'
import { rem } from 'polished'

type Sizes = 'small' | 'medium' | 'large'

interface LayoutLimiterProps {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

const LIMITER_WIDTHS: Record<Sizes, string> = {
  small: rem('900px'),
  medium: rem('1200px'),
  large: rem('1650px'),
}

function LayoutLimiter({
  size = 'medium',
  children,
  ...props
}: LayoutLimiterProps): JSX.Element {
  const width = LIMITER_WIDTHS[size]

  return (
    <div
      css={`
        margin-left: auto;
        margin-right: auto;
        max-width: ${width};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutLimiter
