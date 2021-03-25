import React from 'react'
import { motion } from 'framer-motion'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextBase from '../Text/TextBase'
import { spring } from '../../style/motion'

function Logo(): JSX.Element {
  return (
    <div
      css={`
        display: inline-flex;
      `}
    >
      <motion.div initial="rest" whileHover="hover">
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
              top: 0.1em;
            `}
          >
            <motion.span
              variants={{
                rest: {
                  opacity: 0.8,
                },
                hover: {
                  opacity: 1,
                },
              }}
              transition={spring.tactile}
            >
              Andy Hook
            </motion.span>
          </InteractionBase>
        </TextBase>
      </motion.div>
    </div>
  )
}

export default Logo
