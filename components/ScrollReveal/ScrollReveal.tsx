import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { spring } from '../../style/motion'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { inclusiveDown } from '../../style/responsive'

type ScrollRevealProps = {
  children: React.ReactNode
}

function ScrollReveal({ children }: ScrollRevealProps): JSX.Element {
  const useRelativeYDistance = useBreakpoint(inclusiveDown('xl'))

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-15%',
    initialInView: true,
  })

  const variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: useRelativeYDistance ? '5vw' : 100,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }),
    [useRelativeYDistance]
  )

  return (
    <motion.div
      ref={ref}
      initial="visible"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={spring.snappy}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
