// Accessible icon implementation heavily inspired by the fantastic Radix UI team
// https://github.com/radix-ui/primitives/blob/main/packages/react/accessible-icon/src/AccessibleIcon.tsx
import React from 'react'

type AccessibleIconProps = {
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string
  children: React.ReactNode
}

function AccessibleIcon({ children, label }: AccessibleIconProps): JSX.Element {
  const child = React.Children.only(children)
  return (
    <>
      {React.cloneElement(child as React.ReactElement, {
        // accessibility
        'aria-hidden': 'true',
        focusable: 'false', // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
      })}
      <span
        css={`
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: absolute;
          border: 0;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          whitespace: nowrap;
          wordwrap: normal;
        `}
      >
        {label}
      </span>
    </>
  )
}

export default AccessibleIcon
