import BookingSearch from '../../pages/BookingSearch'
import { connect } from 'react-redux'
// import { handleLogin, handlePageLoader } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  AllRoutes: state.Booking.allRoutes,
  to: state.Booking.to,
  from: state.Booking.from,
  departureDate: state.Booking.departureDate
})

// const mapDispatchToProps = dispatch => ({
//   handleLogin: user => dispatch(handleLogin(user)),
//   handlePageLoader: loading => dispatch(handlePageLoader(loading))
// })

export default connect(mapStateToProps, null)(BookingSearch)