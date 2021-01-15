import React from 'react'
import MetaSocial from '../components/Meta/MetaSocial'
import TypeParagraph from '../components/Type/TypeParagraph'
import WorkTemplate from '../components/WorkTemplate/WorkTemplate'

function Blocks(): JSX.Element {
  return (
    <>
      <MetaSocial title="Blocks" description="Blocks description" />
      <WorkTemplate>
        <TypeParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel tincidunt.
        </TypeParagraph>
        <TypeParagraph>
          Aliquam eget hendrerit elit. Donec malesuada, augue quis blandit
          interdum, sapien tellus lacinia neque, ut varius diam nisl in erat.
          Fusce augue turpis, sollicitudin in elit ac, tristique varius ante.
          Nullam vel sapien id turpis iaculis fringilla eu a ipsum.
        </TypeParagraph>
        <TypeParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel tincidunt.
        </TypeParagraph>
        <TypeParagraph>
          Aliquam eget hendrerit elit. Donec malesuada, augue quis blandit
          interdum, sapien tellus lacinia neque, ut varius diam nisl in erat.
          Fusce augue turpis, sollicitudin in elit ac, tristique varius ante.
          Nullam vel sapien id turpis iaculis fringilla eu a ipsum.
        </TypeParagraph>
      </WorkTemplate>
    </>
  )
}

export default Blocks
