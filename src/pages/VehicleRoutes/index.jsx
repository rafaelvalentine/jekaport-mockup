import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'

// Components
import Layout from '../../container/DashboardWrapper'
import { AddRouteForm as Form } from '../../components/Forms'
import { RoutePreviewModal } from '../../components/Modal'

// auth
// Styles.jsx
import StyleWrapper from './styles'
// Generic Components
import { Wrapper, Column } from '../../theme/style/styles'
import { Header } from '../../theme/style/typeface'
const styles = {
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

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from:'',
      to:'',
      _id:'',
      departing:'',
      price:'',
      loading: false,
      showPreviewModal:false,
      seats:'', 
      vehicleType:'',
      vehicleId:'', 
      vehicleImage:'',
      vehicleModel:''
    }
  }
 

  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, _id } = this.state
    
    if(validator.isEmpty(price)){
      swal('Empty Pricing', 'Please Specify Pricing details', 'error')
      return
    }
    if(validator.isEmpty(from)){
      swal('From field Empty', 'Please Specify Departure', 'error')
      return
    }
    if(validator.isEmpty(to)){
      swal('To field Empty', 'Please Specify destination', 'error')
      return
    }
    if(validator.isEmpty(vehicleType)){
      swal('No Vehicle Selected', 'Please Specify Vehicle Type', 'error')
      return
    }
    if(validator.isEmpty(vehicleModel)){
      swal('No Model', 'Please Specify Vehicle Model', 'error')
      return
    }
    if(validator.isEmpty(departing)){
      swal('No Depature Time', 'Please Specify Departure Time', 'error')
      return
    }
    // this.setState({terminals: _terminals, services:_services }, ()=> this.handleAddRoute())
    this.setState({loading: true}, ()=> this.handleAddRoute())
  }
  handleAddRoute = ()=> {
    const { departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, _id, seats } = this.state
    let route ={ departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, partnerId:_id, seats }
    // setTimeout(() => {
    //   this.setState({loading: false}, ()=> console.log(user))  
    // }, 3000);
    this.props.handlePageLoader(true)
    this.props.handleAddRoute(route)
    .then(res=>{
      if(res){
        this.props.handlePageLoader(false)
        this.setState({ from:'',
        to:'',
        departing:'',
        price:'',
        loading: false,
        showPreviewModal:false,
        seats:'', 
        vehicleType:'',
        vehicleId:'', 
        vehicleImage:'',
        vehicleModel:''}, ()=> swal(`${res.message}`, '', 'success'))
        return
      }
      this.setState({loading: false})
    })
  }
  onValueChange = values => {
    const { value } = values
    this.setState({...this.state, price: value })
  }
  handleShowPreview = () => {
    const showPreviewModal = !this.state.showPreviewModal
      this.setState({showPreviewModal})
  }
  handleSelect = e =>{
    e.preventDefault()
    const { value } = e.target
    let vehicleDetails = this.props.vehicleTypes.filter(vehicle =>(
      vehicle._id === value
    ))
  if(vehicleDetails.length > 0){
    let seats = vehicleDetails[0].vehicleSeats
    let vehicleType =  vehicleDetails[0].vehicleType
    let vehicleTypeId = value
    let vehicleImage = vehicleDetails[0].vehicleImage
    return this.setState({...this.state, seats, vehicleType, vehicleTypeId, vehicleImage})
  }
    return null
  }

  // handleSetValues = values => {
  //   // this.setState({...this.state, ...values}, ()=>console.log(this.state))
  // }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.User.companyName !== prevState.companyName){
      return {...nextProps.User};
    }
    else return null;
  }
  async componentDidMount (){
    await this.props.handleFetchVehicleTypes()
  }
  render () {
    return (
      <Layout>
        <StyleWrapper>
          <Wrapper
            className='fixedheight'
            {...styles.Wrapper}>
            <Column

              {...styles.Column}>
              <Header
                {...styles.Header}
              >
                Add a Route
              </Header>
              <Form 
                inputs={this.state}
                handleOnChange={this.handleOnChange}
                onValueChange={this.onValueChange}
                handleSelect={this.handleSelect}
                handleSubmit={this.handleSubmit}
                handleShowPreview={this.handleShowPreview}
                vehicleTypes={this.props.vehicleTypes}
              />
                routes
              {/* <Dashboard /> */}
            </Column>

          </Wrapper>
        </StyleWrapper>
        <RoutePreviewModal 
        show={this.state.showPreviewModal}
        onHide={this.handleShowPreview}
        inputs={this.state}
        handleSubmit={this.handleSubmit}
        />
      </Layout>
    )
  }
}

export default index
