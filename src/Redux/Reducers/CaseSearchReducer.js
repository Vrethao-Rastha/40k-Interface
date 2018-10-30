import {
    FETCH_CASE_REPORT_SUCCESS,
    FETCH_CASE_REPORT_FAILED,
   } from '../Actions/FieldReportActions'
   
     const initialState = []
   
     export default (state = initialState, action) => {
       switch(action.type) {
         case FETCH_CASE_REPORT_SUCCESS:
           return [...action.payload]
         case FETCH_CASE_REPORT_FAILED:
           return action.payload
         default:
           return state
       }
     }
   