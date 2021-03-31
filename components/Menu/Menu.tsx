import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useState } from 'react'
import { DetectOutsideClick } from '../../hooks/useDetectOutsideClick/useDetectOutsideClick'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'
import MenuPanel from './MenuPanel'
import MenuTrigger from './MenuTrigger'

function Menu(): JSX.Element {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setOpen((prevValue) => !prevValue)
  }, [])

  const handleMenuClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <DetectOutsideClick
      onOutsideClick={handleMenuClose}
      css={`
        position: relative;
      `}
    >
      <motion.div
        initial="closed"
        animate={open ? 'open' : 'closed'}
        variants={{
          open: {
            transform: 'translate(-10%, 26%)',
          },
          closed: {
            transform: 'translate(0%, 0%)',
          },
        }}
        transition={spring.tactile}
        css={`
          position: relative;
          z-index: ${theme.index.medium};
        `}
      >
        <MenuTrigger open={open} onClick={handleMenuToggle} />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.85,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={spring.tactile}
            css={`
              transform-origin: top right;
              position: absolute;
              top: 0;
              right: 0;

              z-index: ${theme.index.low};
            `}
          >
            <MenuPanel />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        css={`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          z-index: ${theme.index.floor};

          box-shadow: ${theme.foreground('extraLow', 0.4)} 0 0 0
            ${theme.borderWidth.regular} inset;

          border-radius: ${theme.radius.base};
        `}
      />
    </DetectOutsideClick>
  )
}

export default Menu
