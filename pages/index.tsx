import { themeLayer } from '../style/theme'

export default function Home(): JSX.Element {
  return (
    <h1
      css={`
        font-size: 50px;
        color: ${themeLayer('medium')};
      `}
    >
      Hello world
    </h1>
  )
}
