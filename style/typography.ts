import { rem } from 'polished'
import { css, CSSProp } from 'styled-components'
import { inclusiveUp } from './responsive'
import { createPlaceholderCrop, createTextCrop } from './utils'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg'
export type SupportedHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type StyleName = 'base' | 'display'
type LineHeightName = 'flat' | 'regular' | 'tight' | 'longform'

type TypeSettings = {
  family: string
  letterSpace: Record<
    'regular' | 'medium' | 'semiBold' | 'bold' | 'uppercase',
    string
  >
  lineHeight: Record<LineHeightName, number>
  weight: Record<'light' | 'regular' | 'medium' | 'semiBold' | 'bold', number>
  cropSettings: Record<'topCrop' | 'bottomCrop', number>
}

export const baseFontSize = 16

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
  10: rem('54px'),
  11: rem('64px'),
}

const lineHeight = {
  flat: 1,
  tight: 1.2,
  regular: 1.3,
  longform: 1.6,
}

const fontWeight = {
  light: 320,
  regular: 420,
  medium: 520,
  semiBold: 600,
  bold: 720,
}

/* Body
------------------------------------------------- */
const baseType: TypeSettings = {
  family: `'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  letterSpace: {
    regular: '0.01em',
    medium: '0.02em',
    semiBold: '0.004em',
    bold: '0.004em',
    uppercase: '0.06em',
  },
  lineHeight: lineHeight,
  weight: fontWeight,
  cropSettings: { topCrop: 9, bottomCrop: 6 },
}

/* Display
------------------------------------------------- */
const displayType: TypeSettings = {
  family: `'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  letterSpace: {
    regular: '0.01em',
    medium: '0.02em',
    semiBold: '-0.005em',
    bold: '-0.005em',
    uppercase: '0.06em',
  },
  lineHeight: lineHeight,
  weight: fontWeight,
  cropSettings: { topCrop: 14, bottomCrop: 10 },
}

const styles = {
  base: baseType,
  display: displayType,
}

/* Text node cropping
  ------------------------------------------------- */
export const setCropAndLineHeight = (
  style: StyleName,
  lHeight: LineHeightName
): CSSProp => {
  return createTextCrop({
    ...styles[style].cropSettings,
    lHeight: styles[style].lineHeight[lHeight],
  })
}

export const setPlaceholderCrop = (
  style: StyleName,
  lHeight: LineHeightName
): CSSProp => {
  return createPlaceholderCrop({
    ...styles[style].cropSettings,
    lHeight: styles[style].lineHeight[lHeight],
  })
}

/* Responsive sizes and styles
  ------------------------------------------------- */
export const displayText = {
  weight: {
    medium: css`
      font-family: ${displayType.family};
      font-weight: ${displayType.weight.medium};
      letter-spacing: ${displayType.letterSpace.medium};
    `,
    semiBold: css`
      font-family: ${displayType.family};
      font-weight: ${displayType.weight.semiBold};
      letter-spacing: ${displayType.letterSpace.semiBold};
    `,

    bold: css`
      font-family: ${displayType.family};
      font-weight: ${displayType.weight.bold};
      letter-spacing: ${displayType.letterSpace.bold};
    `,
  },
  size: {
    xs: css`
      font-size: ${typeScale[5]};

      ${inclusiveUp('lg')} {
        font-size: ${typeScale[6]};
      }
    `,
    sm: css`
      font-size: ${typeScale[6]};

      ${inclusiveUp('md')} {
        font-size: ${typeScale[7]};
      }

      ${inclusiveUp('lg')} {
        font-size: ${typeScale[8]};
      }
    `,
    md: css`
      font-size: ${typeScale[7]};

      ${inclusiveUp('sm')} {
        font-size: ${typeScale[8]};
      }

      ${inclusiveUp('md')} {
        font-size: ${typeScale[9]};
      }

      ${inclusiveUp('xl')} {
        font-size: ${typeScale[10]};
      }
    `,
    lg: css`
      font-size: ${typeScale[8]};

      ${inclusiveUp('sm')} {
        font-size: ${typeScale[9]};
      }

      ${inclusiveUp('md')} {
        font-size: ${typeScale[10]};
      }

      ${inclusiveUp('xl')} {
        font-size: ${typeScale[11]};
      }
    `,
  },
}

export const baseText = {
  weight: {
    regular: css`
      font-family: ${baseType.family};
      font-weight: ${baseType.weight.regular};
      letter-spacing: ${baseType.letterSpace.regular};
    `,
    medium: css`
      font-family: ${baseType.family};
      font-weight: ${baseType.weight.medium};
      letter-spacing: ${baseType.letterSpace.medium};
    `,
    semiBold: css`
      font-family: ${baseType.family};
      font-weight: ${baseType.weight.semiBold};
      letter-spacing: ${baseType.letterSpace.semiBold};
    `,
  },
  size: {
    xs: css`
      font-size: ${typeScale[3]};
    `,
    sm: css`
      font-size: ${typeScale[3]};

      ${inclusiveUp('sm')} {
        font-size: ${typeScale[4]};
      }
    `,
    md: css`
      font-size: ${typeScale[3]};

      ${inclusiveUp('xs')} {
        font-size: ${typeScale[4]};
      }

      ${inclusiveUp('md')} {
        font-size: ${typeScale[5]};
      }
    `,
    lg: css`
      font-size: ${typeScale[4]};

      ${inclusiveUp('xs')} {
        font-size: ${typeScale[5]};
      }

      ${inclusiveUp('md')} {
        font-size: ${typeScale[6]};
      }
    `,
  },
}
