import Partner from '../../pages/Partner/partner'
import { connect } from 'react-redux'
import { handleSignUp } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.RegisteringUser
})

const mapDispatchToProps = dispatch => ({
  handleSignUp: user => dispatch(handleSignUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Partner)