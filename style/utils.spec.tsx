import React from 'react'
import styled from 'styled-components'
import {
  createTextCrop,
  getRatioAsPercentage,
  loadingShimmerGradientFromColor,
  removeWidow,
} from './utils'
import { render } from '../utils/testing'

const CroppedTextComponent = styled.div`
  ${createTextCrop({
    lHeight: 1.5,
    topCrop: 10,
    bottomCrop: 15,
  })}
`

describe('createTextCrop()', () => {
  it('should apply correct top and bottom offsets', () => {
    const { container } = render(<CroppedTextComponent />)

    expect(container.firstChild).toHaveStyleRule(
      'margin-bottom',
      'calc(-0.35em + 0px)',
      {
        modifier: '::before',
      }
    )

    expect(container.firstChild).toHaveStyleRule(
      'margin-top',
      'calc(-0.4em + 0px)',
      {
        modifier: '::after',
      }
    )
  })
})

describe('removeWidow()', () => {
  it('should return a formatted string with a non-breaking space before last word', () => {
    expect(removeWidow('This is a test string')).toBe(
      'This is a test\u00A0string'
    )
  })
})

describe('loadingShimmerGradientFromColor()', () => {
  it('should correctly flip gradient contrast depending on input brightness', () => {
    expect(loadingShimmerGradientFromColor('#fff')).toEqual({
      gradientStop: '#666',
      gradientStopAlpha: 'rgba(102,102,102,0)',
      sourceColor: '#fff',
    })

    expect(loadingShimmerGradientFromColor('#000')).toEqual({
      gradientStop: '#333',
      gradientStopAlpha: 'rgba(51,51,51,0)',
      sourceColor: '#000',
    })
  })
})

describe('getRatioAsPercentage()', () => {
  it('should return correct percentage', () => {
    expect(getRatioAsPercentage(100, 50)).toEqual('50%')
    expect(getRatioAsPercentage(482025320, 543)).toEqual(
      '0.00011264968404564308%'
    )
    expect(getRatioAsPercentage(433, 54343436)).toEqual('12550447.113163972%')
  })
})
