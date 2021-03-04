import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { BreakpointName, breakpoints } from '../../style/responsive'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'
import { css, keyframes } from 'styled-components'
import { darken, lighten, rgba } from 'polished'
import { imageData, ImageProperties } from '../../data/images'

const shimmerAnimation = css`
  background-size: 500% 500%;

  animation: ${keyframes`
    0%{
      background-position: 100% 100%;
      opacity: 0.75;
    }
    100%{
      background-position: 0% 0%;
      opacity: 0;
    }
  `} 2s linear infinite;
`

type ImageBaseProps = {
  scaleRender?: number
  scaleRenderFromBp?: [BreakpointName, number]
  quality?: number
  loaderShade?: 'dark' | 'light'
  onLoad?: () => void
  visibleOpacity?: number
} & ImageProperties

function ImageBase({
  imagePath,
  alt,
  loaderShade = 'dark',
  scaleRender = 100,
  quality = 80,
  scaleRenderFromBp,
  onLoad,
  visibleOpacity = 1,
  ...props
}: ImageBaseProps): JSX.Element {
  const { background, foreground } = useTheme()
  const [loading, setLoading] = useState(true)

  const image = imageData[imagePath]

  const sizesMediaString = useMemo(() => {
    if (!scaleRenderFromBp) {
      return `${scaleRender}vw`
    }

    const [breakpointName, breakpointScaleValue] = scaleRenderFromBp

    return `(min-width: ${breakpoints[breakpointName]}) ${breakpointScaleValue}vw, ${scaleRender}vw`
  }, [scaleRender, scaleRenderFromBp])

  // const handleOnLoad = useCallback(
  //   (e) => {
  //     // The next/image placeholder image triggers a duplicate event
  //     // We only want to trigger the load handler when the actual image is loaded, hence making sure the source of the target element triggering the event is not base64.
  //     // See https://github.com/vercel/next.js/issues/20368#issuecomment-757446007
  //     if (e.target.src.indexOf('data:image/gif;base64') < 0) {
  //       setLoading(false)

  //       onLoad && onLoad()
  //     }
  //   },
  //   [onLoad]
  // )

  const { centerStop, edgeStop, backboardColor } = useMemo(() => {
    const stops = {
      light: [foreground('extraHigh'), darken(0.4, foreground('extraHigh'))],
      dark: [background('medium'), lighten(0.2, background('medium'))],
    }

    const [backboardColor, centerStop] = stops[loaderShade]
    const edgeStop = rgba(centerStop, 0)

    return { centerStop, edgeStop, backboardColor }
  }, [background, foreground, loaderShade])

  return (
    <div
      ref={(ref) => {
        const image = ref?.querySelector('img[srcset]') as HTMLImageElement

        if (image && image.complete && loading) {
          setLoading(false)
          onLoad && onLoad()
        }
      }}
      css={`
        position: relative;
        background-color: ${backboardColor};
      `}
      {...props}
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            initial="visible"
            animate="visible"
            exit="hidden"
            transition={spring.snappy}
            css={`
              position: absolute;

              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
            `}
          >
            <div
              css={`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                background: linear-gradient(
                  143deg,
                  ${edgeStop} 20%,
                  ${centerStop},
                  ${edgeStop} 80%
                );

                ${shimmerAnimation}
              `}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial="hidden"
        animate={loading ? 'hidden' : 'visible'}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: visibleOpacity,
          },
        }}
        transition={spring.snappy}
      >
        <Image
          loading="eager"
          quality={quality}
          // onLoad={handleOnLoad}
          src={`/images/${image.imagePath}`}
          sizes={sizesMediaString}
          width={image.width}
          height={image.height}
          alt={alt}
          layout="responsive"
        />
      </motion.div>
    </div>
  )
}

export default ImageBase
