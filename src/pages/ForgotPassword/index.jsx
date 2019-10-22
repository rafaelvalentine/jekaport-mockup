import React, { Component } from 'react'

// components
import Title from '../../components/Title'
// import Password from '../components/Passwords';
import { ForgotPasswordForm as Form } from '../../components/Forms'
// Generic Style Components
import { Wrapper, Row } from '../../theme/style/styles'

// Styles For styled-components with props styles
const styles = {
  Wrapper: {
    height: '94vh'
  },
  Title: {
    padding: '120px 0 0'
  },
  Row: {
    padding: '60px 0 0',
    height: '350px'
  }
}
export default class ForgotPassword extends Component {
  render () {
    return (
      <Wrapper
        {...styles.Wrapper}>
        <Title
          {...styles.Title}
          title='Forgot Password?'
          subTitle='Submit your email address and we will send you a link to reset your password'
        />
        <Row
          {...styles.Row}
        >
          <Form />
        </Row>

      </Wrapper>
    )
  }
}
