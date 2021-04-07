import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { spring } from '../../style/motion'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { setLightness } from 'polished'
import { useLoadPercentage } from '../../hooks/useLoadPercentage/useLoadPercentage'

function LoadingIndicator(): JSX.Element {
  const [loadComplete, setLoadComplete] = useState(false)
  const [hidden, setHidden] = useState(false)
  const router = useRouter()
  const theme = useTheme()
  const percentLoaded = useLoadPercentage()

  useEffect(() => {
    if (percentLoaded === 100) {
      setLoadComplete(true)
    }
  }, [percentLoaded])

  // We only fill the bar half the way using the loaded percentage
  // This let's us rapidly fill the remainder once everything has loaded
  // This improves perceived performance
  // https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance
  const barPosition = loadComplete ? 0 : -100 + percentLoaded / 2

  return (
    <motion.div
      key={router.pathname}
      transition={spring.tactile}
      animate={{ opacity: hidden ? 0 : 1 }}
      css={`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;

        z-index: ${theme.index.highest};
      `}
    >
      <motion.div
        initial={{ x: '-100%' }}
        transition={spring[loadComplete ? 'snappy' : 'soft']}
        animate={{ x: `${barPosition}%` }}
        onAnimationComplete={() => {
          if (loadComplete) {
            setHidden(true)
          }
        }}
        css={`
          position: relative;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            -90deg,
            ${setLightness(0.7, theme.currentProjectAccent('light'))} 0%,
            ${theme.currentProjectAccent('dark')} 30%
          );
          border-radius: ${theme.radius.pill};
          box-shadow: ${theme.shadow.high};
          overflow: hidden;

          &::after {
            content: '';
            position: absolute;

            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;

            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              ${setLightness(0.7, theme.currentProjectAccent('light', 0.25))}
            );
          }
        `}
      />
    </motion.div>
  )
}

export default LoadingIndicator
