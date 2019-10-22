import initialState from '../DummyStore'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state,
        RegisteringUser: {
          ...action.payload
        }
      }
    case 'LOGIN_USER':
      return { ...state,
        Users: {
          ...action.payload
        }
      }
    case 'FETCH_ALBUM':
      return { ...state,
        Albums: [...action.payload]
      }
    default:
      return state
  }
}
