import React from 'react'
import { fireEvent, render, RenderResult } from '../../utils/testing'
import { useLoadPercentage, useTrackLoading } from './useLoadPercentage'

const TRIGGER_1 = 'trigger-1'
const TRIGGER_2 = 'trigger-2'
const TRIGGER_3 = 'trigger-3'

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

      <div>{percentLoaded}</div>
    </>
  )
}

describe('useLoadPercentage', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Container />)
  })

  it('Should initialy render percentage as 0', () => {
    expect(rendered.getByText('0')).toBeInTheDocument()
  })

  it('Should correctly calculate percentage', () => {
    fireEvent.click(rendered.getByText(TRIGGER_1))

    expect(rendered.getByText('33')).toBeInTheDocument()

    fireEvent.click(rendered.getByText(TRIGGER_2))

    expect(rendered.getByText('66')).toBeInTheDocument()

    fireEvent.click(rendered.getByText(TRIGGER_3))

    expect(rendered.getByText('100')).toBeInTheDocument()
  })

  it('Should not increment percentage more than once per item', () => {
    rendered.rerender(<Container />)

    fireEvent.click(rendered.getByText(TRIGGER_1))

    expect(rendered.getByText('33')).toBeInTheDocument()

    fireEvent.click(rendered.getByText(TRIGGER_1))

    expect(rendered.getByText('33')).toBeInTheDocument()
  })
})
