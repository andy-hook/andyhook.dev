import React, { useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeBaseSemibold,
  typeSizeBaseLg,
} from '../../style/typography'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

function Logo({ ...props }: React.HTMLAttributes<HTMLElement>): JSX.Element {
  const router = useRouter()
  const { foreground } = useTheme()

  const handleNavigate = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault()
      router.push('/')
    },
    [router]
  )

  return (
    <>
      <h2
        css={`
          ${typeBaseSemibold}
          ${typeSizeBaseLg}
          ${setCropAndLineHeight('body', 'flat')}

          margin: -0.75em;
        `}
        {...props}
      >
        <motion.a
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
          href="/"
          onClick={handleNavigate}
          css={`
            padding: 0.75em;
            display: inline-flex;
          `}
        >
          Andy Hook
        </motion.a>
      </h2>
    </>
  )
}

export default Logo
