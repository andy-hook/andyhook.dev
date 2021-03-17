import React from 'react'
import { ImageProperties } from '../../data/images'
import ImageBase from '../ImageBase/ImageBase'

type ProjectImageProps = ImageProperties & {
  loadingColor?: string
}

function ProjectImage({
  imagePath = 'test.png',
  loadingColor,
  alt,
}: ProjectImageProps): JSX.Element {
  return (
    <ImageBase imagePath={imagePath} alt={alt} backgroundColor={loadingColor} />
  )
}

export default ProjectImage
