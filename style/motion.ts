export const spring = {
  bounce: {
    type: 'spring',
    stiffness: 260,
    damping: 15,
  },
  softOut: {
    type: 'spring',
    stiffness: 100,
    damping: 30,
  },
}

type SlideInMotionProps = {
  offset: number
  delay: number
}

export const slideInMotion = {
  offset: (props: SlideInMotionProps): { opacity: number; y: number } => ({
    opacity: 0,
    y: props.offset,
  }),
  rest: (
    props: SlideInMotionProps
  ): {
    opacity: number
    y: number
    transition: {
      type: string
      stiffness: number
      damping: number
      delay: number
    }
  } => ({
    opacity: 1,
    y: 0,
    transition: { delay: props.delay, ...spring.softOut },
  }),
}
