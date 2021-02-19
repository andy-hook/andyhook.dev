import React from 'react'
import ExpListItem from './ExpListItem'

const EXPERIENCE_ENTRIES = [
  ['2020', 'Senior UI Engineer', 'Aragon One'],
  ['2018', 'UI Engineer', 'Bright Interactive'],
  ['2016', 'Senior Front-End Developer', 'Brandwatch'],
  ['2012', 'Front-End Developer', 'The Jamieson Consultancy'],
  ['2009', 'Digital Designer', 'Freelance'],
]

function ExpList(): JSX.Element {
  return (
    <ul>
      {EXPERIENCE_ENTRIES.map(([year, title, company], i) => (
        <li
          css={`
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          `}
          key={i}
        >
          <ExpListItem year={year} company={company} title={title} />
        </li>
      ))}
    </ul>
  )
}
export default ExpList
