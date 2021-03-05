import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { spring } from '../../style/motion'

type ScrollRevealProps = {
  children: React.ReactNode
}

function ScrollReveal({ children }: ScrollRevealProps): JSX.Element {
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
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={spring.snappy}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
