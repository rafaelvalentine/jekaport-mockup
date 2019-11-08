// import { LOAD, SAVE } from 'redux-storage'
const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE_LOADER':
      return { ...state,
        loading: action.payload
      }
    // case SAVE:
    //   return { ...state,
    //     Loading: false
    //   }
    case 'SETTINGS_STATUS':
      return { ...state,
        settingsStatus: false
      }
    default:
      return state
  }
}
