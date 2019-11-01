import React, { Component } from 'react'
import validator from 'validator'
import swal from 'sweetalert'

// components
import { LoginForm } from '../../components/Forms'
import Banner from '../../components/Banner'
import Layout from '../../components/Layout'

// images
import bgImage from '../../assets/images/LOGIN_PAGE_WELCOME.png'

// pages
import Title from '../../components/Title'

// Generic Style Components
import { Wrapper, Row } from '../../theme/style/styles'
// from Styles.jsx 
import * as Page from './styles'

// Specific Styles for the Components
const styles = {
  Wrapper: {
    height: 'calc(96.2vh - 80px)'
  },
  Title: {
    title: 'Welcome!',
    subTitle: 'Signup today and enjoy unlimited patronage',
    altHeader:'true',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  Row: {
    justifyContent: 'flex-start'
  },
  Banner: {
    width: '50%',
    height: '100%',
    banner: bgImage
  }
}
export default class Index extends Component {

  state = {
    email:'',
    password:'',
    loading: false
  }


  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value.trim() })
  }
  handleLogin = e => {
    e.preventDefault()
    const {email, password} = this.state
    if(validator.isEmpty(email)){
      swal('No Email', 'Please enter valid email', 'error')
      return
    }
    if(validator.isEmpty(password)){
      swal('No Password', 'Please Password', 'error')
      return
    }
    if(!validator.isEmail(email)){
      swal('Not Email', 'Please enter valid email', 'error')
      return
    }

    this.setState({loading: true})
    this.props.handleLogin({email, password})
    .then(res=>{
      if(res){
        this.setState({loading: false}, ()=> this.props.history.push('/dashboard/companydashboard'))
        return
      }
      this.setState({ loading: false })
    })
  
  }
 render (){
  return (
    <Layout>
      <Wrapper
          {...styles.Wrapper}
          className='overflow-y-hidden'
        >
        <Row>
        <Banner {...styles.Banner}/>
          <Page.Container>
          <Title
            {...styles.Title}
          />
              <LoginForm 
              inputs={this.state} 
              onChange={this.handleOnChange } 
              clicked={this.handleLogin}
              {...this.props} />
          </Page.Container>
          </Row>
        </Wrapper>
    </Layout>
    
  )
 }
}

