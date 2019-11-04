import styled from 'styled-components'
import { device } from '../../components/device'

export const Container = styled.section`
width: 50%;
max-height: 100%;
overflow-y:auto;
background:${props => props.theme.white};
padding: 75px 64px 0; 
.title h2 {
  font-size: 12px !important;
}
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
}
@media ${device.laptopL} { 
  padding:100px 64px 0; 
}
`
export const Title = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
color: #FFFFFF;
margin-bottom: 32px;
margin-top: auto;
text-align: center;
`
export const SubTitle = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-align: center;
color: #FFFFFF;
width: 60%;
margin-bottom: 30vh;
`