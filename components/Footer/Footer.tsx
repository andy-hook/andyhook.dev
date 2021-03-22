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
import { removeWidow } from '../../style/utils'

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
              <TextBase lineHeight="flat" color="low">
                Let’s build something awesome together
              </TextBase>

              <TextHeading
                size="lg"
                lineHeight="flat"
                color="high"
                tag="h2"
                css={`
                  margin-top: 0.6em;

                  ${inclusiveDown('sm')} {
                    margin-bottom: 1.4em;
                  }
                `}
              >
                Start by{' '}
                <InteractionBase
                  offset={[0.2, 0.05]}
                  href={`mailto:${meta.email}`}
                >
                  <GradientText
                    css={`
                      ${setTextStyle('display', 'extraBold')}
                    `}
                  >
                    {removeWidow('saying hello')}
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
