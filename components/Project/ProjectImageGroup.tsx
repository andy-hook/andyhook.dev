import { rgba } from 'polished'
import React, { createContext, useContext, useMemo } from 'react'
import { css } from 'styled-components'
import { ImageProperties } from '../../data/images'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { inclusiveUp } from '../../style/responsive'
import ImageBase from '../ImageBase/ImageBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import ScrollReveal from '../ScrollReveal/ScrollReveal'

type ProjectImageGroupProps = {
  framed?: boolean
  frameGradientStart?: string
  frameGradientEnd?: string
  children: React.ReactNode
  loadingColor?: string
}

const ProjectImageGroupContext = createContext<{
  framed?: boolean
  loadingColor?: string
}>(null!)

/* -------------------------------------------------------------------------------------------------
 * ProjectImageGroup
 * -----------------------------------------------------------------------------------------------*/

const ProjectImageGroup = ({
  framed,
  frameGradientStart,
  frameGradientEnd,
  children,
  loadingColor,
}: ProjectImageGroupProps): JSX.Element => {
  const { currentProjectAccent } = useTheme()

  const contextValue = useMemo(
    () => ({
      framed,
      loadingColor,
    }),
    [framed, loadingColor]
  )

  const framedGradient = useMemo(() => {
    const gradientStart = frameGradientStart || currentProjectAccent('light')
    const gradientEnd = frameGradientEnd || currentProjectAccent('dark')

    return framed
      ? `background: linear-gradient(100deg,
      ${gradientStart} 0%,
      ${gradientEnd} 75%
    );`
      : ''
  }, [frameGradientStart, frameGradientEnd, currentProjectAccent, framed])

  return (
    <ProjectImageGroupContext.Provider value={contextValue}>
      <div
        css={`
          ${framedGradient}
        `}
      >
        {children}
      </div>
    </ProjectImageGroupContext.Provider>
  )
}

ProjectImageGroup.displayName = 'ProjectImageGroup'

/* -------------------------------------------------------------------------------------------------
 * ProjectImageGroupItem
 * -----------------------------------------------------------------------------------------------*/

const ProjectImageGroupItem = ({
  alt,
  imagePath,
  loadingColor,
}: ImageProperties & { loadingColor?: string }) => {
  const { framed, loadingColor: parentLoadingColor } = useContext(
    ProjectImageGroupContext
  )

  const theme = useTheme()

  const backgroundColor = useMemo(() => {
    const defaultColor = framed ? 'light' : 'dark'
    const customColor = loadingColor ?? parentLoadingColor

    return customColor || defaultColor
  }, [framed, loadingColor, parentLoadingColor])

  return (
    <LayoutGutter
      css={`
        ${framed ? framedAppearance : standardSpacing}

        ${framed &&
        `&:nth-child(even) {
          background: linear-gradient(
            135deg,
            ${rgba(theme.currentProjectAccent('dark'), 0.2)} 0%,
            ${rgba(theme.currentProjectAccent('dark'), 0.2)} 50%
          );
        }`}
      `}
    >
      <LayoutLimiter size="large">
        <ScrollReveal>
          <div
            css={`
              overflow: hidden;
              box-shadow: ${theme.shadow.low};
              border-radius: ${theme.radius[framed ? 'frame' : 'large']};
            `}
          >
            <ImageBase
              imagePath={imagePath}
              backgroundColor={backgroundColor}
              alt={alt}
            />
          </div>
        </ScrollReveal>
      </LayoutLimiter>
    </LayoutGutter>
  )
}

ProjectImageGroupItem.displayName = 'ProjectImageGroupImage'

const standardSpacing = css`
  &:not(:last-child) {
    margin-bottom: 3rem;

    ${inclusiveUp('sm')} {
      margin-bottom: 5%;
    }

    ${inclusiveUp('xxl')} {
      margin-bottom: 6rem;
    }
  }
`

const framedAppearance = css`
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${inclusiveUp('sm')} {
    padding-top: 8%;
    padding-bottom: 8%;
  }

  ${inclusiveUp('xxl')} {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
`

ProjectImageGroup.Item = ProjectImageGroupItem

export default ProjectImageGroup
