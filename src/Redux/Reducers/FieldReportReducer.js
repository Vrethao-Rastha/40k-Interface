import { FETCH_FIELD_REPORTS_SUCCESS,
         FETCH_FIELD_REPORTS_FAILED
} from '../Actions/FieldReportActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_FIELD_REPORTS_SUCCESS:
        return [...action.payload]
      case FETCH_FIELD_REPORTS_FAILED:
        return action.payload
      default:
        return state
    }
  }
