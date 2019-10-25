import Loader from '../../components/Tools/PageLoader'
import { connect } from 'react-redux'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  pageLoader: state.Loading.loading
})

// const mapDispatchToProps = dispatch => ({
//   handleLogoutUser: () => dispatch(handleLogoutUser())
// })

export default connect(mapStateToProps, null)(Loader)
