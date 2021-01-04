import { css, CSSProp } from 'styled-components'
import { createTextCrop, createPlaceholderCrop } from './utils'
import { type } from './design-tokens'

/* Base text cropping
  ------------------------------------------------- */
const baseCropSettings = {
  topCrop: 14,
  bottomCrop: 10,
}

export const setBaseCropAndLineHeight = (
  lHeight: keyof typeof type.lineHeight
): CSSProp => {
  return createTextCrop({
    ...baseCropSettings,
    lHeight: type.lineHeight[lHeight],
  })
}

export const setBasePlaceholderCrop = (
  lHeight: keyof typeof type.lineHeight
): CSSProp => {
  return createPlaceholderCrop({
    ...baseCropSettings,
    lHeight: type.lineHeight[lHeight],
  })
}

/* Display text cropping
  ------------------------------------------------- */
const displayCropSettings = {
  topCrop: 14,
  bottomCrop: 10,
}

export const setDisplayCropAndLineHeight = (
  lHeight: keyof typeof type.lineHeight
): CSSProp => {
  return createTextCrop({
    ...displayCropSettings,
    lHeight: type.lineHeight[lHeight],
  })
}

export const setDisplayPlaceholderCrop = (
  lHeight: keyof typeof type.lineHeight
): CSSProp => {
  return createPlaceholderCrop({
    ...displayCropSettings,
    lHeight: type.lineHeight[lHeight],
  })
}

/* Recomposibles
  ------------------------------------------------- */
export const typeBase = css`
  font-family: ${type.fontFamily.base};
`

export const typeBaseRegular = css`
  ${typeBase}
  font-weight: ${type.fontWeight.regular};
  letter-spacing: ${type.letterSpacing.base.regular};
`

export const typeBaseMedium = css`
  ${typeBase}
  font-weight: ${type.fontWeight.medium};
  letter-spacing: ${type.letterSpacing.base.medium};
`

export const typeBaseSemibold = css`
  ${typeBase}
  font-weight: ${type.fontWeight.semiBold};
  letter-spacing: ${type.letterSpacing.base.semibold};
`

// Display
export const typeDisplay = css`
  font-family: ${type.fontFamily.display};
`

export const typeDisplayBold = css`
  ${typeDisplay}
  font-weight: ${type.fontWeight.bold};
  letter-spacing: ${type.letterSpacing.display.bold};
`

export const typeDisplaySemibold = css`
  ${typeDisplay}
  font-weight: ${type.fontWeight.semiBold};
  letter-spacing: ${type.letterSpacing.display.semibold};
`

/* Base type sizes
  ------------------------------------------------- */
export const typeSizeBaseSm = css`
  font-size: ${type.scale[1]};
`

export const typeSizeBaseMd = css`
  font-size: ${type.scale[2]};
`

export const typeSizeBaseLg = css`
  font-size: ${type.scale[3]};
`

export const typeSizeBaseXl = css`
  font-size: ${type.scale[4]};
`

/* Display type sizes
  ------------------------------------------------- */
export const typeSizeDisplayXs = css`
  font-size: ${type.scale[4]};
`

export const typeSizeDisplaySm = css`
  font-size: ${type.scale[4]};
`
export const typeSizeDisplayMd = css`
  font-size: ${type.scale[8]};
`

export const typeSizeDisplayLg = css`
  font-size: ${type.scale[8]};
`

export const typeSizeDisplayXl = css`
  font-size: ${type.scale[10]};
`
