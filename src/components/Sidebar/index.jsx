import React from 'react'
import { withRouter } from 'react-router-dom'
import { LargeNav, SmallNav } from './sideParts'
import dashboard from '../../assets/images/home.svg'

const index = ({ ...props }) => {
  return (
    <div>
      {!props.sidebar ? <LargeNav {...props} /> : <SmallNav {...props} />}
    </div>
  )
}
index.defaultProps = {
  links: [
    // {
    //   id: '1',
    //   img: require('../../assets/images/dashboard-active.svg'),
    //   img2: require('../../assets/images/dashboard.svg'),
    //   location: 'dashboard',
    //   address: '/companydashboard',
    //   activeOnlyWhenExact: true

    // },
    {
      id: '2',
      img: require('../../assets/images/suitcase.svg'),
      img2: require('../../assets/images/suitcase.svg'),
      location: 'business details',
      address: '/dashboard/businessdetaildashboard',
      activeOnlyWhenExact: true
    },
    {
      id: '3',
      img: require('../../assets/images/booking.svg'),
      img2: require('../../assets/images/booking.svg'),
      location: 'booking',
      address: '/dashboard/booking',
      activeOnlyWhenExact: true
    },
    {
      id: '4',
      img: require('../../assets/images/bus-active.svg'),
      img2: require('../../assets/images/bus-active.svg'),
      location: 'routes',
      address: '/dashboard/routes',
      activeOnlyWhenExact: true
    },
    {
      id: '5',
      img: require('../../assets/images/branches.svg'),
      img2: require('../../assets/images/branches.svg'),
      location: 'branches',
      address: '/dashboard/branches',
      activeOnlyWhenExact: true
    },
    {
      id: '6',
      img: require('../../assets/images/message.svg'),
      img2: require('../../assets/images/message.svg'),
      location: 'dashboard',
      address: '/Insights',
      activeOnlyWhenExact: true
    }
  ],
  settingslinks: [
    {
      id: '1',
      img: require('../../assets/images/profile.svg'),
      img2: require('../../assets/images/profile.svg'),
      location: 'profile',
      address: '/settings/companydetails',
      activeOnlyWhenExact: true

    },
    {
      id: '2',
      img: require('../../assets/images/suitcase.svg'),
      img2: require('../../assets/images/suitcase.svg'),
      location: 'business details',
      address: '/settings/businessdetails',
      activeOnlyWhenExact: true
    }
  ]
}
export default withRouter(index)
