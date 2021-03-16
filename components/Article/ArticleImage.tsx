import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

type ArticleImageProps = ImageProperties & {
  loadingColor?: string
}

function ArticleImage({
  imagePath = 'test.png',
  loadingColor,
  alt,
}: ArticleImageProps): JSX.Element {
  return (
    <ScrollReveal>
      <ImageBase
        imagePath={imagePath}
        alt={alt}
        backgroundColor={loadingColor}
      />
    </ScrollReveal>
  )
}

export default ArticleImage
