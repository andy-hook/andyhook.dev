import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'
import ScrollAnimate from '../ScrollAnimate/ScrollAnimate'

type ArticleImageProps = ImageProperties

function ArticleImage({
  imagePath = 'test.png',
  alt,
}: ArticleImageProps): JSX.Element {
  return (
    <ScrollAnimate>
      <ImageBase imagePath={imagePath} alt={alt} />
    </ScrollAnimate>
  )
}

export default ArticleImage
