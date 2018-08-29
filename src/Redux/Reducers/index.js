import { combineReducers } from 'redux'

import FieldReportReducer from './FieldReportReducer'
import VoxDispatchReducer from './VoxDispatchReducer'
import CaseFileReducer from './CaseFileReducer'
import NameSearchReducer from './NameSearchReducer'
import LocationSearchReducer from './LocationSearchReducer'
// import AddVoxReducer from './AddVoxReducer'
// import VoxUpdateReducer from './VoxUpdateReducer'
import authReducer from './authReducer'



export default combineReducers({
  field_reports: FieldReportReducer,
  vox_dispatch: VoxDispatchReducer,
  case_search_result: CaseFileReducer,
  name_search_result: NameSearchReducer,
  location_search_result: LocationSearchReducer,
  auth: authReducer,
  // add_vox: AddVoxReducer,
  // update_vox: VoxUpdateReducer
})
