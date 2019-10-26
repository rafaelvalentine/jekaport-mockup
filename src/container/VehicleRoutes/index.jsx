import VehicleRoutes from '../../pages/VehicleRoutes'
import { connect } from 'react-redux'
import { handleFetchVehicleTypes, handlePageLoader, handleAddRoute } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.User,
  vehicleTypes: state.User.VehicleTypes
})

const mapDispatchToProps = dispatch => ({
  handlePageLoader: loading => dispatch(handlePageLoader(loading)),
  handleFetchVehicleTypes: () => dispatch(handleFetchVehicleTypes()),
  handleAddRoute: route => dispatch(handleAddRoute(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleRoutes)
