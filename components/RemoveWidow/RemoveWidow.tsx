import React from 'react'
import { removeWidow } from '../../style/utils'

interface Props {
  children: string
}

const RemoveWidow: React.FunctionComponent<Props> = ({ children }) => {
  return <>{removeWidow(children)}</>
}

export default RemoveWidow
