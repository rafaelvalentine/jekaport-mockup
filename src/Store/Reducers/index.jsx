import Auth from './AuthReducer'
import Loading from './LoadingReducer'
import User from './UserReducer'
import Booking from './BookingReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Auth,
  Loading,
  User,
  Booking
})

export default rootReducers
