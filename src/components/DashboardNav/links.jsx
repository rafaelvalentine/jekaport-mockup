import React from 'react'
import * as Page from './styles'
import { Logo } from '../Picture'

const NavLinks = ({ open, close, toggle, ...props }) => {
  return (
    <li>
      <span>
        <Logo src={toggle ? close : open}
          width='24px'
          height='24px' margin='0'
          cursor='pointer'
          onClick={props.handleToggle}
        />
      </span>
    </li>
  )
}
export const Links = ({ ...props }) => {
  const Navlink = props.links.map(link => {
    return <NavLinks key={link.id} handleToggle={props.handleToggle} {...props.sidebar} {...link} />
  })
  return (
    <Page.NavLink>
      <ul>
        {Navlink}
      </ul>
    </Page.NavLink>
  )
}
/**
   * used defaultProps to pass an array of links for links components
   */
Links.defaultProps = {
  links: [
    {
      id: '1',
      open: require('../../assets/images/iconfinder_menu-alt_134216.svg'),
      close: require('../../assets/images/close-line.svg')
    }
  ]
}
export default Links
