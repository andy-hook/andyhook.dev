import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../Icon/Icon'
import InteractionBase from '../InteractionBase/InteractionBase'
import meta, { SocialNetworks } from '../../data/meta'
import { keys } from '../../utils/general'
import { inclusiveUp } from '../../style/responsive'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'

const socialInfo: Record<SocialNetworks, [SocialNetworks, string]> = {
  twitter: ['twitter', 'https://twitter.com/'],
  instagram: ['instagram', 'https://instagram.com/'],
  linkedin: ['linkedin', 'https://www.linkedin.com/in/'],
  dribbble: ['dribbble', 'https://dribbble.com/'],
  github: ['github', 'https://github.com/'],
}

const iconPadding = '0.75em'

function SocialIcons({
  ...props
}: React.HTMLAttributes<HTMLUListElement>): JSX.Element {
  return (
    <ul
      css={`
        display: inline-flex;
        font-size: 1.25rem;

        ${inclusiveUp('sm')} {
          font-size: 1.5rem;
        }

        ${inclusiveUp('md')} {
          font-size: 1.7rem;
        }

        ${inclusiveUp('xl')} {
          font-size: 1.8rem;
        }

        margin: -${iconPadding};
      `}
      {...props}
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
  const theme = useTheme()

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
          font-size: 1em;
          padding: ${iconPadding};
        `}
        {...props}
      >
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              scale: 1.35,
            },
            hover: {
              opacity: 0.5,
              scale: 1,
            },
          }}
          transition={spring.bounce}
          css={`
            position: absolute;

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: ${theme.borderWidth.regular} solid
              ${theme.foreground('extraLow')};

            border-radius: ${theme.radius.circle};

            pointer-events: none;
          `}
        />
        <motion.div
          variants={{
            rest: {
              opacity: 0.35,
            },
            hover: {
              opacity: 1,
            },
          }}
        >
          <Icon
            name={icon}
            css={`
              color: ${theme.foreground('high')};
            `}
          />
        </motion.div>
      </InteractionBase>
    </motion.div>
  )
}

export default SocialIcons
