import React from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { applyHsl } from './theme'

const Global = createGlobalStyle`

  /* A very simple reset that sits on top of Normalize
  ------------------------------------------------- */

  body {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  button {
    color: inherit;
  }

  a {
    text-decoration: none;
  }


  /* Page level styling
  /* (e.g. HTML and BODY elements)
  ------------------------------------------------- */

  /* 1. Improve anti-aliasing consistency between platforms */
  /* 2. Sensible default box-sizing */

  html {
    font-size: 100%;
  }
  
  body,
  button {
    -webkit-font-smoothing: antialiased; /* [1] */
    -moz-osx-font-smoothing: grayscale; /* [1] */
    text-rendering: optimizeLegibility; /* [1] */
    box-sizing: border-box; /* [2] */
  }

  /* [2] */
  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  button,
  a {
    &:focus {
      outline: none;
    }
  }


  /* Button
  ------------------------------------------------- */
  button {
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    font-weight: inherit;

    &[disabled] {
      cursor: default;
    }
  }


  /* Tables
  ------------------------------------------------- */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    text-align: inherit;
    font-weight: inherit;
  }

  /* Images
  ------------------------------------------------- */

  /* 1. Fluid images for responsive purposes. */
  /* 2. Offset "alt" text from surrounding copy. */
  /* 3. Setting "vertical-align" removes the whitespace that appears under "img"
        elements when they are dropped into a page as-is. Safer alternative to
        using "display: block;". */
  
  img {
    max-width: 100%; /* [1] */
    font-style: italic; /* [2] */
    vertical-align: middle; /* [3] */
  }

  /* 1. If a "width" and/or "height" attribute have been explicitly defined, let’s
     not make the image fluid. */

  img[width], /* [1] */
  img[height] {  /* [1] */
    max-width: none;
  }
`

const GlobalDocumentAdjustment = createGlobalStyle`
  body {
    overflow-x: hidden;

    // Match background color for bounce scroll overflow
    background-color: ${({ theme }) => applyHsl(theme.background.low)};
  }
`

const GlobalStyle: React.FunctionComponent = () => {
  return (
    <>
      <Normalize />
      <Global />
      <GlobalDocumentAdjustment />
    </>
  )
}

export default GlobalStyle
