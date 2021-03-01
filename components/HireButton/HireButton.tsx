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

type HireButtonProps = {
  href: string
}

function HireButton({ href }: HireButtonProps): JSX.Element {
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
        css={`
          ${setTextStyle('body', 'medium')}
          font-size: ${typeScale[2]};

          ${inclusiveUp('sm')} {
            font-size: ${typeScale[3]};
          }

          ${inclusiveUp('md')} {
            font-size: ${typeScale[4]};
          }

          display: flex;
          align-items: center;
          color: ${foreground('extraHigh')};
          padding: 1.2em 1.9em;
          border-radius: ${appearance.radius.pill};
        `}
      >
        <div
          css={`
            position: relative;
            font-size: 0.65em;
            margin-right: 1.4em;
          `}
        >
          <Pip />
        </div>

        <div
          css={`
            ${setCropAndLineHeight('body', 'flat')}
          `}
        >
          Currently available for hire
        </div>
      </InteractionBase>
    </motion.div>
  )
}

function Pip({ ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const { accent } = useTheme()

  return (
    <div
      css={`
        width: 1em;
        height: 1em;
        background: linear-gradient(
          135deg,
          ${accent('light')} 0%,
          ${accent('base')} 100%
        );
        border-radius: ${appearance.radius.circle};
      `}
      {...props}
    />
  )
}

export default HireButton
