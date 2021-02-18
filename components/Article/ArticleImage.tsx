import React from 'react'
import ImageBase, { ImageProperties } from '../ImageBase/ImageBase'

type ArticleImageProps = Partial<ImageProperties>

function ArticleImage({
  src = '/test.png',
  width = 500,
  height = 250,
  alt,
}: ArticleImageProps): JSX.Element {
  return <ImageBase src={src} width={width} height={height} alt={alt} />
}

export default ArticleImage
