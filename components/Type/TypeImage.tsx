import React from 'react'
import Image from 'next/image'
import { typeSizeBaseMd } from '../../style/typography'
import { appearance } from '../../style/appearance'

function TypeImage(): JSX.Element {
  return (
    <div
      css={`
        overflow: hidden;
        border-radius: ${appearance.radius.base};

        ${typeSizeBaseMd}

        margin-top: 5em;
        margin-bottom: 5em;

        opacity: 0.05;
      `}
    >
      <Image src={'/test.png'} width={500} height={250} layout="responsive" />
    </div>
  )
}

export default TypeImage
