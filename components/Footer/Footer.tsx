import React from 'react'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import SocialIcons from '../SocialIcons/SocialIcons'

function Footer(): JSX.Element {
  return (
    <footer>
      <LayoutGutter>
        <LayoutLimiter size="large">
          <SocialIcons />
        </LayoutLimiter>
      </LayoutGutter>
    </footer>
  )
}

export default Footer
