import React, { Component } from 'react'

// apollo
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const VERIFY_USER = gql`
	mutation Verify_User($token: String!){
		verifyUser(token:$token){
			token
		}
	}
`
// https://jekaport.com/auth/verify/5d7919c0857aba0007fcd988

const Authenticator = ({match:{params}}) => {

  const { token } = params
    console.log(token, "the token sir")
    
    return (
      <Mutation mutation={VERIFY_USER} variables={{ token }}>
        {(mutation) => {
          return (
            <VerifyUser authenticateUser={mutation} />
          )
        }}
      </Mutation>
    )
}


class VerifyUser extends Component {

  componentDidMount(){
    this.authUser();
  }

  authUser = async () => {
    let userStatus = await this.props.authenticateUser() // call the mutation
    console.log(userStatus);
  }

  render() {
    return null
  }
}

export default Authenticator