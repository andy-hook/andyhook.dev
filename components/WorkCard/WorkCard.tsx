import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { ImagePath } from '../../data/images'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import {
  ResponsiveTextSize,
  setResponsiveTextSize,
} from '../../style/typography'
import AccessibleIcon from '../AccessibleIcon/AccessibleIcon'
import Icon from '../Icon/Icon'
import ImageBase from '../ImageBase/ImageBase'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextHeading from '../Text/TextHeading'
import TextParagraph from '../Text/TextParagraph'

const IMAGE_SCALE_SIZE = 1.04
const IMAGE_SCALE_TRANSITION = { type: 'spring', duration: 0.5, bounce: 0 }

export type WorkCardProps = {
  imagePath: ImagePath
  alt: string
  disabled?: boolean
  title: string
  subtitle: string
  href?: string
  size: 'large' | 'small'
}

const CARD_PROPERTIES: Record<
  WorkCardProps['size'],
  {
    titleSize: ResponsiveTextSize
    imageRenderScale: number
  }
> = {
  small: {
    titleSize: 'xs' as const,
    imageRenderScale: 50,
  },
  large: {
    titleSize: 'sm' as const,
    imageRenderScale: 70,
  },
}

function WorkCard({
  imagePath,
  alt,
  title,
  disabled,
  subtitle,
  href,
  size = 'large',
}: WorkCardProps): JSX.Element {
  const [loaded, setLoaded] = useState(false)
  const theme = useTheme()

  const { titleSize, imageRenderScale } = CARD_PROPERTIES[size]

  return (
    <motion.div initial="rest" whileHover={disabled ? '' : 'hover'}>
      <InteractionBase
        href={href}
        offset={1}
        disabled={disabled}
        css={`
          display: block;
          width: 100%;
        `}
      >
        <div
          css={`
            position: relative;
          `}
        >
          <AnimatePresence>
            {loaded && disabled && (
              <motion.div
                variants={{
                  hidden: {
                    scale: 1.5,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                  },
                }}
                initial="hidden"
                animate="visible"
                transition={{ ...spring.bounce, delay: 0.25 }}
                css={`
                  ${setResponsiveTextSize('body', 'sm')}

                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;

                  padding: 0.9em;
                  color: ${theme.foreground('extraHigh')};

                  border: ${theme.borderWidth.thick} solid
                    ${theme.foreground('extraHigh', 0.2)};
                  border-radius: ${theme.radius.circle};

                  background-color: ${theme.foreground('extraHigh', 0.025)};

                  z-index: ${theme.index.medium};

                  top: 1.5rem;
                  left: 1.5rem;

                  ${inclusiveUp('sm')} {
                    top: 2rem;
                    left: 2rem;
                  }

                  ${inclusiveUp('md')} {
                    top: 2.5rem;
                    left: 2.5rem;
                  }
                `}
              >
                <AccessibleIcon label="Coming soon">
                  <Icon name="lock" />
                </AccessibleIcon>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: IMAGE_SCALE_SIZE,
              },
            }}
            transition={IMAGE_SCALE_TRANSITION}
            css={`
              position: relative;
            `}
          >
            <div
              css={`
                position: relative;
                overflow: hidden;
                border-radius: ${theme.radius.base};

                background-color: ${theme.background('low')};

                z-index: ${theme.index.low};
              `}
            >
              <motion.div
                variants={{
                  rest: {
                    scale: IMAGE_SCALE_SIZE,
                    opacity: 0.9,
                  },
                  hover: {
                    scale: 1,
                    opacity: 1,
                  },
                }}
                transition={IMAGE_SCALE_TRANSITION}
              >
                <ImageBase
                  imagePath={imagePath}
                  alt={alt}
                  scaleRenderFromBp={['sm', imageRenderScale]}
                  visibleOpacity={disabled ? 0.2 : 1}
                  onLoad={() => setLoaded(true)}
                />
              </motion.div>
            </div>
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                },
                hover: {
                  opacity: 1,
                },
              }}
              transition={IMAGE_SCALE_TRANSITION}
              css={`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                box-shadow: ${theme.shadow.high};
                border-radius: ${theme.radius.base};

                z-index: ${theme.index.floor};
              `}
            />
          </motion.div>
        </div>
        <div>
          <TextHeading
            size={titleSize}
            tag="h2"
            css={`
              margin-top: 1.4em;
            `}
          >
            {title}
          </TextHeading>

          <TextParagraph
            size="md"
            color="low"
            css={`
              position: relative;
              width: 100%;
              margin-top: 0.55em;
            `}
          >
            {subtitle}
          </TextParagraph>
        </div>
      </InteractionBase>
    </motion.div>
  )
}

export default WorkCard
