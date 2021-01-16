import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import meta from '../../meta'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import {
  baseText,
  displayText,
  setCropAndLineHeight,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import SocialIcons from '../SocialIcons/SocialIcons'

function Footer(): JSX.Element {
  const { foreground, accent } = useTheme()

  return (
    <footer>
      <LayoutGutter>
        <LayoutLimiter size="large" divider>
          <LayoutRow
            css={`
              ${inclusiveUp('sm')} {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
              }
            `}
          >
            <div>
              <p
                css={`
                  ${baseText.weight.regular}
                  ${baseText.size.lg}
                  ${setCropAndLineHeight('base', 'flat')}

                  color: ${foreground('low')};
                  margin-bottom: 1.75em;
                `}
              >
                Let’s build something awesome
              </p>
              <h4
                css={`
                  ${displayText.weight.semiBold}
                  ${displayText.size.lg}
                  ${setCropAndLineHeight('display', 'tight')}

                  color: ${foreground('extraHigh')};

                  ${inclusiveDown('xs')} {
                    margin-bottom: 1.75em;
                  }
                `}
              >
                Start by{' '}
                <InteractionBase offset={0.1} href={`mailto:${meta.email}`}>
                  <span
                    css={`
                      background: linear-gradient(
                        160deg,
                        ${accent('light')} 0%,
                        ${accent('base')} 75%
                      );

                      background-clip: text;
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                    `}
                  >
                    saying hello
                  </span>
                </InteractionBase>
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
