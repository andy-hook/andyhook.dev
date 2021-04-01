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
  const [hovered, setHovered] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setOpen((prevValue) => !prevValue)
  }, [])

  const handleMenuClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleButtonHovered = useCallback(() => {
    setHovered(true)
  }, [])

  const handleButtonBlurred = useCallback(() => {
    setHovered(false)
  }, [])

  return (
    <DetectOutsideClick
      onOutsideClick={handleMenuClose}
      css={`
        position: relative;
      `}
    >
      <motion.div
        onMouseOver={handleButtonHovered}
        onMouseOut={handleButtonBlurred}
        animate={{
          transform: `translate(${open ? '-10%' : '0%'}, ${
            open ? '26%' : '0%'
          })`,
        }}
        transition={spring.punchy}
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
                scale: 0.95,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={spring.punchy}
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

      <motion.div
        animate={{ opacity: hovered ? 1 : 0.4 }}
        transition={spring.tactile}
        css={`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          z-index: ${theme.index.floor};

          box-shadow: ${theme.foreground('extraLow')} 0 0 0
            ${theme.borderWidth.regular} inset;
          background-color: ${theme.background('medium')};
          border-radius: ${theme.radius.base};
        `}
      />
    </DetectOutsideClick>
  )
}

export default Menu
