import axios from 'axios'

export const FETCH_VOX_DISPATCH_SUCCESS = 'FETCH_VOX_DISPATCH_SUCCESS'
export const FETCH_VOX_DISPATCH_FAILED = 'FETCH_VOX_DISPATCH_FAILED'

export const UPDATE_VOX_DISPATCH_SUCCESS = 'UPDATE_VOX_DISPATCH_SUCCESS'
export const UPDATE_VOX_DISPATCH_FAILED = 'UPDATE_VOX_DISPATCH_FAILED'

export const ADD_VOX_DISPATCH_SUCCESS = 'ADD_VOX_DISPATCH_SUCCESS'
export const ADD_VOX_DISPATCH_FAILED = 'ADD_VOX_DISPATCH_FAILED'

export const DELETE_VOX_DISPATCH_SUCCESS = 'DELETE_VOX_DISPATCH_SUCCESS'
export const DELETE_VOX_DISPATCH_FAILED = 'DELETE_VOX_DISPATCH_FAILED'

export const ADD_CASE_FILE_SUCCESS = 'ADD_CASE_FILE_SUCCESS '
export const ADD_CASE_FILE_FAILED = 'ADD_CASE_FILE_FAILED '

export const DELETE_CASE_FILE_SUCCESS = 'DELETE_CASE_FILE_SUCCESS'
export const DELETE_CASE_FILE_FAILED = 'DELETE_CASE_FILE_FAILED'



  export const fetchVoxDispatch = () => {
    return dispatch => {
    axios.get(`https://young-tundra-99453.herokuapp.com/vox_dispatch/`)
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

  export const updateVoxLog = (content, caseNumber, id) => {
    return dispatch => {
      axios.put(`https://young-tundra-99453.herokuapp.com/vox_dispatch/${id}`, { content, caseNumber, id })
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

  export const deleteVoxLog = (id) => {
    return dispatch => {
      axios.delete(`https://young-tundra-99453.herokuapp.com/vox_dispatch/${id}`)
      .then(res => dispatch({
        type: DELETE_VOX_DISPATCH_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: DELETE_VOX_DISPATCH_FAILED,
        payload: err
      }))
    }
  }

  export const addVoxLog = (content, addSenderName , addCaseNumber, avatar  ) => {
    return dispatch => {
      axios.post(`https://young-tundra-99453.herokuapp.com/vox_dispatch/`, { content, addSenderName , addCaseNumber, avatar})
      .then(res => dispatch({
        type: ADD_VOX_DISPATCH_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ADD_VOX_DISPATCH_FAILED,
        payload: err
      }))
    }
  }

  export const addCaseFile = (First_Name, Last_Name, Address, City, Bio, File_Number) => {
    return dispatch => {
      axios.post(`https://young-tundra-99453.herokuapp.com/add_case_file/`, { First_Name, Last_Name, Address, City, Bio, File_Number })
      .then(res => dispatch ({
        type: ADD_CASE_FILE_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ADD_CASE_FILE_FAILED,
        payload: err
      }))
    }
  }
    export const deleteCaseFile = (File_Number) => {
      return dispatch => {
        axios.post(`https://young-tundra-99453.herokuapp.com/delete_case_file/`, { File_Number })
        .then(res => dispatch ({
          type: DELETE_CASE_FILE_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: DELETE_CASE_FILE_FAILED,
          payload: err
        }))
      }
  }