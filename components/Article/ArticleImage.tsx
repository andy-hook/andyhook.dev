import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'

type ArticleImageProps = Partial<ImageProperties>

function ArticleImage({
  imagePath = 'test.png',
  alt,
}: ArticleImageProps): JSX.Element {
  return <ImageBase imagePath={imagePath} alt={alt} />
}

export default ArticleImage
