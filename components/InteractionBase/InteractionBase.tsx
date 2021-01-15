import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useFocusVisible } from '../../hooks/useFocusVisible/useFocusVisible'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { useRouter } from 'next/router'
import { isExternalURL } from '../../utils/general'
import { spring } from '../../style/motion'

type InteractionBaseProps = {
  children: React.ReactNode
  href?: string
  disabled?: boolean
  offset?: number
  radius?: keyof typeof appearance.radius
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const focusMotion = {
  rest: {
    opacity: 0,
    scale: 1.05,
  },
  focus: {
    opacity: 1,
    scale: 1,
  },
}

function getElementProps({
  isAnchor,
  href,
  disabled,
}: {
  isAnchor: boolean
  href?: string
  disabled: boolean
}): [
  'button' | 'a',
  {
    href?: string
    rel?: string
    target?: string
    disabled?: boolean
  }
] {
  if (isAnchor && href) {
    const external = isExternalURL(href)

    return [
      'a',
      disabled
        ? {}
        : {
            href: href,
            rel: external ? 'noopener noreferrer' : '',
            target: external ? '_blank' : '',
          },
    ]
  }

  return [
    'button',
    {
      disabled,
    },
  ]
}

function InteractionBase({
  children,
  href,
  onClick,
  disabled = false,
  offset = 0,
  radius = 'base',
  ...props
}: InteractionBaseProps): JSX.Element {
  const router = useRouter()
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  const { foreground } = useTheme()

  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      // Use internal router for all relative links
      if (href && !isExternalURL(href)) {
        event.preventDefault()
        router.push(href)
      }

      if (onClick) {
        onClick(event)
      }
    },
    [onClick, href, router]
  )

  const [elementTag, elementProps] = getElementProps({
    isAnchor: Boolean(href),
    href,
    disabled,
  })

  return (
    <StyledInteractiveElement
      as={elementTag}
      onClick={handleOnClick}
      onFocus={onFocus}
      onBlur={onBlur}
      {...elementProps}
      {...props}
    >
      {children}
      <AnimatePresence>
        {focusVisible && (
          <motion.span
            variants={focusMotion}
            initial="rest"
            animate="focus"
            exit="rest"
            transition={spring.bounce}
            css={`
              display: block;
              position: absolute;

              top: -${offset}em;
              left: -${offset}em;
              right: -${offset}em;
              bottom: -${offset}em;
              border: ${appearance.borderWidth.regular} dashed
                ${foreground('medium')};
              border-radius: ${appearance.radius[radius]};
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
