import { CompanyDetails } from '../../pages/Settings'
import { connect } from 'react-redux'
import { handlePageLoader, handleUpdateUser } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.User
})

const mapDispatchToProps = dispatch => ({
  handlePageLoader: loading => dispatch(handlePageLoader(loading)),
  handleUpdateUser: (id, user) => dispatch(handleUpdateUser(id, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)
