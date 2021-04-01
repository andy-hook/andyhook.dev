import React from 'react'
import { motion } from 'framer-motion'
import { css } from 'styled-components'
import { useRelativeYMotion } from '../../hooks/useRelativeYMotion/useRelativeYMotion'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'

const containerXPadding = css`
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  ${inclusiveUp('xxs')} {
    padding-left: 6%;
    padding-right: 6%;
  }

  ${inclusiveUp('xs')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ${inclusiveUp('sm')} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`

function TopBar(): JSX.Element {
  const theme = useTheme()
  const motionVariants = useRelativeYMotion(-ENTRANCE_TRANSITION_Y_DISTANCE / 2)

  return (
    <div
      css={`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        z-index: ${theme.index.high};
      `}
    >
      <motion.header
        variants={motionVariants}
        transition={{ ...spring.snappy, delay: ENTRANCE_TRANSITION_DELAY }}
        initial="hidden"
        animate="visible"
        css={`
          ${containerXPadding}
          display: flex;

          align-items: center;
          justify-content: space-between;

          border-bottom: ${theme.borderWidth.regular} solid
            ${theme.background('extraHigh')};

          background-color: ${theme.background('low')};

          height: 3.75rem;

          ${inclusiveUp('sm')} {
            height: 4.4rem;
          }
        `}
      >
        <div
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <Logo />
        </div>

        <Menu />
      </motion.header>
    </div>
  )
}

export default TopBar
