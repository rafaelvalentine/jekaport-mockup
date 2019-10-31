import styled from 'styled-components'
import { device } from '../../components/device'

export const Wrapper = styled.div`
background: ${props => props.theme.white};
height: ${props => props.height};
// max-height: ${props => props.maxHeight};
width:100%;
&.fixedheight{
  overflow-y: auto;
  max-height: calc(94vh - 103px);
  width: 100%;
}
@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
}
@media ${device.laptopL} { 
  height: 95.8vh;
  &.fixedheight{
    overflow-y: auto;
    max-height: calc(95.8vh - 103px);
    width: 100%;
  }
}

`

export const Row = styled.div`
width:${props => props.width ? props.width : '100%'};
height:${props => props.height ? props.height : '100%'};
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
align-items:${props => props.alignItems ? props.alignItems : 'center'};
padding:${props => props.padding ? props.padding : '0'};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
margin:${props => props.margin ? props.margin : '0 auto'};
`
export const Column = styled.div`
width:${props => props.width ? props.width : '100%'};
height:${props => props.height};
display:flex;
flex-direction: column;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
align-items:${props => props.alignItems ? props.alignItems : 'center'};
padding:${props => props.padding ? props.padding : '0'};
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
margin:${props => props.margin ? props.margin : '0 auto'};
`

export const ListWrapper = styled.div`
width:100%;
display: flex;
justify-content:flex-start;
align-items: center;
flex-wrap ${props => props.flexWrap ? props.flexWrap : 'wrap'};
padding:${props => props.padding ? props.padding : '0' };
margin:${props => props.margin ? props.margin : '0' };
`