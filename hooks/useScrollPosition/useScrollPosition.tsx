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
  const offset = useRef(getWindowScrollOffsets())
  const prevOffset = useRef(getWindowScrollOffsets())
  const prevScrollDirection = useRef({
    x: getInitialState().previous.x.direction,
    y: getInitialState().previous.y.direction,
  })
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>(
    getInitialState()
  )

  const update = useCallback(() => {
    ticking.current = false

    prevScrollDirection.current = {
      x: getDirection(offset.current.x, prevOffset.current.x),
      y: getDirection(offset.current.y, prevOffset.current.y),
    }
    prevOffset.current = offset.current
    offset.current = getWindowScrollOffsets()

    setScrollPosition({
      previous: {
        x: {
          direction: prevScrollDirection.current.x,
          offset: prevOffset.current.x,
        },
        y: {
          direction: prevScrollDirection.current.y,
          offset: prevOffset.current.y,
        },
      },
      current: {
        x: {
          direction: getDirection(offset.current.x, prevOffset.current.x),
          offset: offset.current.x,
        },
        y: {
          direction: getDirection(offset.current.y, prevOffset.current.y),
          offset: offset.current.y,
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
