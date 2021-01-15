import React from 'react'
import Image from 'next/image'
import {
  setCropAndLineHeight,
  typeBaseRegular,
  typeDisplaySemibold,
  typeSizeBaseLg,
  typeSizeDisplaySm,
} from '../../style/typography'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import InteractionBase from '../InteractionBase/InteractionBase'

type WorkGridItemProps = {
  src: string
  alt?: string
  title: string
  description: string
  width: number
  height: number
  href: string
}

function WorkGridItem({
  src,
  alt,
  title,
  description,
  width,
  height,
  href,
}: WorkGridItemProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <div>
      <InteractionBase
        href={href}
        offset={0.3}
        css={`
          display: block;
        `}
      >
        <div
          css={`
            overflow: hidden;
            border-radius: ${appearance.radius.base};
            opacity: 0.02;
          `}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
          />
        </div>
      </InteractionBase>
      <h3
        css={`
          ${typeDisplaySemibold}
          ${typeSizeDisplaySm}

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
          ${typeBaseRegular}
          ${typeSizeBaseLg}

          ${setCropAndLineHeight('body', 'tight')}

          color: ${foreground('medium')};
        `}
      >
        {description}
      </p>
    </div>
  )
}

export default WorkGridItem
