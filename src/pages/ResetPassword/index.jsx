import React, { Component } from 'react'

// components
import Title from '../../components/Title'
// import Password from '../components/Passwords';
import { ResetPasswordForm as Form } from '../../components/Forms'
// Generic Style Components
import { Wrapper, SubWrapper } from '../../theme/style/styles'


export default class ResetPassword extends Component {
  render () {
    return (
      <Wrapper
        height='94vh'>
        <Title
          padding='120px 0 0'
          title='Reset your Password'
          subTitle=''
        />
        <SubWrapper
          padding='60px 0 0 '
          style={{ height: '350px' }}
        >
          <Form />
        </SubWrapper>

      </Wrapper>
    )
  }
}

