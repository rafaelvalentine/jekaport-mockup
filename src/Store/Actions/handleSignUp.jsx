import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { REGISTER_USER, LOGIN_USER } = type

const handlePutUserInStore = payload => ({
  type: REGISTER_USER,
  payload
})
const handleUser = payload => ({
  type: LOGIN_USER,
  payload
})
export const handleAddUserToStore = user => dispatch => {
  return dispatch(handlePutUserInStore(user))
}
export const handleSignUp = user => dispatch => {
  let data = new FormData()
  let url = `/register`
  Object.keys(user).map(k => {
    data.append(k, user[k])
  })
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
    url
  }
  return axios(options)
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
