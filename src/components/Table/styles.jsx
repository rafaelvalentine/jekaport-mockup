import styled from 'styled-components'

export const Wrapper = styled.section`
padding: ${props => props.padding ? props.padding : '0'};
width: 100%;
height: 100%;
`
export const Container = styled.div`
background: ${props => props.theme.white} !important;
`
export const Thead = styled.thead`
background: ${props => props.theme.faintBlue};
tr th{
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.title};
  padding: 10px 10px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.lightGray} !important;
}
`
export const Tbody = styled.tr`
  td{
  border: none;
  border-bottom: 1px solid ${props => props.theme.lightGray} !important;
  padding: 5px 10px;
}
`

export const Text = styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
text-transform: capitalize
color: ${props => props.theme.black};
margin:0;
`
export const TextAlt = styled(Text)`
overflow-wrap: break-word;
word-wrap: break-word;
hyphens: auto;
`
export const SubText = styled(Text)`
font-size: 10px;
line-height: 14px;
color: ${props => props.altSubText ? props.theme.blue : props.theme.text};
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

`
export const Completed = styled.div`
width: 78px;
height: 24px;
padding: 5px 10px;
border-radius: 2px;
text-align: center;
background: ${props => props.theme.lightElectricBlue};
font-size: 10px;
  line-height: 14px;
  text-align: center;
  text-transform: capitalize;
  font-weight:bold;
span{
  color: ${props => props.theme.blue};
}
`
export const Accepted = styled(Completed)`
background: ${props => props.alt ? props.theme.lightOrange : props.theme.lightGreen};
span{
  color: ${props => props.alt ? props.theme.mediumOrange : props.theme.green};;
}
`
export const Edit = styled(Text)`
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 14px;
color: ${props => props.theme.blue};
cursor:pointer;
`
export const Delete = styled(Edit)`
color: ${props => props.theme.orange};
`
const IMG = styled.div`
 width:25px;
 height:25px;
 transition: .3s;
`
export const Button = styled.button`
 background: #fff;
 border: #fff;
 margin-top: -5px;
 padding: 0;
 margin-right: 30px;
 :foucus{
   outline: none;
 }
 &.edit{
  margin-left: 5px;
 }
 `

export const EditIMG = styled.div`
width:25px;
 height:25px;
 transition: .3s;
 background:url('${require('../../assets/images/edit.png')}') bottom center no-repeat;

 `
export const DeleteIMG = styled.div`
width:25px;
 height:25px;
 transition: .3s;
 background:url('${require('../../assets/images/delete.png')}') bottom center no-repeat;
 `