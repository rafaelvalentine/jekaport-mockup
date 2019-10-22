import Partner from '../../pages/Partner'
import { connect } from 'react-redux'
import { handleRegister } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.RegisteringUser
})

const mapDispatchToProps = dispatch => ({
  handleRegister: user => dispatch(handleRegister(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Partner)
