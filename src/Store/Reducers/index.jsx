import Auth from './AuthReducer'
import Loading from './LoadingReducer'
import User from './UserReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Auth,
  Loading,
  User
})

export default rootReducers
