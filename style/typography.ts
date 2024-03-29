import { rem } from 'polished'
import { css, CSSProp } from 'styled-components'
import { inclusiveUp } from './responsive'
import { createTextCrop } from './utils'

export type ResponsiveTextSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextStyleType = 'body' | 'display'
export type LineHeightName = 'flat' | 'regular' | 'tight' | 'longform'
export type TextWeight =
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'

type TypeSettings = {
  family: string
  letterSpace: Record<TextWeight, string>
  lineHeight: Record<LineHeightName, number>
  weight: Record<TextWeight, number>
  cropSettings: Record<'topCrop' | 'bottomCrop', number>
  sizes: Record<ResponsiveTextSize, CSSProp>
}

export const baseFontSize = 16

/* Base scale
------------------------------------------------- */
export const typeScale = {
  1: rem('12px'),
  2: rem('14px'),
  3: rem('16px'),
  4: rem('18px'),
  5: rem('20px'),
  6: rem('22px'),
  7: rem('28px'),
  8: rem('34px'),
  9: rem('46px'),
  10: rem('52px'),
  11: rem('60px'),
  12: rem('66px'),
}

/* Settings - Useful for pairing typeface dimensions with the best display properties
------------------------------------------------- */
const typeSettings: Record<TextStyleType, TypeSettings> = {
  body: {
    family: `'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
    letterSpace: {
      regular: '0.01em',
      medium: '0.02em',
      semiBold: '-0.02em',
      bold: '0.004em',
      extraBold: '-0.004em',
    },
    lineHeight: {
      flat: 1,
      tight: 1.225,
      regular: 1.5,
      longform: 1.6,
    },
    weight: {
      regular: 420,
      medium: 520,
      semiBold: 590,
      bold: 680,
      extraBold: 740,
    },
    cropSettings: { topCrop: 9, bottomCrop: 6 },
    sizes: {
      xxs: css`
        font-size: ${typeScale[2]};
      `,
      xs: css`
        font-size: ${typeScale[2]};

        ${inclusiveUp('sm')} {
          font-size: ${typeScale[3]};
        }
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
      xl: css`
        font-size: ${typeScale[5]};

        ${inclusiveUp('xs')} {
          font-size: ${typeScale[6]};
        }

        ${inclusiveUp('md')} {
          font-size: ${typeScale[7]};
        }
      `,
    },
  },
  display: {
    family: `'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
    letterSpace: {
      regular: '-0.01em',
      medium: '-0.005em',
      semiBold: '-0.003em',
      bold: '-0.005em',
      extraBold: '-0.005em',
    },
    lineHeight: {
      flat: 1,
      tight: 1.225,
      regular: 1.3,
      longform: 1.6,
    },
    weight: {
      regular: 420,
      medium: 520,
      semiBold: 590,
      bold: 680,
      extraBold: 740,
    },
    cropSettings: { topCrop: 14, bottomCrop: 10 },
    sizes: {
      xxs: css`
        font-size: ${typeScale[3]};
      `,
      xs: css`
        font-size: ${typeScale[4]};

        ${inclusiveUp('sm')} {
          font-size: ${typeScale[5]};
        }

        ${inclusiveUp('lg')} {
          font-size: ${typeScale[6]};
        }
      `,
      sm: css`
        font-size: ${typeScale[5]};

        ${inclusiveUp('sm')} {
          font-size: ${typeScale[6]};
        }

        ${inclusiveUp('md')} {
          font-size: ${typeScale[7]};
        }

        ${inclusiveUp('lg')} {
          font-size: ${typeScale[8]};
        }
      `,
      md: css`
        font-size: ${typeScale[6]};

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

        ${inclusiveUp('xs')} {
          font-size: ${typeScale[8]};
        }

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
      xl: css`
        font-size: ${typeScale[8]};

        ${inclusiveUp('xs')} {
          font-size: ${typeScale[8]};
        }

        ${inclusiveUp('sm')} {
          font-size: ${typeScale[9]};
        }

        ${inclusiveUp('md')} {
          font-size: ${typeScale[10]};
        }

        ${inclusiveUp('lg')} {
          font-size: ${typeScale[11]};
        }

        ${inclusiveUp('xl')} {
          font-size: ${typeScale[12]};
        }
      `,
    },
  },
}

/* Text node cropping
  ------------------------------------------------- */
export function setCropAndLineHeight(
  type: TextStyleType,
  lHeight: LineHeightName
): CSSProp {
  return createTextCrop({
    ...typeSettings[type].cropSettings,
    lHeight: typeSettings[type].lineHeight[lHeight],
  })
}

/* Text Style
  ------------------------------------------------- */
export function setTextStyle(
  type: TextStyleType,
  weightName: TextWeight
): CSSProp {
  const { family, weight, letterSpace } = typeSettings[type]

  return css`
    font-family: ${family};
    font-weight: ${weight[weightName]};
    letter-spacing: ${letterSpace[weightName]};
  `
}

/* Responsive text size
  ------------------------------------------------- */
export function setResponsiveTextSize(
  type: TextStyleType,
  size: ResponsiveTextSize
): CSSProp {
  return typeSettings[type].sizes[size]
}
