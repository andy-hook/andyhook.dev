import React from 'react'
import { removeWidow } from '../../style/utils'

interface RemoveWidowProps {
  children: string
}

function RemoveWidow({ children }: RemoveWidowProps): JSX.Element {
  return <>{removeWidow(children)}</>
}

export default RemoveWidow
