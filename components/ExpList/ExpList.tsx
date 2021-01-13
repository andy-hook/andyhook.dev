import React from 'react'
import ExpListItem from './ExpListItem'

const EXPERIENCE_ENTRIES = [
  ['2020', 'Aragon', 'Senior UI Engineer'],
  ['2018', 'Bright Interactive', 'UI Developer'],
  ['2016', 'Brandwatch', 'Senior Front-End Developer'],
  ['2012', 'Jamieson Consultancy', 'Front-End Developer'],
  ['2009', 'Freelance', 'Digital Designer'],
]

function ExpList(): JSX.Element {
  return (
    <ul>
      {EXPERIENCE_ENTRIES.map(([year, company, title], i) => (
        <li
          css={`
            &:not(:last-child) {
              margin-bottom: 15px;
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
