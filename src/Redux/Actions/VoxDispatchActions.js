import axios from 'axios'

export const FETCH_VOX_DISPATCH_SUCCESS = 'FETCH_VOX_DISPATCH_SUCCESS'
export const FETCH_VOX_DISPATCH_FAILED = 'FETCH_VOX_DISPATCH_FAILED'

  export const fetchVoxDispatch = () => {
    return dispatch => {
    axios.get('http://localhost:8000/vox_dispatch/')
    .then(res => dispatch({
      type: FETCH_VOX_DISPATCH_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_VOX_DISPATCH_FAILED,
      payload: err
    }))
  }
}
