import { uniformScale } from './responsive'

describe('uniformScale', () => {
  test('should return correct value when supplied PX unit', () => {
    expect(uniformScale('10px', 'xxl')).toMatch('0.47619047619047616vw')
  })

  test('should return correct value when supplied EM unit', () => {
    expect(uniformScale('10em', 'xxl')).toMatch('7.619047619047619vw')
  })

  test('should return correct value when supplied REM unit', () => {
    expect(uniformScale('10rem', 'xxl')).toMatch('7.619047619047619vw')
  })
})
