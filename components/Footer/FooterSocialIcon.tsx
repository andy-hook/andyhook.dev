import React from 'react'
import { SocialNetworks } from '../../meta'
import { appearance, spring } from '../../style/design-tokens'
import { applyForeground } from '../../style/theme'
import { motion } from 'framer-motion'
import Icon from '../Icon/Icon'
import InteractionBase from '../InteractionBase/InteractionBase'

type Size = 'small' | 'medium' | 'large'

type FooterSocialIconProps = {
  icon: SocialNetworks
  href: string
  size?: Size
}

const sizes: Record<Size, string> = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
}

const hoverMotion = {
  rest: {
    opacity: 0,
    scale: 1.5,
  },
  hover: {
    opacity: 1,
    scale: 1,
  },
}

function FooterSocialIcon({
  icon,
  href,
  size = 'medium',
  ...props
}: FooterSocialIconProps): JSX.Element {
  const iconSize = sizes[size]

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      css={`
        position: relative;
      `}
    >
      <InteractionBase
        href={href}
        css={`
          display: block;
          color: ${applyForeground('extraHigh')};
          font-size: ${iconSize};
          padding: 0.75em;
        `}
        {...props}
      >
        <motion.div
          variants={hoverMotion}
          transition={spring.bounce}
          css={`
            position: absolute;

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: ${appearance.borderThickness.regular} solid
              ${applyForeground('medium')};

            border-radius: ${appearance.radius.circle};

            pointer-events: none;
          `}
        />
        <Icon name={icon} />
      </InteractionBase>
    </motion.div>
  )
}

export default FooterSocialIcon
