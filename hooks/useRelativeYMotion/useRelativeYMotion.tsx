import { useMemo } from 'react'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { inclusiveDown } from '../../style/responsive'
import {
  getRelativeMotionProps,
  RelativeMotionProps,
} from './getRelativeMotionProps'

function useRelativeYMotion(offsetValue: number): RelativeMotionProps {
  const enableRelativeYDistance = useBreakpoint(inclusiveDown('xl'))

  return useMemo(
    () => getRelativeMotionProps(enableRelativeYDistance || true, offsetValue),
    [enableRelativeYDistance, offsetValue]
  )
}

export { useRelativeYMotion }
