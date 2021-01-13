import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeDisplaySemibold,
  typeSizeDisplayMd,
} from '../../style/typography'
import ExpList from '../ExpList/ExpList'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import RemoveWidow from '../RemoveWidow/RemoveWidow'
import TypeParagraph from '../Type/TypeParagraph'

function About(): JSX.Element {
  const { background, foreground } = useTheme()
  return (
    <LayoutGutter
      css={`
        background-color: ${background('low')};
      `}
    >
      <LayoutRow>
        <LayoutLimiter size="large">
          <div
            css={`
              display: grid;
              grid-template-columns: 0.95fr 1.05fr;
              grid-gap: 20px;
              margin-bottom: 80px;
            `}
          >
            <div>
              <h2
                css={`
                  ${typeDisplaySemibold}
                  ${typeSizeDisplayMd}
                  ${setCropAndLineHeight('display', 'tight')}

                  color: ${foreground('extraHigh')};
                `}
              >
                <RemoveWidow>More than 10 years in the game</RemoveWidow>
              </h2>
            </div>
            <div>
              <TypeParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt hendrerit ex, at elementum augue malesuada
                eu. Pellentesque habitant morbi dtristique senectus et netus et
                malesuada fames ac turpis egestas. Nam congue maximus erat vel
                tincidunt.
              </TypeParagraph>

              <TypeParagraph>
                Aliquam eget hendrerit elit. Donec malesuada, augue quis blandit
                interdum, sapien tellus lacinia neque, ut varius diam nisl in
                erat. Fusce augue turpis, sollicitudin in elit ac, tristique
                varius ante. Nullam vel sapien id turpis iaculis fringilla eu a
                ipsum.
              </TypeParagraph>
            </div>
          </div>
          <div>
            <ExpList />
          </div>
        </LayoutLimiter>
      </LayoutRow>
    </LayoutGutter>
  )
}

export default About
