import React from 'react'
import { inclusiveUp } from '../../style/responsive'

type LayoutGutterProps = {
  children: React.ReactNode
}

function LayoutGutter({ children, ...props }: LayoutGutterProps): JSX.Element {
  return (
    <div
      css={`
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        ${inclusiveUp('xxs')} {
          padding-left: 8%;
          padding-right: 8%;
        }

        ${inclusiveUp('sm')} {
          padding-left: 5%;
          padding-right: 5%;
        }

        ${inclusiveUp('xl')} {
          padding-left: 4%;
          padding-right: 4%;
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
