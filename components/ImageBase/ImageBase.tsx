import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BreakpointName, breakpoints } from '../../style/responsive'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'

type ImageBaseProps = {
  src: string
  width: number
  height: number
  alt?: string
  scaleRender?: number
  scaleRenderFromBp?: [BreakpointName, number]
  backgroundColor?: string
}

function ImageBase({
  src,
  width,
  height,
  alt,
  scaleRender = 100,
  backgroundColor,
  scaleRenderFromBp,
}: ImageBaseProps): JSX.Element {
  const { background } = useTheme()
  const [loading, setLoading] = useState(true)

  const visibleMotion = useMemo(
    () => ({
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    }),
    []
  )

  const sizesMediaString = useMemo(() => {
    if (!scaleRenderFromBp) {
      return `${scaleRender}vw`
    }

    const [breakpointName, breakpointScaleValue] = scaleRenderFromBp

    return `(min-width: ${breakpoints[breakpointName]}) ${breakpointScaleValue}vw, ${scaleRender}vw`
  }, [scaleRender, scaleRenderFromBp])

  const handleOnLoad = useCallback((e) => {
    // The next/image placeholder image triggers a duplicate event
    // We only want to trigger the load handler when the actual image is loaded, hence making sure the source of the target element triggering the event is not base64.
    // See https://github.com/vercel/next.js/issues/20368#issuecomment-757446007
    e.target.src.indexOf('data:image/gif;base64') < 0 && setLoading(false)
  }, [])

  return (
    <div
      css={`
        background-color: ${backgroundColor || background('medium')};
      `}
    >
      <motion.div
        initial="hidden"
        animate={loading ? 'hidden' : 'visible'}
        variants={visibleMotion}
        transition={spring.softOut}
      >
        <Image
          loading="lazy"
          quality={100}
          onLoad={handleOnLoad}
          src={src}
          sizes={sizesMediaString}
          width={width}
          height={height}
          alt={alt}
          layout="responsive"
        />
      </motion.div>
    </div>
  )
}

export default ImageBase
