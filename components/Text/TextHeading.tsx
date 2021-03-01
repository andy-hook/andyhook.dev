import React from 'react'
import TextBase, { TextBaseProps } from './TextBase'

type TextHeadingProps = Omit<TextBaseProps, 'textStyle'>

function TextHeading({
  children,
  tag = 'h1',
  size = 'md',
  weight = 'bold',
  color = 'extraHigh',
  lineHeight = 'tight',
  ...props
}: TextHeadingProps): JSX.Element {
  return (
    <TextBase
      textStyle="display"
      tag={tag}
      color={color}
      size={size}
      lineHeight={lineHeight}
      weight={weight}
      {...props}
    >
      {children}
    </TextBase>
  )
}

export default TextHeading
