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
export const handleRestPassword = user => dispatch => {
  return axios
    .post(`/login/resetpassword`, user)
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
export const handleNewPassword = (data, token) => dispatch => {
  // console.log('[token from action login]', token)
  return axios
    .post(`/login/resetpassword/${token}`, data)
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
export const handleConfirmToken = token => dispatch => {
  return axios
    .get(`/login/resetpassword/${token}`)
    .then(res => {
      let result = res.data
      // dispatch(handleUser(result))
      return result
    })
    .catch(err => {
      console.log(err)
      handleError(err)
    })
}
