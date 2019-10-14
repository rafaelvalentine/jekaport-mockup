import React from 'react'
import * as Card from './styles'
import { Header, SubHeader } from '../../theme/style/typeface'
import { Logo } from '../Picture'
// import { Main } from '../Input'
// import { CardInformation, UserDetailsRow, Details } from './cardParts'
// import Button, { DuoButton } from '../Button'
// import TabHead from '../TabHead'

export const CardBox = ({ children, ...props }) => {
  return (
    <Card.Container {...props}>
      {children}
    </Card.Container>
  )
}
export const ServicesCard = ({ ...props }) => {
  return (
    <CardBox
      {...props} />
  )
}
export default CardBox
