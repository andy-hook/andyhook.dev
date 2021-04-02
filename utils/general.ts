/**
 * Typescript helper for type safe mapping over object keys.
 *
 * @param {object} obj - An object literal
 * @return {array} An array of typed object keys
 *
 * @example
 *
 *     keys({name: "Andy"})
 *     // ["name"]
 */
export function keys<O extends Record<string, unknown>>(
  obj: O
): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>
}

/**
 * Detect whether a given url string is external.
 *
 * @param {string} url - The url
 * @return {boolean} boolean indicating an external url
 *
 * @example
 *
 *     isExternalURL("https://www.andyhook.dev")
 *     // true
 */
export function isExternalURL(url: string): boolean {
  return (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:')
  )
}

/**
 * No Operation.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop(): void {}

/**
 * Whether the runtime is inside a browser.
 *
 */
export const isBrowser = typeof window !== 'undefined'
