import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import meta from '../../data/meta'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import SocialIcons from '../SocialIcons/SocialIcons'
import GradientText from '../GradientText/GradientText'

function Footer(): JSX.Element {
  const { foreground } = useTheme()

  return (
    <footer>
      <LayoutGutter>
        <LayoutLimiter>
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
                  ${setTextStyle('body', 'regular')}
                  ${setResponsiveTextSize('body', 'md')}
                  ${setCropAndLineHeight('body', 'flat')}

                  color: ${foreground('low')};
                  margin-bottom: 1.75em;
                `}
              >
                Let’s build something awesome
              </p>
              <h4
                css={`
                  ${setTextStyle('display', 'semiBold')}
                  ${setResponsiveTextSize('display', 'lg')}
                  ${setCropAndLineHeight('display', 'tight')}

                  color: ${foreground('extraHigh')};

                  ${inclusiveDown('xs')} {
                    margin-bottom: 1.75em;
                  }
                `}
              >
                Start by{' '}
                <InteractionBase offset={0.1} href={`mailto:${meta.email}`}>
                  <GradientText
                    css={`
                      ${setTextStyle('display', 'bold')}
                    `}
                  >
                    saying hello
                  </GradientText>
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
