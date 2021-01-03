import React from 'react'
import PageTitle from '../components/layout'

import { themeForeground } from '../style/theme'
import { typeDisplayBold } from '../style/typography'

function Home(): JSX.Element {
  return (
    <>
      <PageTitle title="Hello world" />
      <h1
        css={`
          ${typeDisplayBold}
          font-size: 50px;
          color: ${themeForeground('extraHigh')};
        `}
      >
        Hello world
      </h1>
    </>
  )
}

export default Home
