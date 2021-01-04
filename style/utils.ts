import { css, CSSProp } from 'styled-components'

export const createHsl = (value: string): string => `hsl(${value})`

export const createHsla = (value: string, alpha: number): string =>
  `hsla(${value},${alpha})`

export const createCubicBezier = (values: number[]): string => {
  const valueString = values.join(',')

  return `cubic-bezier(${valueString})`
}

interface CropSettings {
  lHeight: number
  topCrop: number
  bottomCrop: number
}

export function createTextCrop(
  settings: CropSettings,
  topAdjustment = '0px',
  bottomAdjustment = '0px'
): CSSProp {
  const { lHeight, topCrop, bottomCrop } = settings

  const cropFontSize = 100
  const cropLineHeight = 1

  const dynamicTopCrop =
    Math.max(topCrop + (lHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize
  const dynamicBottomCrop =
    Math.max(bottomCrop + (lHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize

  return css`
    line-height: ${lHeight};

    &::before,
    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    &::before {
      margin-bottom: calc(-${dynamicTopCrop}em + ${topAdjustment});
    }

    &::after {
      margin-top: calc(-${dynamicBottomCrop}em + ${bottomAdjustment});
    }
  `
}

export function createPlaceholderCrop(
  settings: CropSettings,
  topAdjustment = '0px',
  bottomAdjustment = '0px'
): CSSProp {
  const { lHeight, topCrop, bottomCrop } = settings

  const cropFontSize = 100
  const cropLineHeight = 1

  const dynamicTopCrop =
    Math.max(topCrop + (lHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize
  const dynamicBottomCrop =
    Math.max(bottomCrop + (lHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize

  return css`
    top: calc(${dynamicTopCrop}em + ${topAdjustment});
    bottom: calc(${dynamicBottomCrop}em + ${bottomAdjustment});
  `
}

export function removeWidow(str: string): string {
  return str.replace(/\s(?=[^\s]*$)/g, '\u00A0')
}
