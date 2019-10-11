import React from 'react'
import * as Com from './styles'
import { Admin as AdminIMG, Logo } from '../Picture'


const User = ({ admin, history, ...props }) => {
  return (
    <Com.AdminWrapper>
      <AdminIMG
        src={null || require('../../assets/images/default_user.jpg')}
        borderRadius='50%'
      />
      <Logo
        src={null || require('../../assets/images/search-image.png')}
        width='40px'
        height='40px'
      />
    </Com.AdminWrapper>
  )
}

export default User
