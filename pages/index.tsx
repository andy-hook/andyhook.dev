import React from 'react'
import Layout from '../components/layout'

import { themeForeground } from '../style/theme'
import { typeDisplayBold } from '../style/typography'

export default function Home(): JSX.Element {
  return (
    <Layout title="Hello world">
      <h1
        css={`
          ${typeDisplayBold}
          font-size: 50px;
          color: ${themeForeground('extraHigh')};
        `}
      >
        Hello world
      </h1>
    </Layout>
  )
}
