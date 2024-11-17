export const struct = {
  status: 'idle',
  state: []
}

const carriers = (state = struct, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case 'FETCHING_CARRIERS':
      return { ...state, status: 'loading' }
    case 'GET_CARRIERS_SUCCESS':
      return { ...state, status: 'success', state: action.payload }
    case 'GET_CARRIERS_FAIL':
      return { ...state, status: 'fail' }
    default:
      return state
  }
}

export default carriers
