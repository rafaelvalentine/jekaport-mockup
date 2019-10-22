import React, { useState, useEffect } from 'react'
import { SeatNumber, SeatWrapper } from './styles'
import { Image } from '../Picture'
import { } from '../../theme/style/typeface'

// images
import AvailableCarSeat from '../../images/AvailableCarSeat.svg'
import BlockedCarSeat from '../../images/BlockedCarSeat.svg'
import BookedCarSeat from '../../images/BookedCarSeat.svg'

/**
 * this the component that holds the profile picture, username and rating for the user Card
 */
export const Seat = ({ status, ...props }) => {
  const [seat, setSeat] = useState({ status: 'available' })
  const handleSeatStatus = () => {
    setSeat({ status: 'blocked' })
  }
  let _seat = <Image src={AvailableCarSeat} cursor='pointer' onClick={handleSeatStatus} />
  if (seat.status === 'booked') {
    _seat = <Image src={BookedCarSeat} />
  }
  if (seat.status === 'blocked') {
    _seat = <Image src={BlockedCarSeat} />
  }
  // if (seat.status === 'available') {
  //   _seat = <Image src={AvailableCarSeat} cursor='pointer' onClick={handleSeatStatus} />
  // }

  useEffect(() => setSeat({ status }), [])
  return (
    <SeatWrapper>
      <SeatNumber>
        {props.number || '1'}
      </SeatNumber>
      {_seat}
    </SeatWrapper>

  )
}
