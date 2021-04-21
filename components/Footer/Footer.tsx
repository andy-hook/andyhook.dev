import React from 'react'
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
import LayoutShade from '../Layout/LayoutShade'
import { META } from '../../data/meta'
import Signature from '../Signature/Signature'
import { useTheme } from '../../hooks/useTheme/useTheme'

function Footer(): JSX.Element {
  const theme = useTheme()

  return (
    <footer>
      <LayoutShade borderTop>
        <LayoutGutter
          css={`
            overflow: hidden;
          `}
        >
          <LayoutLimiter
            css={`
              position: relative;
            `}
          >
            <LayoutRow
              css={`
                display: flex;
                flex-direction: column;
                position: relative;
                z-index: ${theme.index.low};
                align-items: center;

                ${inclusiveDown('xs')} {
                  text-align: center;
                }

                ${inclusiveUp('sm')} {
                  align-items: flex-start;
                }

                ${inclusiveUp('md')} {
                  justify-content: space-between;
                  flex-direction: row;
                  align-items: flex-end;
                }
              `}
            >
              <div>
                <TextBase lineHeight="flat" color="low">
                  Let’s build something awesome
                </TextBase>

                <TextHeading
                  size="lg"
                  lineHeight="flat"
                  color="high"
                  tag="h2"
                  css={`
                    margin-top: 0.75em;

                    ${inclusiveDown('sm')} {
                      margin-bottom: 1.25em;
                    }
                  `}
                >
                  Start by{' '}
                  <InteractionBase
                    offset={[0.2, 0.05]}
                    href={`mailto:${META.email}`}
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

            <Signature
              css={`
                position: absolute;

                top: 50%;
                right: 50%;
                transform: translate(60%, -31%);
                z-index: ${theme.index.floor};
                font-size: clamp(50rem, calc(50rem + 50vw), 120rem);
                width: 1em;
                opacity: 0.4;
              `}
            />
          </LayoutLimiter>
        </LayoutGutter>
      </LayoutShade>
    </footer>
  )
}

export default Footer
