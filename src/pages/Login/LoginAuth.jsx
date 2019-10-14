import React from 'react'

// components
import LoginForm from '../../components/LoginForm'
import Authentication from '../../components/Authentication'
import { Image } from '../../components/Picture'

// images
import bgImage from '../../images/Login.svg'

// pages
import Title from '../../components/Title'

// Generic Style Components
import { Wrapper, SubWrapper } from '../../theme/style/styles'

const styles = {
  titleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeighteight: '42px',
    color: '#006494',
    textAlign: 'center',
    marginTop: '50px'
  },

  subTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '28px',
    color: '#65617D',
    textAlign: 'center'
  },
  RegFormBorder: {
    background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px'
  }

}

const LoginAuth = () => {
  return (
    <Wrapper
      height='94vh'
      className='overflow-y-hidden'
    >
      <Title
        title='Welcome!'
        subTitle='Signup today and enjoy unlimited patronage'
      />
      <section className='p-4'>
        <SubWrapper>
          {/* <div className='col-md-6 d-flex justify-content-center align-items-center'> */}
          <Image src={bgImage}
            width='250px'
            height='200px'
            margin='0 230px 0 0'
            alt='Registration page background image' />
          {/* </div> */}

          {/* <div style={styles.RegFormBorder} className='col-md-6 p-5'> */}
          <LoginForm />
          {/* </div> */}
        </SubWrapper>
      </section>
    </Wrapper>
  )
}

export default LoginAuth
