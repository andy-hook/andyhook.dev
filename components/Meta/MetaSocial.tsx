import React from 'react'
import Head from 'next/head'
import meta from '../../data/meta'
import { ImagePath } from '../../data/images'

type MetaSocialProps = {
  title: string
  description: string
  previewImage?: ImagePath
}

function MetaSocial({
  title,
  description,
  previewImage = 'social-preview.png',
}: MetaSocialProps): JSX.Element {
  const pageTitle = `Andy Hook – ${title}`

  const relativeImagePath = `/images/${previewImage}`

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
      <meta
        property="og:image:secure_url"
        content={`${meta.url}${relativeImagePath}`}
      />
      <meta property="og:image" content={relativeImagePath} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={`@${meta.social.twitter}`} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={relativeImagePath} />
    </Head>
  )
}

export default MetaSocial
