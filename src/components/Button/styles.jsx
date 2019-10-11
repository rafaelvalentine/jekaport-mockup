import styled from 'styled-components'

export const Container = styled.div`
    margin:${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius:${props => props.borderRadius};
    border: 1px solid ${props => props.theme.orange};
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.fontSize};
    line-height: 21px;
    cursor: pointer;
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.orange};
    transition: .3s;
    display:flex;
    justify-content: center;
    align-items: center;
    // flex-direction:column;
`
Container.defaultProps = {
  width: '200px',
  height: '76px',
  margin: '0',
  borderRadius: '0px 5px 0px 0px',
  fontSize: '10px'
}

export const Content = styled.div`
    display:flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-around'};
    align-items: center;
    width: 100%;
    height: 100%;
    margin:0;
`