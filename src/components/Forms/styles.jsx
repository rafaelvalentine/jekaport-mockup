import styled from 'styled-components'


export const Wrapper = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
height:100%;
width:100%;
`
export const Container = styled(Wrapper)`
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
`
export const ContainerAlt = styled(Wrapper)`
justify-content:flex-start;
align-items:flex-start;
`
export const Field = styled.article`
width: 300px;
height: 45px;
margin-bottom:5px;
margin-right:100px;
background: ${props => props.alt ? props.theme.white : props.theme.actions};
opacity: 0.6;
border-radius: 4px;
color:${props => props.alt ? props.theme.actions : props.theme.white};
padding:13px 20px;
font-size: 14px;
line-height: 18px;
text-transform:capitalize;
`

export const ForgetPassword = styled.span`
font-size: 14px;
line-height: 18px;
align-self:flex-start;
color: ${props => props.theme.actions};
cursor:'pointer'
`