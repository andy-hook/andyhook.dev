import React from 'react'
import LayoutGutter from '../components/Layout/LayoutGutter'
import LayoutLimiter from '../components/Layout/LayoutLimiter'
import PageTitle from '../components/PageTitle/PageTitle'

import { themeForeground } from '../style/theme'
import { typeDisplayBold } from '../style/typography'

function Home(): JSX.Element {
  return (
    <>
      <PageTitle title="Hello world" />
      <LayoutGutter>
        <LayoutLimiter>
          <h1
            css={`
              ${typeDisplayBold}
              font-size: 50px;
              color: ${themeForeground('extraHigh')};
            `}
          >
            Hello world
          </h1>
        </LayoutLimiter>
      </LayoutGutter>
    </>
  )
}

export default Home
