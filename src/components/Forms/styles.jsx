import styled from 'styled-components'


export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ForgetPassword = styled.p`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color:${props => props.theme.blue};
`