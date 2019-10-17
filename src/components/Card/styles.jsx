import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.transparent};
    box-shadow: ${props => props.boxShadow};
    width: ${props => props.width};
    min-height: ${props => props.height};
    color: ${props => props.color ? props.color : props.theme.white};
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
cursor: pointer;
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