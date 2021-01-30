import { motion } from 'framer-motion'
import React from 'react'
import { slideInMotion } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import Logo from '../Logo/Logo'

function Footer({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <LayoutGutter
      css={`
        width: 100%;
      `}
      {...props}
    >
      <LayoutLimiter size="large">
        <motion.header
          variants={slideInMotion}
          initial="offset"
          animate="rest"
          custom={{ offset: -75, delay: 0.25 }}
          css={`
            padding-top: 4rem;

            ${inclusiveUp('sm')} {
              padding-top: 3.75rem;
            }

            ${inclusiveUp('md')} {
              padding-top: 4.75rem;
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
