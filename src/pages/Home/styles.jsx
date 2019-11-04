import styled from 'styled-components'
import { device } from '../../components/device'
import Banner from '../../assets/images/Home_Background.png'

export const MainContainer = styled.div`
position:relative;
padding: 40px 0 0;
width: ${props => props.width ? props.width : '100%'}!important;
min-height:${props => props.height ? props.height : '100%'} !important;
content: "";
background: /* background image */ url(${Banner});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: scroll;
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
}
@media ${device.laptop} { 
}

`
export const BookATripSection = styled.section`

@media ${device.mobileS}{
}
@media ${device.tablet}{

}
@media ${device.laptop}{
  .row{
    justify-content: space-around;
    flex-wrap: nowrap;
  }
  .travel-image{
    width: 348px !important;
    height: 523.64px;
  }
}
@media ${device.latopM}{
}
@media ${device.latopL}{
  .travel-image{
    width: 408px !important;
    height: 523.64px;
  }
}
`
export const SliderContainer = styled.section`
// height: 500px;
width: 95%;
margin: 80px auto 50px;
.title{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 30px;
}
.arrow{
  display: block;
}
// #partnercard{
//   width: 300px !important;
//   padding:0;
// }
.slick-prev:before,
.slick-next:before
{
  color:${props => props.theme.buttonBlue};
}
&.featured{

}
&.new{
  
}
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
}
@media ${device.laptop} { 

}
@media ${device.laptopM} { 
  
}
@media ${device.laptopL} { 
  // #partnercard{
  //   width: 300px !important;
  //   padding:0;
  // }
}

`