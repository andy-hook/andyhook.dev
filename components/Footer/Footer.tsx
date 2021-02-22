import React from 'react'
import meta from '../../data/meta'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import { setTextStyle } from '../../style/typography'
import InteractionBase from '../InteractionBase/InteractionBase'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import SocialIcons from '../SocialIcons/SocialIcons'
import GradientText from '../GradientText/GradientText'
import TextHeading from '../Text/TextHeading'
import TextBase from '../Text/TextBase'

function Footer(): JSX.Element {
  return (
    <footer>
      <LayoutGutter>
        <LayoutLimiter>
          <LayoutRow
            css={`
              display: flex;
              flex-direction: column;

              ${inclusiveUp('md')} {
                justify-content: space-between;
                flex-direction: row;
                align-items: flex-end;
              }
            `}
          >
            <div>
              <TextBase
                lineHeight="flat"
                color="low"
                css={`
                  margin-bottom: 1.75em;
                `}
              >
                Let’s build something awesome
              </TextBase>

              <TextHeading
                size="lg"
                tag="h4"
                css={`
                  ${inclusiveDown('sm')} {
                    margin-bottom: 1.4em;
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
              </TextHeading>
            </div>

            <SocialIcons />
          </LayoutRow>
        </LayoutLimiter>
      </LayoutGutter>
    </footer>
  )
}

export default Footer
