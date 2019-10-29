import VehicleRoutes from '../../pages/VehicleRoutes'
import { connect } from 'react-redux'
import { handleFetchVehicleTypes, handlePageLoader, handleAddRoute, handleGetUserRoutes, handleUpdateRoute, handleDeleteRoute } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  User: state.User.User,
  vehicleTypes: state.User.VehicleTypes,
  routes: state.User.RouteList
})

const mapDispatchToProps = dispatch => ({
  handlePageLoader: loading => dispatch(handlePageLoader(loading)),
  handleFetchVehicleTypes: () => dispatch(handleFetchVehicleTypes()),
  handleAddRoute: route => dispatch(handleAddRoute(route)),
  handleGetUserRoutes: userId => dispatch(handleGetUserRoutes(userId)),
  handleUpdateRoute: (routeId, route)=> dispatch(handleUpdateRoute(routeId, route)),
  handleDeleteRoute: routeId => dispatch(handleDeleteRoute(routeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleRoutes)
