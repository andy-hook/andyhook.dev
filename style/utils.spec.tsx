import React from 'react'
import styled from 'styled-components'
import {
  createHsl,
  createHsla,
  createCubicBezier,
  createTextCrop,
  createPlaceholderCrop,
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

const CroppedPlaceholderComponent = styled.div`
  ${createPlaceholderCrop({
    lHeight: 1.5,
    topCrop: 10,
    bottomCrop: 15,
  })}
`

describe('createHsl', () => {
  it('should return valid hsl css string from provided value', () => {
    expect(createHsl('240,17%,2%')).toMatch('hsl(240,17%,2%)')
  })
})

describe('createHsla', () => {
  it('should return valid hsla css string from provided value', () => {
    expect(createHsla('240,17%,2%', 50)).toMatch('hsla(240,17%,2%,50)')
  })
})

describe('createCubicBezier', () => {
  it('should return valid cubic-bezier css string from provided values', () => {
    expect(createCubicBezier([0.55, 0.085, 0.68, 0.53])).toMatch(
      'cubic-bezier(0.55,0.085,0.68,0.53)'
    )
  })
})

describe('createTextCrop', () => {
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

describe('createPlaceholderCrop', () => {
  it('should apply correct top and bottom crop offsetting', () => {
    const { container } = render(<CroppedPlaceholderComponent />)

    expect(container.firstChild).toHaveStyleRule('top', 'calc(0.35em + 0px)')

    expect(container.firstChild).toHaveStyleRule('bottom', 'calc(0.4em + 0px)')
  })
})

describe('removeWidow', () => {
  test('returns string with non-breaking space before last word', () => {
    expect(removeWidow('This is a test string')).toMatch(
      'This is a test\u00A0string'
    )
  })
})
