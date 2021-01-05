import { keys } from './general'

describe('keys', () => {
  const inValues = {
    first: '',
    second: '',
    third: '',
  }

  const outValues = ['first', 'second', 'third']

  it('returns array of matching object keys', () => {
    expect(keys(inValues)).toEqual(outValues)
  })
})
