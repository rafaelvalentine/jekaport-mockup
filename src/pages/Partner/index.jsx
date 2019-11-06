import React, { Component } from 'react'
import { Wrapper, Row } from '../../theme/style/styles'
import Banner from '../../components/Banner'
import * as Page from './styles'
import Title from '../../components/Title'
import {PartnerFormOne as Form} from '../../components/Forms'
import validator from 'validator'
import swal from 'sweetalert'
import Layout from '../../components/Layout'

// Specific Styles for the Components
const styles = {
  Wrapper: {
    height: 'calc(95vh - 40px)'
  },
  Row: {
    justifyContent: 'flex-start',
    alignItems:'flex-start'
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
    subTitle: 'Sign up by filling out this simple form (This section should contain personal information of individual registering for the company)',
    // altHeader:'true',
    marginHeader:'0 0 0'
  }
}

export default class index extends Component {
  state ={
    repName:'',
    repEmail:'',
    repIdNumber:'',
    repIdFile:undefined,
    repPhone:'',

  }
shortenText = text => {
  const extenion = text.split('.')[1]
    if (text.length > 25) {
      return `${text.slice(0, 10)}... (.${extenion})`
    }
    return `${text} `
  }
  handleFileChange = e => {

    const imageMaxSize = 5000000 // bytes
    let file = e.target.files[0]
    // console.log(file)
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
      // console.log(isVerified)
      if (isVerified) {
        let reader = new FileReader()
        reader.onloadend = () => {
          this.setState({
            ...this.state,
            repIdFile: file,
            repIdFilename: this.shortenText(file.name)
          });
        }
        reader.readAsDataURL(file)
      }
    }
  }

  handleOnChange = e => {
    const {name, value } = e.target
    this.setState({...this.state, [name]: value })
  }
  onValueChange = values => {
    const { value } = values
    this.setState({...this.state, repPhone: value })
  }
  handleRegister = e => {
    e.preventDefault()
    const { repName, repEmail, repIdNumber, repIdFile, repPhone} = this.state
    if(validator.isEmpty(repName.trim())){
      swal('No Name', 'Please enter Name', 'error')
      return
    }
    if(validator.isEmpty(repEmail.trim())){
      swal('No Email', 'Please enter email', 'error')
      return
    }
    if(!validator.isEmail(repEmail.trim())){
      swal('Not Email', 'Please enter valid email', 'error')
      return
    }
    if(validator.isEmpty(repIdNumber.trim())){
      swal('No Identification', 'Please Enter Number Means of Identification (Individual Registering for Company ', 'error')
      return
    }
    if(!repIdFile){
      swal('No File', 'Upload Means of Identification (Individual Registering for Company )', 'error')
      return
    }
    if(validator.isEmpty(repPhone.trim())){
      swal('No Phone Number', 'Please enter Phone Number', 'error')
      return
    }
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false}, this.handleAddUserToStore )
    }, 3000);
  }
  handleAddUserToStore = () =>{
    const { repName, repEmail, repIdNumber, repIdFile, repPhone, repIdFilename } = this.state
    let rep = { 
       repName: repName.trim(), 
       repEmail: repEmail.trim() ,
       repIdNumber: repIdNumber.trim(), 
       repIdFile, 
       repPhone: repPhone.trim(),
       repIdNumber: repIdNumber.trim(), 
       repIdFilename: repIdFilename.trim()
       }
    
    this.props.handleAddUserToStore(rep)
    setTimeout(() => {
      this.props.history.push('/become-a-partner/form-two')
    }, 1000);
    
  }
  componentDidMount(){
    this.setState({...this.props.User})
  }
  render () {
    return (
      <Layout>

      <Wrapper
        {...styles.Wrapper}>
        <Row {...styles.Row} >
          <Banner {...styles.Banner}>
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
            onValueChange={this.onValueChange} 
            handleOnChange={this.handleOnChange}
            onFileChange={this.handleFileChange}
            handleRegister={this.handleRegister}
            />
          </Page.Container>
        </Row>
      </Wrapper>
      </Layout>
    )
  }
}
