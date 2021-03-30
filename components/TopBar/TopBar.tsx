import { motion } from 'framer-motion'
import React from 'react'
import { css } from 'styled-components'
import { useRelativeYMotion } from '../../hooks/useRelativeYMotion/useRelativeYMotion'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import { setCropAndLineHeight, setTextStyle } from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        z-index: ${theme.index.high};

        pointer-events: none;
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

          height: 4.8rem;

          pointer-events: auto;
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
        <div
          css={`
            display: flex;
            align-items: center;

            height: 100%;
          `}
        >
          <InteractionBase
            offset={0.4}
            onClick={() => {
              console.log('hello')
            }}
            radius="base"
            css={`
              ${setTextStyle('body', 'medium')}

              color: ${theme.foreground('extraHigh')};

              box-shadow: ${theme.foreground('extraLow', 0.4)} 0 0 0
                ${theme.borderWidth.regular} inset;

              border-radius: ${theme.radius.base};
              padding: 0.9em 1.5em;
            `}
          >
            <div
              css={`
                ${setCropAndLineHeight('body', 'flat')}
              `}
            >
              Menu
            </div>
          </InteractionBase>
        </div>
      </motion.header>
      <div
        css={`
          ${containerXPadding}

          padding-top: 2rem;

          display: flex;
          justify-content: flex-end;

          pointer-events: none;
        `}
      >
        <div
          css={`
            pointer-events: auto;
          `}
        >
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default TopBar
