import styled from 'styled-components'

export const Footer = styled.footer`
background: ${props => props.theme.footBlue};
height: 42px;
span{
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: right;
color: ${props => props.theme.blue};
margin: 0 20px;
}
`
export const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
`