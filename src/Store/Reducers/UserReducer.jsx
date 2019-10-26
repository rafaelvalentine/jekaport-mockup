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
        User: {
          _id: action.payload.data._id,
          companyName: action.payload.data.companyName,
          businessAddress: action.payload.data.businessAddress,
          email: action.payload.data.email,
          phoneNumber: [...action.payload.data.phoneNumber],
          services: [...action.payload.data.services],
          socialMedia: [...action.payload.data.socialMedia],
          terminals: [...action.payload.data.terminals],
          businessType: action.payload.data.businessType,
          companyLogo: action.payload.data.companyLogo,
          ...action.payload.data
        }
      }
    case 'UPDATE_USER':
      return { ...state,
        User: {
          _id: action.payload.payload._id,
          companyName: action.payload.payload.companyName,
          businessAddress: action.payload.payload.businessAddress,
          email: action.payload.payload.email,
          phoneNumber: [...action.payload.payload.phoneNumber],
          services: [...action.payload.payload.services],
          socialMedia: [...action.payload.payload.socialMedia],
          terminals: [...action.payload.payload.terminals],
          businessType: action.payload.payload.businessType,
          companyLogo: action.payload.payload.companyLogo,
          businessHour: action.payload.payload.businessHour,
          businessInfo: action.payload.payload.businessInfo
          // ...action.payload.data
        }
      }
    case 'VEHICLE_LIST':
      return { ...state,
        VehicleTypes: [...action.payload.data]
      }

    default:
      return state
  }
}
