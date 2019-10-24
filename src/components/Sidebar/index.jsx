import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import dashboard from '../../assets/images/home.svg'
import * as Page from './styles'
import { Logo } from '../../components/Picture'

const NavLinks = ({ img, img2, address, location, activeOnlyWhenExact }) => {

  let link = `${address}`
  return (
    <Route
      path={link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
          <Link to={link}>
            <Logo src={match ? img : img2} alt={address} width='32px' height='32px' cursor='pointer' />
            <span>
              {location}
            </span>
          </Link>
        </li>
      )}
    />
  )
}
const NavLinksAlt = ({ img, img2, address, activeOnlyWhenExact }) => {
  let link = `${address}`
  return (
    <Route
      path={link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
          <Link to={link}>
            <Logo src={match ? img : img2} alt={address} width='32px' height='32px' cursor='pointer' />
            {/* <span className='sidebar-nav-items'>
          {address}
        </span> */}
          </Link>
        </li>
      )}
    />
  )
}
const index = ({ ...props }) => {
  const navlink = props.links.map((link) => {
    return <NavLinks key={link.id} {...link} />
  })
  const navlinkAlt = props.links.map((link) => {
    return <NavLinksAlt key={link.id} {...link} />
  })
  return (
    <div>
      {props.sidebar ? <Page.SideNav id='sidebar'>
        <ul>
          <NavLinks
            img={dashboard}
            img2={dashboard}
            location='home'
            activeOnlyWhenExact
            address='/' />
          {navlink}
        </ul>
      </Page.SideNav>
        : <Page.SideNav id='sidebaralt'>
          <ul>
            <NavLinksAlt
              img={dashboard}
              img2={dashboard}
              activeOnlyWhenExact
              address='/' />
            {navlinkAlt}
          </ul>
        </Page.SideNav> }
    </div>
  )
}
index.defaultProps = {
  links: [
    {
      id: '1',
      img: require('../../assets/images/dashboard-active.svg'),
      img2: require('../../assets/images/dashboard.svg'),
      location: 'dashboard',
      address: '/companydashboard',
      activeOnlyWhenExact:true
      
    },
    {
      id: '2',
      img: dashboard,
      //  img2:userGrey,
      location:'business details',
      address: '/businessdetaildashboard',
      activeOnlyWhenExact:true
    },
    {
      id: '3',
      img: dashboard,
      //  img2:transGrey,
      location:'dashboard',
      address: '/transactions',
      activeOnlyWhenExact:true
    },
    {
      id: '4',
      img: dashboard,
      //  img2:settingGrey,
      location:'dashboard',
      address: '/Platform',
      activeOnlyWhenExact:true
    },
    {
      id: '5',
      img: dashboard,
      //  img2: adminGrey,
      location:'dashboard',
      address: '/Admin',
      activeOnlyWhenExact:true
    },
    {
      id: '6',
      img: dashboard,
      // img2: insightGrey,
      location:'dashboard',
      address: '/Insights',
      activeOnlyWhenExact:true
    }
  ]
}
export default index
