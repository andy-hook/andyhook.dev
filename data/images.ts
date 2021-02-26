import images from './image-sizes.json'

export type ImageName = keyof typeof images

export type ImageProperties = {
  filename: ImageName
  alt?: string
}

export const imageData = images
