import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import {
  setTextStyle,
  ResponsiveTextSize,
  setResponsiveTextSize,
} from '../../style/typography'
import Icon from '../Icon/Icon'
import ImageBase from '../ImageBase/ImageBase'
import InteractionBase from '../InteractionBase/InteractionBase'
import TextHeading from '../Text/TextHeading'
import TextParagraph from '../Text/TextParagraph'

export type WorkCardProps = {
  src: string
  alt?: string
  disabled?: boolean
  title: string
  description: string
  width: number
  height: number
  href: string
  size: 'large' | 'small'
}

const CARD_PROPERTIES: Record<
  WorkCardProps['size'],
  {
    titleSize: ResponsiveTextSize
    lockIconSize: ResponsiveTextSize
    imageRenderScale: number
  }
> = {
  small: {
    titleSize: 'xs' as const,
    lockIconSize: 'xxs' as const,
    imageRenderScale: 50,
  },
  large: {
    titleSize: 'sm' as const,
    lockIconSize: 'xs' as const,
    imageRenderScale: 70,
  },
}

function WorkCard({
  src,
  alt,
  title,
  disabled,
  description,
  width,
  height,
  href,
  size = 'large',
}: WorkCardProps): JSX.Element {
  const { foreground, background } = useTheme()

  const { titleSize, lockIconSize, imageRenderScale } = CARD_PROPERTIES[size]

  return (
    <InteractionBase
      href={href}
      offset={0.75}
      disabled={disabled}
      css={`
        display: block;
      `}
    >
      <div
        css={`
          position: relative;
          overflow: hidden;
          border-radius: ${appearance.radius.base};
        `}
      >
        {disabled && (
          <>
            <div
              css={`
                ${setResponsiveTextSize('body', lockIconSize)}

                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 2.5em;
                left: 2.5em;

                padding: 0.7em 1.4em;
                color: ${foreground('extraHigh')};

                border: ${appearance.borderWidth.thick} solid
                  ${foreground('extraHigh', 0.2)};
                border-radius: ${appearance.radius.pill};

                background-color: ${foreground('extraHigh', 0.025)};

                z-index: ${appearance.index.medium};
              `}
            >
              <Icon
                name="lock"
                css={`
                  margin-right: 0.5em;
                `}
              />
              <span
                css={`
                  ${setTextStyle('body', 'regular')}
                `}
              >
                Coming Soon
              </span>
            </div>
            <div
              css={`
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;

                opacity: 0.8;

                background-color: ${background('low')};

                z-index: ${appearance.index.low};
              `}
            />
          </>
        )}

        <ImageBase
          src={src}
          alt={alt}
          width={width}
          height={height}
          scaleRenderFromBp={['sm', imageRenderScale]}
        />
      </div>
      <div
        css={`
          opacity: ${disabled ? 0.4 : 1};
        `}
      >
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
          {description}
        </TextParagraph>
      </div>
    </InteractionBase>
  )
}

export default WorkCard
