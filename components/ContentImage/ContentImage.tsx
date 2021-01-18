import React from 'react'
import Image from 'next/image'
import { appearance } from '../../style/appearance'

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
      <Image src={src} width={width} height={height} layout="responsive" />
    </div>
  )
}

export default ContentImage
