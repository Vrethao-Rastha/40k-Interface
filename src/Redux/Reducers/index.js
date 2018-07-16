import { combineReducers } from 'redux'

import FieldReportReducer from './FieldReportReducer'
import VoxDispatchReducer from './VoxDispatchReducer'
import CaseSearchReducer from './CaseSearchReducer'
import NameSearchReducer from './NameSearchReducer'
import LocationSearchReducer from './LocationSearchReducer'




export default combineReducers({
  field_reports: FieldReportReducer,
  vox_dispatch: VoxDispatchReducer,
  case_search_result: CaseSearchReducer,
  name_search_result: NameSearchReducer,
  location_search_result: LocationSearchReducer
})
