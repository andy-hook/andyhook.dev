import React from 'react'

function ExpList(): JSX.Element {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;

        grid-gap: 20px;

        background-color: red;
      `}
    >
      <div>Hello world</div>
      <div>dfsfd</div>
    </div>
  )
}

export default ExpList
