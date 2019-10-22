import type from '../Type'
import axios from 'axios'
import { handleError } from '../../lib'

const { REGISTER_USER, LOGIN_USER } = type

const handleRegisterUser = payload => ({
  type: REGISTER_USER,
  payload
})
export const handleRegister = user => dispatch => {
  return dispatch(handleRegisterUser(user))   
}
