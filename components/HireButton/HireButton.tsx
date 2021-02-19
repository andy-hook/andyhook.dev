import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

type HireButtonProps = {
  href: string
}

function HireButton({ href }: HireButtonProps): JSX.Element {
  const { foreground, shadow, background } = useTheme()

  const hoverMotion = useMemo(
    () => ({
      rest: {
        borderColor: foreground('extraLow'),
      },
      hover: {
        borderColor: foreground('low'),
      },
    }),
    [foreground]
  )

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={hoverMotion}
      css={`
        display: inline-flex;
        box-shadow: ${shadow('medium')};
        border-radius: ${appearance.radius.pill};

        border-width: ${appearance.borderWidth.thick};
        border-style: solid;
        background-color: ${background('low', 0.5)};
      `}
    >
      <InteractionBase
        offset={0.5}
        radius="pill"
        href={href}
        css={`
          ${setTextStyle('body', 'medium')}
          ${setResponsiveTextSize('body', 'sm')}

          display: flex;
          align-items: center;
          color: ${foreground('extraHigh')};
          padding: 1.1em 1.75em;
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
