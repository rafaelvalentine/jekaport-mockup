import initialState from '../AuthStore'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state,
        Auth: {
          ...action.payload.token
        }
      }
    default:
      return state
  }
}