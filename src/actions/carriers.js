import request from 'utils/request'

const { REACT_APP_API_URL: API_URL } = process.env

export const fetching = () => ({ type: 'FETCHING_CARRIERS' })
export const success = payload => ({ type: 'GET_CARRIERS_SUCCESS', payload })
export const fail = error => ({ type: 'GET_CARRIERS_FAIL', error })

export const getCarriers = data => dispatch => {
  dispatch(fetching())
  request.get(`${API_URL}?${new URLSearchParams(data).toString()}`)
    .then(data => dispatch(success(data)))
    .catch(error => dispatch(fail(error)))
}
