import React from 'react'
// import { Wrapper } from '../../theme/style/styles'

// components
import Navbar from '../Navbar'

// Specific Styles for the Components
// const styles = {
//   Wrapper: {
//     height: '94vh'
//   }
// }
export default ({ ...props }) => {
  return (
    <>
      <Navbar {...props}/>
      {props.children}
    </>
  )
}
