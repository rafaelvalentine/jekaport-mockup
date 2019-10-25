import Wrapper from '../../components/DashboardWrapper'
import { connect } from 'react-redux'
import { handleGetAllUsers, handlePageLoader, handleSetDashboardSettings } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.User
  // settingStatus: state.Loading.settingsStatus
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsers: () => dispatch(handleGetAllUsers()),
  handlePageLoader: loading => dispatch(handlePageLoader(loading)),
  handleSetDashboardSettings: status => dispatch(handleSetDashboardSettings(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
