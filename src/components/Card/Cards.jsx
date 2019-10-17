import React from 'react'
import * as Card from './styles'
import { Header, SubHeader } from '../../theme/style/typeface'
import { Logo } from '../Picture'
// import { Main } from '../Input'
import { Seat } from './cardParts'
// import Button, { DuoButton } from '../Button'
// import TabHead from '../TabHead'
const styles = {
  PickASeatCard: {
    width: '390px',
    height: '289px',
    justifyContent: 'flex-start',
    padding: '20px 0'
  }
}
export const CardBox = ({ children, ...props }) => {
  return (
    <Card.Container {...props}>
      {children}
    </Card.Container>
  )
}
export const PickASeatCard = ({ ...props }) => {
  return (
    <CardBox
      {...styles.PickASeatCard}>
      <Seat status='booked' number={1}/>
      <Seat number={2} status='available' />
      <Seat status='blocked' number={3} />
    </CardBox>
  )
}
export default CardBox
