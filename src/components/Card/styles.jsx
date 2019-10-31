import styled from 'styled-components'
import { device } from '../device'

export const Container = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.white};
    box-shadow: ${props => props.boxShadow};
    width: ${props => props.width};
    min-height: ${props => props.height};
    color: ${props => props.color};
    border-radius:${props => props.borderRadius ? props.borderRadius : '4px'};
    display: flex;
    flex-wrap:  ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content:${props => props.justifyContent};
    align-items:${props => props.alignItems};
    // align-content: ${props => props.alignContent};
    margin: ${props => props.margin};
    padding:${props => props.padding};
`
Container.defaultProps = {
  width: '373px',
  height: '106px',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
  borderRadius: '15px',
  justifyContent: 'center',
  alignItems: 'center'
}


export const SeatWrapper = styled.div`
position: relative;
`
export const SeatNumber = styled.span`
position: absolute;
top:12px;
left:8px;
width: 15px;
height: 15px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;
color: ${props => props.theme.blue};
border: .5px solid ${props => props.theme.blue};
border-radius: 50px;
text-align: center;
`

export const Text = styled.p`
// font-size: 12px;
// line-height: 16px;
// text-transform: capitalize
color: ${props => props.altText ? props.theme.green : props.theme.text};
margin:0;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
/* identical to box height */
color: #053C69;
`
export const TextAlt = styled(Text)`
overflow-wrap: break-word;
word-wrap: break-word;
hyphens: auto;
`
export const SubText = styled(Text)`
// font-size: 10px;
// line-height: 14px;
color: ${props => props.altSubText ? props.theme.blue : props.theme.text};
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #000000;
margin-top:5px;
`
export const SideBy = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
padding:0;
margin:0;
`
export const Stacked = styled(SideBy)`
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin:${props => props.stackedMargin}
`
export const Rating = styled.div`
display: flex;
justify-content: center;
align-items:center;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 56px;
color: #053C69;
span{
  display: flex;
justify-content: flex-start;
align-items:flex-start;
}
// img{
//   margin:0 5px ;
// }
// @media ${device.mobileS}{
//   font-size: 14px;
//   }
//   @media ${device.laptop}{
//     font-size: 18px;
//   }
`
export const URLTextArea = styled.textarea`
width: ${props => props.alt === 'true' ? '280px' : '200px'};
height: 30px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.3);
font-family: Roboto;
font-size: 12px;
line-height: 14px;
/* identical to box height */
color: rgba(0, 0, 0, 0.3);
resize:none;
`
export const LinkCopied = styled.span`
position: absolute;
bottom:-40px;
right:0;
background: ${props => props.theme.buttonBlue};
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #fff;
height: 40px;
width: 100px;
text-align:center;
display:flex;
justify-content: center;
align-items: center;
`
export const CopyLink = styled.div`
border: 1px solid rgba(0, 0, 0, 0.3);
cursor: pointer;
height: 30px;
width: 80px;
display:flex;
justify-content: center;
align-items: center;
:hover{
  border: 1px solid ${props => props.theme.buttonBlue};
}
`
export const HeaderWrapper = styled.div`
width: 100%;
border-bottom: 0.5px solid rgba(0, 0, 0, 0.4);
height: 82px;
display: flex;
justify-content:flex-start;
align-items:flex-start;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
/* identical to box height */
color: rgba(0, 0, 0, 0.7);
padding: 35px;
`
export const HourTextArea = styled.textarea`
width: 100%;
height: 105px;
background: #FFFFFF;
border: 1px solid transparent;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
color: rgba(0, 0, 0, 0.7);
resize:none;
`
export const BusinessNavItem = styled.div`
width: 325px;
height: 58px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.25);
border-radius: 5px;
display:flex;
justify-content: center;
align-items: center;
cursor:pointer;
:hover{
  box-shadow:box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}
`
export const ShortInfoText = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: rgba(0, 0, 0, 0.4);
margin:0;
padding:0;
`