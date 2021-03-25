import { motion } from 'framer-motion'
import React from 'react'
import { useRelativeYMotion } from '../../hooks/useRelativeYMotion/useRelativeYMotion'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import Logo from '../Logo/Logo'

function TopBar(): JSX.Element {
  const theme = useTheme()
  const motionVariants = useRelativeYMotion(-ENTRANCE_TRANSITION_Y_DISTANCE / 2)

  return (
    <motion.header
      variants={motionVariants}
      transition={{ ...spring.snappy, delay: ENTRANCE_TRANSITION_DELAY }}
      initial="hidden"
      animate="visible"
      css={`
        padding: 1.5rem 1.25rem;

        ${inclusiveUp('xxs')} {
          padding: 1.5rem 6%;
        }

        ${inclusiveUp('xs')} {
          padding: 1.5rem 2rem;
        }

        ${inclusiveUp('sm')} {
          padding: 1.75rem 2.5rem;
        }

        border-bottom: 1px solid ${theme.background('extraHigh')};
        position: absolute;
        top: 0;
        left: 0;
        z-index: ${theme.index.highest};
        width: 100%;
      `}
    >
      <Logo />
    </motion.header>
  )
}

export default TopBar
