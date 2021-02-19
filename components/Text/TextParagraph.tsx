import React from 'react'
import TextBase, { TextBaseProps } from './TextBase'

type TextParagraphProps = Omit<TextBaseProps, 'textStyle'>

function TextParagraph({
  children,
  tag = 'p',
  color = 'medium',
  size = 'md',
  weight = 'regular',
  lineHeight = 'longform',
  ...props
}: TextParagraphProps): JSX.Element {
  return (
    <TextBase
      tag={tag}
      color={color}
      size={size}
      lineHeight={lineHeight}
      weight={weight}
      css={`
        &:not(:last-child) {
          margin-bottom: 1.8em;
        }
      `}
      {...props}
    >
      {children}
    </TextBase>
  )
}

export default TextParagraph
