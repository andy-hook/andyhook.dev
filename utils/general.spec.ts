import { isExternalURL, keys } from './general'

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

describe('isExternalUrl', () => {
  it('returns false when passing a relative url', () => {
    expect(isExternalURL('/relative')).toBeFalsy()
  })

  it('returns true when passing an external url', () => {
    expect(isExternalURL('https://google.com')).toBeTruthy()
  })

  it('returns true when passing a mailto magnet', () => {
    expect(isExternalURL('mailto:hello@andyhook.dev')).toBeTruthy()
  })
})
