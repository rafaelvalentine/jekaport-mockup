import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as Page from './styles'
// import { Logo } from '../Picture'

const NavLinks = ({ img, img2, address, link, activeOnlyWhenExact }) => {
  let _link = `/${link}`
  return (
    <Route
      path={_link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''} >
          <Link to={_link}>
            <span>
              {/* <Logo src={img} width='15px' height='15px' margin='0' /> */}
              {address}
            </span>
          </Link>
        </li>
      )}
    />
  )
}
export const Links = props => {
  const Navlink = props.links.map(link => {
    return <NavLinks key={link.id} {...link} />
  })
  return (
    <Page.NavLink >
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
      link: '',
      address: 'Home',
      activeOnlyWhenExact: true
    },
    {
      id: '2',
      link: 'login',
      address: 'Login'
    },
    {
      id: '3',
      link: 'become-a-partner',
      address: 'Become a partner'
    }
  ]
}
export default Links
