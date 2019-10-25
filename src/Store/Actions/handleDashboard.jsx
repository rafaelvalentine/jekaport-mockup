import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { SETTINGS_STATUS, UPDATE_USER } = type

const setDashboardSettings = payload => ({
  type: SETTINGS_STATUS,
  payload
})
const handleUser = payload => ({
  type: UPDATE_USER,
  payload
})
export const handleSetDashboardSettings = results => dispatch => {
  dispatch(setDashboardSettings(results))
}
 
export const handleUpdateUser = (id, user) => dispatch => {
  let data = new FormData()
  let socialMedia = JSON.stringify(user.socialMedia)
  data.append('socialMedia', socialMedia)
  // console.log(userDetails)

  // formData.append('milestones', milestone)
  Object.keys(user).map(k => {
    if (k !== 'socialMedia') {
      data.append(k, user[k])
    }
  })
  // console.log(userDetails)
  // for (var key of data.entries()) {
  //   console.log(key[0] + ', ' + key[1])
  // }
  return axios
    .patch(`/dashboardupdate/${id}`, data)
    .then(res => {
      let result = res.data
      dispatch(handleUser(result))
      return result
    })
    .catch(err => {
      console.log(err)
      handleError(err)
    })
}
