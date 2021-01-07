import React from 'react'
import InteractionBase from '../InteractionBase/InteractionBase'

function HireButton(): JSX.Element {
  return (
    <InteractionBase
      offset={0.5}
      radius="pill"
      css={`
        color: white;
        margin-top: 50px;
      `}
    >
      Currently available for hire
    </InteractionBase>
  )
}

export default HireButton
