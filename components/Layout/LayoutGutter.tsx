import React from 'react'
import { inclusiveUp } from '../../style/responsive'

type LayoutGutterProps = {
  children: React.ReactNode
}

function LayoutGutter({ children, ...props }: LayoutGutterProps): JSX.Element {
  return (
    <div
      css={`
        padding-left: 2rem;
        padding-right: 2rem;

        ${inclusiveUp('xxs')} {
          padding-left: 10%;
          padding-right: 10%;
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
