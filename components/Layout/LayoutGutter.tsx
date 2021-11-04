import React from 'react'
import { inclusiveUp } from '../../style/responsive'

type LayoutGutterProps = {
  children: React.ReactNode
}

function LayoutGutter({ children, ...props }: LayoutGutterProps): JSX.Element {
  return (
    <div
      css={`
        padding-left: 1.25rem;
        padding-right: 1.25rem;

        ${inclusiveUp('xxs')} {
          padding-left: 6%;
          padding-right: 6%;
        }

        ${inclusiveUp('sm')} {
          padding-left: 8%;
          padding-right: 8%;
        }

        ${inclusiveUp('xl')} {
          padding-left: 12%;
          padding-right: 12%;
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
