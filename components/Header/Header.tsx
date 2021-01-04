import React from 'react'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'

function Header(): JSX.Element {
  return (
    <header>
      <LayoutGutter>
        <LayoutLimiter>Header</LayoutLimiter>
      </LayoutGutter>
    </header>
  )
}

export default Header
