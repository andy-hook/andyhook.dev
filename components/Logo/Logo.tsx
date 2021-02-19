import React from 'react'
import { motion } from 'framer-motion'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextBase from '../Text/TextBase'

function Logo(): JSX.Element {
  return (
    <div
      css={`
        display: inline-flex;
      `}
    >
      <motion.div
        variants={{
          rest: {
            opacity: 0.3,
          },
          hover: {
            opacity: 1,
          },
        }}
        initial="rest"
        whileHover="hover"
      >
        <TextBase
          tag="h1"
          size="sm"
          weight="semiBold"
          color="extraHigh"
          lineHeight="flat"
          css={`
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
        </TextBase>
      </motion.div>
    </div>
  )
}

export default Logo
