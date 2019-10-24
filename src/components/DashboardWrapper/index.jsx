import React, { useEffect, useState } from 'react'
// import { Wrapper } from '../../theme/style/styles'

// components
import DashboardNav from '../DashboardNav'
import SideNav from '../Sidebar'


export default ({ ...props }) => {
  const [ sidebar, setSideBar ] = useState({ toggle: false })
  const handleToggle = () => {
    const toggle = !sidebar.toggle
    setSideBar({ toggle })
  }
  // useEffect(() => {
  //   console.log('focusSideBar', focusSideBar)
  // }, [])
  return (
    <>
      <DashboardNav handleToggle={handleToggle} sidebar={sidebar} />
      <SideNav sidebar={sidebar.toggle} />
      {props.children}
    </>
  )
}
