import styled from 'styled-components'
import { device } from '../../components/device'

export const Header = styled.h1`
    font-size: ${props => props.altHeader ? '24px' : '36px'};
    line-height: ${props => props.altHeader ? '28px' : '42px'};
    font-weight: 700;
    color: ${props => props.headerColor ? props.headerColor : props.theme.black};
    text-align:${props => props.textAlignHeader};
    margin:${props => props.marginHeader ? props.marginHeader : ' 0 0 17px'};
`
export const SubHeader = styled.h2`
    font-size: ${props => props.smallSubHeader ? '17px' : '25px'};
    line-height: ${props => props.smallHeader ? '26px' : '28px'};
    font-weight: 500;
    color: ${props => props.altSubHeader ? props.theme.white : props.theme.grayText};
    margin:${props => props.marginSubHeader ? props.marginSubHeader : '0'};
    text-align:${props => props.textAlignSubHeader};
`

export const Title = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    text-transform: inherit;
    color: ${props => props.theme.actions};
    margin:${props => props.margin}
`

export const SubLabel = styled.h1`
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.grayText};
    text-align: left;
`

export const BoldLabel = styled(SubLabel)`
    text-align: ${props => props.textAlign ? props.textAlign : 'left' } !important;
    color: ${props => props.theme.grayText};
    margin-left:0;
    font-weight: 700;
`
export const GreenLabel = styled(SubLabel)`
    font-weight: bold;
    text-align: ${props => props.textAlign} !important;
    color: ${props => !props.altColor ? props.theme.red : props.theme.green};
    cursor: pointer;
`


export const Warning = styled.span`
    color: ${props => props.theme.caution};
    font-weight: bold;
    font-size: 12px;
`
export const Value = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: ${props => props.theme.black};
    opacity: 0.5;
`
export const CheckBoxLabel = styled(SubLabel)`
    display: inline-block;
    vertical-align: top;

    ::after {
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        transition: all 0.2s ease-in-out;
        border: 1px solid #7b7c7f;
        border-radius: 2px;
        background: #fff;
        color: #fff;
        font: 10px/13px icomoon !important;
        font-variant: normal;
        text-align: center;
        text-transform: none;
        content: "";
    }
`



export const ContactTitle = styled.p`
font-weight: 700;
font-size: 17px;
font-family: poppins;
line-height:26px;
text-transform: uppercase;s
`
export const ContactText = styled.p`
font-weight: 500;
font-size: 13px;
line-height:26px;
`

export const LandingText = styled.p`
margin: auto;
font-size: 190px;
font-weight: 900;
color: ${props => props.theme.white};
text-transform: capitalize;
margin:${props => props.margin};
animation-name: fadeInOut;
animation-duration: 3.5s;
opacity:0;
@keyframes fadeInOut {
    0% {
      opacity: 0;
    }
  
    45% {
      opacity: 1;
    }
  
    100% {
      opacity: 0%;
    }
  }

  @media ${device.mobileS} {   
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
  }
`
LandingText.defaultProps = {
  margin: '0 0 16px'
}