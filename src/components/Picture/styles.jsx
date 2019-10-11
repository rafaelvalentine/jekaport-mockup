import styled from 'styled-components'


export const GalleryWrapper = styled.div`
position: relative;
width: 215px;
height: 164px;
margin: 20px 14px;
margin-left: 0;
`
export const DeleteButton = styled.span`
position: absolute;
top:14px;
right: 14px;
z-index:5;
transition: .3s;
:hover{
  transform: scale(1.1)
}
`