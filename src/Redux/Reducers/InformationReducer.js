import {
    FETCH_INFORMATION_REPORT_SUCCESS,
    FETCH_INFORMATION_REPORT_FAILED,
   } from '../Actions/FieldReportActions'
import {
  DELETE_INFO_FILE_SUCCESS,
    DELETE_INFO_FILE_FAILED,
    ADD_INFO_FILE_SUCCESS,
    ADD_INFO_FILE_FAILED,
    UPDATE_INFO_SUCCESS,
    UPDATE_INFO_FAILED
} from '../Actions/VoxDispatchActions'
   
     const initialState = []
   
     export default (state = initialState, action) => {
       switch(action.type) {
         case FETCH_INFORMATION_REPORT_SUCCESS:
           return [...action.payload]
         case FETCH_INFORMATION_REPORT_FAILED:
           return action.payload
         case DELETE_INFO_FILE_SUCCESS:
           return [...action.payload]
         case DELETE_INFO_FILE_FAILED:
           return action.payload
         case ADD_INFO_FILE_SUCCESS:
           return [action.payload]
         case ADD_INFO_FILE_FAILED:
           return action.payload
         case UPDATE_INFO_SUCCESS:
           return [...action.payload]
         case UPDATE_INFO_FAILED:
           return action.payload
         default:
           return state
       }
     }
   