import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Theme } from '../../style/theme'
import {
  LineHeightName,
  ResponsiveTextSize,
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
  TextStyleType,
  TextWeight,
} from '../../style/typography'
import RemoveWidow from '../RemoveWidow/RemoveWidow'

export type TextBaseProps = {
  children: React.ReactNode
  tag?: React.ElementType
  textStyle?: TextStyleType
  weight?: TextWeight
  size?: ResponsiveTextSize
  color?: keyof Theme['foreground']
  lineHeight?: LineHeightName
}

const DEFAULT_TAG = 'p'

function TextBase({
  children,
  tag = DEFAULT_TAG,
  textStyle = 'body',
  color = 'medium',
  weight = 'regular',
  lineHeight = 'regular',
  size = 'md',
  ...props
}: TextBaseProps): JSX.Element {
  const { foreground } = useTheme()

  const wrappedChildren = useMemo(() => {
    if (typeof children === 'string') {
      return <RemoveWidow>{children}</RemoveWidow>
    }

    return children
  }, [children])

  return (
    <BaseTextComponent
      as={tag}
      css={`
        ${setTextStyle(textStyle, weight)}
        ${setResponsiveTextSize(textStyle, size)}
        ${setCropAndLineHeight(textStyle, lineHeight)}

        color: ${foreground(color)};
      `}
      {...props}
    >
      {wrappedChildren}
    </BaseTextComponent>
  )
}

const BaseTextComponent = styled[DEFAULT_TAG]``

export default TextBase
