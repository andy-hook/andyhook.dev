import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BreakpointName, breakpoints } from '../../style/responsive'

type ImageBaseProps = {
  src: string
  width: number
  height: number
  alt?: string
  scaleRender?: number
  scaleRenderFromBp?: [BreakpointName, number]
}

function ImageBase({
  src,
  width,
  height,
  alt,
  scaleRender = 100,
  scaleRenderFromBp,
}: ImageBaseProps): JSX.Element {
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

  return (
    <div>
      <motion.div
        initial="hidden"
        animate={loading ? 'hidden' : 'visible'}
        variants={visibleMotion}
      >
        <Image
          loading="lazy"
          quality={100}
          onLoad={() => setLoading(false)}
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
