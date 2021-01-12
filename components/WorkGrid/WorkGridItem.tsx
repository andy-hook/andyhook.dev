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

type WorkGridItemProps = {
  src: string
  alt?: string
  title: string
  description: string
  width: number
  height: number
}

function WorkGridItem({
  src,
  alt,
  title,
  description,
  width,
  height,
}: WorkGridItemProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <div>
      <div
        css={`
          overflow: hidden;
          border-radius: ${appearance.radius.base};
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
