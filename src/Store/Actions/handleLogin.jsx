import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { LOGIN_USER } = type

const handleUser = payload => ({
  type: LOGIN_USER,
  payload
})
export const handleLogin = user => dispatch => {
  return axios
    .post(`/login`, user)
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
