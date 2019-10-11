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
    align-content:${props => props.alignContent};
    margin: ${props => props.margin};
    padding:${props => props.padding};
`
Container.defaultProps = {
  width: '306px',
  height: '308px'
}

export const FixContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items:center;
background:${props => props.theme.transparent};
width: 100%;
height: 100%;
flex-wrap: wrap;
`

export const FixContainerAlt = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:flex-start;
background:${props => props.theme.transparent};
width: 100%;
padding: 8px 10px;
max-height:120px;
flex-wrap: nowrap;
border:none;
`
