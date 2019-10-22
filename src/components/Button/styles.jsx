import styled from 'styled-components'

export const Container = styled.div`
    margin:${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius:${props => props.borderRadius};
    border: 1px solid ${props => props.theme.transparent};
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.fontSize};
    line-height: 16px;
    cursor: pointer;
    color: ${props => props.altButton ? props.theme.buttonBlue : props.theme.whiteButton};
    background-color: ${props => props.altButton ? props.theme.whiteButton : props.theme.buttonBlue};
    transition: .3s;
    display:flex;
    justify-content: center;
    align-items: center;   
`
Container.defaultProps = {
  width: '459px',
  height: '43px',
  margin: '40px auto',
  borderRadius: '5px',
  fontSize: '14px'
}

export const Content = styled.div`
    display:flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-around'};
    align-items: center;
    width: 100%;
    height: 100%;
    margin:0;
`