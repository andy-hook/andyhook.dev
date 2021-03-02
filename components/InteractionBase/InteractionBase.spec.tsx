import React from 'react'
import { axe } from 'jest-axe'
import type { RenderResult } from '@testing-library/react'
import { render, fireEvent } from '../../utils/testing'
import InteractionBase from './InteractionBase'

const BUTTON_TEXT = 'Button text'
const EXTERNAL_ATTRIBUTES = [
  ['rel', 'noopener noreferrer'],
  ['target', '_blank'],
]

describe('given a default InteractionBase', () => {
  let rendered: RenderResult
  let element: HTMLElement | null
  const handleClick = jest.fn()

  beforeEach(() => {
    rendered = render(
      <InteractionBase onClick={handleClick}>{BUTTON_TEXT}</InteractionBase>
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it('should render as a button element', () => {
    element = rendered.queryByRole('button')

    expect(element).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    fireEvent.click(rendered.getByText(BUTTON_TEXT))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should not call onClick when disabled', () => {
    handleClick.mockReset()

    rendered.rerender(
      <InteractionBase onClick={handleClick} disabled>
        {BUTTON_TEXT}
      </InteractionBase>
    )

    fireEvent.click(rendered.getByText(BUTTON_TEXT))

    expect(handleClick).not.toBeCalled()
  })
})

describe('given an InteractionBase with external href', () => {
  let rendered: RenderResult
  let element: HTMLElement | null

  beforeEach(() => {
    rendered = render(
      <InteractionBase href="https://test.com">{BUTTON_TEXT}</InteractionBase>
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it('should render as a link element', () => {
    element = rendered.queryByRole('link')

    expect(element).toBeInTheDocument()
  })

  it('should apply correct attributes', () => {
    element = rendered.queryByRole('link')

    EXTERNAL_ATTRIBUTES.forEach(([attribute, property]) => {
      expect(element).toHaveAttribute(attribute, property)
    })
  })

  it('should render as a button and not apply external attributes when disabled', () => {
    rendered.rerender(
      <InteractionBase href="https://test.com" disabled>
        {BUTTON_TEXT}
      </InteractionBase>
    )

    element = rendered.queryByRole('button')

    EXTERNAL_ATTRIBUTES.forEach(([attribute, property]) => {
      expect(element).not.toHaveAttribute(attribute, property)
    })
  })
})

describe('given an InteractionBase with internal href', () => {
  let rendered: RenderResult
  let element: HTMLElement | null

  beforeEach(() => {
    rendered = render(
      <InteractionBase href="/test">{BUTTON_TEXT}</InteractionBase>
    )
  })

  it('should render as a link element', () => {
    element = rendered.queryByRole('link')

    expect(element).toBeInTheDocument()
  })

  it('should only apply external attributes when passed newTab', () => {
    element = rendered.queryByRole('link')

    EXTERNAL_ATTRIBUTES.forEach(([attribute, property]) => {
      expect(element).not.toHaveAttribute(attribute, property)
    })

    rendered.rerender(
      <InteractionBase href="/test" newTab>
        {BUTTON_TEXT}
      </InteractionBase>
    )

    EXTERNAL_ATTRIBUTES.forEach(([attribute, property]) => {
      expect(element).toHaveAttribute(attribute, property)
    })
  })
})
