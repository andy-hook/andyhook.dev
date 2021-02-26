import React from 'react'
import { inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import Logo from '../Logo/Logo'

function Footer({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <LayoutGutter
      css={`
        width: 100%;
      `}
      {...props}
    >
      <header
        css={`
          padding-top: 4rem;

          ${inclusiveUp('sm')} {
            padding-top: 3.75rem;
          }

          ${inclusiveUp('md')} {
            padding-top: 4rem;
          }
        `}
      >
        <Logo />
      </header>
    </LayoutGutter>
  )
}

export default Footer
