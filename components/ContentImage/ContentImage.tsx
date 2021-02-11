import React from 'react'
import { appearance } from '../../style/appearance'
import ImageBase from '../ImageBase/ImageBase'

type ContentImageProps = {
  src: string
  width: number
  height: number
}

function ContentImage({
  src,
  width,
  height,
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
      <ImageBase src={src} width={width} height={height} />
    </div>
  )
}

export default ContentImage
