import React from 'react'
import styled from 'styled-components'
// import * as Picture from './styles'

const LogoIMG = styled.img.attrs(props => ({
  src: props.src || require('../../assets/images/logo_for_jekaport.svg'),
  width: props.width || '135px',
  height: props.height || '25px',
  margin: props.margin
}))`
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
cursor: ${props => props.cursor ? props.cursor : 'auto'};
transform:rotate(${props => props.rotate});
`
const IMG = styled.img.attrs(props => ({
  src: props.src,
  width: props.width || '40px',
  height: props.height || '40px',
  margin: props.margin || '0',
  borderRadius: '0'
}))`
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
cursor: ${props => props.cursor ? props.cursor : 'auto'};
align-self: ${props => props.alignSelf};
border-radius: ${props => props.borderRadius};
transform:rotate(${props => props.rotate});
`
// const AdminIMG = styled.img.attrs(props => ({
//   src: props.src,
//   width: props.width || '40px',
//   height: props.height || '40px',
//   margin: props.margin,
//   borderRadius: '50%'
// }))`
// width: ${props => props.width};
// height: ${props => props.height};
// margin: ${props => props.margin};
// cursor: pointer;
// align-self: flex-start;
// border-radius: ${props => props.borderRadius};
// `
// const UserIMG = styled.img.attrs(props => ({
//   src: props.src,
//   width: props.width || '48px',
//   height: props.height || '48px',
//   margin: props.margin
// }))`
// width: ${props => props.width};
// height: ${props => props.height};
// margin: ${props => props.margin};
// cursor: pointer;
// align-self: flex-start;
// border-radius: 50%;
// `
// const GalleryIMG = styled.img.attrs(props => ({
//   src: props.src,
//   width: props.width || '100%',
//   height: props.height || '100%',
//   margin: props.margin
// }))`
// width: ${props => props.width};
// height: ${props => props.height};
// margin: ${props => props.margin};
// cursor: auto;
// align-self: flex-start;
// `


const StarIMG = styled.img.attrs(props => ({
  src: props.src,
  width: '15px',
  height: '15px',
  margin: props.margin
}))`
width: ${props => props.width};
height: ${props => props.height};
margin: ${props => props.margin};
cursor: pointer;
`
export const Logo = ({ clicked, ...props }) => <LogoIMG onClick={clicked} {...props} />
export const Image = ({ ...props }) => <IMG {...props} />
// export const Admin = ({ ...props }) => <AdminIMG {...props} />
// export const User = ({ image, ...props }) => <UserIMG src={image || require('../../assets/images/default_user.jpg')}{...props} />
// export const DatePickerImage = ({ ...props }) => <DatePickerIMG {...props} />
export const Star = ({ empty, ...props }) => {
  let image
  empty ? image = require('../../assets/images/empty-star.svg') : image = require('../../assets/images/star.svg')
  return (
    <StarIMG src={image}{...props} />
  )
}
// export const GalleryImage = ({ image, deleteImage, ...props }) => (
//   <Picture.GalleryWrapper>
//     <Picture.DeleteButton>
//       <Logo
//         src={require('../../assets/images/gallery-x.svg')}
//         width='24px'
//         height='24px'
//         clicked={deleteImage}
//       />
//     </Picture.DeleteButton>
//     <GalleryIMG
//       src={image || require('../../assets/images/Living-room.png')}
//       width='100%'
//       height='100%'
//       {...props}
//     />
//   </Picture.GalleryWrapper>
// )
