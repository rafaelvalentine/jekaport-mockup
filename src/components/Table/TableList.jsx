import React from 'react'
import { RouteRow } from './TableRow'

export const RouteList = ({ data, ...props }) => data.map(info => {
  return <RouteRow key={Math.random()} {...info}
    handleSetEditDetails={props.handleSetEditDetails}
    handleSetDeleteDetails={props.handleSetDeleteDetails}
  />
})
