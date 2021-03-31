import React, { useRef, useEffect } from 'react'

function useDetectOutsideClick(
  callback: () => void
): React.RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])

  return ref
}

function DetectOutsideClick({
  onOutsideClick,
  children,
  ...props
}: {
  onOutsideClick: () => void
  children: React.ReactNode
}): JSX.Element {
  const ref = useDetectOutsideClick(onOutsideClick)

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
}

export { useDetectOutsideClick, DetectOutsideClick }
