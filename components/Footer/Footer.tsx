import React from 'react'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'

function Footer(): JSX.Element {
  return (
    <footer>
      <LayoutGutter>
        <LayoutLimiter>Footer</LayoutLimiter>
      </LayoutGutter>
    </footer>
  )
}

export default Footer
