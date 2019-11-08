const initialState = {
  allRoutes: [],
  companyRoutes: [],
  to: '',
  from: '',
  departureDate: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_BOOKING_ROUTES':
      return {
        ...state,
        allRoutes: [ ...action.payload.data ]
      }
    case 'SET_SERACHED_ROUTE_INFO':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
