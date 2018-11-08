import { combineReducers } from 'redux'

import FieldReportReducer from './FieldReportReducer'
import VoxDispatchReducer from './VoxDispatchReducer'
import CaseSearchReducer from './CaseSearchReducer'
import NameSearchReducer from './NameSearchReducer'
import LocationSearchReducer from './LocationSearchReducer'
import InformationReducer from './InformationReducer'
import authReducer from './authReducer'
import FileReducer from './FileReducer'


export default combineReducers({
  file_result: FileReducer,
  field_reports: FieldReportReducer,
  vox_dispatch: VoxDispatchReducer,
  case_search_result: CaseSearchReducer,
  name_search_result: NameSearchReducer,
  location_search_result: LocationSearchReducer,
  info_search_result: InformationReducer, 
  auth: authReducer,
})
