import styled from 'styled-components'


export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
align-items:${props => props.alignItems ? props.alignItems : 'center'};
`
export const ForgetPassword = styled.p`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color:${props => props.theme.blue};
align-self: flex-end;
cursor: pointer;
`
export const Terms = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
/* identical to box height */
color: #4CBEED;
margin:14px 5px 0;
cursor: pointer;
`