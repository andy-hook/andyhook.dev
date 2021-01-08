import React from 'react'
import { appearance, spring } from '../../style/appearance'
import { applyForeground } from '../../style/theme'
import { motion } from 'framer-motion'
import Icon from '../Icon/Icon'
import InteractionBase from '../InteractionBase/InteractionBase'
import meta, { SocialNetworks } from '../../meta'
import { keys } from '../../utils/general'

const socialInfo: Record<SocialNetworks, [SocialNetworks, string]> = {
  twitter: ['twitter', 'https://twitter.com/'],
  instagram: ['instagram', 'https://instagram.com/'],
  linkedin: ['linkedin', 'https://www.linkedin.com/in/'],
  dribbble: ['dribbble', 'https://dribbble.com/'],
  github: ['github', 'https://github.com/'],
}

const iconPadding = '0.75em'

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

function SocialIcons(): JSX.Element {
  return (
    <ul
      css={`
        display: inline-grid;
        grid-auto-flow: column;
        font-size: 1.5rem;

        margin: -${iconPadding};
      `}
    >
      {keys(meta.social).map((key) => {
        const [icon, url] = socialInfo[key]
        const username = meta.social[key]

        return (
          <li key={key}>
            <SocialIcon icon={icon} href={`${url}${username}`} />
          </li>
        )
      })}
    </ul>
  )
}

function SocialIcon({
  icon,
  href,

  ...props
}: {
  icon: SocialNetworks
  href: string
}): JSX.Element {
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
          font-size: 1em;
          padding: ${iconPadding};
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
            border: ${appearance.borderWidth.regular} solid
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

export default SocialIcons
