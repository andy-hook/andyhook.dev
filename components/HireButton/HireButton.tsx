import React from 'react'
import { appearance } from '../../style/design-tokens'
import { themeForeground } from '../../style/theme'
import {
  setBaseCropAndLineHeight,
  typeBaseMedium,
  typeSizeBaseLg,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'

function HireButton(): JSX.Element {
  return (
    <InteractionBase
      radius="pill"
      css={`
        display: flex;
        align-items: center;
        ${typeBaseMedium}
        ${typeSizeBaseLg}
        color: ${themeForeground('extraHigh')};
        padding: 1.1em 1.75em;
        border-radius: ${appearance.radius.pill};
        background-color: ${themeForeground('extraLow')};
      `}
    >
      <div
        css={`
          width: 0.6em;
          height: 0.6em;
          background-color: red;
          border-radius: ${appearance.radius.circle};

          margin-right: 0.75em;
        `}
      />
      <div
        css={`
          ${setBaseCropAndLineHeight('flat')}
        `}
      >
        Currently available for hire
      </div>
    </InteractionBase>
  )
}

export default HireButton
