import React, { Component } from 'react'

// apollo
import { gql } from 'apollo-boost'
import { mutation } from 'react-apollo'





const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword ($token: String!) {
    resetPassword ( token: $token ) {
      token
    }
  }
`;

class VerifyUser extends Component {
    
    componentDidMount(){
        const { token } = this.props.match.params
        
    }
}