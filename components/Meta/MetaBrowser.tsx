import React from 'react'
import Head from 'next/head'

function MetaBrowser(): JSX.Element {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Preload fonts */}
      <link
        rel="preload"
        href="/manrope-variable.ttf"
        as="font"
        type="font/ttf"
        crossOrigin=""
      />
    </Head>
  )
}

export default MetaBrowser
