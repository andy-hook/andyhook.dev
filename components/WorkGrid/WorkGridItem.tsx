import React from 'react'
import {
  baseText,
  displayText,
  setCropAndLineHeight,
} from '../../style/typography'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import InteractionBase from '../InteractionBase/InteractionBase'
import ImageBase from '../ImageBase/ImageBase'

type WorkGridItemProps = {
  src: string
  alt?: string
  title: string
  description: string
  width: number
  height: number
  href: string
  backgroundColor: string
}

function WorkGridItem({
  src,
  alt,
  title,
  description,
  width,
  height,
  href,
  backgroundColor,
}: WorkGridItemProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <div>
      <InteractionBase
        href={href}
        offset={0.75}
        css={`
          display: block;
        `}
      >
        <div
          css={`
            overflow: hidden;
            border-radius: ${appearance.radius.base};
          `}
        >
          <ImageBase
            src={src}
            alt={alt}
            width={width}
            height={height}
            scaleRenderFromBp={['sm', 70]}
            backgroundColor={backgroundColor}
          />
        </div>

        <h3
          css={`
            ${displayText.weight.semiBold}
            ${displayText.size.sm}
            ${setCropAndLineHeight('display', 'tight')}

            color: ${foreground('extraHigh')};
            margin-top: 1.25em;
            margin-bottom: 0.4em;
          `}
        >
          {title}
        </h3>
        <p
          css={`
            ${baseText.weight.regular}
            ${baseText.size.md}
            ${setCropAndLineHeight('base', 'tight')}

            color: ${foreground('low')};
          `}
        >
          {description}
        </p>
      </InteractionBase>
    </div>
  )
}

export default WorkGridItem
