import type from '../Type'

const { SET_STORE } = type

const setState = payload => ({
  type: SET_STORE,
  payload
})

export const handleSetState = results => dispatch => {
  dispatch(setState(results))
}