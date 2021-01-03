import 'styled-components'
import { CSSProp } from 'styled-components'
import { Theme } from './style/theme'

// Add types for styled components via css prop
// https://styled-components.com/docs/api#css-prop
declare module 'react' {
  interface Attributes {
    css?: CSSProp<Theme>
  }
}

// Extend original declarations with theme interface
// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
