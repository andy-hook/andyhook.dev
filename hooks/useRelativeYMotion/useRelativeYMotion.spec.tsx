import { getRelativeMotionProps } from './getRelativeMotionProps'

describe('getRelativeMotionProps()', () => {
  it('Should return correct relative viewport value', () => {
    const returnValue = getRelativeMotionProps(true, 100)

    expect(returnValue).toEqual({
      hidden: {
        opacity: 0,
        y: '7vw',
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    })
  })

  it('Should return correct static value', () => {
    const returnValue = getRelativeMotionProps(false, 100)

    expect(returnValue).toEqual({
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    })
  })

  it('Should handle negative value', () => {
    const staticReturnValue = getRelativeMotionProps(false, -100)
    const relativeReturnValue = getRelativeMotionProps(true, -100)

    expect(staticReturnValue).toEqual({
      hidden: {
        opacity: 0,
        y: -100,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    })

    expect(relativeReturnValue).toEqual({
      hidden: {
        opacity: 0,
        y: '-7vw',
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    })
  })
})
