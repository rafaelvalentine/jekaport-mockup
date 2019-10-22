import React, { Component } from 'react'
import { Wrapper, Row } from '../../theme/style/styles'
import Banner from '../../components/Banner'
import * as Page from './styles'
import Title from '../../components/Title'
import {PartnerFormTwo as Form} from '../../components/Forms'
import validator from 'validator'
import swal from 'sweetalert'

// Specific Styles for the Components
const styles = {
  Wrapper: {
    height: '94vh'
  },
  Row: {
    justifyContent: 'flex-start'
  },
  Banner: {
    width: '50%',
    height: '100%',
    banner: require('../../assets/images/become-a-parnter.png')
  },
  Title: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    title: 'Welcome to Jekaport',
    subTitle: 'Sign up by filling out this simple form',
    altHeader:'true',
    marginHeader:'0'
  }
}

export default class index extends Component {
  state = {
    companyName:'',
    businessAddress:'',
    rcNumber:'',
    email:'',
    phoneNumber:'',
    password:'',
    terms: undefined
  }

  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value })
  }
  onValueChange = values => {
    const {formattedValue, value } = values
    this.setState({...this.state, phoneNumber: value })
  }
  handleCheckbox = e => {
    const {name, checked} = e.target
    if(checked){
      this.setState({...this.state, [name]: checked })
      return 
    }
    this.setState({...this.state, [name]: undefined })
  }
  handleGoBack =()=> this.props.history.goBack()
  handleLogin = e => {
    e.preventDefault()
    // const {email, password} = this.state
    // if(validator.isEmpty(email)){
    //   swal('No Email', 'Please enter valid email', 'error')
    //   return
    // }
    // if(validator.isEmpty(password)){
    //   swal('No Password', 'Please Password', 'error')
    //   return
    // }
    // if(!validator.isEmail(email)){
    //   swal('Not Email', 'Please enter valid email', 'error')
    //   return
    // }

    // this.setState({loading: true})
    // this.props.handleLogin({email, password})
    // .then(res=>{
    //   console.log('from login page', res)
    //   if(res){
    //     this.setState({loading: false}, ()=> this.props.history.push('/companydashboard'))
    //     return
    //   }
    //   this.setState({ loading: false })
    // })
  
  }
  render () {
    return (
      <Wrapper
        {...styles.Wrapper}>
        <Row {...styles.Row} >
          <Banner {...styles.Banner} />
          <Page.Container>
            <Title {...styles.Title} />
            <Form 
            inputs={this.state}
            handleCheckbox={this.handleCheckbox}
            onValueChange={this.onValueChange} 
            handleOnChange={this.handleOnChange} 
            handleGoBack={this.handleGoBack}
            />
          </Page.Container>
        </Row>
      </Wrapper>
    )
  }
}