import initialState from '../AuthStore'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state,
        token: action.payload.token
      }
    default:
      return state
  }
}
