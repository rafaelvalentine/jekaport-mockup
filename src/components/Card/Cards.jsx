import React from 'react'
import * as Card from './styles'
import { Row } from '../../theme/style/styles'
// import { Header, SubHeader } from '../../theme/style/typeface'
// import { Logo } from '../Picture'
// import { Main } from '../Input'
import { Seat } from './cardParts'
// import Button, { DuoButton } from '../Button'
// import TabHead from '../TabHead'

// for styled-components that have props styles
const styles = {
  PickASeatCard: {
    width: '390px',
    height: '289px',
    justifyContent: 'flex-start',
    padding: '20px 0'
  },
  PickASeatCardFirstRow: {
    justifyContent: 'space-between',
    height: '50px',
    padding: '0 40px',
    margin: '0 0 30px'
  },
  PickASeatCardSecondRow: {
    justifyContent: 'space-between',
    height: '50px',
    padding: '0 40px',
    margin: '0 0 30px'
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
      <Row
        style={styles.PickASeatCardFirstRow}>
        <Seat number={1} />
        <Seat number={2} />
        <Seat number={3} />
        <Seat number={3} />
      </Row>
      <Row
        style={styles.PickASeatCardSecondRow}>
        <Seat number={1} />
        <Seat number={3} />
      </Row>

    </CardBox>
  )
}
export default CardBox
