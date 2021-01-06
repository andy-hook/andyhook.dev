import React from 'react'
import { useFocusVisible } from '../../hooks/useFocusVisible'

function HireButton(): JSX.Element {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()

  return (
    <button
      style={{ outline: focusVisible ? '2px solid white' : 'none' }}
      onFocus={onFocus}
      onBlur={onBlur}
      css={`
        color: white;
        margin-top: 50px;
      `}
    >
      hello world
    </button>
  )
}

export default HireButton
