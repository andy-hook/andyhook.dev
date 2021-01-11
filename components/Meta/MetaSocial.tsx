import React from 'react'
import Head from 'next/head'
import meta from '../../meta'

type MetaSocialProps = {
  title: string
  description: string
}

function MetaSocial({ title, description }: MetaSocialProps): JSX.Element {
  const pageTitle = `Andy Hook | ${title}`

  return (
    <Head>
      <meta
        name="keywords"
        content="User interface, Web developer, Front-end developer, UI Engineer, Brighton"
      />
      <meta name="description" content={description} />

      <title>{pageTitle}</title>

      {/* Opengraph */}
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/social/og-preview.png" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={`@${meta.social.twitter}`} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image:src"
        content="/images/social/twitter-preview.png"
      />
    </Head>
  )
}

export default MetaSocial
