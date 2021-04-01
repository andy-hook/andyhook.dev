import { motion } from 'framer-motion'
import React from 'react'
import { spring } from '../../style/motion'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextBase from '../Text/TextBase'

function Logo(): JSX.Element {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      css={`
        display: inline-flex;
      `}
    >
      <InteractionBase href="/" offset={[1, 0.5]}>
        <TextBase tag="h1" size="sm" weight="semiBold" color="extraHigh">
          <motion.div
            variants={{
              rest: {
                opacity: 0.75,
              },
              hover: {
                opacity: 1,
              },
            }}
            transition={spring.tactile}
            css={`
              margin: -0.75em;
            `}
          >
            <div
              css={`
                padding: 0.75em;
              `}
            >
              Andy Hook
            </div>
          </motion.div>
        </TextBase>
      </InteractionBase>
    </motion.div>
  )
}

export default Logo
