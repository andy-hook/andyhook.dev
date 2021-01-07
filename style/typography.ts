import { rem } from 'polished'
import { css, CSSProp } from 'styled-components'
import { createPlaceholderCrop, createTextCrop } from './utils'

type StyleName = 'body' | 'display'
type lineHeightName = 'flat' | 'regular' | 'tight' | 'longform'

type TypeSettings = {
  family: string
  letterSpace: Record<
    'regular' | 'medium' | 'semiBold' | 'bold' | 'uppercase',
    string
  >
  lineHeight: Record<lineHeightName, number>
  weight: Record<'light' | 'regular' | 'medium' | 'semiBold' | 'bold', number>
  cropSettings: Record<'topCrop' | 'bottomCrop', number>
}

/* Typescale – Applies to all variants
------------------------------------------------- */
const typeScale: Record<number, string> = {
  1: rem('12px'),
  2: rem('14px'),
  3: rem('16px'),
  4: rem('18px'),
  5: rem('20px'),
  6: rem('24px'),
  7: rem('30px'),
  8: rem('36px'),
  9: rem('48px'),
  10: rem('64px'),
  11: rem('94px'),
}

/* Body
------------------------------------------------- */
export const bodyType: TypeSettings = {
  family: `'Manrope', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  letterSpace: {
    regular: '0.01em',
    medium: '0.02em',
    semiBold: '0.004em',
    bold: '0.004em',
    uppercase: '0.06em',
  },
  lineHeight: {
    flat: 1,
    regular: 1.4,
    tight: 1.3,
    longform: 1.6,
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  cropSettings: { topCrop: 22, bottomCrop: 13 },
}

/* Display
------------------------------------------------- */
export const displayType = {
  family: `'Manrope', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  letterSpace: {
    regular: '0.01em',
    medium: '0.02em',
    semiBold: '-0.005em',
    bold: '-0.005em',
    uppercase: '0.06em',
  },
  lineHeight: {
    flat: 1,
    regular: 1.4,
    tight: 1.3,
    longform: 1.6,
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  cropSettings: { topCrop: 14, bottomCrop: 10 },
}

const styles = {
  body: bodyType,
  display: displayType,
}

export function applyFamily(style: StyleName): TypeSettings['family'] {
  return styles[style].family
}

export function applyLetterSpacing(
  style: StyleName
): TypeSettings['letterSpace'] {
  return styles[style].letterSpace
}

export function applyLineHeight(style: StyleName): TypeSettings['lineHeight'] {
  return styles[style].lineHeight
}

export function applyWeight(style: StyleName): TypeSettings['weight'] {
  return styles[style].weight
}

export function applyTypeSize(value: number): string {
  return typeScale[value]
}

/* Text node cropping
  ------------------------------------------------- */
export const setCropAndLineHeight = (
  style: StyleName,
  lHeight: lineHeightName
): CSSProp => {
  return createTextCrop({
    ...styles[style].cropSettings,
    lHeight: styles[style].lineHeight[lHeight],
  })
}

export const setPlaceholderCrop = (
  style: StyleName,
  lHeight: lineHeightName
): CSSProp => {
  return createPlaceholderCrop({
    ...styles[style].cropSettings,
    lHeight: styles[style].lineHeight[lHeight],
  })
}

/* Recomposibles
  ------------------------------------------------- */
export const typeBody = css`
  font-family: ${applyFamily('body')};
`

export const typeBaseRegular = css`
  ${typeBody}
  font-weight: ${applyWeight('body').regular};
  letter-spacing: ${applyLetterSpacing('body').regular};
`

export const typeBaseMedium = css`
  ${typeBody}
  font-weight: ${applyWeight('body').medium};
  letter-spacing: ${applyLetterSpacing('body').medium};
`

export const typeBaseSemibold = css`
  ${typeBody}
  font-weight: ${applyWeight('body').semiBold};
  letter-spacing: ${applyLetterSpacing('body').semiBold};
`

// Display
export const typeDisplay = css`
  font-family: ${applyFamily('display')};
`

export const typeDisplayBold = css`
  ${typeDisplay}
  font-weight: ${applyWeight('display').bold};
  letter-spacing: ${applyLetterSpacing('display').bold};
`

export const typeDisplaySemibold = css`
  ${typeDisplay}
  font-weight: ${applyWeight('display').semiBold};
  letter-spacing: ${applyLetterSpacing('display').semiBold};
`

/* Base type sizes
  ------------------------------------------------- */
export const typeSizeBaseSm = css`
  font-size: ${applyTypeSize(1)};
`

export const typeSizeBaseMd = css`
  font-size: ${applyTypeSize(2)};
`

export const typeSizeBaseLg = css`
  font-size: ${applyTypeSize(3)};
`

export const typeSizeBaseXl = css`
  font-size: ${applyTypeSize(4)};
`

/* Display type sizes
  ------------------------------------------------- */
export const typeSizeDisplayXs = css`
  font-size: ${applyTypeSize(4)};
`

export const typeSizeDisplaySm = css`
  font-size: ${applyTypeSize(4)};
`
export const typeSizeDisplayMd = css`
  font-size: ${applyTypeSize(8)};
`

export const typeSizeDisplayLg = css`
  font-size: ${applyTypeSize(8)};
`

export const typeSizeDisplayXl = css`
  font-size: ${applyTypeSize(10)};
`
