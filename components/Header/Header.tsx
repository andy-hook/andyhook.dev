import React from 'react'
import { themeForeground } from '../../style/theme'
import { typeBaseSemibold, typeSizeBaseXl } from '../../style/typography'

function Header(): JSX.Element {
  return (
    <header>
      <h2
        css={`
          ${typeBaseSemibold}
          ${typeSizeBaseXl}
          color: ${themeForeground('medium')};
        `}
      >
        Andy Hook
      </h2>
    </header>
  )
}

export default Header
