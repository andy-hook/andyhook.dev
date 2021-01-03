import React from 'react'
import Layout from '../components/layout'

import { themeForeground } from '../style/theme'

export default function Home(): JSX.Element {
  return (
    <Layout title="Hello world">
      <h1
        css={`
          font-size: 50px;
          color: ${themeForeground('extraHigh')};
        `}
      >
        Hello world
      </h1>
    </Layout>
  )
}
