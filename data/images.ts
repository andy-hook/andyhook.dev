import images from './image-sizes.json'

export type ImagePath = keyof typeof images

export type ImageProperties = {
  imagePath: ImagePath
  alt: string
}

export const imageData = images
