import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { appearance } from '../../style/appearance'

function BackgroundTexture({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const { background } = useTheme()

  return (
    <div {...props}>
      <PatternLayer
        css={`
          z-index: ${appearance.index.floor};
          background: url('/pattern.svg') repeat top left;
          opacity: 0.2;
        `}
      >
        {/* Right */}
        <PatternLayer
          css={`
            z-index: ${appearance.index.high};

            background: linear-gradient(
              85deg,
              ${background('low', 0)} 20%,
              ${background('low', 0.95)} 110%
            );
          `}
        />

        {/* Left */}
        <PatternLayer
          css={`
            z-index: ${appearance.index.medium};

            background: linear-gradient(
              -90deg,
              ${background('low', 0)} 30%,
              ${background('low', 0.95)} 100%
            );
          `}
        />

        {/* Top */}
        <PatternLayer
          css={`
            z-index: ${appearance.index.low};

            background: linear-gradient(
              10deg,
              ${background('low', 0)} 20%,
              ${background('low', 0.95)} 80%
            );
          `}
        />

        {/* Bottom */}
        <PatternLayer
          css={`
            z-index: ${appearance.index.floor};

            background: linear-gradient(
              175deg,
              ${background('low', 0)} 30%,
              ${background('low', 0.95)} 80%
            );
          `}
        />
      </PatternLayer>
    </div>
  )
}

const PatternLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export default BackgroundTexture
