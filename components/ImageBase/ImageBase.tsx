import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { BreakpointName, breakpoints } from '../../style/responsive'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'
import { css, keyframes } from 'styled-components'
import { imageData, ImageProperties } from '../../data/images'
import { loadingShimmerGradientFromColor } from '../../style/utils'

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

type BackgroundColorPreset = 'light' | 'dark'

type ImageBaseProps = {
  scaleRender?: number
  scaleRenderFromBp?: [BreakpointName, number]
  quality?: number
  backgroundColor?: BackgroundColorPreset | string
  onLoad?: () => void
  visibleOpacity?: number
  loading?: 'eager' | 'lazy'
} & ImageProperties

function ImageBase({
  imagePath,
  alt,
  backgroundColor = 'dark',
  scaleRender = 100,
  quality = 90,
  scaleRenderFromBp,
  onLoad,
  visibleOpacity = 1,
  loading = 'eager',
  ...props
}: ImageBaseProps): JSX.Element {
  const { background, foreground } = useTheme()
  const [showLoader, setShowLoader] = useState(true)

  const image = imageData[imagePath]

  // There is no need to optimise and render srcset for a scalable SVG
  const unoptimized = useMemo(() => imagePath.endsWith('.svg'), [imagePath])

  const sizesMediaString = useMemo(() => {
    if (!scaleRenderFromBp) {
      return `${scaleRender}vw`
    }

    const [breakpointName, breakpointScaleValue] = scaleRenderFromBp

    return `(min-width: ${breakpoints[breakpointName]}) ${breakpointScaleValue}vw, ${scaleRender}vw`
  }, [scaleRender, scaleRenderFromBp])

  const imageLoaded = useCallback(() => {
    setShowLoader(false)
    onLoad && onLoad()
  }, [onLoad])

  // When using loading strategy "eager", next/image won't reliably fire onLoad events when retrieving from client cache
  // To work around this we need to check the "complete" property on the image element and run the same set of callbacks
  const handleLoadFromCache = useCallback(
    (wrapperRef) => {
      // We are unable to set a ref to the underlying image element directly so we must access it via querySelector on the wrapper
      // We are querying by srcset attribute to differentiate from the placeholder image that next/image adds to reserve space
      // https://github.com/vercel/next.js/discussions/18386
      const image = wrapperRef?.querySelector('img[srcset]') as HTMLImageElement

      if (image && image.complete && showLoader) {
        imageLoaded()
      }
    },
    [showLoader, imageLoaded]
  )

  const handleLoadEvent = useCallback(
    (e) => {
      // The next/image placeholder image triggers a duplicate event
      // We only want to trigger the load handler when the actual image is loaded, hence making sure the source of the target element triggering the event is not base64.
      // See https://github.com/vercel/next.js/issues/20368#issuecomment-757446007
      if (e.target.src.indexOf('data:image/gif;base64') < 0) {
        imageLoaded()
      }
    },
    [imageLoaded]
  )

  const { gradientStop, gradientStopAlpha, sourceColor } = useMemo(() => {
    const backgroundPreset: Record<BackgroundColorPreset, string> = {
      light: foreground('extraHigh'),
      dark: background('medium'),
    }

    const isPreset = backgroundColor === 'light' || backgroundColor === 'dark'

    return loadingShimmerGradientFromColor(
      isPreset
        ? backgroundPreset[backgroundColor as BackgroundColorPreset]
        : backgroundColor
    )
  }, [background, foreground, backgroundColor])

  return (
    <div
      ref={handleLoadFromCache}
      css={`
        position: relative;
        background-color: ${sourceColor};
      `}
      {...props}
    >
      <AnimatePresence>
        {showLoader && (
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
                  ${gradientStopAlpha} 20%,
                  ${gradientStop},
                  ${gradientStopAlpha} 80%
                );

                ${shimmerAnimation}
              `}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial="hidden"
        animate={showLoader ? 'hidden' : 'visible'}
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
          unoptimized={unoptimized}
          loading={loading}
          quality={quality}
          onLoad={handleLoadEvent}
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
