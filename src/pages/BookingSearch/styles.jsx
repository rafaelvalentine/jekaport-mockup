import styled from 'styled-components'
import { device } from '../../components/device'

export const MainContainer = styled.div`
position:relative;
padding: 50px 50px 0;
width: ${props => props.width ? props.width : '100%'}!important;
min-height:${props => props.height ? props.height : '100%'} !important;
.main-row{
  justify-content: flex-start;
}
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
}
@media ${device.laptop} { 
}
`
export const Results = styled.section`
margin: 40px 0 0;
.generic-list{
  width: 950px;
  padding: 30px 0 30px 10px;
  margin: 0 0 30px;
  height:70vh;
  // overflow:auto;
}
.bookingpagination{
  width: 900px;
  padding: 35px 36px;
  margin:auto 0 24px;
  background: #FCFCFC;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
}
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
  .generic-list{
    width: 720px;
    height:70vh;
  }
  .bookingpagination{
    width: 700px;
  }
}
@media ${device.laptop} { 
  .generic-list{
    width: 950px;
    height:70vh;
  }
  .bookingpagination{
    width: 920px;
  }
}
`
export const ListWrapperWrapper = styled.div`
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
  height: 50vh;
}
@media ${device.laptop} { 
  height: 50vh;
}
@media ${device.laptopM} { 
  height: 65vh;
}
`