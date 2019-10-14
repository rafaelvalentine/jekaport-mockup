import React from 'react'
import { Header, SubLabel } from '../../theme/style/typeface'
import { SubWrapperAlt } from '../../theme/style/styles'

const Title = ({ title, subTitle, ...props }) => {
  return (
    <SubWrapperAlt
      {...props}>
      <Header> { title } </Header>
      <SubLabel> { subTitle } </SubLabel>
    </SubWrapperAlt>
  )
}

export default Title // TODO VALIDATE PROPS
