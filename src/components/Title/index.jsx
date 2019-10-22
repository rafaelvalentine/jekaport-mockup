import React from 'react'
import { Header, SubLabel } from '../../theme/style/typeface'
import { Column } from '../../theme/style/styles'

const Title = ({ title, subTitle, ...props }) => {
  return (
    <Column
      {...props}>
      <Header {...props}> { title } </Header>
      <SubLabel> { subTitle } </SubLabel>
    </Column>
  )
}

export default Title // TODO VALIDATE PROPS
