/**
 * Typescript helper for type safe mapping over object keys
 */
export function keys<O extends Record<string, unknown>>(
  obj: O
): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>
}

export function isExternalURL(url: string): boolean {
  return url.startsWith('https://') || url.startsWith('mailto:')
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop(): void {}
