import Home from '../../pages/Home'
import { connect } from 'react-redux'
import { handleGetAllUsers, handlePageLoader } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.User
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsers: () => dispatch(handleGetAllUsers()),
  handlePageLoader: loading => dispatch(handlePageLoader(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
