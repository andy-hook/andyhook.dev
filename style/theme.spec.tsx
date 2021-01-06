import React from 'react'
import { render } from '../utils/testing'
import {
  themeForeground,
  themeForegroundAlpha,
  isDarkTheme,
  isLightTheme,
  isTheme,
  themeLayer,
  themeLayerAlpha,
} from './theme'
import styled from 'styled-components'
import 'jest-styled-components'

const ThemeLayerComponent = styled.div`
  color: ${themeLayer('medium')};
`

const ThemeLayerAlphaComponent = styled.div`
  color: ${themeLayerAlpha('medium', 0.5)};
`

const ThemeForegroundComponent = styled.div`
  color: ${themeForeground('medium')};
`

const ThemeForegroundAlphaComponent = styled.div`
  color: ${themeForegroundAlpha('medium', 0)};
`

const IsDarkThemeComponent = styled.div`
  ${isDarkTheme('color: red;')};
`

const IsLightThemeComponent = styled.div`
  ${isLightTheme('color: red;')};
`

const IsThemeComponent = styled.div`
  ${isTheme('dark', 'color: red;')};
`

const IsNotThemeComponent = styled.div`
  ${isTheme('dark', 'color: red;', 'color: blue;')};
`

describe('darkThemeLayer', () => {
  it('renders correct hsl from given layer value', () => {
    const { container } = render(<ThemeLayerComponent />)
    expect(container.firstChild).toHaveStyleRule('color', `hsl(207,13%,14%)`)
  })
})

describe('darkThemeLayerAlpha', () => {
  it('renders correct hsla from given layer and opacity value', () => {
    const { container } = render(<ThemeLayerAlphaComponent />)
    expect(container.firstChild).toHaveStyleRule(
      'color',
      'hsla(207,13%,14%,0.5)'
    )
  })
})

describe('ThemeForeground', () => {
  it('renders correct hsl from given text value', () => {
    const { container } = render(<ThemeForegroundComponent />)
    expect(container.firstChild).toHaveStyleRule('color', 'hsl(206,10%,55%)')
  })
})

describe('ThemeForegroundAlpha', () => {
  it('renders correct hsla from given text value', () => {
    const { container } = render(<ThemeForegroundAlphaComponent />)
    expect(container.firstChild).toHaveStyleRule('color', 'hsla(206,10%,55%,0)')
  })
})

describe('isDarkTheme', () => {
  it('renders style block when using a dark theme', () => {
    const { container } = render(<IsDarkThemeComponent />)
    expect(container.firstChild).toHaveStyleRule('color', 'red')
  })

  it('does not render style block when using a light theme', () => {
    const { container } = render(<IsDarkThemeComponent />, {
      theme: 'light',
    })
    expect(container.firstChild).not.toHaveStyleRule('color', 'red')
  })
})

describe('isLightTheme', () => {
  it('renders style block when using a light theme', () => {
    const { container } = render(<IsLightThemeComponent />, {
      theme: 'light',
    })
    expect(container.firstChild).toHaveStyleRule('color', 'red')
  })

  it('does not render style block when using a dark theme', () => {
    const { container } = render(<IsLightThemeComponent />)
    expect(container.firstChild).not.toHaveStyleRule('color', 'red')
  })
})

describe('isTheme', () => {
  it('renders single argument style block when using a dark theme', () => {
    const { container } = render(<IsThemeComponent />)
    expect(container.firstChild).toHaveStyleRule('color', 'red')
  })

  it('does not render single argument style block when using a light theme', () => {
    const { container } = render(<IsThemeComponent />, {
      theme: 'light',
    })
    expect(container.firstChild).not.toHaveStyleRule('color', 'red')
  })

  it('renders first style block argument when using a dark theme', () => {
    const { container } = render(<IsNotThemeComponent />)
    expect(container.firstChild).toHaveStyleRule('color', 'red')
  })

  it('renders second style block argument when using a light theme', () => {
    const { container } = render(<IsNotThemeComponent />, {
      theme: 'light',
    })
    expect(container.firstChild).toHaveStyleRule('color', 'blue')
  })
})
