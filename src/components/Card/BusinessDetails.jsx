import React, { useEffect, useState } from 'react'
import CardBox from './Cards'
// import { Link } from 'react-router-dom'
import Button from '../Button'
import { Image, Star } from '../Picture'
import { Column, Row } from '../../theme/style/styles'
import { Header } from '../../theme/style/typeface'
import { SideBy, Stacked, LinkCopied, SubText, Rating as RatingWrapper, URLTextArea, CopyLink, HeaderWrapper, Text, HourTextArea, BusinessNavItem, ShortInfoText } from './styles'
import Rating from 'react-rating'
// import { CardHeader } from 'react-bootstrap/Card'

export const BusinessDetailsImage = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '319px',
      height: '319px',
      padding: '20px',
      borderRadius: '0'
    },
    Image: {
      width: '100%',
      height: '100%'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Image src={props.companyLogo || require('../../assets/images/default-car.svg')} {...styles.Image} />
    </CardBox>
  )
}
export const BusinessBookingBox = ({ ...props }) => {
  const [copyText, setCopyText] = useState({ status: true, copied: false })
  const styles = {
    CardBox: {
      width: '319px',
      height: '210px',
      padding: '20px',
      margin: 'auto 0',
      justifyContent: 'flex-start'
    },
    Image: {
      width: '100%',
      height: '100%'
    }
  }
  const socialMedia = props.socialMedia.map(media => {
    // console.log(media)
    return (
      <a key={Math.random()} href={media.url}>
        <Image src={require(`../../assets/images/${media.media}.svg`)}
          width='24px'
          height='24px'
          margin='20px'
          cursor='pointer'
        />
      </a>
    )
  })
  // console.log('[props from business box]', props)
  // const shortenText = text => {
  //   if (text.length > 25) {
  //     return `${text.slice(12, 50)}...`
  //   }
  //   return `${text} `
  // }

  const isEdge = window.navigator.userAgent.indexOf('Edge') != -1
  const isIE = window.navigator.userAgent.indexOf('Trident') != -1 && !isEdge

  function updateClipboard (newClip) {
    try {
      navigator.clipboard.writeText(newClip).then(function () {
        /* clipboard successfully set */
        setCopyText({ ...copyText, copied: true })
        setTimeout(() => {
          setCopyText({ ...copyText, copied: false })
        }, 1000)
      }, function () {
        /* clipboard write failed */
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (isEdge || isIE) {
      setCopyText({ ...copyText, status: false })
    }
  }, [])
  return (
    <CardBox
      {...styles.CardBox}>
      <Button
        content='Book'
        width='100%'
        height='43px'
        margin='30px 0 20px' />
      {!copyText.status ? <SubText>copy shareable link</SubText> : null }
      <SideBy style={{ position: 'relative' }}>
        <URLTextArea alt={!copyText.status ? 'true' : 'false'} value={`https://www.treeprite.com/${props.companyName.toLowerCase().replace(/\s+/g, '')}/${props._id}`} disabled={copyText.status} />
        {/* {copyText} */}
        {copyText.status ? <CopyLink onClick={() => updateClipboard(`https://www.treeprite.com/${props.companyName.toLowerCase().replace(/\s+/g, '')}/${props._id}`)}>
          <SubText>
          Share Url
          </SubText>
        </CopyLink>
          : null}
        {copyText.copied ? <LinkCopied>
        link copied
        </LinkCopied> : null}
      </SideBy>
      <SideBy style={{ justifyContent: 'center' }} >
        {socialMedia}
      </SideBy>
    </CardBox>
  )
}
export const BusinessInfoTab = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '751px',
      height: '319px',
      padding: '40px 60px',
      borderRadius: '0',
      direction: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'nowrap'

    },
    firstColumn: {
      width: '40%',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    Image: {
      width: '100%',
      height: '100%'
    },
    Header: {
      altHearder: 'true'
    },
    Icons: {
      width: '15px',
      height: '15px',
      margin: '0 8px'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Column
        {...styles.firstColumn}>
        <Header
          {...styles.Header}>
          {props.companyName || 'Company Name'}
        </Header>
        <Stacked>
          <SideBy>
            <Image {...styles.Icons} src={require('../../assets/images/tag.svg')} />
            <SubText>
              {props.businessType}
            </SubText>
          </SideBy>
          <SideBy>
            <Image {...styles.Icons} src={require('../../assets/images/location.svg')} />
            <SubText>
              {props.businessAddress}
            </SubText>
          </SideBy>
          <SideBy>
            <Image {...styles.Icons} src={require('../../assets/images/phonenumbers.svg')} />
            <SubText>
              {props.phoneNumber.join()}
            </SubText>
          </SideBy>
          <Stacked>
            <RatingWrapper>
              {props.averageRate || 0}
              <Rating
                initialRating={props.averageRate || 0}
                style={{ margin: '0' }}
                readonly
                emptySymbol={<Star empty='true' />}
                fullSymbol={<Star />}
              />
            </RatingWrapper>
          </Stacked>
          <SubText style={{ margin: '0 0 0 10px' }}>
            {props.reviews || 0 } reviews
          </SubText>
        </Stacked>
      </Column>
      <BusinessBookingBox {...props} />
      {/* <Image src={require('../../assets/images/default-car.svg')} {...styles.Image} /> */}
    </CardBox>
  )
}
export const MainDetailsWrapper = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '650px',
      height: '792px',
      backgroundColor: '#FFFFFF',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0 0 20px'
    },
    Header: {
      altHeader: 'true'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <HeaderWrapper>
        {props.currentTab || 'About Us'}
      </HeaderWrapper>
      {props.children}
    </CardBox>
  )
}
export const AboutUs = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '584px',
      height: '205px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '20px 0 0',
      padding: '20px',
      color: 'rgba(0, 0, 0, 0.7)'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Text style={{ margin: '0 0 20px', color: 'rgba(0, 0, 0, 0.7)' }}>
        Business Info
      </Text>
      <SubText>
        {props.businessInfo || 'No Business Info'}
      </SubText>
    </CardBox>
  )
}

export const Terminals = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '584px',
      height: '205px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '20px 0 0',
      padding: '20px',
      color: 'rgba(0, 0, 0, 0.7)'
    },
    Row: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '584px',
      height: '105px'

    },
    terminalImage: {
      width: '12px',
      height: '12px',
      margin: '0 20px'
    }
  }
  const Terminals = props.terminals.map(terminal => {
    if (terminal === '') {
      return null
    }
    return (
      <SideBy key={Math.random()} styles={{ margin: '0 0 20px' }}>
        <Image src={require('../../assets/images/Ellipse.svg')}
          {...styles.terminalImage}
        />
        <SubText>
          {terminal}
        </SubText>
      </SideBy>
    )
  })
  return (
    <CardBox
      {...styles.CardBox}>
      <Text style={{ margin: '0 0 20px', color: 'rgba(0, 0, 0, 0.7)' }}>
        Terminals
      </Text>
      <Row {...styles.Row} >
        {Terminals}
      </Row>
      {/* <SubText>
        {props.businessInfo || 'No Business Info'}
      </SubText> */}
    </CardBox>
  )
}
export const BusinessHour = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '584px',
      height: '205px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '20px 0 0',
      padding: '20px',
      color: 'rgba(0, 0, 0, 0.7)'
    }
  }
  return (
    <CardBox
      {...styles.CardBox}>
      <Text style={{ margin: '0 0 20px', color: 'rgba(0, 0, 0, 0.7)' }}>
        Business Hours
      </Text>
      <HourTextArea value={props.businessHour} />
    </CardBox>
  )
}
export const Services = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '584px',
      height: '205px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '20px 0 0',
      padding: '20px',
      color: 'rgba(0, 0, 0, 0.7)'
    },
    Row: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: '105px'
    },
    terminalImage: {
      width: '12px',
      height: '12px',
      margin: '0 20px'
    }
  }
  const Services = props.services.map(service => {
    if (service === '') {
      return null
    }
    return (
      <SideBy key={Math.random()} styles={{ margin: '0 0 20px' }}>
        <Image src={require('../../assets/images/Ellipse.svg')}
          {...styles.terminalImage}
        />
        <SubText>
          {service}
        </SubText>
      </SideBy>
    )
  })
  return (
    <CardBox
      {...styles.CardBox}>
      <Text style={{ margin: '0 0 20px', color: 'rgba(0, 0, 0, 0.7)' }}>
      Services
      </Text>
      <Row {...styles.Row} >
        {Services}
      </Row>
    </CardBox>
  )
}

export const BusinessDetailsNav = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '388px',
      height: '371px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: '0 20px',
      padding: '40px 30px',
      color: 'rgba(0, 0, 0, 0.7)'
    }
  }
  return (
    <CardBox {...styles.CardBox} >
      <BusinessNavItem>
      About Us
      </BusinessNavItem>
      <BusinessNavItem>
      Business Hours
      </BusinessNavItem>
      <BusinessNavItem>
      Reviews
      </BusinessNavItem>
      <BusinessNavItem>
      Services
      </BusinessNavItem>
      <BusinessNavItem>
      FAQs
      </BusinessNavItem>
    </CardBox>
  )
}
export const ShortInfoCard = ({ ...props }) => {
  const styles = {
    CardBox: {
      width: '388px',
      height: '211px',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: '70px 20px 0',
      padding: '32px 20px',
      color: 'rgba(0, 0, 0, 0.7)'
    },
    Header: {
      altHeader: 'true',
      margin: '0 0 25px'
    },
    Row: {
      justifyContent: 'flex-start'
    },
    Image: {
      width: '150px',
      height: '100px'
    },
    Icons: {
      width: '15px',
      height: '15px',
      margin: '0 8px'
    }
  }

  return (
    <CardBox
      {...styles.CardBox}>
      <Header {...styles.Header}>
        {props.companyName}
      </Header>
      <Row
        {...styles.Row} >
        <Image src={props.companyLogo} {...styles.Image} />
        <Stacked>
          <SideBy>
            <Image {...styles.Icons} src={require('../../assets/images/tag.svg')} />
            <ShortInfoText>
              {props.businessType}
            </ShortInfoText>
          </SideBy>
          <RatingWrapper
            style={{ margin: '0 0 0 10px' }}
          >
            {props.averageRate || 0}
            <Rating
              initialRating={props.averageRate || 0}
              style={{ margin: '0' }}
              readonly
              emptySymbol={<Star empty='true' />}
              fullSymbol={<Star />}
            />
          </RatingWrapper>
          <SubText style={{ margin: '0 0 0 20px' }}>
            {props.reviews || 0 } reviews
          </SubText>
        </Stacked>
      </Row>
    </CardBox>
  )
}
