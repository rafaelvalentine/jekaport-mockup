import React, { Component } from 'react'
import validator from 'validator'
import swal from 'sweetalert'
import axios from 'axios'
import {handleError} from '../../lib'


// components
import Title from '../../components/Title'
import Button from '../../components/Button'
import Banner from '../../components/Banner'
import { CardWrapper } from '../../components/Card'
import { ResetPasswordForm as Form } from '../../components/Forms'
// Generic Style Components
import { Wrapper, Row } from '../../theme/style/styles'
import Layout from '../../components/Layout'

// Styles For styled-components with props styles
const styles = {
  Wrapper: {
    height: '94vh'
  },
  Title: {
    padding: '40px 0 0',
    altHeader:'true',
    textAlignHeader:'center'
  },
  Row: {
    padding: '0',
    height: '110px'
  },
  Layout:{
    altNavItemsColor: 'true'
  },
  cardRow:{
    height: '300px'
  },
  Banner:{
    banner: require('../../assets/images/ball.png')
  },
  Button:{
    width:'218px',
    height:'43px',
    margin:'0 10px'
  },
  CardWrapper: {
    backgroundColor: '#fff',
    width: '662px',
    height: '289px'
  }
}

export default class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    loading: false,
    error: false
  }
  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value.trim()})
  }
  handleGoToForgetPassword =()=>{
    this.props.history.push('/login/forgotpassword')
   
  }
  handleGoHome =()=> {
    this.props.history.push('/')
  }
  handleSumbit = e => {
    const { handleNewPassword, match } = this.props;
    let token = match.params.token
    e.preventDefault()
    const {password, confirmPassword} = this.state
 
    if(validator.isEmpty(password)){
      swal('No Password', 'Please enter Password', 'error')
      return
    }
    if(validator.isEmpty(confirmPassword)){
      swal('No Confirm Password', 'Please enter confirm password', 'error')
      return
    }
    if(!validator.equals(confirmPassword, password)){
      swal('No Match', `Passwords Don't match `, 'error')
      return
    }
    // this.setState({loading: true})
    // setTimeout(() => {
    //   this.setState({loading: false}, ()=> this.props.history.push('/resetcomplete'))
    // }, 3000);
    handleNewPassword({password, token})
    .then(res=>{
      if(res){
        this.setState({loading: false}, ()=> this.props.history.push('/resetcomplete'))
        return
      }
      this.setState({ loading: false })
    })
  }

   async componentDidMount(){
    const { handleConfirmToken, match } = this.props;
    let params = match.params.token
    await handleConfirmToken(params)
    .then(res=>{
      console.log('res', res)
      if(res){
        this.setState({error: false})
        return
      }
      this.setState({ error: true })
    })
  }
  render () {
    const form =(
      <>
      <Title
          {...styles.Title}
          title='Reset your Password'
          subTitle=''
        />
          <Form 
          inputs={this.state}
           handleOnChange={this.handleOnChange}
          handleSumbit={this.handleSumbit}/>
        </>
    )
    let error = (
      <>
        <Title
          {...styles.Title}
          title='Oop! Something went wrong with your password Reset Please Send another request'
          subTitle=''
        />
        <Row
         {...styles.Row}>
          <Button content='Go Home' {...styles.Button} onClick={this.handleGoHome} />
          <Button content='Forget Password' {...styles.Button} onClick={this.handleGoToForgetPassword}/>
        </Row>
      </>
    )
    return (
      <Layout {...styles.Layout}>
      <Wrapper
        {...styles.Wrapper}>
          <Banner {...styles.Banner}>
            <Row
            // {...styles.cardRow}
            >
            <CardWrapper
                {...styles.CardWrapper}>
                {this.state.error ? error : form }
                </CardWrapper>
            </Row>
          </Banner>
      </Wrapper>
      </Layout>
    )
  }
}
