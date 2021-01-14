import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import {
  setCropAndLineHeight,
  typeBaseMedium,
  typeSizeBaseMd,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

type HireButtonProps = {
  href: string
}

function HireButton({ href }: HireButtonProps): JSX.Element {
  const { foreground, background } = useTheme()

  const hoverMotion = useMemo(
    () => ({
      rest: {
        backgroundColor: background('medium'),
      },
      hover: {
        backgroundColor: background('extraHigh'),
      },
    }),
    [background]
  )

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={hoverMotion}
      css={`
        display: inline-flex;
        border-radius: ${appearance.radius.pill};
      `}
    >
      <InteractionBase
        radius="pill"
        href={href}
        css={`
          display: flex;
          align-items: center;
          ${typeBaseMedium}
          ${typeSizeBaseMd}
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
          ${accent('base')} 90%
        );
        border-radius: ${appearance.radius.circle};
      `}
      {...props}
    />
  )
}

export default HireButton
