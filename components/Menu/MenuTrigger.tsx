import { motion } from 'framer-motion'
import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

function MenuTrigger({
  onClick,
  open,
}: {
  onClick: () => void
  open: boolean
}): JSX.Element {
  const theme = useTheme()

  return (
    <InteractionBase
      offset={0.4}
      onClick={onClick}
      radius="base"
      css={`
        ${setTextStyle('body', 'medium')}
        ${setResponsiveTextSize('body', 'xs')}

        color: ${theme.foreground('extraHigh')};

        padding: 1em 1.4em;
      `}
    >
      <div
        css={`
          ${setCropAndLineHeight('body', 'flat')}
        `}
      >
        <div
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <svg
            viewBox="0 0 24 24"
            css={`
              width: 1em;
              height: 1em;
              stroke: ${theme.foreground('low')};
              margin-right: 0.75em;
            `}
          >
            <motion.path d="M1 8H23" strokeWidth="2" strokeLinecap="round" />
            <motion.path d="M1 16H23" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {open ? 'Close' : 'Menu'}
        </div>
      </div>
    </InteractionBase>
  )
}

export default MenuTrigger
