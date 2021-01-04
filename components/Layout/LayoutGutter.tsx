import React from 'react'

type LayoutGutterProps = {
  children: React.ReactNode
}

function LayoutGutter({ children, ...props }: LayoutGutterProps): JSX.Element {
  const paddingAmount = '5%'

  return (
    <div
      css={`
        padding-left: ${paddingAmount};
        padding-right: ${paddingAmount};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutGutter
