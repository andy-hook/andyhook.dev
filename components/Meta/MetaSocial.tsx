import React from 'react'
import Head from 'next/head'
import meta from '../../data/meta'
import { imageData, ImageProperties } from '../../data/images'

const DEFAULT_PREVIEW_IMAGE: ImageProperties = {
  imagePath: 'social-preview.png',
  alt: 'Stylised title that reads "I build interfaces',
}

type MetaSocialProps = {
  title: string
  description: string
  previewImage?: ImageProperties
}

function MetaSocial({
  title,
  description,
  previewImage = DEFAULT_PREVIEW_IMAGE,
}: MetaSocialProps): JSX.Element {
  const pageTitle = `Andy Hook – ${title}`

  const imageUrl = `${meta.url}/images/${previewImage.imagePath}`
  const imageDimensions = imageData[previewImage.imagePath]

  return (
    <Head>
      <meta
        name="keywords"
        content="User interface, Web developer, Front-end developer, UI Engineer, Brighton"
      />
      <meta name="description" content={description} />

      <title>{pageTitle}</title>

      {/* Opengraph */}
      <meta property="og:url" content={meta.url} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:description" content={description} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={`${imageDimensions.width}`} />
      <meta property="og:image:height" content={`${imageDimensions.height}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${meta.social.twitter}`} />
      <meta name="twitter:site" content={`@${meta.social.twitter}`} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={previewImage.alt} />
    </Head>
  )
}

export default MetaSocial
