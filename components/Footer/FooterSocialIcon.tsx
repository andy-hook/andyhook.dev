import React from 'react'
import { appearance } from '../../style/design-tokens'
import { themeForeground } from '../../style/theme'
import Icon from '../Icon/Icon'

type Size = 'small' | 'medium' | 'large'

type FooterSocialIconProps = {
  icon: 'dribbble' | 'instagram' | 'linkedin' | 'twitter' | 'github'
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
        display: inline-flex;
        color: ${themeForeground('extraHigh')};
        font-size: ${iconSize};
        padding: 0.75em;
      `}
      {...props}
    >
      <div
        css={`
          position: absolute;

          top: 0.1em;
          left: 0.1em;
          right: 0.1em;
          bottom: 0.1em;
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
