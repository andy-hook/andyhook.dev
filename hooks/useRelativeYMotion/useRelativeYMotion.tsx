import { useMemo } from 'react'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { inclusiveDown } from '../../style/responsive'
import {
  getRelativeMotionProps,
  RelativeMotionProps,
} from './getRelativeMotionProps'

function useRelativeYMotion(offsetValue: number): RelativeMotionProps {
  const enableRelativeYDistance = useBreakpoint(inclusiveDown('xl'))

  console.log(enableRelativeYDistance)

  return useMemo(
    () => getRelativeMotionProps(Boolean(enableRelativeYDistance), offsetValue),
    [enableRelativeYDistance, offsetValue]
  )
}

export { useRelativeYMotion }
