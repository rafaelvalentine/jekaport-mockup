import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'


// Components
import Layout from '../../container/DashboardWrapper'
import { AddRouteForm as Form } from '../../components/Forms'
import { RoutePreviewModal, EditRouteModal, DeleteRouteModal } from '../../components/Modal'
import Table from '../../components/Table'
// auth
// Styles.jsx
import StyleWrapper from './styles'
// Generic Components
import { Wrapper, Column } from '../../theme/style/styles'
import { Header } from '../../theme/style/typeface'
const styles = {
  Wrapper: {
    height: 'calc(95.2vh - 80px)'
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
      showEditRouteModal:false,
      showDeleteRouteModal: false,
      seats:'', 
      vehicleType:'',
      vehicleId:'', 
      vehicleImage:'',
      vehicleModel:'',
      firstPage: 1,
      currentPage: 1,
      usersPerPage: 5,
      pageLimit: 5,
      upperPageBound: 5,
      lowerPageBound: 0,
      data:[],
    }
  }
 
// onChange handler for input fields
  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value })
  }
// function to validate edit route form
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
    if(validator.isEmpty(departing.toString())){
      swal('No Depature Time', 'Please Specify Departure Time', 'error')
      return
    }
    this.setState({loading: true}, ()=> this.handleAddRoute())
  }
  // Add new route to database
  handleAddRoute = ()=> {
    const { departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, _id, seats } = this.state
    let route ={ departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, partnerId:_id, seats }
    this.props.handlePageLoader(true)
    this.props.handleAddRoute(route)
    .then(res=>{
      this.props.handleGetUserRoutes(this.state._id)
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
    })
  }
  // function to validate edit route form
  handleEditSubmit = e => {
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
    if(validator.isEmpty(departing.toString())){
      swal('No Depature Time', 'Please Specify Departure Time', 'error')
      return
    }
    this.setState({loading: true}, ()=> this.handleUpdateRoute())
  }
  // Save editted route to database
  handleUpdateRoute = () => {
    const { departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, routeId, seats } = this.state
    let route ={ departing, price, to, from, vehicleTypeId, vehicleType, vehicleModel, seats }
    this.props.handlePageLoader(true)
    this.props.handleUpdateRoute(routeId, route)
    .then(res=>{
      this.props.handleGetUserRoutes(this.state._id)
    .then(res=>{
      if(res){
        this.props.handlePageLoader(false)
        this.setState({ from:'',
        to:'',
        departing:'',
        price:'',
        loading: false,
        showEditRouteModal:false,
        seats:'', 
        vehicleType:'',
        vehicleId:'', 
        vehicleImage:'',
        vehicleModel:'',
        data: this.props.routes}, ()=> swal(`${res.message}`, '', 'success'))
        return
      }
      this.setState({loading: false})
    })
    })
  }

  // delete route from database
  handleDeleteRoute = () => {
    const {routeId} = this.state
    this.props.handlePageLoader(true)
    this.props.handleDeleteRoute(routeId)
    .then(res=>{
      this.props.handleGetUserRoutes(this.state._id)
    .then(res=>{
      if(res){
        this.props.handlePageLoader(false)
        this.setState({ from:'',
        to:'',
        departing:'',
        price:'',
        loading: false,
        showDeleteRouteModal:false,
        seats:'', 
        vehicleType:'',
        vehicleId:'', 
        vehicleImage:'',
        vehicleModel:'',
        routeId:'',
        data: this.props.routes}, ()=> swal(`${res.message}`, '', 'success'))
        return
      }
      this.setState({loading: false})
    })
  })
}
  // handles the onChange for the price formatter
  onValueChange = values => {
    const { value } = values
    this.setState({...this.state, price: value })
  }
  // handles the show/close preview model
  handleShowPreview = () => {
    const showPreviewModal = !this.state.showPreviewModal
      this.setState({showPreviewModal})
  }

  // this function gets and sets the details for the route to be editted
  handleSetEditDetails = route => {
    const { from, to, seats, vehicleModel, price }=route
    let departing = route.departing ?  new Date(route.departing) : new Date()
    let routeId = route._id
    this.setState({...this.state, departing, from, to, seats, vehicleModel, routeId, price }, ()=>this.handleShowEditRoute())
  }
   // this function gets and sets the details for the route to be deleted
  handleSetDeleteDetails = route => {
    const { from, to }= route
    let routeId = route._id
    this.setState({...this.state, from, to, routeId }, ()=>this.handleShowDeleteRoute())
  }
  // this opens the edit route modal
  handleShowEditRoute = () => {
    const showEditRouteModal = !this.state.showEditRouteModal
      this.setState({showEditRouteModal})
  }
  // this opens the delete route modal
  handleShowDeleteRoute = () => {
    const showDeleteRouteModal = !this.state.showDeleteRouteModal
      this.setState({showDeleteRouteModal})
  }

  // onChange handle for the selet tag
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

  scrollToTop =()=> window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
// handle picking a depature time
  handleDatePicker = time => {
    this.setState({departing: time}, ()=> console.log(this.state.departing))
  }
  // handle page up for pagination
  handlePagnationUp = (e) => {
    e.target.blur()
    if (this.state.currentPage >= this.state.firstPage) {
       this.setState((prevState, props) => {
        return {currentPage: prevState.currentPage + 1};
      }, ()=> this.scrollToTop())
    }
    if (this.state.currentPage === this.state.upperPageBound) {
      let upperPageBound = this.state.upperPageBound + this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound + this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
  }
  // handle page down for pagination
 handlePagnationDown = (e) => {
    e.target.blur()
    if (this.state.currentPage === this.state.lowerPageBound + 1) {
      let upperPageBound = this.state.upperPageBound - this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound - this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
   if (this.state.currentPage !== this.state.firstPage) { 
     this.setState((prevState, props) => {
      return {currentPage: prevState.currentPage - 1};
    }, ()=> this.scrollToTop())
  }
  }
  // specifies the amount data to list
    handleDataRange = e => {
    e.target.blur()
    const callback = () => {
      this.renderPageNumbers()
      this.scrollToTop()
    }
    let numberToShow = Number(e.target.value)
    return this.setState({ usersPerPage: numberToShow, currentPage: 1 }, ()=>setTimeout(() => {
      callback() }, 100))
  }
// handles the total number of pages that are available for viewing
// on the pagination
  renderPageNumbers = () =>{ 
    let pageList = []
    let length = Math.ceil( this.state.data.length / this.state.usersPerPage)
    for(let index = 1; index <= length; index++) {
    const element = {
      id: index,
      page: index
    };
    pageList.push(element)
  }
 return pageList
}
selectedPage = page =>{
  this.scrollToTop()
  this.setState({currentPage: page})
}
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.User._id !== prevState._id){
      return {_id: nextProps.User._id};
    }
    if(nextProps.routes.length !== prevState.data.length){
      return {data: nextProps.routes}
    }
    else return null;
  }
  componentDidUpdate (prevProps, prevState){
    if(prevState._id !== this.state._id){
    this.props.handleGetUserRoutes(this.state._id)
     .then(res=>{
       this.setState({data: this.props.routes})
     })
    }
  }
   async componentDidMount (){
    await this.props.handleFetchVehicleTypes()
     this.renderPageNumbers()
  }
  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.state.data.slice(indexOfFirstUser, indexOfLastUser)
    const allUsers = this.state.data.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
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
                handleDatePicker={this.handleDatePicker}
              />
                <Table 
                 title='Routes' 
                 data={currentUsers}
                 pageInfo={this.state}
                 allUsers={allUsers}
                 newindexOfFirstUser={newindexOfFirstUser}
                 pageUsers={pageUsers}
                 pageNumbers={this.renderPageNumbers}
                 selectedPage={this.selectedPage}
                 handleDataRange={this.handleDataRange}
                 handlePagnationUp={this.handlePagnationUp}
                 handlePagnationDown={this.handlePagnationDown}
                 setPagination={true}
                 handleSetEditDetails={this.handleSetEditDetails}
                 handleSetDeleteDetails={this.handleSetDeleteDetails}
                />
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
        <EditRouteModal
         show={this.state.showEditRouteModal}
         onHide={this.handleShowEditRoute}
         inputs={this.state}
         handleEditSubmit={this.handleEditSubmit}
         vehicleTypes={this.props.vehicleTypes}
         handleDatePicker={this.handleDatePicker}
         handleOnChange={this.handleOnChange}
         handleSelect={this.handleSelect}
        />
        <DeleteRouteModal
        show={this.state.showDeleteRouteModal}
        onHide={this.handleShowDeleteRoute}
        inputs={this.state}
        handleDeleteRoute={this.handleDeleteRoute}
        />
      </Layout>
    )
  }
}

export default index
