import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'

type ArticleImageProps = Partial<ImageProperties>

function ArticleImage({
  filename = 'test.png',
  alt,
}: ArticleImageProps): JSX.Element {
  return <ImageBase filename={filename} alt={alt} />
}

export default ArticleImage
