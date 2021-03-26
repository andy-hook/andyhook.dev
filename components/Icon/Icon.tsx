import React from 'react'
import { IconName, ICON_PATHS } from '../../data/icons'

type IconProps = {
  name: IconName
}

function Icon({ name, ...props }: IconProps): JSX.Element {
  const iconPath = ICON_PATHS[name]

  return (
    <div
      css={`
        width: 1em;
        height: 1em;
      `}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        css={`
          display: block;
          width: 100%;
          height: 100%;
          fill: currentColor;
        `}
      >
        <path d={iconPath} />
      </svg>
    </div>
  )
}

export default Icon
