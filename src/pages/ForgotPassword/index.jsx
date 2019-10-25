import React, { Component } from 'react'
import validator from 'validator'
import swal from 'sweetalert'
import Layout from '../../components/Layout'

// components
import Title from '../../components/Title'
import Banner from '../../components/Banner'
import { CardWrapper } from '../../components/Card'
// import Password from '../components/Passwords';
import { ForgotPasswordForm as Form } from '../../components/Forms'
// Generic Style Components
import { Wrapper, Row } from '../../theme/style/styles'

// Styles For styled-components with props styles
const styles = {
  Layout:{
    altNavItemsColor:'true'
  },
  Wrapper: {
    height: '94vh'
  },
  Title: {
    padding: '60px 0 0'
  },
  Row: {
    padding: '60px 0 0',
    height: '100%'
  },
  Banner:{
    banner:require('../../assets/images/forgot.png')
  },
  CardWrapper: {
    backgroundColor: '#fff',
    width: '662px',
    height: '289px'
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
      <Layout
      {...styles.Layout}
      >
          <Wrapper
              {...styles.Wrapper}>
            <Banner
              {...styles.Banner}>
                <Row
                  {...styles.Row}
                >
                <CardWrapper
                {...styles.CardWrapper}
                >
                <Title
                {...styles.Title}
                title='Forgot Password?'
                subTitle='Submit your email address and we will send you a link to reset your password'
              />
             
              <Form 
                handleOnChange={this.handleOnChange}
                handleSumbit={this.handleSumbit} 
                inputs={this.state} />
                </CardWrapper>
              
              </Row>
              </Banner>
               
          </Wrapper>
      </Layout>
     
    )
  }
}
