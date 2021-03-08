import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { useRelativeYMotion } from '../../hooks/useRelativeYMotion/useRelativeYMotion'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import Logo from '../Logo/Logo'

function Footer({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const motionVariants = useRelativeYMotion(-ENTRANCE_TRANSITION_Y_DISTANCE / 2)
  const router = useRouter()

  return (
    <LayoutGutter
      css={`
        width: 100%;
      `}
      {...props}
    >
      <LayoutLimiter>
        <motion.header
          key={router.pathname}
          variants={motionVariants}
          transition={{ ...spring.snappy, delay: ENTRANCE_TRANSITION_DELAY }}
          initial="hidden"
          animate="visible"
          css={`
            padding-top: 3rem;

            ${inclusiveUp('sm')} {
              padding-top: 3.75rem;
            }

            ${inclusiveUp('md')} {
              padding-top: 4rem;
            }
          `}
        >
          <Logo />
        </motion.header>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

export default Footer
