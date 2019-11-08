import React, { useEffect, useState } from 'react'
import CardBox from './Cards'
// import { Link } from 'react-router-dom'
import Button from '../Button'
import { Image } from '../Picture'
import { Title, SmallTextAlt } from '../../theme/style/typeface'
import { Row } from '../../theme/style/styles'
import { ResultDetailsContainer, SideBy, Stacked, RouteDetailsTitle, RouteDetailsText } from './styles'
import moment from 'moment'
import { formatAmount } from '../../components/Tools/Formatter'

const RouteDetailsDuoText = ({ ...props }) => {
  return (
    <Stacked stackedMargin='0 0 10px 5px' >
      <RouteDetailsTitle >{props.title || 'info'}:</RouteDetailsTitle>
      <RouteDetailsText >{props.text || 'details'}</RouteDetailsText>
    </Stacked>
  )
}
const RouteDetails = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '100%',
      height: '100%',
      padding: '15px 14px',
      backgroundColor: 'transparent',
      margin: '0 30px 0 0',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      boxShadow: '0'
    },
    Image: {
      width: '63px',
      height: '63px',
      margin: '0 5px 0 0'
    },
    Button: {
      content: 'BOOK NOW',
      width: '100px',
      height: '15px',
      fontSize: '9px',
      margin: 'auto 10px 10px auto'
    }
  }
  const departing = props.departing ? new Date(props.departing) : new Date()
  return (
    <ResultDetailsContainer>
      <CardBox
        {...styles.CardBox}>
        <SideBy>
          <Image src={props.vehicleTypeId.vehicleImage || require('../../assets/images/default-car.svg')} {...styles.Image} />
          <div style={{ width: '100%' }}>
            <SideBy style={{ width: '100%', justifyContent: 'space-between' }}>
              <RouteDetailsDuoText
                title='Vehicle Type'
                text={props.vehicleTypeId.vehicleType}
              />
              <RouteDetailsDuoText
                title='Price'
                text={`N${formatAmount(props.price || '500000')}`}
              />
            </SideBy>
            <SideBy style={{ width: '100%', justifyContent: 'space-between' }}>
              <RouteDetailsDuoText
                title='Departing'
                text={moment(departing).format('LT')}
              />
              <RouteDetailsDuoText
                title='Seats'
                text={props.seats}
              />
            </SideBy>
          </div>
        </SideBy>
        <Button {...styles.Button} />
      </CardBox>
    </ResultDetailsContainer>

  )
}
export const ResultCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '270px',
      height: '215px',
      padding: '24px',
      backgroundColor: '#FCFCFC',
      margin: '0 30px 40px 0',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Title>
        {props.partnerId.companyName || 'companyName'}
      </Title>
      <RouteDetails { ...props } />
    </CardBox>
  )
}
export const ShortInfoCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '350px',
      height: '150px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '70px 12px 30px',
      padding: '32px 20px',
      color: 'rgba(0, 0, 0, 0.7)',
      backgroundColor: '#FFFFFF'
    },
    Title: {
      margin: '0 0 25px'
    },
    Row: {
      justifyContent: 'flex-start'
    },
    Image: {
      width: '100%',
      height: '100%'
    },
    SmallTextAlt:{
      color:'#4CBEED'
    },
    Stacked:{
      margin:' 0 10px'
    },
    Icons: {
      width: '100px',
      height: '20px',
      margin: '0 0 0 auto'
    }
  }

  return (
    <CardBox
      {...styles.CardBox}>

      <Row
        {...styles.Row}>
        <div style={{ width: '86px', height: '91px' }}>
          <Image src={props.companyLogo || require('../../assets/images/milo.png')} {...styles.Image} />
        </div>

        <Stacked style={styles.Stacked}>
          <Title {...styles.Title}>
            {props.companyName || 'CompanyName'}
          </Title>
          <SmallTextAlt>
            {'' || ' Get more for less '}
          </SmallTextAlt>
          <SmallTextAlt {...styles.SmallTextAlt} onClick={props.onClick}>
            {'' || ' Get more for less '}
          </SmallTextAlt>
        </Stacked>
      </Row>
      <Image {...styles.Icons} src={require('../../assets/images/sponsored.svg')} />
    </CardBox>
  )
}
