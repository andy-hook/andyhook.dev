import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import SocialIcons from '../SocialIcons/SocialIcons'

function Footer(): JSX.Element {
  const { background } = useTheme()

  return (
    <footer
      css={`
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: ${background('extraLow')};
      `}
    >
      <LayoutGutter>
        <LayoutLimiter size="large">
          <SocialIcons />
        </LayoutLimiter>
      </LayoutGutter>
    </footer>
  )
}

export default Footer
