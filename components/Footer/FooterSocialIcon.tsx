import React from 'react'
import { SocialNetworks } from '../../meta'
import { appearance } from '../../style/design-tokens'
import { themeForeground } from '../../style/theme'
import Icon from '../Icon/Icon'

type Size = 'small' | 'medium' | 'large'

type FooterSocialIconProps = {
  icon: SocialNetworks
  href: string
  size?: Size
}

const SIZES: Record<Size, string> = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
}

function FooterSocialIcon({
  icon,
  href,
  size = 'medium',
  ...props
}: FooterSocialIconProps): JSX.Element {
  const iconSize = SIZES[size]

  return (
    <a
      href={href}
      css={`
        position: relative;
        display: block;
        color: ${themeForeground('extraHigh')};
        font-size: ${iconSize};
        padding: 0.75em;
      `}
      {...props}
      rel="noreferrer"
      target="_blank"
    >
      <div
        css={`
          position: absolute;

          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: ${appearance.borderThickness.regular} solid
            ${themeForeground('medium')};

          border-radius: ${appearance.radius.circle};

          pointer-events: none;
        `}
      />
      <Icon name={icon} />
    </a>
  )
}

export default FooterSocialIcon
