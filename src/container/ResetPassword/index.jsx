import ResetPassword from '../../pages/ResetPassword'
import { connect } from 'react-redux'
import { handleNewPassword, handleConfirmToken } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({
//   Users: state.User.User
// })

const mapDispatchToProps = dispatch => ({
  handleNewPassword: (user, token) => dispatch(handleNewPassword(user, token)),
  handleConfirmToken: params => dispatch(handleConfirmToken(params))
})

export default connect(null, mapDispatchToProps)(ResetPassword)