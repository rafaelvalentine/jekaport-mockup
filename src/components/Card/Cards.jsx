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
      width: '650px',
      height: '500px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px 0 60px',
      backgroundColor: '#fff',
      margin:'0 auto'
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
      height: '500px',
      margin: '30px auto 0',
      padding: '0 40px',
      justifyContent: 'space-around'
    },
    buttonRow: {
      height: '50px',
      padding: '0 72px 0 0'
    },
    Duotext: {
      stackedMargin: '0 0 15px'
    }
  }
  const date = new Date()
  const departing = props.inputs.departing !== '' ? props.inputs.departing : date
  const start = props.inputs.start !== '' ? props.inputs.start : date
  const end  = props.inputs.end !== '' ? props.inputs.end : new Date(date.setMonth(date.getMonth() + 6))
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
            {...styles.Duotext}
            text='Type of Vehicle'
            subText={props.inputs.vehicleType || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Vehicle Model'
            subText={props.inputs.vehicleModel || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Route'
            subText={`${props.inputs.from || 'nil'} - ${props.inputs.to || 'nil'}`}
          />
          <DuoText
            {...styles.Duotext}
            text='Price'
            amount={props.inputs.price || '0'}
          />
          <DuoText
            {...styles.Duotext}
            text='Departure Time'
            subText={moment(departing).format('LTS') || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Duration'
            subText={`${moment(start).format('DD/MM/YYYY')} - ${moment(end).format('DD/MM/YYYY')}`}
          />
          <DuoText
            {...styles.Duotext}
            text='Discount'
            subText={`${props.inputs.discount || 'nil'} %`}
          />
          <DuoText
            {...styles.Duotext}
            text='Blocked Seats'
            subText={props.inputs.blockedSeats || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
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
export const ViewRouteCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '650px',
      height: '500px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px 0 60px',
      backgroundColor: '#fff',
      margin:'0 auto'
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
      height: '500px',
      margin: '30px auto 0',
      padding: '0 40px',
      justifyContent: 'space-around'
    },
    buttonRow: {
      height: '50px',
      padding: '0 72px 0 0'
    },
    Duotext: {
      stackedMargin: '0 0 15px'
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
            {...styles.Duotext}
            text='Type of Vehicle'
            subText={props.inputs.vehicleType || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Vehicle Model'
            subText={props.inputs.vehicleModel || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Route'
            subText={`${props.inputs.from || 'nil'} - ${props.inputs.to || 'nil'}`}
          />
          <DuoText
            {...styles.Duotext}
            text='Price'
            amount={props.inputs.price || '0'}
          />
          <DuoText
            {...styles.Duotext}
            text='Departure Time'
            subText={moment(props.inputs.departing).format('LTS') || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Duration'
            subText={`${moment(props.inputs.start).format('DD/MM/YYYY')} - ${moment(props.inputs.end).format('DD/MM/YYYY')}` || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Discount'
            subText={`${props.inputs.discount || 'nil'} %`}
          />
          <DuoText
            {...styles.Duotext}
            text='Blocked Seats'
            subText={props.inputs.blockedSeats || 'nil'}
          />
          <DuoText
            {...styles.Duotext}
            text='Seats Available'
            subText={props.inputs.seats || 'nil'}
          />
        </div>
      </Row>
      <Row
        {...styles.buttonRow}>
        <Button
          altButton='true'
          content='Save'
          width='218px'
          loading={props.inputs.loading}
          // onClick={props.onHide}
          onClick={props.onHide}
          margin='20px 10px 10px auto' />
        <Button
          content='UPDATE'
          width='206px'
          loading={props.inputs.loading}
          // onClick={props.handleSumbit}
          onClick={props.update}
          margin='20px 10px 10px 0' />
      </Row>
    </CardBox>
  )
}
export const DeleteRouteCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '50%',
      height: '240px',
      justifyContent: 'center',
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
