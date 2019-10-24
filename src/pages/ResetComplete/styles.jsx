import styled from 'styled-components'

export const Thanks = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
color: #053C69;
text-align: center;
`
export const subTitle = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-align: center;
color: rgba(0, 0, 0, 0.7);
`
export const Link = styled(subTitle)`
color: ${props => props.theme.blue};
cursor: pointer;
`