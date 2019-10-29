import React from 'react'
import * as Card from './styles'
import { Row } from '../../theme/style/styles'
import { Header, SubHeader } from '../../theme/style/typeface'
// import { Logo } from '../Picture'
// import { Main } from '../Input'
import { Seat, DuoText } from './cardParts'
import { Logo, Image } from '../Picture'
import Button from '../Button'
import moment from 'moment'

// for styled-components that have props styles

export const CardBox = ({ children, ...props }) => {
  return (
    <Card.Container {...props}>
      {children}
    </Card.Container>
  )
}
export const PickASeatCard = ({ ...props }) => {
  const styles = {
    PickASeatCard: {
      width: '390px',
      height: '289px',
      justifyContent: 'flex-start',
      padding: '20px 0'
    },
    PickASeatCardFirstRow: {
      justifyContent: 'space-between',
      height: '50px',
      padding: '0 40px',
      margin: '0 0 30px'
    },
    PickASeatCardSecondRow: {
      justifyContent: 'space-between',
      height: '50px',
      padding: '0 40px',
      margin: '0 0 30px'
    }
  }
  return (
    <CardBox
      {...styles.PickASeatCard}>
      <Row
        style={styles.PickASeatCardFirstRow}>
        <Seat number={1} />
        <Seat number={2} />
        <Seat number={3} />
        <Seat number={3} />
      </Row>
      <Row
        style={styles.PickASeatCardSecondRow}>
        <Seat number={1} />
        <Seat number={3} />
      </Row>

    </CardBox>
  )
}

export const DashboardAnalyticsCard = ({ ...props }) => {
  const styles = {

  }
  return (
    <CardBox />
  )
}

export const RoutePreviewCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '708px',
      height: '500px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px 0 60px',
      backgroundColor: '#fff'
    },
    Header: {
      altHeader: 'true',
      marginHeader: '0 0 0 auto'
    },
    Logo: {
      width: '15px',
      height: '15px',
      cursor: 'pointer',
      margin: '0 40px 0 auto'
    },
    Image: {
      width: '379px',
      height: '253px'
    },
    firstRow: {
      height: '50px'
    },
    secondRow: {
      flexWrap: 'nowrap',
      height: '350px',
      margin: '60px auto 0'
    },
    buttonRow: {
      height: '50px',
      padding: '0 72px 0 0'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Row
        {...styles.firstRow}>
        <Header
          {...styles.Header}>
        Preview Route
        </Header>
        <Logo src={require('../../assets/images/close-line.svg')}
          clicked={props.onHide}
          {...styles.Logo} />
      </Row>
      <Row
        {...styles.secondRow}>
        <Image src={props.inputs.vehicleImage || require('../../assets/images/default-car.svg')}
          {...styles.Image}
        />
        <div>
          <DuoText
            text='Type of Vehicle'
            subText={props.inputs.vehicleType || 'nil'}
          />
          <DuoText
            text='Vehicle Model'
            subText={props.inputs.vehicleModel || 'nil'}
          />
          <DuoText
            text='Route'
            subText={`${props.inputs.from || 'nil'} - ${props.inputs.to || 'nil'}`}
          />
          <DuoText
            text='Price'
            amount={props.inputs.price || '0'}
          />
          <DuoText
            text='Departing Time'
            subText={moment(props.inputs.departing).format('LTS') || 'nil'}
          />
          <DuoText
            text='Seats Available'
            subText={props.inputs.seats || 'nil'}
          />
        </div>
      </Row>
      <Row
        {...styles.buttonRow}>
        <Button
          altButton='true'
          content='PUBLISH'
          width='218px'
          loading={props.inputs.loading}
          // onClick={props.onHide}
          onClick={props.handleSubmit}
          margin='20px 10px 10px auto' />
        <Button
          content='MODIFY'
          width='206px'
          loading={props.inputs.loading}
          // onClick={props.handleSumbit}
          onClick={props.onHide}
          margin='20px 10px 10px 0' />
      </Row>
    </CardBox>
  )
}

export const DeleteRouteCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '100%',
      height: '240px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px 0 60px',
      backgroundColor: '#fff'
    },
    Header: {
      altHeader: 'true'
    },
    buttonRow: {
      height: '50px',
      padding: '0 72px 0 0'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Header
        {...styles.Header}
      >
        Are you sure you want to delete {props.inputs.from} - {props.inputs.to} Route?
      </Header>
      <Row
        {...styles.buttonRow}>
        <Button
          altButton='true'
          content='Cancel'
          width='218px'
          loading={props.inputs.loading}
          onClick={props.onHide}
          margin='20px 10px 10px auto' />
        <Button
          content='DELETE'
          width='206px'
          loading={props.inputs.loading}
          onClick={props.handleDeleteRoute}
          margin='20px 10px 10px 0' />
      </Row>
    </CardBox>
  )
}
export default CardBox
