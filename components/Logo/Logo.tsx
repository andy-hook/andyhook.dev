import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  baseText,
  setCropAndLineHeight,
  setTextStyle,
} from '../../style/typography'

import { motion } from 'framer-motion'
import InteractionBase from '../InteractionBase/InteractionBase'

function Logo(): JSX.Element {
  const { foreground } = useTheme()

  return (
    <div
      css={`
        display: inline-flex;
      `}
    >
      <motion.h2
        variants={{
          rest: {
            color: foreground('medium'),
          },
          hover: {
            color: foreground('extraHigh'),
          },
        }}
        initial="rest"
        whileHover="hover"
        css={`
          ${setTextStyle('body', 'semiBold')}
          ${baseText.size.sm}
          ${setCropAndLineHeight('body', 'flat')}

          margin: -0.75em;
        `}
      >
        <InteractionBase
          href="/"
          css={`
            padding: 0.75em;
          `}
        >
          Andy Hook
        </InteractionBase>
      </motion.h2>
    </div>
  )
}

export default Logo
