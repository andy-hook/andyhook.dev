import React, { useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeBaseSemibold,
  typeSizeBaseLg,
} from '../../style/typography'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import InteractionBase from '../InteractionBase/InteractionBase'

function Logo(): JSX.Element {
  const router = useRouter()
  const { foreground } = useTheme()

  const handleNavigate = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault()
      router.push('/')
    },
    [router]
  )

  return (
    <>
      <motion.h2
        variants={{
          rest: {
            color: foreground('medium'),
          },
          hover: {
            color: foreground('high'),
          },
        }}
        initial="rest"
        whileHover="hover"
        css={`
          ${typeBaseSemibold}
          ${typeSizeBaseLg}
          ${setCropAndLineHeight('body', 'flat')}

          margin: -0.75em;
        `}
      >
        <InteractionBase
          href="/"
          onClick={handleNavigate}
          css={`
            padding: 0.75em;
            display: inline-flex;
          `}
        >
          Andy Hook
        </InteractionBase>
      </motion.h2>
    </>
  )
}

export default Logo
