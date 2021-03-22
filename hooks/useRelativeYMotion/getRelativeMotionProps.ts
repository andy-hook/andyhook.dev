type MotionProps = {
  opacity: number
  y: string | number
}

export type RelativeMotionProps = Record<'hidden' | 'visible', MotionProps>

export function getRelativeMotionProps(
  useRelative: boolean,
  offsetValue: number
): RelativeMotionProps {
  return {
    hidden: {
      opacity: 0,
      y: useRelative ? `${offsetValue / 15}vw` : offsetValue,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
}
