import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'
// Components
import Layout from '../../container/DashboardWrapper'
import { UpdateBusinessForm as Form } from '../../components/Forms'
import { Header } from '../../theme/style/typeface'
// auth

// Generic Components
import { Wrapper, Column } from '../../theme/style/styles'
const styles = {
  Layout: {
    settingStatus: 'true'
  },
  Wrapper: {
    height: 'calc(94vh - 103px)'
  },
  Header: {
    altHeader: 'true',
    marginHeader: '30px 0'
  },
  Column: {
    width: 'calc(100% - 120px)',
    margin: '0 0 45px 120px'
  }
}

class CompanyDashboard extends Component {
  state = {
    terminals: '',
    businessHour:'' ,
    services:'' ,
    businessInfo:'',
    loading: false
  }
  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { businessHour, terminals, services, businessInfo } = this.state
    let _businessHour = []
    let _services = []
    let _terminals = []
    if(validator.isEmpty(businessInfo)){
      swal('No Details', 'Please Write About Your Company', 'error')
      return
    }
    if(validator.isEmpty(terminals)){
      swal('No Terminals', 'Please Specify Terminals', 'error')
      return
    }
    _terminals = terminals.trim().split(',')
    // if(!validator.isEmpty(businessHour)){
    //   _businessHour = businessHour.trim().split(',')
    // }
    if(!validator.isEmpty(services)){
      _services = services.trim().split(',')
    }
    this.setState({terminals: _terminals, services:_services }, ()=> this.handleUpdateBusinessInfo())
   
  }
  handleUpdateBusinessInfo = ()=> {
    this.setState({loading: true})
    const { _id, businessHour, terminals, services, businessInfo } = this.state
    let user ={
      _id, businessHour, terminals, services, businessInfo
    }
    // setTimeout(() => {
    //   this.setState({loading: false}, ()=> console.log(user))  
    // }, 3000);
    
    this.props.handleBusinessDetails(_id, user)
    .then(res=>{
      if(res){
        this.setState({loading: false,  terminals: '',
        businessHour:'' ,
        services:'' ,
        businessInfo:''}, ()=> swal(`${res.message}`, '', 'success'))
        return
      }
      this.setState({loading: false})
    })
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.User.companyName !== prevState.companyName){
      // let businessHour = nextProps.User.businessHour.join()
      let services = nextProps.User.services.join()
      let terminals = nextProps.User.terminals.join()
      console.log(nextProps)
      return {...nextProps.User, services, terminals };
    }
    else return null;
  }
  render () {
    return (
      <Layout
        {...styles.Layout}>
        <Wrapper
          className='fixedheight'
          {...styles.Wrapper}>
          <Column
            {...styles.Column}>
            <Header
              {...styles.Header}
            >
             Settings
            </Header>
            <Form
              inputs={this.state}
              handleOnChange={this.handleOnChange}
              handleSubmit={this.handleSubmit}
            />
          </Column>

        </Wrapper>
      </Layout>
    )
  }
}

export default CompanyDashboard
