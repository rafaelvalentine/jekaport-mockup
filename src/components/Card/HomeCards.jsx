import React, { useEffect, useState } from 'react'
import CardBox from './Cards'
// import { Link } from 'react-router-dom'
// import Button from '../Button'
import { Image, Logo } from '../Picture'
import { Column, Row } from '../../theme/style/styles'
import { Title } from '../../theme/style/typeface'
import { SideBy, SubText } from './styles'
// import Rating from 'react-rating'

export const PartnerCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '373px',
      height: '160px',
      padding: '0 12px',
      margin: '20px 0',
      backgroundColor: '#FCFCFC',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    Row: {
      margin: 'auto 0',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    Image: {
      width: '94px',
      height: '99px'
    },
    Column: {
      height: '99px',
      width: '70%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    Title: {
      altTitleformWeight: 'true',
      margin: '0 0 0 10px'
    },
    Icons: {
      width: '15px',
      height: '15px',
      margin: '0 8px'
    }
  }
  return (
    <CardBox
      id='partnercard'
      {...styles.CardBox}>
      <Row {...styles.Row}>
        <Image src={props.companyLogo || require('../../assets/images/fire-transport-logo.svg')} {...styles.Image} />
        <Column
          {...styles.Column}>
          <Title {...styles.Title}>
            {props.companyName || 'companyLogo' }
          </Title>
          <SideBy>
            <Logo {...styles.Icons} src={require('../../assets/images/location.svg')} />
            <SubText>
              {props.businessAddress || '29 Adex Street, Lagos Nigeria'}
            </SubText>
          </SideBy>
          <SideBy>
            <Logo {...styles.Icons} src={require('../../assets/images/phonenumbers.svg')} />
            <SubText>
              {props.phoneNumber && props.phoneNumber.length > 0 ? props.phoneNumber.join() : '+2349034264635, +2349012323232 '}
            </SubText>
          </SideBy>
        </Column>
      </Row>
    </CardBox>
  )
}
export const SponsorCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '373px',
      height: '160px',
      backgroundColor: '#FCFCFC'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}
      {...props} />
  )
}
