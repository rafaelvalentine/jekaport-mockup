import styled from 'styled-components'

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
    align-content: ${props => props.alignContent};
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
margin-left: 5px;
margin-bottom:14px;
`