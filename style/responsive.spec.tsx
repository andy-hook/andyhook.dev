import 'jest-styled-components'
import { uniformScale } from './responsive'

describe('uniformScale', () => {
  test('should return correct value when supplied PX unit', () => {
    expect(uniformScale('10px', 'xxl')).toMatch('0.45454545454545453vw')
  })

  test('should return correct value when supplied EM unit', () => {
    expect(uniformScale('10em', 'xxl')).toMatch('7.2727272727272725vw')
  })

  test('should return correct value when supplied REM unit', () => {
    expect(uniformScale('10rem', 'xxl')).toMatch('7.2727272727272725vw')
  })
})
