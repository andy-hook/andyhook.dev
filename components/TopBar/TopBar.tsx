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
import { useScrollPosition } from '../../hooks/useScrollPosition/useScrollPosition'

const VISIBILITY_OFFSET_PX = 1500
const RAISED_EFFECT_OFFSET_PX = 5

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
  const { current } = useScrollPosition()

  const raisedEffect = current.y.offset > RAISED_EFFECT_OFFSET_PX
  const visible =
    (current.y.offset > VISIBILITY_OFFSET_PX &&
      current.y.direction === 'backward') ||
    current.y.offset <= VISIBILITY_OFFSET_PX

  return (
    <motion.div
      animate={{
        transform: visible ? 'translateY(0%)' : 'translateY(-100%',
      }}
      transition={spring.tactile}
      css={`
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;

        height: 3.75rem;

        ${inclusiveUp('sm')} {
          height: 4.4rem;
        }

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

          height: 100%;
        `}
      >
        <div
          css={`
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;

            z-index: ${theme.index.medium};
          `}
        >
          <Logo />

          <Menu />
        </div>

        <motion.div
          animate={{ opacity: raisedEffect ? 1 : 0 }}
          transition={spring.punchy}
          css={`
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            z-index: ${theme.index.floor};
            background: linear-gradient(
              5deg,
              ${theme.background('medium')} 0%,
              ${theme.background('low')} 50%
            );

            box-shadow: ${theme.shadow.low};

            border-bottom: ${theme.borderWidth.regular} solid
              ${theme.background('extraHigh')};
          `}
        />
      </motion.header>
    </motion.div>
  )
}

export default TopBar
