
import ForgotPassword from '../../pages/ForgotPassword'
import { connect } from 'react-redux'
import { handleRestPassword } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({
//   Users: state.User.User
// })

const mapDispatchToProps = dispatch => ({
  handleRestPassword: user => dispatch(handleRestPassword(user))
})

export default connect(null, mapDispatchToProps)(ForgotPassword)