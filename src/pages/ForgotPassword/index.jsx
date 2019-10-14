import React, { Component } from 'react'

// components
import Title from '../../components/Title'
// import Password from '../components/Passwords';
import { ForgotPasswordForm as Form } from '../../components/Forms'
// Generic Style Components
import { Wrapper, SubWrapper } from '../../theme/style/styles'


export default class ForgotPassword extends Component {
  render () {
    return (
      <Wrapper
        height='94vh'>
        <Title
          padding='120px 0 0'
          title='Forgot Password?'
          subTitle='Submit your email address and we will send you a link to reset your password'
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

