import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as Page from './styles'
import { Logo } from '../Picture'

const NavLinks = ({ img, img2, address, link, activeOnlyWhenExact }) => {
  let _link = `/${link}`
  return (
    <Route
      path={_link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
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
  // const NavlinkWhite = props.linksWhite.map(link => {
  //   return <NavLinks key={link.id} {...link} />
  // })
  // const NavlinkBlack = props.linksBlack.map(link => {
  //   return <NavLinks key={link.id} {...link} />
  // })
  // let navlink = Navlink

  // if (props.altNavbar === 'white') {
  //   navlink = NavlinkWhite
  // }
  // if (props.altNavbar === 'black') {
  //   navlink = NavlinkBlack
  // }
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
      link: 'home',
      address: 'Home'
    },
    {
      id: '2',
      link: 'login',
      address: 'Login'
    },
    {
      id: '3',
      link: 'become-a-part',
      address: 'Become a part'
    },
    {
      id: '4',
      link: 'register-a-vehicle',
      address: 'Register a vehicle'
    }
  ]
}
export default Links
