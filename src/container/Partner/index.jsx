import Partner from '../../pages/Partner'
import { connect } from 'react-redux'
import { handleAddUserToStore } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.RegisteringUser
})

const mapDispatchToProps = dispatch => ({
  handleAddUserToStore: user => dispatch(handleAddUserToStore(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Partner)
