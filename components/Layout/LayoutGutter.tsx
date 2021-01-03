import React, { ReactNode } from 'react'

type LayoutGutterProps = {
  children?: ReactNode
}

function LayoutGutter({ children }: LayoutGutterProps): JSX.Element {
  const paddingAmount = '5%'

  return (
    <div
      css={`
        padding-left: ${paddingAmount};
        padding-right: ${paddingAmount};
      `}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
