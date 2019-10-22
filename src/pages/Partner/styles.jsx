import styled from 'styled-components'
import { device } from '../../components/device'

export const Container = styled.section`
width: 50%;
max-height: 100%;
overflow-y:auto;
background:${props => props.theme.white};
padding: 100px 64px 0; 
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