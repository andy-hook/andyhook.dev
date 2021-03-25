import { darken, lighten, parseToHsl, rgba } from 'polished'
import { css, CSSProp } from 'styled-components'

interface CropSettings {
  lHeight: number
  topCrop: number
  bottomCrop: number
}

/**
 * Apply text node cropping via psuedo elements.
 *
 * @param {CropSettings} settings - Typeface settings for rendering the text crop
 * @param {string} topAdjustment - From top pixel offset
 * @param {string} bottomAdjustment - From bottom pixel offset
 * @return {CSSProp} Interpolated css string
 *
 * @example
 *
 *     createTextCrop({
 *        lHeight: 1.5,
 *        topCrop: 10,
 *        bottomCrop: 12
 *     })
 */
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

/**
 * Apply non-breaking space between the last two words of a string to wrap widow words.
 *
 * @param {string} string - The string
 * @return {string} Formatted string
 *
 * @example
 *
 *     removeWidow("The quick brown fox jumps over the lazy dog")
 */
export function removeWidow(string: string): string {
  return string.replace(/\s(?=[^\s]*$)/g, '\u00A0')
}

type ShimmerGradientColors = {
  gradientStop: string
  gradientStopAlpha: string
  sourceColor: string
}

/**
 * Create relative gradient colors for loading shimmer effects.
 *
 * @param {string} color - The underlying background color
 * @return {ShimmerGradientColors} Object containing the calculated colors
 *
 * @example
 *
 *     loadingShimmerGradientFromColor("#fff")
 */
export function loadingShimmerGradientFromColor(
  color: string
): ShimmerGradientColors {
  const { lightness } = parseToHsl(color)
  const isDarkShade = lightness < 0.5

  const sourceColor = color
  const gradientStop = isDarkShade
    ? lighten(Math.min(lightness + 0.2, 1), sourceColor)
    : darken(Math.max(lightness - 0.4, 0), sourceColor)
  const gradientStopAlpha = rgba(gradientStop, 0)

  return { gradientStop, gradientStopAlpha, sourceColor }
}

/**
 * Create percentage based ratio for creating padded aspect boxes.
 *
 * @param {number} height - Image height
 * @param {number} width - Image width
 * @return {string} Percentage string
 *
 * @example
 *
 *     getRatioPercentage(100, 50)
 *     // 50%
 */
export function getRatioAsPercentage(height: number, width: number): string {
  const percentage = (width / height) * 100

  return `${percentage}%`
}
