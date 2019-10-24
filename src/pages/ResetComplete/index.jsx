import React, { Component } from 'react'

// components
// import Title from '../../components/Title'
import Banner from '../../components/Banner'
// import CardWrapper from '../components/Cards';
import { CardWrapper } from '../../components/Card'
import Layout from '../../components/Layout'
import * as Reset from './styles'

// Generic Style Components
import { Wrapper, Row } from '../../theme/style/styles'
import { Image } from '../../components/Picture'

// Styles For styled-components with props styles
const styles = {
  Wrapper: {
    height: '94vh'
  },
  Banner: {
    banner: require('../../assets/images/fitness.png'),
    width: '100%',
    height: '100%'
  },
  Layout: {
    altNavItemsColor: 'true'
  },
  // Title: {
  //   padding: '0',
  //   altHeader: 'true',
  //   headerColor: '#053C69'
  // },
  Row: {
    padding: '60px 0 0',
    height: '100%'
  },
  CardWrapper: {
    backgroundColor: '#fff',
    width: '662px',
    height: '289px'
  }
}
export default class ForgotPassword extends Component {
  render () {
    return (
      <Layout {...styles.Layout}>
        <Wrapper
          {...styles.Wrapper}>
          <Banner {...styles.Banner}>
            <Row
              {...styles.Row}
            >
              <CardWrapper
                {...styles.CardWrapper}>
                <Reset.Thanks>
               Password Reset Successful!
                </Reset.Thanks>
                <Image src={require('../../assets/images/checked.svg')} width='44px' height='44px' margin='20px 0' />
                <Reset.subTitle>
                Your password was successfully changed.
                  <Reset.Link onClick={() => this.props.history.push('/login')}>
                  click here to return to Login
                  </Reset.Link>
                </Reset.subTitle>
              </CardWrapper>
            </Row>
          </Banner>
        </Wrapper>
      </Layout>
    )
  }
}
