import React, { Component } from 'react'
import validator from 'validator'
import swal from 'sweetalert'
import Layout from '../../components/Layout'

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
  state = {
    email:'',
    loading: false
  }
  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value.trim()}, ()=> console.log('this.state', this.state))
  }
  handleSumbit = e => {
    e.preventDefault()
    const {email} = this.state
 
    if(validator.isEmpty(email)){
      swal('No Email', 'Please enter email', 'error')
      return
    }
    if(!validator.isEmail(email)){
      swal('Not Email', 'Please enter valid email', 'error')
      return
    }
    this.setState({loading: true})
    this.props.handleRestPassword({email})
    .then(res=>{
      if(res){
        this.setState({loading: false}, ()=> this.props.history.push('/resetsent'))
        return
      }
      this.setState({ loading: false })
    })
  }
  render () {
    return (
      <Layout>
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
                <Form 
                handleOnChange={this.handleOnChange}
                handleSumbit={this.handleSumbit} 
                inputs={this.state} />
              </Row>
          </Wrapper>
      </Layout>
     
    )
  }
}
