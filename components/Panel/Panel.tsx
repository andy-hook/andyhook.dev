import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'

type PanelProps = {
  children: React.ReactNode
}

function Panel({ children, ...props }: PanelProps): JSX.Element {
  const theme = useTheme()

  return (
    <div
      css={`
        border-radius: ${theme.radius.large};
        box-shadow: ${theme.shadow.medium};
        background: linear-gradient(
          165deg,
          ${theme.background('extraHigh')} -5%,
          ${theme.background('medium')} 25%
        );
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Panel
