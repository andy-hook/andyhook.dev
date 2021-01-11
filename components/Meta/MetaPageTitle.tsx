import React from 'react'
import Head from 'next/head'

type MetaPageTitleProps = {
  title: string
}

function MetaPageTitle({ title }: MetaPageTitleProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
  )
}

export default MetaPageTitle
