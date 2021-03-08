import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { spring } from '../../style/motion'
import { useTheme } from '../../hooks/useTheme/useTheme'

type VisibilityStatus = 'visible' | 'hidden'
type LoadingStatus = 'rest' | 'complete'

const LOADING_BAR_MOTION_VARIANTS: Record<LoadingStatus, { x: string }> = {
  rest: {
    x: '-100%',
  },
  complete: {
    x: '0%',
  },
}

const VISIBILITY_MOTION_VARIANTS: Record<
  VisibilityStatus,
  { opacity: number }
> = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

function LoadingIndicator(): JSX.Element {
  const router = useRouter()
  const theme = useTheme()
  const [visibilityStatus, setVisibilityStatus] = useState<VisibilityStatus>(
    'hidden'
  )
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('rest')

  const setLoading = useCallback(
    (newPath) => {
      // Don't display the indicator if navigating to the current route
      if (router.pathname !== newPath) {
        setVisibilityStatus('visible')
        setLoadingStatus('complete')
      }
    },
    [router.pathname]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', setLoading)

    return () => {
      router.events.off('routeChangeStart', setLoading)
    }
  }, [router.events, setLoading])

  return (
    <motion.div
      key={router.pathname}
      variants={VISIBILITY_MOTION_VARIANTS}
      initial="hidden"
      animate={visibilityStatus}
      transition={{ type: 'spring', duration: 0.4 }}
      css={`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;

        z-index: ${theme.index.highest};
      `}
    >
      <motion.div
        initial="rest"
        transition={spring.soft}
        animate={loadingStatus}
        variants={LOADING_BAR_MOTION_VARIANTS}
        onAnimationComplete={() => setVisibilityStatus('hidden')}
        css={`
          height: 100%;
          width: 100%;
          background: linear-gradient(
            -90deg,
            ${theme.accent('light')} 0%,
            ${theme.accent('base')} 50%
          );
          border-radius: ${theme.radius.pill};
          box-shadow: ${theme.shadow.high};
        `}
      />
    </motion.div>
  )
}

export default LoadingIndicator
