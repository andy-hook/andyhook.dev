import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

type ProjectImageProps = ImageProperties & {
  loadingColor?: string
}

function ProjectImage({
  imagePath = 'test.png',
  loadingColor,
  alt,
}: ProjectImageProps): JSX.Element {
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

export default ProjectImage
