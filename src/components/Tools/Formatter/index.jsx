import React from 'react'
import NumberFormat from 'react-number-format'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { Input } from './styles'

export const Formatter = props => <NumberFormat  {...props} />
export const Date = props => <DatePicker {...props} />

export const formatAmount = num => {
  if (num === undefined) {
    return 0
  }
  if (num === null) {
    return 0
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
