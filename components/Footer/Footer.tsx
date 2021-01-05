import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import meta, { SocialNetworks } from '../../meta'
import { keys } from '../../utils/general'

const SOCIAL_INFO: Record<SocialNetworks, [SocialNetworks, string]> = {
  twitter: ['twitter', 'https://twitter.com/'],
  instagram: ['instagram', 'https://instagram.com/'],
  linkedin: ['linkedin', 'https://www.linkedin.com/in/'],
  dribbble: ['dribbble', 'https://dribbble.com/'],
  github: ['github', 'https://github.com/'],
}

function Footer(): JSX.Element {
  return (
    <footer
      css={`
        display: flex;
        justify-content: flex-end;
      `}
    >
      <ul
        css={`
          display: inline-grid;
          grid-auto-flow: column;
        `}
      >
        {keys(meta.social).map((key) => {
          const [icon, url] = SOCIAL_INFO[key]
          const username = meta.social[key]

          return (
            <li key={key}>
              <FooterSocialIcon icon={icon} href={`${url}${username}`} />
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
