import React from 'react'
import { fireEvent, render, RenderResult } from '../../utils/testing'
import { useLoadPercentage, useTrackLoading } from './useLoadPercentage'

const TRIGGER_1 = 'trigger-1'
const TRIGGER_2 = 'trigger-2'
const TRIGGER_3 = 'trigger-3'
const PERCENTAGE_CONTAINER_ID = 'percent-loaded'

function MockLoadingTrigger({
  identifier,
}: {
  identifier: string
}): JSX.Element {
  const { trackLoaded } = useTrackLoading(identifier)

  return <button onClick={trackLoaded}>{identifier}</button>
}

function Container(): JSX.Element {
  const percentLoaded = useLoadPercentage()

  return (
    <>
      <MockLoadingTrigger identifier={TRIGGER_1} />
      <MockLoadingTrigger identifier={TRIGGER_2} />
      <MockLoadingTrigger identifier={TRIGGER_3} />

      <div data-testid={PERCENTAGE_CONTAINER_ID}>{percentLoaded}</div>
    </>
  )
}

describe('useLoadPercentage', () => {
  let rendered: RenderResult
  let percentageContainer: HTMLElement

  beforeEach(() => {
    rendered = render(<Container />)
    percentageContainer = rendered.getByTestId(PERCENTAGE_CONTAINER_ID)
  })

  it('Should initialy render percentage as 0', () => {
    expect(percentageContainer).toHaveTextContent('0')
  })

  it('Should correctly calculate percentage', () => {
    fireEvent.click(rendered.getByText(TRIGGER_1))

    expect(percentageContainer).toHaveTextContent('33')

    fireEvent.click(rendered.getByText(TRIGGER_2))

    expect(percentageContainer).toHaveTextContent('66')

    fireEvent.click(rendered.getByText(TRIGGER_3))

    expect(percentageContainer).toHaveTextContent('100')
  })

  it('Should not increment percentage more than once per unique key', () => {
    rendered.rerender(<Container />)

    fireEvent.click(rendered.getByText(TRIGGER_1))

    expect(percentageContainer).toHaveTextContent('33')

    fireEvent.click(rendered.getByText(TRIGGER_1))

    expect(percentageContainer).toHaveTextContent('33')
  })
})
