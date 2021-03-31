import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'
import { setResponsiveTextSize, setTextStyle } from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

function getLineMotionVariant(direction: -1 | 1) {
  return {
    variants: {
      stacked: {
        transform: `translateY(0px) rotate(0deg)`,
      },
      crossed: {
        transform: `translateY(${4 * direction}px) rotate(${
          45 * direction
        }deg)`,
      },
    },
    transition: spring.tactile,
  }
}

function MenuTrigger({
  onClick,
  open,
}: {
  onClick: () => void
  open: boolean
}): JSX.Element {
  const theme = useTheme()

  const [topLineMotionProps, bottomLineMotionProps] = useMemo(() => {
    return [getLineMotionVariant(1), getLineMotionVariant(-1)]
  }, [])

  return (
    <InteractionBase
      offset={0.4}
      onClick={onClick}
      radius="base"
      css={`
        ${setTextStyle('body', 'medium')}
        ${setResponsiveTextSize('body', 'xs')}

        color: ${theme.foreground('extraHigh')};
        padding: 0.85em 1.4em;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        <motion.svg
          viewBox="0 0 24 24"
          initial="stacked"
          animate={open ? 'crossed' : 'stacked'}
          css={`
            width: 1em;
            height: 1em;
            stroke: ${theme.foreground('low')};
            margin-right: 0.75em;
          `}
        >
          <motion.path
            d="M1 8H23"
            strokeWidth="2"
            strokeLinecap="round"
            {...topLineMotionProps}
          />
          <motion.path
            d="M1 16H23"
            strokeWidth="2"
            strokeLinecap="round"
            {...bottomLineMotionProps}
          />
        </motion.svg>
        {open ? 'Close' : 'Menu'}
      </div>
    </InteractionBase>
  )
}

export default MenuTrigger
