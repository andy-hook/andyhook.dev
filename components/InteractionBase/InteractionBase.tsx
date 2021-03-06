import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { useFocusVisible } from '../../hooks/useFocusVisible/useFocusVisible'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { useRouter } from 'next/router'
import { isExternalURL, noop } from '../../utils/general'
import { Theme } from '../../style/theme'
import { spring } from '../../style/motion'

type InteractionBaseProps = {
  children: React.ReactNode
  href?: string
  disabled?: boolean
  offset?: number | [number, number]
  radius?: keyof Theme['radius']
  newTab?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

type ElementProps = [
  'button' | 'a',
  {
    href?: string
    rel?: string
    target?: string
    disabled?: boolean
  }
]

function getLinkProps(href: string, newTab: boolean): ElementProps {
  const external = isExternalURL(href) || newTab

  const externalProps = external
    ? {
        rel: 'noopener noreferrer',
        target: '_blank',
      }
    : {}

  return [
    'a',
    {
      href: href,
      ...externalProps,
    },
  ]
}

function getButtonProps(disabled: boolean): ElementProps {
  return [
    'button',
    {
      disabled,
    },
  ]
}

function isModifiedEvent(event: React.MouseEvent): boolean {
  const { target } = event.currentTarget as HTMLAnchorElement
  return (
    (target && target !== '_self') ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey || // triggers resource download
    (event.nativeEvent && event.nativeEvent.which === 2)
  )
}

function InteractionBase({
  children,
  href,
  onClick,
  disabled = false,
  offset = 0,
  radius = 'base',
  newTab = false,
  ...props
}: InteractionBaseProps): JSX.Element {
  const router = useRouter()
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  const theme = useTheme()

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (onClick) {
        onClick(event)
      }

      if (isModifiedEvent(event)) {
        return
      }

      // Use internal router for all relative links
      if (href && !isExternalURL(href)) {
        event.preventDefault()
        router.push(href)
      }
    },
    [onClick, href, router]
  )

  const [elementTag, elementProps] =
    href && !disabled ? getLinkProps(href, newTab) : getButtonProps(disabled)

  const [offsetX, offsetY] = useMemo(() => {
    if (typeof offset === 'number') {
      return [offset, offset]
    }

    return offset
  }, [offset])

  return (
    <StyledInteractiveElement
      as={elementTag}
      onClick={!disabled ? handleOnClick : noop}
      onFocus={onFocus}
      onBlur={onBlur}
      {...elementProps}
      {...props}
    >
      {children}
      <AnimatePresence>
        {focusVisible && (
          <motion.span
            variants={{
              initial: {
                opacity: 0,
                scale: 1.15,
              },
              focus: {
                opacity: 1,
                scale: 1,
              },
              exit: {
                opacity: 0,
                scale: 1.05,
              },
            }}
            initial="initial"
            animate="focus"
            exit="exit"
            transition={spring.tactile}
            css={`
              display: block;
              position: absolute;

              top: -${offsetY}em;
              left: -${offsetX}em;
              right: -${offsetX}em;
              bottom: -${offsetY}em;
              border: ${theme.borderWidth.regular} dashed
                ${theme.foreground('medium')};

              border-radius: ${theme.radius[radius]};

              background: linear-gradient(
                135deg,
                ${theme.foreground('extraHigh', 0)},
                ${theme.foreground('extraHigh', 0.02)}
              );

              z-index: -${theme.index.low};
            `}
          />
        )}
      </AnimatePresence>
    </StyledInteractiveElement>
  )
}

const StyledInteractiveElement = styled.button`
  position: relative;
`

export default InteractionBase
