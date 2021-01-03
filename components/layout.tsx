import React from 'react'
import Head from 'next/head'

type PageTitleProps = {
  title: string
}

function PageTitle({ title }: PageTitleProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default PageTitle
