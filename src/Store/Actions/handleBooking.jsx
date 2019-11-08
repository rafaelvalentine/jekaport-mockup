import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { ALL_BOOKING_ROUTES, SET_SERACHED_ROUTE_INFO } = type

const handleSetBookingRoutes = payload => ({
  type: ALL_BOOKING_ROUTES,
  payload
})

const setRouteInfo = payload => ({
  type: SET_SERACHED_ROUTE_INFO,
  payload
})

 

export const handleFetchAvailableRoute = data => dispatch => {
  return axios
    .post(`/searchroutes`, data)
    .then(res => {
      let result = res.data
      dispatch(setRouteInfo(data))
      dispatch(handleSetBookingRoutes(result))
      return result
    })
    .catch(err => {
      console.log(err)
      handleError(err)
    })
}

// export const handleSetRouteInfo = data => dispatch => {
//   dispatch(setRouteInfo(data))
// }

