import Home from '../../pages/Home'
import { connect } from 'react-redux'
import { handleFetchAvailableRoute } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
// const mapStateToProps = state => ({
//   AllRoutes: state.Booking.allRoutes
// })

const mapDispatchToProps = dispatch => ({
  handleFetchAvailableRoute: data => dispatch(handleFetchAvailableRoute(data))
})

export default connect(null, mapDispatchToProps)(Home)
