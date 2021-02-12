import React from 'react'
import {
  baseText,
  displayText,
  setCropAndLineHeight,
} from '../../style/typography'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'
import InteractionBase from '../InteractionBase/InteractionBase'
import ImageBase from '../ImageBase/ImageBase'
import Icon from '../Icon/Icon'

type WorkGridItemProps = {
  src: string
  alt?: string
  disabled?: boolean
  title: string
  description: string
  width: number
  height: number
  href: string
}

function WorkGridItem({
  src,
  alt,
  title,
  disabled,
  description,
  width,
  height,
  href,
}: WorkGridItemProps): JSX.Element {
  const { foreground, background } = useTheme()

  return (
    <div>
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
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  top: 2.1em;
                  left: 2.1em;

                  ${baseText.size.lg}
                  padding: 0.75em;

                  color: ${foreground('extraHigh')};

                  border: ${appearance.borderWidth.thick} solid
                    ${foreground('extraHigh', 0.2)};

                  border-radius: ${appearance.radius.circle};

                  z-index: ${appearance.index.medium};
                `}
              >
                <Icon name="lock" />
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
            scaleRenderFromBp={['sm', 70]}
          />
        </div>
        <div
          css={`
            opacity: ${disabled ? 0.4 : 1};
          `}
        >
          <h3
            css={`
              ${displayText.weight.semiBold}
              ${displayText.size.sm}
              ${setCropAndLineHeight('display', 'tight')}

              color: ${foreground('extraHigh')};

              margin-top: 1.25em;
              margin-bottom: 0.4em;
            `}
          >
            {title}
          </h3>
          <p
            css={`
              ${baseText.weight.regular}
              ${baseText.size.md}
              ${setCropAndLineHeight('base', 'tight')}

              color: ${foreground('low')};
            `}
          >
            {description}
          </p>
        </div>
      </InteractionBase>
    </div>
  )
}

export default WorkGridItem
