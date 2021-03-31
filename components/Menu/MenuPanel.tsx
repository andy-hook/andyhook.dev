import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { META, SOCIAL_NETWORK_INFO } from '../../data/meta'
import { PROJECTS, PROJECT_ORDER } from '../../data/projects'
import { useLocationState } from '../../hooks/useLocationState/useLocationState'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { spring } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import {
  setCropAndLineHeight,
  setResponsiveTextSize,
  setTextStyle,
} from '../../style/typography'
import { keys } from '../../utils/general'
import AccessibleIcon from '../AccessibleIcon/AccessibleIcon'
import Icon from '../Icon/Icon'
import InteractionBase from '../InteractionBase/InteractionBase'
import Pip from '../Pip/Pip'
import TextBase from '../Text/TextBase'

function MenuPanel(): JSX.Element {
  const theme = useTheme()
  const { currentProjectName } = useLocationState()

  const { projectListItems, noActiveItemsInList } = useMemo(() => {
    const projectListItems = PROJECT_ORDER.map((key) => ({
      key,
      accent: theme.projectAccent(key, 'base'),
      active: key === currentProjectName,
      details: PROJECTS[key],
    }))

    const noActiveItemsInList = !projectListItems.find(({ active }) => active)

    return { projectListItems, noActiveItemsInList }
  }, [currentProjectName, theme])

  return (
    <div
      css={`
        display: grid;
        position: relative;
        z-index: ${theme.index.floor};
        grid-auto-flow: row;

        background: linear-gradient(
          -45deg,
          ${theme.background('low')} 0%,
          ${theme.background('medium')} 90%
        );

        border-radius: ${theme.radius.base};
        border: ${theme.borderWidth.regular} solid
          ${theme.background('extraHigh')};
        box-shadow: ${theme.shadow.high};

        width: calc(100vw - 3.25rem);
        padding-top: 3.5rem;
        grid-gap: 2.5rem;

        ${inclusiveUp('xxs')} {
          width: 24rem;
        }

        ${inclusiveUp('sm')} {
          padding-top: 4.25rem;
          width: 26rem;
          grid-gap: 2.75rem;
        }

        ${inclusiveUp('lg')} {
          padding-top: 5rem;
          width: 29rem;
          grid-gap: 3.1rem;
        }
      `}
    >
      <MenuNavSet heading="Projects">
        <ul
          css={`
            ${setResponsiveTextSize('display', 'xs')}

            margin-top: -0.5em;
            margin-bottom: -0.3em;
          `}
        >
          {projectListItems.map((projectItem) => {
            const { disabled, route, title } = projectItem.details

            const highlight = projectItem.active || noActiveItemsInList
            const disableInteraction = highlight && !noActiveItemsInList

            return (
              <li
                key={projectItem.key}
                css={`
                  ${setTextStyle('display', 'bold')}

                  color: ${theme.foreground(
                    disabled ? 'extraLow' : highlight ? 'extraHigh' : 'extraLow'
                  )};
                  opacity: ${disabled ? 0.3 : 1};
                `}
              >
                <InteractionBase
                  href={route}
                  disabled={disabled}
                  offset={[0.9, 0.3]}
                  css={`
                    cursor: ${disableInteraction ? 'default' : 'pointer'};
                    width: 100%;
                  `}
                >
                  <MenuItemHoverInteraction
                    disabled={disableInteraction || disabled}
                    css={`
                      padding-bottom: 0.45em;
                      padding-top: 0.45em;
                    `}
                  >
                    {disabled ? (
                      <div
                        css={`
                          position: absolute;
                          left: 0;
                          top: 50%;
                          transform: translate(0.1em, -40%);
                          font-size: 0.7em;
                        `}
                      >
                        <AccessibleIcon label="Coming soon">
                          <Icon name="lock" />
                        </AccessibleIcon>
                      </div>
                    ) : (
                      <div
                        css={`
                          position: absolute;
                          left: 0.3em;
                          top: 50%;
                          transform: translateY(-50%);
                          opacity: ${!disabled && highlight ? 1 : 0.5};
                        `}
                      >
                        <Pip
                          backgroundColor={
                            disabled
                              ? theme.foreground('extraLow')
                              : theme.projectAccent(projectItem.key, 'base')
                          }
                        />
                      </div>
                    )}
                    <span
                      css={`
                        ${setCropAndLineHeight('display', 'flat')}

                        padding-left: 1.4em;
                      `}
                    >
                      {title}
                    </span>
                  </MenuItemHoverInteraction>
                </InteractionBase>
              </li>
            )
          })}
        </ul>
      </MenuNavSet>

      <MenuNavSet heading="Connect">
        <ul
          css={`
            ${setResponsiveTextSize('body', 'xs')}

            margin-top: -0.5em;
            margin-bottom: -0.5em;
          `}
        >
          {keys(META.socialAlias).map((key) => {
            const { icon, title, url } = SOCIAL_NETWORK_INFO[key]

            return (
              <li
                key={key}
                css={`
                  ${setTextStyle('body', 'medium')}

                  color: ${theme.foreground('high')};
                `}
              >
                <InteractionBase
                  href={url}
                  offset={[0.9, 0.3]}
                  css={`
                    width: 100%;
                  `}
                >
                  <MenuItemHoverInteraction
                    css={`
                      padding-bottom: 0.4em;
                      padding-top: 0.4em;
                    `}
                  >
                    <Icon
                      name={icon}
                      css={`
                        color: ${theme.foreground('extraLow')};
                        font-size: 1.2em;
                        margin-right: 0.6em;
                        opacity: 0.75;
                      `}
                    />
                    {title}
                  </MenuItemHoverInteraction>
                </InteractionBase>
              </li>
            )
          })}
        </ul>
      </MenuNavSet>

      <MenuPadSection
        css={`
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
          border-top: ${theme.borderWidth.regular} solid
            ${theme.background('extraHigh')};
        `}
      >
        <InteractionBase
          href={`mailto:${META.email}`}
          newTab
          offset={[1.25, 0.5]}
          css={`
            display: block;
          `}
        >
          <MenuItemHoverInteraction
            css={`
              padding-top: 0.5em;
              padding-bottom: 0.5em;
            `}
          >
            <TextBase
              size="xs"
              weight="medium"
              color="high"
              css={`
                display: flex;
                align-items: center;
              `}
            >
              <Pip />

              <span
                css={`
                  margin-left: 1em;
                `}
              >
                Limited availability in 2021
              </span>
            </TextBase>
          </MenuItemHoverInteraction>
        </InteractionBase>
      </MenuPadSection>
    </div>
  )
}

function MenuItemHoverInteraction({
  disabled,
  children,
  ...props
}: {
  disabled?: boolean
  children: React.ReactNode
}): JSX.Element {
  const theme = useTheme()

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      css={`
        position: relative;
        display: flex;
        align-items: center;
      `}
      {...props}
    >
      {children}
      {!disabled && (
        <span
          css={`
            position: relative;
            top: 0.1em;
            font-size: 0.8em;
            margin-left: 0.4em;
            overflow: hidden;
            color: ${theme.foreground('extraLow')};
          `}
        >
          <motion.div
            variants={{
              rest: {
                opacity: 0,
                transform: 'translateX(-50%)',
              },
              hover: { opacity: 1, transform: 'translateX(0%)' },
            }}
            transition={spring.tactile}
          >
            <Icon name="arrowRight" />
          </motion.div>
        </span>
      )}
    </motion.div>
  )
}

function MenuPadSection({
  children,
  ...props
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div
      css={`
        padding-left: 2rem;

        ${inclusiveUp('sm')} {
          padding-left: 2.75rem;
        }

        ${inclusiveUp('lg')} {
          padding-left: 3.1rem;
        }
      `}
      {...props}
    >
      {children}
    </div>
  )
}

function MenuNavSet({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}): JSX.Element {
  return (
    <MenuPadSection>
      <TextBase
        tag="h4"
        color="extraLow"
        size="xs"
        weight="medium"
        css={`
          margin-bottom: 1.5em;
        `}
      >
        {heading}
      </TextBase>
      <nav>{children}</nav>
    </MenuPadSection>
  )
}

export default MenuPanel
