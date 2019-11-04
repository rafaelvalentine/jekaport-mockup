import React, { Component } from 'react'
import { Wrapper, Row } from '../../theme/style/styles'
import Banner from '../../components/Banner'
import * as Page from './styles'
import Title from '../../components/Title'
import {PartnerFormTwo as Form} from '../../components/Forms'
import validator from 'validator'
import swal from 'sweetalert'
import Layout from '../../components/Layout'

// Specific Styles for the Components
const styles = {
  Wrapper: {
    height: 'calc(95vh - 80px)'
  },
  Row: {
    justifyContent: 'flex-start'
  },
  Banner: {
    width: '50%',
    height: '100%',
    banner: require('../../assets/images/BECOME_A_PARTNER_2.png')
  },
  Title: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    title: 'Welcome to Treeprite',
    subTitle: 'Sign up by filling out this simple form',
    // altHeader:'true',
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
    terms: undefined,
    loading: false
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
  handleSignUp = e => {
    e.preventDefault()
    const { companyName, businessAddress, rcNumber, email, phoneNumber, password, terms } = this.state
    const { repName, repEmail, repIdNumber, repIdFile, repPhone } = this.props.User
    if(validator.isEmpty(companyName)){
      swal('No Name', 'Please enter Name', 'error')
      return
    }
    if(validator.isEmpty(businessAddress.trim())){
      swal('No Address', 'Please enter Address', 'error')
      return
    }
    if(!validator.isEmail(email.trim())){
      swal('Not Email', 'Please enter valid email', 'error')
      return
    }
    if(validator.isEmpty(email.trim())){
      swal('No Email', 'Please enter email', 'error')
      return
    }
    if(validator.isEmpty(rcNumber.trim())){
      swal('No rcNumber', 'Please Enter rcNumber', 'error')
      return
    }
    if(validator.isEmpty(phoneNumber.trim())){
      swal('No Phone Number', 'Please enter Phone Number', 'error')
      return
    }
    if(validator.isEmpty(password.trim())){
      swal('No password', 'Please enter password', 'error')
      return
    }
    if(!terms){
      swal('', 'Please Click Terms & Conditions ', 'error')
      return
    }
    const user ={
      repName, 
      repEmail, 
      repIdNumber, 
      repIdFile, 
      repPhone,
      companyName: companyName.trim(), 
      businessAddress: businessAddress.trim(), 
      rcNumber: rcNumber.trim(), 
      email: email.trim(), 
      phoneNumber: phoneNumber.trim(), 
      password: password.trim()
    }
    this.setState({loading: true})
    this.props.handleSignUp(user)
    .then(res=>{
      if(res){
        this.setState({loading: false}, ()=> this.props.history.push('/dashboard/companydashboard'))
        return
      }
      this.setState({ loading: false })
    })
  }
  handleTerms =() =>{
    this.props.history.push('/terms')
  }
  componentDidMount (){
    const { repName, repEmail } = this.props.User
    // if(validator.isEmpty(repName) && validator.isEmpty(repEmail)){
    //  this.props.history.push('/become-a-partner')
    //   return
    // }
  }
  render () {
    return (
      <Layout>

      <Wrapper
        {...styles.Wrapper}>
        <Row {...styles.Row} >
          <Banner {...styles.Banner} >
          <Page.Title>
            Become a Partner
            </Page.Title>
            <Page.SubTitle>
            Partners are Transport Companies who own registered Transport Companies. Signup today to gain access to our unlimited pool of travelers waiting for your service.
            </Page.SubTitle>
          </Banner>
          <Page.Container>
            <Title 
            className='title'
            {...styles.Title} />
            <Form 
            inputs={this.state}
            handleCheckbox={this.handleCheckbox}
            onValueChange={this.onValueChange} 
            handleOnChange={this.handleOnChange} 
            handleGoBack={this.handleGoBack}
            handleSignUp={this.handleSignUp}
            handleTerms={this.handleTerms}
            />
          </Page.Container>
        </Row>
      </Wrapper>
      </Layout>
    )
  }
}