import { FETCH_VOX_DISPATCH_SUCCESS,
         FETCH_VOX_DISPATCH_FAILED,

} from '../Actions/VoxDispatchActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_VOX_DISPATCH_SUCCESS:
        return [...action.payload]
      case FETCH_VOX_DISPATCH_FAILED:
        return action.payload
        
      default:
        return state
    }
  }
