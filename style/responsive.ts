import { getValueAndUnit } from 'polished'
import { down, Orientation, Props, up, between } from 'styled-breakpoints'
import { baseFontSize } from './typography'

export const breakpoints = {
  xxs: '480px',
  xs: '600px',
  sm: '900px',
  md: '1200px',
  lg: '1500px',
  xl: '1700px',
  xxl: '2100px',
}

export type BreakpointName = keyof typeof breakpoints
export type BreakpointList = Record<BreakpointName, string>

export function uniformScale(
  cssValue: string,
  targetMediaQuery: BreakpointName
): string {
  // Split into value and unit
  const [value, unit] = getValueAndUnit(cssValue)
  const breakpoint = breakpoints[targetMediaQuery]

  // Convert from relative to px value
  const convertedUnit = unit === 'px' ? value : value * baseFontSize

  const [bpValue] = getValueAndUnit(breakpoint)

  return `${convertedUnit / (bpValue * 0.01 * 1)}vw`
}

export function inclusiveDown(
  maxWidth: Exclude<BreakpointName, 'xxl'>,
  orientation?: Orientation
): (props: Props) => string {
  return down(maxWidth, orientation)
}

export function inclusiveUp(
  minWidth: BreakpointName,
  orientation?: Orientation
): (props: Props) => string {
  return up(minWidth, orientation)
}

export function inclusiveBetween(
  minWidth: BreakpointName,
  maxWidth: Exclude<BreakpointName, 'xxl'>,
  orientation?: Orientation
): (props: Props) => string {
  return between(minWidth, maxWidth, orientation)
}
