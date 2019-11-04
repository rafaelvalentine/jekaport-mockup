import React from 'react'
import { Link, Route } from 'react-router-dom'
import dashboard from '../../assets/images/home.svg'
import settings from '../../assets/images/settings.svg'
import settingsActive from '../../assets/images/settings-active.svg'
import * as Page from './styles'
import { Logo } from '../../components/Picture'

const NavLinks = ({ img, img2, address, location, activeOnlyWhenExact, ...props }) => {
  let link = `${address}`
  return (
    <Route
      path={link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
          <Link to={link}>
            <Logo src={match ? img : img2}
              alt={address} width='26px' height='26px'
              cursor='pointer'
            />
            <span>
              {location}
            </span>
          </Link>
        </li>
      )}
    />
  )
}
const NavLinksAlt = ({ img, img2, address, activeOnlyWhenExact, ...props }) => {
  let link = `${address}`
  return (
    <Route
      path={link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
          <Link to={link}>
            <Logo src={match ? img : img2}
              alt={address} width='18px'
              height='18px' cursor='pointer'
            />
          </Link>
        </li>
      )}
    />
  )
}
export const LargeNav = ({ ...props }) => {
  const push = e => {
    e.preventDefault()
    localStorage.clear()
    props.history.push('/')
  }
  const navlink = props.links.map((link) => {
    return <NavLinks key={link.id} {...link} />
  })
  const settingsNavlink = props.settingslinks.map((link) => {
    return <NavLinks key={link.id} {...link} />
  })
  return (
    <Page.SideNav id='sidebar'>
      <ul>
        <NavLinks
          img={dashboard}
          img2={dashboard}
          location='home'
          activeOnlyWhenExact
          address='/' />
        <NavLinks
          img={require('../../assets/images/dashboard-active.svg')}
          img2={require('../../assets/images/dashboard.svg')}
          location={'dashboard'}
          address={'/dashboard/companydashboard'}
          activeOnlyWhenExact
        />
        {props.settingStatus ? settingsNavlink : navlink }
      </ul>
      <ul className='sidebar-lower-list'>
        <NavLinks
          img={settings}
          img2={settings}
          location='settings'
          address='/settings'
        />
        <li className={''} >
          <a onClick={push} href='/' target='_blank' rel='noopener noreferrer'>
            <Logo src={require('../../assets/images/logout.svg')}
              width='26px'
              height='26px' cursor='pointer'
            />
            <span>
            logout
            </span>
          </a>
        </li>
        {/* <NavLinks
          img={require('../../assets/images/logout.svg')}
          img2={require('../../assets/images/logout.svg')}
          location='logout'
          address='/logout'
          onClick={()=> localStorage.clear()}
        /> */}
      </ul>
    </Page.SideNav>
  )
}

export const SmallNav = ({ ...props }) => {
  const push = e => {
    e.preventDefault()
    localStorage.clear()
    props.history.push('/')
  }
  const navlinkAlt = props.links.map((link) => {
    return <NavLinksAlt key={link.id} {...link} />
  })
  const settingsNavlinkAlt = props.settingslinks.map((link) => {
    return <NavLinksAlt key={link.id} {...link} />
  })
  return (
    <Page.SideNav id='sidebaralt'>
      <ul>
        <NavLinksAlt
          img={dashboard}
          img2={dashboard}
          activeOnlyWhenExact
          address='/' />
        <NavLinksAlt
          img={require('../../assets/images/dashboard.svg')}
          img2={require('../../assets/images/dashboard.svg')}
          address={'/dashboard/companydashboard'}
          activeOnlyWhenExact
        />
        {props.settingStatus ? settingsNavlinkAlt : navlinkAlt}
      </ul>
      <ul className='sidebar-lower-list'>
        <NavLinksAlt
          img={settingsActive}
          img2={settings}
          address='/settings'
        />
        <li className={''} onClick={() => props.history.push('/')}>
          <a onClick={push} href='/' target='_blank' rel='noopener noreferrer'>
            <Logo src={require('../../assets/images/logout.svg')}
              width='18px'
              height='18px' cursor='pointer'
            />
            {/* <span>
            Setting
            </span> */}
          </a>
        </li>
      </ul>
    </Page.SideNav>
  )
}
