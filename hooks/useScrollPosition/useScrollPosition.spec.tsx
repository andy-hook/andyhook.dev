import React from 'react'
import { fireEvent, render, RenderResult } from '../../utils/testing'
import 'jest-styled-components'
import { useScrollPosition } from './useScrollPosition'

const CURRENT_ELEMENT = 'current'
const PREVIOUS_ELEMENT = 'previous'

function TestElement(): JSX.Element {
  const { prevPos, currPos } = useScrollPosition()

  return (
    <div>
      <div data-testid={CURRENT_ELEMENT}>
        Y({currPos.y.offset}, {currPos.y.direction}), X(
        {currPos.x.offset}, {currPos.x.direction})
      </div>

      <div data-testid={PREVIOUS_ELEMENT}>
        Y({prevPos.y.offset}, {prevPos.y.direction}), X(
        {prevPos.x.offset}, {prevPos.x.direction})
      </div>
    </div>
  )
}

describe('useScrollPosition', () => {
  let rendered: RenderResult

  let currentContainer: HTMLElement
  let previousContainer: HTMLElement

  beforeEach(() => {
    rendered = render(<TestElement />)
    currentContainer = rendered.getByTestId(CURRENT_ELEMENT)
    previousContainer = rendered.getByTestId(PREVIOUS_ELEMENT)
  })

  it('Should provide correct initial values', () => {
    expect(currentContainer).toHaveTextContent('Y(0, down), X(0, right)')
    expect(previousContainer).toHaveTextContent('Y(0, down), X(0, right)')
  })

  describe('When scrolling Y axis', () => {
    it('Should return correct values downwards', async () => {
      rendered.rerender(<TestElement />)

      await fireEvent.scroll(window, { target: { scrollY: 100 } })

      console.log(window.scrollY)

      rendered.rerender(<TestElement />)

      expect(rendered.getByTestId(CURRENT_ELEMENT)).toHaveTextContent(
        'Y(100, down), X(0, right)'
      )
    })

    it.todo('Should return correct values upwards')
  })

  describe('When scrolling X axis', () => {
    it.todo('Should return correct values downwards')

    it.todo('Should return correct values upwards')
  })
})
