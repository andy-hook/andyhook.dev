import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Theme } from '../../style/theme'
import {
  setCropAndLineHeight,
  setTextStyle,
  ResponsiveTextSize,
  setResponsiveTextSize,
} from '../../style/typography'

type TextParagraphProps = {
  children: React.ReactNode
  color?: keyof Theme['foreground']
  size: ResponsiveTextSize
  weight?: 'regular' | 'medium' | 'semiBold'
}

function TextParagraph({
  children,
  color = 'medium',
  size = 'md',
  weight = 'regular',
  ...props
}: TextParagraphProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <p
      css={`
        ${setResponsiveTextSize('body', size)}
        ${setTextStyle('body', weight)}
        ${setCropAndLineHeight('body', 'longform')}

        color: ${foreground(color)};
      `}
      {...props}
    >
      {children}
    </p>
  )
}

export default TextParagraph
