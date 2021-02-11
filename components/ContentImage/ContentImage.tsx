import React from 'react'
import { appearance } from '../../style/appearance'
import ImageBase from '../ImageBase/ImageBase'

type ContentImageProps = {
  src: string
  width: number
  height: number
  backgroundColor?: string
}

function ContentImage({
  src,
  width,
  height,
  backgroundColor,
  ...props
}: ContentImageProps): JSX.Element {
  return (
    <div
      css={`
        overflow: hidden;
        border-radius: ${appearance.radius.base};
      `}
      {...props}
    >
      <ImageBase
        src={src}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      />
    </div>
  )
}

export default ContentImage
