import React, { useMemo } from 'react'
import { META, SOCIAL_NETWORK_INFO } from '../../data/meta'
import { PROJECTS, PROJECT_ORDER } from '../../data/projects'
import { useLocationState } from '../../hooks/useLocationState/useLocationState'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { setResponsiveTextSize, setTextStyle } from '../../style/typography'
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
        grid-gap: 50px;
        padding-top: 5rem;

        background: linear-gradient(
          -45deg,
          ${theme.background('low')} 0%,
          ${theme.background('medium')} 90%
        );

        border-radius: ${theme.radius.base};
        border: ${theme.borderWidth.regular} solid
          ${theme.background('extraHigh')};
        box-shadow: ${theme.shadow.high};
        min-width: 28rem;
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

            const active = projectItem.active || noActiveItemsInList

            return (
              <li
                key={projectItem.key}
                css={`
                  ${setTextStyle('display', 'bold')}

                  color: ${theme.foreground(
                    disabled ? 'extraLow' : active ? 'extraHigh' : 'extraLow'
                  )};
                  opacity: ${disabled ? 0.3 : 1};
                `}
              >
                <InteractionBase
                  href={route}
                  disabled={disabled}
                  offset={[0.9, 0.3]}
                  css={`
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;

                    padding-bottom: 0.3em;
                    padding-top: 0.3em;
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
                        opacity: ${!disabled && active ? 1 : 0.5};
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
                      display: flex;
                      padding-left: 1.4em;
                    `}
                  >
                    {title}
                  </span>
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
                    display: flex;
                    align-items: center;
                    width: 100%;

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
                    `}
                  />
                  <div>{title}</div>
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
          <TextBase
            size="xs"
            weight="medium"
            color="high"
            css={`
              display: flex;
              align-items: center;
              padding-top: 0.5em;
              padding-bottom: 0.5em;
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
        </InteractionBase>
      </MenuPadSection>
    </div>
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
        padding-left: 3rem;
        padding-right: 8rem;
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
