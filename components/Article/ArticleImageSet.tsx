import React from 'react'
import { css } from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { inclusiveUp } from '../../style/responsive'
import ImageBase, { ImageProperties } from '../ImageBase/ImageBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'

type FramedProps =
  | { framed?: false; frameGradientStart?: never; frameGradientEnd?: never }
  | { framed: true; frameGradientStart: string; frameGradientEnd: string }

type ArticleImageSetProps = {
  items: ImageProperties[]
} & FramedProps

function ArticleImageSet({
  items,
  framed,
  frameGradientStart,
  frameGradientEnd,
}: ArticleImageSetProps): JSX.Element {
  const { shadow } = useTheme()

  return (
    <div
      css={`
        ${framed &&
        `background: linear-gradient(135deg,
          ${frameGradientStart!} 0%,
          ${frameGradientEnd!} 50%
        );`}
      `}
    >
      {items.map(({ src, width, height }, i) => (
        <LayoutGutter
          key={i}
          css={`
            ${framed ? framedAppearance : standardSpacing}
          `}
        >
          <LayoutLimiter size="large">
            <div
              css={`
                overflow: hidden;
                box-shadow: ${shadow('low')};
                border-radius: ${appearance.radius.base};
              `}
            >
              <ImageBase src={src} width={width} height={height} />
            </div>
          </LayoutLimiter>
        </LayoutGutter>
      ))}
    </div>
  )
}

const standardSpacing = css`
  &:not(:last-child) {
    margin-bottom: 3rem;

    ${inclusiveUp('sm')} {
      margin-bottom: 5%;
    }

    ${inclusiveUp('xxl')} {
      margin-bottom: 6rem;
    }
  }
`

const framedAppearance = css`
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${inclusiveUp('sm')} {
    padding-top: 8%;
    padding-bottom: 8%;
  }

  ${inclusiveUp('xxl')} {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }

  &:nth-child(even) {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.085) 0%,
      rgba(0, 0, 0, 0.05) 50%
    );
  }
`

export default ArticleImageSet
