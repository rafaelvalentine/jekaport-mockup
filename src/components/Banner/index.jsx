import React from 'react'
import * as Page from './styles'
// import Text from './BannerText'
// import SideBanner from './SideBanner'
// import Drag from './Home/dragTool'

// Banner component to hold background image for home page
const Banner = ({ ...props }) => {
  return (
    <Page.Jumbotron {...props}>
      {props.children}
    </Page.Jumbotron>
  )
}

export default Banner
