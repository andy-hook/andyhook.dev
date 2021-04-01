import React, { useContext } from 'react'
import {
  useLayoutEffect,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react'
import { isBrowser } from '../../utils/general'

type YAxisPosition = {
  direction: 'up' | 'down'
  offset: number
}

type XAxisPosition = {
  direction: 'left' | 'right'
  offset: number
}

type ScrollPosition = {
  prevPos: {
    x: XAxisPosition
    y: YAxisPosition
  }
  currPos: {
    x: XAxisPosition
    y: YAxisPosition
  }
}

function getInitialState(): ScrollPosition {
  const { x, y } = getScrollPosition()

  const initialPosition = {
    x: {
      direction: 'right' as const,
      offset: x,
    },
    y: { direction: 'down' as const, offset: y },
  }

  return {
    prevPos: initialPosition,
    currPos: initialPosition,
  }
}

const ScrollPositionContext = React.createContext<ScrollPosition>(
  getInitialState()
)

function ScrollPositionProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const currPosition = useRef(getScrollPosition())
  const prevPosition = useRef(getScrollPosition())
  const prevDirection = useRef(
    (() => {
      const {
        prevPos: { x, y },
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
  const ticking = useRef(false)

  const update = useCallback(() => {
    ticking.current = false

    const prevPos = prevPosition.current
    const currPos = currPosition.current

    setScrollPosition({
      prevPos: {
        x: {
          direction: 'right',
          offset: prevPos.x,
        },
        y: { direction: 'down', offset: prevPos.y },
      },
      currPos: {
        x: {
          direction: currPos.x >= prevPos.x ? 'right' : 'left',
          offset: currPos.x,
        },
        y: {
          direction: currPos.y >= prevPos.y ? 'down' : 'up',
          offset: currPos.y,
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

  const onScroll = useCallback(() => {
    prevDirection.current = {
      x: prevPosition.current.x >= currPosition.current.x ? 'right' : 'left',
      y: prevPosition.current.y >= currPosition.current.y ? 'down' : 'up',
    }
    prevPosition.current = currPosition.current
    currPosition.current = getScrollPosition()

    requestTick()
  }, [requestTick])

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

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

function getScrollPosition(): { x: number; y: number } {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }

  return { x: window.scrollX, y: window.scrollY }
}

export { useScrollPosition, ScrollPositionProvider }
