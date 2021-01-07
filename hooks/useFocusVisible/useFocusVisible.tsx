import React, { useEffect, useState, useContext, useCallback } from 'react'

// A React hook based on: https://github.com/WICG/focus-visible

/**
 * Add a group of listeners to detect usage of any pointing devices.
 * These listeners will be added when the polyfill first loads, and anytime
 * the window is blurred, so that they are active when the window regains
 * focus.
 */

const initialPointerMoveEvents = [
  'mousemove',
  'mousedown',
  'mouseup',
  'pointermove',
  'pointerdown',
  'pointerup',
  'touchmove',
  'touchstart',
  'touchend',
]

function addInitialPointerMoveHandlers(handler: (e: Event) => void) {
  initialPointerMoveEvents.forEach((eventName) => {
    document.addEventListener(eventName, handler)
  })
}

function removeInitialPointerMoveHandlers(handler: (e: Event) => void) {
  initialPointerMoveEvents.forEach((eventName) => {
    document.removeEventListener(eventName, handler)
  })
}

const FocusVisibleContext = React.createContext({
  hadKeyboardEvent: true,
})

function FocusVisibleManager({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [hadKeyboardEvent, setHadKeyboardEvent] = useState(true)

  const onPointerDown = useCallback(() => {
    setHadKeyboardEvent(false)
  }, [])

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   */
  const onInitialPointerMove = useCallback((e: Event) => {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    const target = e?.target as Element
    if (target?.nodeName?.toLowerCase() === 'html') {
      return
    }

    setHadKeyboardEvent(false)
    removeInitialPointerMoveHandlers(onInitialPointerMove)
  }, [])

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return
    }

    setHadKeyboardEvent(true)
  }, [])

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   */
  const onVisibilityChange = useCallback(() => {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      setHadKeyboardEvent(true)
    }
  }, [])

  useEffect(() => {
    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true)
    document.addEventListener('mousedown', onPointerDown, true)
    document.addEventListener('pointerdown', onPointerDown, true)
    document.addEventListener('touchstart', onPointerDown, true)
    document.addEventListener('visibilitychange', onVisibilityChange, true)

    addInitialPointerMoveHandlers(onInitialPointerMove)

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      document.removeEventListener('mousedown', onPointerDown, true)
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('touchstart', onPointerDown, true)
      document.removeEventListener('visibilitychange', onVisibilityChange, true)

      removeInitialPointerMoveHandlers(onInitialPointerMove)
    }
  }, [setHadKeyboardEvent])

  return (
    <FocusVisibleContext.Provider value={{ hadKeyboardEvent }}>
      {children}
    </FocusVisibleContext.Provider>
  )
}

function useFocusVisible(): {
  focusVisible: boolean
  onFocus: () => void
  onBlur: () => void
} {
  const [isFocused, setIsFocused] = useState(false)
  const { hadKeyboardEvent } = useContext(FocusVisibleContext)

  const focusVisible = hadKeyboardEvent && isFocused

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return {
    focusVisible,
    onFocus,
    onBlur,
  }
}

export { FocusVisibleManager, useFocusVisible }
