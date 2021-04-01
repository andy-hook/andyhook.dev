import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import InteractionBase from '../InteractionBase/InteractionBase'

type LinkProps = {
  children: React.ReactNode
  href: string
}

function Link({ children, href }: LinkProps): JSX.Element {
  const theme = useTheme()

  return (
    <InteractionBase
      href={href}
      offset={[0.6, 0.3]}
      css={`
        display: inline;
        color: ${theme.currentProjectAccent('base')};

        &:hover {
          text-decoration: underline;
          text-decoration-color: ${theme.currentProjectAccent('base', 0.5)};
        }
      `}
    >
      {children}
    </InteractionBase>
  )
}

export default Link
