import {
 ADD_CASE_FILE_SUCCESS,
 ADD_CASE_FILE_FAILED,
} from '../Actions/VoxDispatchActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case ADD_CASE_FILE_SUCCESS:
        return [...action.payload]
      case ADD_CASE_FILE_FAILED:
        return action.payload
      default:
        return state
    }
  }
