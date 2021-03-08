import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { spring } from '../../style/motion'
import { useRelativeYMotion } from '../../hooks/useRelativeYMotion/useRelativeYMotion'

type ScrollRevealProps = {
  children: React.ReactNode
}

function ScrollReveal({ children }: ScrollRevealProps): JSX.Element {
  const motionVariants = useRelativeYMotion(100)

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-15%',
    initialInView: true,
  })

  return (
    <motion.div
      ref={ref}
      initial="visible"
      animate={inView ? 'visible' : 'hidden'}
      variants={motionVariants}
      transition={spring.snappy}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
