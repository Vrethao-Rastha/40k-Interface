import {
 FETCH_NAME_REPORT_SUCCESS,
 FETCH_NAME_REPORT_FAILED,
} from '../Actions/FieldReportActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_NAME_REPORT_SUCCESS:
        return [...action.payload]
      case FETCH_NAME_REPORT_FAILED:
        return action.payload
      default:
        return state
    }
  }
