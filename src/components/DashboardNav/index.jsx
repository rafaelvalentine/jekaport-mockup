import React from 'react'
import { withRouter } from 'react-router-dom'
import * as Navbar from './styles'
import { Logo } from '../Picture'
import Links from './links'
import AdminInfo from './admin'

/**
 * this is the main navbar component and feeds redux state to the Admin component
 */
const index = ({ history, ...props }) => {
  return (
    <Navbar.Nav>
      <Logo onClick={() => history.push('/')} src={require('../../assets/images/treeprite.svg')} width='150px' height='60px' cursor='pointer' />
      <AdminInfo {...props} />
      <Links {...props} />
    </Navbar.Nav>
  )
}

export default withRouter(index)
