import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'

function Pip(): JSX.Element {
  const theme = useTheme()

  return (
    <span
      css={`
        display: block;
        font-size: 0.5rem;
        width: 1em;
        height: 1em;
        background: linear-gradient(
          135deg,
          ${theme.accent('light')} 0%,
          ${theme.accent('base')} 100%
        );
        border-radius: ${theme.radius.circle};
      `}
    />
  )
}

export default Pip
