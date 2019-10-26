import React, { Component } from 'react'
import swal from 'sweetalert'
import validator from 'validator'


// Components
import Layout from '../../container/DashboardWrapper'
import { UpdateProFileForm as Form } from '../../components/Forms'
import { Header } from '../../theme/style/typeface'

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
    _id: '',
    companyName: '',
    businessAddress: '',
    email: '',
    phoneNumber: '',
    businessType:'',
    logo: undefined,
    logoName:undefined,
    loading:false,
    facebook:'',
    twitter:'',
    instagram:'',
    socialMedia:[]
}

shortenText = text => {
  const extenion = text.split('.')[1]
    if (text.length > 25) {
      return `${text.slice(0, 10)}... (.${extenion})`
    }
    return `${text} `
  }
  handleFileChange = e => {
    const imageMaxSize = 2000000 // bytes
    let file = e.target.files[0]
    const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif, application/pdf, application/x-zip-compressed, image/svg+xml'
    const acceptedFileTypesArray = acceptedFileTypes.split(',').map(item => { return item.trim() })
    const verifyFile = files => {
      if (files) {
        const currentFile = file
        const currentFileType = currentFile.type
        const currentFileSize = currentFile.size
        if (currentFileSize > imageMaxSize) {
          swal('File Too Large',`This file is not allowed. ${Math.round(currentFileSize / 1000000)} Mb is too large, maximum allowed size is 10mb`, 'error')
          return false
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
          swal('not allowed','This file is not allowed. Only images are allowed.', 'error')
          return false
        }
        return true
      }
    }
    if (file) {
      const isVerified = verifyFile(file)
      if (isVerified) {
        let reader = new FileReader()
        reader.onloadend = () => {
          this.setState({
            ...this.state,
            logo: file,
            logoName: this.shortenText(file.name)
          });
        }
        reader.readAsDataURL(file)
      }
    }
  }

  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    const { companyName, businessAddress, email, phoneNumber, businessType, logo, facebook, instagram, twitter } = this.state
    const socialMedia = []
    if(validator.isEmpty(companyName)){
      swal('No Name', 'Please enter Name', 'error')
      return
    }
    if(validator.isEmpty(businessAddress)){
      swal('No Address', 'Please enter Address', 'error')
      return
    }
    if(!validator.isEmail(email)){
      swal('Not Email', 'Please enter valid email', 'error')
      return
    }
    if(validator.isEmpty(email)){
      swal('No Email', 'Please enter email', 'error')
      return
    }
    if(validator.isEmpty(businessType)){
      swal('No business Types', 'Please Specify Business type', 'error')
      return
    }
    if(validator.isEmpty(phoneNumber)){
      swal('No Phone Number', 'Please enter Phone Number(s)', 'error')
      return
    }
    if(!validator.isEmpty(facebook)){
      let facebook = {
        media:'facebook',
        url:this.state.facebook.trim()
      }
     socialMedia.push(facebook)
    }
    if(!validator.isEmpty(twitter)){
      let twitter = {
        media:'twitter',
        url:this.state.twitter.trim()
      }
      socialMedia.push(twitter)
    }
    if(!validator.isEmpty(instagram)){
      let instagram = {
        media:'instagram',
        url:this.state.instagram.trim()
      }
      socialMedia.push(instagram)
    }
    let _phoneNumber = phoneNumber.trim().split(',')
    this.setState({socialMedia, phoneNumber:_phoneNumber}, ()=> this.handleUpdateUser())
   
  }
  handleUpdateUser = ()=> {
    this.setState({loading: true})
    const { _id, companyName, businessAddress, email, phoneNumber, businessType, logo, socialMedia} = this.state
    let user ={
      companyName: companyName.trim(), 
      businessAddress: businessAddress.trim() , 
      email: email.trim(), 
      phoneNumber, 
      businessType: businessType.trim(), 
      logo, 
      socialMedia
    }
    this.props.handleUpdateUser(_id, user)
    .then(res=>{
      if(res){
        this.setState({loading: false, _id: '',
        companyName: '',
        businessAddress: '',
        email: '',
        phoneNumber: '',
        businessType:'',
        logo: undefined,
        logoName:undefined,
        facebook:'',
        twitter:'',
        instagram:'',
        socialMedia:[]}, ()=> swal(`${res.message}`, '', 'success'))
        return
      }
      this.setState({loading: false})
    })
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.User.companyName !== prevState.companyName){
      let phoneNumber = nextProps.User.phoneNumber.join()
      return {...nextProps.User, phoneNumber};
    }
    else return null;
  }

  render () {
    return (
      <Layout
        {...styles.Layout}
      >
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
            handleFileChange={this.handleFileChange}
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
