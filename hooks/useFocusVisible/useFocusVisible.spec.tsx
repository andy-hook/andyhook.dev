import React from 'react'
import { useFocusVisible } from './useFocusVisible'
import { fireEvent, render, screen } from '../../utils/testing'
import 'jest-styled-components'

function TestButton(): JSX.Element {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()

  return (
    <button
      onFocus={onFocus}
      onBlur={onBlur}
      css={`
        outline: ${focusVisible ? '1px solid white' : 'none'};
      `}
    >
      Button
    </button>
  )
}

describe('useFocusVisible', () => {
  it('Should show an outline when focused', () => {
    render(<TestButton />)

    const button = screen.getByText('Button')

    button.focus()

    expect(button).toHaveStyleRule('outline', '1px solid white')

    button.blur()

    expect(button).toHaveStyleRule('outline', 'none')
  })

  it('Should not show an outline on pointer interaction', () => {
    render(<TestButton />)

    const button = screen.getByText('Button')

    const pointerEvents = [
      'mousemove',
      'mousedown',
      'mouseup',
      'pointermove',
      'pointerdown',
      'pointerup',
      'touchmove',
      'touchstart',
      'touchend',
    ]

    pointerEvents.forEach((eventName) => {
      fireEvent(
        button,
        new MouseEvent(eventName, {
          bubbles: true,
          cancelable: true,
        })
      )
    })

    expect(button).toHaveStyleRule('outline', 'none')
  })
})
