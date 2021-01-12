import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useFocusVisible } from '../../hooks/useFocusVisible/useFocusVisible'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance, spring } from '../../style/appearance'

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
    return [
      'a',
      disabled
        ? {}
        : {
            href: href,
            rel: 'noopener noreferrer',
            target: '_blank',
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
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  const { foreground } = useTheme()

  const [elementTag, elementProps] = getElementProps({
    isAnchor: Boolean(href),
    href,
    disabled,
  })

  return (
    <StyledInteractiveElement
      as={elementTag}
      onClick={onClick && onClick}
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
