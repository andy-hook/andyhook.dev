import { motion } from 'framer-motion'
import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { spring } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import {
  setCropAndLineHeight,
  setTextStyle,
  typeScale,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

type ButtonProps = {
  href: string
  newTab?: boolean
  children: React.ReactNode
}

function Button({ href, children, newTab }: ButtonProps): JSX.Element {
  const { foreground, shadow, background } = useTheme()

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      css={`
        position: relative;
        display: inline-flex;
        box-shadow: ${shadow('medium')};
      `}
    >
      <motion.div
        variants={{
          rest: {
            opacity: 0.5,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={spring.snappy}
        css={`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          border-radius: ${appearance.radius.pill};

          background-color: ${background('medium')};

          box-shadow: ${foreground('extraLow')} 0 0 0
            ${appearance.borderWidth.thick} inset;

          z-index: ${appearance.index.floor};
        `}
      />
      <InteractionBase
        offset={0.5}
        radius="pill"
        href={href}
        newTab={newTab}
        css={`
          ${setTextStyle('body', 'medium')}
          font-size: ${typeScale[2]};

          ${inclusiveUp('sm')} {
            font-size: ${typeScale[3]};
          }

          ${inclusiveUp('md')} {
            font-size: ${typeScale[4]};
          }

          color: ${foreground('extraHigh')};
          padding: 1.2em 1.9em;
          border-radius: ${appearance.radius.pill};
        `}
      >
        <div
          css={`
            ${setCropAndLineHeight('body', 'flat')}
          `}
        >
          <div
            css={`
              display: flex;
              align-items: center;
            `}
          >
            {children}
          </div>
        </div>
      </InteractionBase>
    </motion.div>
  )
}

export default Button
