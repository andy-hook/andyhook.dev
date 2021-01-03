import { rem } from 'polished'

/* Typography
  ------------------------------------------------- */

export const baseFontSize = 16

const fontFamily = {
  base: `'Manrope', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
  display: `'Manrope', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
}

const letterSpacing = {
  base: {
    regular: '0.01em',
    medium: '0.01em',
    semibold: '0.004em',
  },
  display: {
    bold: '-0.005em',
    button: '0.01em',
  },
  uppercase: '0.06em',
}

const lineHeight = {
  flat: 1,
  base: {
    regular: 1.4,
    tight: 1.2,
    longform: 1.6,
  },
  display: {
    regular: 1.4,
    tight: 1.3,
    longform: 1.6,
  },
}

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

const typeScale = {
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

const spacingScale = {
  px: '1px',
  1: rem('4px'),
  2: rem('8px'),
  3: rem('12px'),
  4: rem('16px'),
  5: rem('20px'),
  6: rem('24px'),
  7: rem('32px'),
  8: rem('40px'),
  9: rem('48px'),
  10: rem('64px'),
  11: rem('80px'),
  12: rem('96px'),
  13: rem('128px'),
  14: rem('160px'),
  15: rem('224px'),
  16: rem('256px'),
}

/* Border radius
  ------------------------------------------------- */

const borderRadius = {
  base: '6px',
  large: '10px',
  pill: '50000px',
  circle: '50%',
}

/* Text shadow
  ------------------------------------------------- */

const textShadow = {
  subtle: '0 0 0.03em rgba(0, 0, 0, 0.5)',
  heavy: '0 0 1em rgba(0, 0, 0.6)',
}

/* Border thickness
  ------------------------------------------------- */

const borderThickness = {
  regular: '1px',
  thick: '2px',
  thicker: '3px',
  thickest: '4px',
}

/* Index
  ------------------------------------------------- */

const zIndex = {
  floor: 0,
  low: 100,
  medium: 200,
  high: 300,
  highest: 400,
}

/* Public
------------------------------------------------- */

export const type = {
  baseFontSize,
  fontFamily,
  letterSpacing,
  lineHeight,
  fontWeight,
  scale: {
    ...typeScale,
  },
}

export const layout = {
  zIndex,
  scale: {
    ...spacingScale,
  },
}

export const appearance = {
  radius: {
    ...borderRadius,
  },
  textShadow,
  borderThickness,
}
