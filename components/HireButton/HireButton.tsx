import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useState } from 'react'
import { appearance, spring } from '../../style/design-tokens'
import { applyForeground, applyPositive } from '../../style/theme'
import {
  setBaseCropAndLineHeight,
  typeBaseMedium,
  typeSizeBaseLg,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

function HireButton(): JSX.Element {
  const [pipCounter, setPipCounter] = useState(0)

  const incrementPulse = useCallback(() => {
    setPipCounter((prevCount) => prevCount + 1)
  }, [])

  return (
    <div
      onMouseEnter={incrementPulse}
      css={`
        display: inline-flex;
        border-radius: ${appearance.radius.pill};
      `}
    >
      <InteractionBase
        radius="pill"
        css={`
          display: flex;
          align-items: center;
          ${typeBaseMedium}
          ${typeSizeBaseLg}
        color: ${applyForeground('extraHigh')};
          padding: 1.1em 1.75em;
          border-radius: ${appearance.radius.pill};
          background-color: ${applyForeground('extraLow')};
        `}
      >
        <div
          css={`
            position: relative;
            font-size: 0.65em;
            margin-right: 1.2em;
          `}
        >
          <Pip />
          <AnimatePresence initial={false}>
            <motion.div
              key={pipCounter}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 4 }}
              transition={spring.softOut}
              css={`
                position: absolute;
                top: 0;
                left: 0;
              `}
            >
              <Pip />
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          css={`
            ${setBaseCropAndLineHeight('flat')}
          `}
        >
          Currently available for hire
        </div>
      </InteractionBase>
    </div>
  )
}

function Pip({ ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      css={`
        width: 1em;
        height: 1em;
        background-color: ${applyPositive('light')};
        border-radius: ${appearance.radius.circle};
      `}
      {...props}
    />
  )
}

export default HireButton
