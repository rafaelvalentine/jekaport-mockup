import React, { Component } from 'react'

// components
import { LoginForm } from '../../components/Forms'
import { Image } from '../../components/Picture'

// images
import bgImage from '../../images/Login.svg'

// pages
import Title from '../../components/Title'

// Generic Style Components
import { Wrapper, SubWrapper } from '../../theme/style/styles'
export default class Index extends Component {

  state = {
    email:'',
    password:''
  }
 render (){
  return (
    <Wrapper
      height='94vh'
      className='overflow-y-hidden'
    >
      <Title
        title='Welcome!'
        subTitle='Signup today and enjoy unlimited patronage'
        style={{margin:'50px 0 0'}}
      />
      <section className='p-1'>
        <SubWrapper>
          <Image src={bgImage}
            width='250px'
            height='200px'
            margin='0 230px 0 0'
            alt='Registration page background image' />
          <LoginForm inputs={this.state}/>
        </SubWrapper>
      </section>
    </Wrapper>
  )
 }
}

