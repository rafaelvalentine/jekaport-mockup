import React from 'react'
import * as Com from './styles'

const User = ({ history, ...props }) => {
  return (
    <Com.AdminWrapper>
     Welcome! <span>{props.companyName || 'Company '}</span>
      {/* Your last login was 30 minutes ago. */}
    </Com.AdminWrapper>
  )
}

export default User
