import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

type ArticleImageProps = ImageProperties

function ArticleImage({
  imagePath = 'test.png',
  alt,
}: ArticleImageProps): JSX.Element {
  return (
    <ScrollReveal>
      <ImageBase imagePath={imagePath} alt={alt} />
    </ScrollReveal>
  )
}

export default ArticleImage
