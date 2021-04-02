import React, { useContext } from 'react'
import {
  useLayoutEffect,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react'
import { isBrowser } from '../../utils/general'

type Direction = 'forward' | 'backward'

type Position = {
  y: {
    direction: Direction
    offset: number
  }
  x: {
    direction: Direction
    offset: number
  }
}

type ScrollPosition = {
  previous: Position
  current: Position
}

const ScrollPositionContext = React.createContext<ScrollPosition>(
  getInitialState()
)

function ScrollPositionProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const ticking = useRef(false)
  const currPosition = useRef(getWindowScrollOffsets())
  const prevPosition = useRef(getWindowScrollOffsets())
  const prevDirection = useRef(
    (() => {
      const {
        previous: { x, y },
      } = getInitialState()

      return {
        x: x.direction,
        y: y.direction,
      }
    })()
  )
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>(
    getInitialState()
  )

  const update = useCallback(() => {
    ticking.current = false

    prevDirection.current = {
      x: getDirection(currPosition.current.x, prevPosition.current.x),
      y: getDirection(currPosition.current.y, prevPosition.current.y),
    }

    prevPosition.current = currPosition.current

    const lastestOffsets = getWindowScrollOffsets()
    const previousOffsets = prevPosition.current

    currPosition.current = lastestOffsets

    setScrollPosition({
      previous: {
        x: {
          direction: prevDirection.current.x,
          offset: previousOffsets.x,
        },
        y: { direction: prevDirection.current.y, offset: previousOffsets.y },
      },
      current: {
        x: {
          direction: getDirection(lastestOffsets.x, previousOffsets.x),
          offset: lastestOffsets.x,
        },
        y: {
          direction: getDirection(lastestOffsets.y, previousOffsets.y),
          offset: lastestOffsets.y,
        },
      },
    })
  }, [])

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(update)
    }
    ticking.current = true
  }, [update])

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    window.addEventListener('scroll', requestTick)

    return () => window.removeEventListener('scroll', requestTick)
  }, [requestTick])

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {children}
    </ScrollPositionContext.Provider>
  )
}

function useScrollPosition(): ScrollPosition {
  return useContext(ScrollPositionContext)
}

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

function getInitialState(): ScrollPosition {
  const { x, y } = getWindowScrollOffsets()

  const initialPosition = {
    x: {
      direction: 'forward' as const,
      offset: x,
    },
    y: { direction: 'forward' as const, offset: y },
  }

  return {
    previous: initialPosition,
    current: initialPosition,
  }
}

function getDirection(current: number, previous: number): Direction {
  return current >= previous ? 'forward' : 'backward'
}

function getWindowScrollOffsets(): { x: number; y: number } {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }

  return { x: window.scrollX, y: window.scrollY }
}

export { useScrollPosition, ScrollPositionProvider }
