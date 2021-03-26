import React from 'react'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextBase from '../Text/TextBase'

function Logo(): JSX.Element {
  return (
    <div
      css={`
        display: inline-flex;
      `}
    >
      <InteractionBase href="/" offset={[1, 0.5]}>
        <TextBase tag="h1" size="sm" weight="semiBold" color="extraHigh">
          <div
            css={`
              margin: -0.75em;
            `}
          >
            <div
              css={`
                padding: 0.75em;
              `}
            >
              Andy Hook
            </div>
          </div>
        </TextBase>
      </InteractionBase>
    </div>
  )
}

export default Logo
