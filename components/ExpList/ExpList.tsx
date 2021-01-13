import React from 'react'
import ExpListItem from './ExpListItem'

const testArray = [1, 2, 3, 4, 5, 6]

function ExpList(): JSX.Element {
  return (
    <ul>
      {testArray.map((key) => (
        <li key={key}>
          <ExpListItem />
        </li>
      ))}
    </ul>
  )
}
export default ExpList
