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
          padding-left: 7%;
          padding-right: 7%;
        }

        ${inclusiveUp('sm')} {
          padding-left: 8%;
          padding-right: 8%;
        }

        ${inclusiveUp('xl')} {
          padding-left: 9%;
          padding-right: 9%;
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
