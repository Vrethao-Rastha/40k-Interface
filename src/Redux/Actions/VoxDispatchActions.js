import axios from 'axios'

export const FETCH_VOX_DISPATCH_SUCCESS = 'FETCH_VOX_DISPATCH_SUCCESS'
export const FETCH_VOX_DISPATCH_FAILED = 'FETCH_VOX_DISPATCH_FAILED'

export const UPDATE_VOX_DISPATCH_SUCCESS = 'UPDATE_VOX_DISPATCH_SUCCESS'
export const UPDATE_VOX_DISPATCH_FAILED = 'UPDATE_VOX_DISPATCH_FAILED'

  export const fetchVoxDispatch = () => {
    return dispatch => {
    axios.get(`http://localhost:8000/vox_dispatch/`)
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

  export const updateVoxLog = (content, name, id) => {
    console.log('log', content, 'name', name, 'id', id)
    return dispatch => {
      axios.put(`http://localhost:8000/vox_dispatch/`, { content, name, id })
      .then(res => dispatch({
        type: UPDATE_VOX_DISPATCH_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: UPDATE_VOX_DISPATCH_FAILED,
        payload: err
      }))
    }
  }
