import React from 'react'
import { css, keyframes } from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'

const shimmerAnimation = css`
  background-size: 500% 500%;

  animation: ${keyframes`
    0%{
      background-position: 100% 100%;
    }
    100%{
      background-position: 0% 0%;
    }
  `} 3s linear infinite;
`

type GradientTextProps = {
  children: string
}

function GradientText({ children, ...props }: GradientTextProps): JSX.Element {
  const { accent } = useTheme()

  return (
    <span
      css={`
        background: linear-gradient(
          143deg,
          ${accent('base')} 30%,
          ${accent('light')},
          ${accent('base')} 60%
        );

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        ${shimmerAnimation}
      `}
      {...props}
    >
      {children}
    </span>
  )
}

export default GradientText
