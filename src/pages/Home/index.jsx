import React, { Component } from 'react'
import Slider from "react-slick"

// components
import { BookATripForm } from '../../components/Forms'
import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout'
import { Image } from '../../components/Picture'
import {PartnerCard} from '../../components/Card'

// images
import HomeImg from '../../assets/images/HOME_PAGE (1) 1.png'


// Generic Components
import { Wrapper, Row } from '../../theme/style/styles'
import { SubLabel } from '../../theme/style/typeface'

// styles
import * as Page from './styles'
const styles = {
  Wrapper: {
    height: 'calc(95vh - 40px)'
  },
  Title: {
    title: 'Welcome!',
    subTitle: 'Signup today and enjoy unlimited patronage',
    // altHeader:'true',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  Row: {
    justifyContent: 'flex-start'
  },
  Banner: {
    width: '50%',
    height: '100%',
    // banner: bgImage
  }
}
const NextArrow = props =>  {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}
  
const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}
class Home extends Component {

  addDays = (date, days) => {
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }
  subDays = (date, days) => {
    let result = new Date(date)
    result.setDate(result.getDate() - (days || 0))
    return result
  }
  componentDidMount () {
   
    console.log(this.props.Users)
    setTimeout(() => {
      this.props.handlePageLoader(false)
      console.log(this.props.Users)
    }, 10000)
  }
   
  render () {
    const settings = {
      className: "center",
      dots: false,
      centerPadding: "60px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 4500,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }
      ]
    };
    const settingsTwo = {
      ...settings,
      rtl: true
    };
    return (
      <Layout>
         <Wrapper
          {...styles.Wrapper}
          className='fixedheight'
        >
          <Page.MainContainer>
            <Page.BookATripSection>
            <Row className='row'>
                <BookATripForm 
                className='bookingform'
                  addDays={this.addDays}
                  subDays={this.subDays}
                  />
                <Image src={HomeImg} className='travel-image' />
              </Row>
             
            </Page.BookATripSection>
        <Page.SliderContainer className='featured'>
        <SubLabel className='title'>
        Feautured Partners
        </SubLabel>
          <Slider {...settings}>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
          </Slider>
        </Page.SliderContainer>
        <Page.SliderContainer className='featured'>
        <SubLabel className='new'>
        New Partners
        </SubLabel>
          <Slider {...settingsTwo}>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
          </Slider>
        </Page.SliderContainer>
        {/* <article className='row p-5'>
          <Carousel title='Featured Partners' />
        </article>

        <article className='row p-5'>
          <Carousel title='New Partners' />
        </article> */}
         </Page.MainContainer>
        </Wrapper>
      </Layout>
    )
  }
}

export default Home
