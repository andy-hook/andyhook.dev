import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import {
  setCropAndLineHeight,
  typeBaseRegular,
  typeDisplaySemibold,
  typeSizeBaseLg,
  typeSizeDisplayLg,
} from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import SocialIcons from '../SocialIcons/SocialIcons'

function Footer(): JSX.Element {
  const { background, foreground } = useTheme()

  return (
    <footer
      css={`
        /* background-color: ${background('extraLow')}; */
      `}
    >
      <LayoutGutter>
        <LayoutLimiter size="large" divider>
          <LayoutRow
            css={`
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            `}
          >
            <div>
              <p
                css={`
                  ${typeBaseRegular}
                  ${typeSizeBaseLg}
                  ${setCropAndLineHeight('body', 'regular')}

                  color: ${foreground('low')};
                  margin-bottom: 1.75em;
                `}
              >
                Let’s build something awesome
              </p>
              <h4
                css={`
                  ${typeDisplaySemibold}
                  ${typeSizeDisplayLg}
                  ${setCropAndLineHeight('display', 'tight')}

                  color: ${foreground('extraHigh')};
                `}
              >
                Start by saying hello
              </h4>
            </div>
            <SocialIcons />
          </LayoutRow>
        </LayoutLimiter>
      </LayoutGutter>
    </footer>
  )
}

export default Footer
