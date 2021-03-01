import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { ImagePath } from '../../data/images'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import { spring } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import {
  ResponsiveTextSize,
  setResponsiveTextSize,
} from '../../style/typography'
import Icon from '../Icon/Icon'
import ImageBase from '../ImageBase/ImageBase'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextHeading from '../Text/TextHeading'
import TextParagraph from '../Text/TextParagraph'

export type WorkCardProps = {
  imagePath: ImagePath
  alt?: string
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

  const { foreground, background } = useTheme()

  const { titleSize, imageRenderScale } = CARD_PROPERTIES[size]

  return (
    <InteractionBase
      href={href}
      offset={0.75}
      disabled={disabled}
      css={`
        display: block;
        width: 100%;
      `}
    >
      <div
        css={`
          position: relative;
          overflow: hidden;
          border-radius: ${appearance.radius.base};

          background-color: ${background('low')};
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
                color: ${foreground('extraHigh')};

                border: ${appearance.borderWidth.thick} solid
                  ${foreground('extraHigh', 0.2)};
                border-radius: ${appearance.radius.circle};

                background-color: ${foreground('extraHigh', 0.025)};

                z-index: ${appearance.index.medium};

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
              <Icon name="lock" />
            </motion.div>
          )}
        </AnimatePresence>

        <ImageBase
          imagePath={imagePath}
          alt={alt}
          scaleRenderFromBp={['sm', imageRenderScale]}
          visibleOpacity={disabled ? 0.2 : 1}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div>
        <TextHeading
          size={titleSize}
          tag="h3"
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
            margin-top: 0.55em;
          `}
        >
          {subtitle}
        </TextParagraph>
      </div>
    </InteractionBase>
  )
}

export default WorkCard
