import React from 'react'
import { Image } from '../Picture'
import { formatAmount } from '../Tools/Formatter'
import { TableBody, Text } from './TableParts'
import {  Button, EditIMG, DeleteIMG } from './styles'

import moment from 'moment'
export const RouteRow = ({ ...props }) => {
  return (
    <TableBody>
      <td>
        <Image
          src={props.vehicleTypeId.vehicleImage || require('../../assets/images/default-car.svg')}
          width='148px'
          height='83px'
        />
      </td>
      <td>
        <Text
          text={props.vehicleTypeId.vehicleType || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={props.vehicleModel || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={`${props.from} - ${props.to}` || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={`₦ ${formatAmount(props.price || 0)}`}
        />
      </td>
      <td>
        <Text
          text={moment(props.departing).format('LT') || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={props.seats || 'unknown'}
        />
      </td>
      <td>
        <Button>
          <EditIMG onClick={() => props.handleSetEditDetails(props)} />
        </Button>
        <Button >
          <DeleteIMG onClick={() => props.handleSetDeleteDetails(props)} />
        </Button>
      </td>
    </TableBody>
  )
}
