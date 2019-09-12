import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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

class Authenticator extends Component {

  state = { redirect: false }

  redirect = (authStatus) => {
    this.setState({redirect:true})
    console.log(this.state.redirect)
    console.log(authStatus, "auth status")
 }

  render() {
    if(this.redirect){
      return <Redirect to="/" />
    }

    const { token } = this.props.match.params
    console.log(token, "the token sir")
    
    return (
      <Mutation mutation={VERIFY_USER} variables={{ token }}>
        {(mutation) => {
          return (
            <VerifyUser authenticateUser={mutation} redirect={this.redirect}/>
          )
        }}
      </Mutation>
    )
  }
}


class VerifyUser extends Component {

  componentDidMount(){
    this.authUser();
  }

  authUser = async () => {
    let userStatus = await this.props.authenticateUser() // call the mutation
    this.props.redirect(userStatus)
  }

  render() {
    return null
  }
}

export default Authenticator