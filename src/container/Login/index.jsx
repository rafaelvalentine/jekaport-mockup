import Login from '../../pages/Login'
import { connect } from 'react-redux'
import { handleLogin, handlePageLoader } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.User
})

const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(handleLogin(user)),
  handlePageLoader: loading => dispatch(handlePageLoader(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
