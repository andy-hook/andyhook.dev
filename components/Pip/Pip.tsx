import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'

type PipProps = {
  backgroundColor?: string
}

function Pip({ backgroundColor }: PipProps): JSX.Element {
  const theme = useTheme()

  const backgroundColorWithDefault = backgroundColor ?? theme.accent('light')

  return (
    <span
      css={`
        position: relative;
        display: block;
        font-size: 7px;
        width: 1em;
        height: 1em;
        background-color: ${backgroundColorWithDefault};
        border-radius: ${theme.radius.circle};
      `}
    />
  )
}

export default Pip
