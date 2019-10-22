import React from 'react'
import NumberFormat from 'react-number-format'
// import { Input } from './styles'

export const Formatter = props => <NumberFormat  {...props} />


export const formatAmount = num => {
  if (num === undefined) {
    return 0
  }
  if (num === null) {
    return 0
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
